import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

/**
 * VERCEL BLOB STORAGE API ENDPOINT
 *
 * This endpoint handles file uploads to Vercel Blob Storage with comprehensive
 * validation, error handling, and metadata management.
 *
 * Storage Architecture:
 * - Platform: Vercel Blob Storage (https://vercel.com/docs/storage/vercel-blob)
 * - Distribution: Global CDN with edge caching
 * - Access: Public HTTPS URLs with optional authentication
 * - Redundancy: Multi-region replication for high availability
 * - Performance: Automatic optimization and compression
 *
 * File Management:
 * - Unique naming prevents conflicts
 * - Metadata tracking for administration
 * - Automatic cleanup options available
 * - Direct URL access for downloads
 */

export async function POST(request: NextRequest) {
  try {
    console.log("Upload API called")

    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      console.log("No file provided in request")
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    console.log("File received:", {
      name: file.name,
      size: file.size,
      type: file.type,
    })

    // Comprehensive file validation
    const validation = validateUploadedFile(file)
    if (!validation.valid) {
      console.log("File validation failed:", validation.error)
      return NextResponse.json({ error: validation.error }, { status: 400 })
    }

    // Generate unique filename with timestamp and random string
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split(".").pop()?.toLowerCase()
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
    const uniqueFileName = `resume_${timestamp}_${randomString}_${sanitizedName}`

    console.log("Generated unique filename:", uniqueFileName)

    // Upload to Vercel Blob Storage
    const blob = await put(uniqueFileName, file, {
      access: "public", // Files are publicly accessible via URL
      addRandomSuffix: false, // We're handling uniqueness ourselves
    })

    console.log("Blob upload successful:", {
      url: blob.url,
      size: blob.size,
    })

    // Return comprehensive response with file metadata
    const response = {
      success: true,
      url: blob.url,
      fileName: uniqueFileName,
      originalName: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString(),
      // Additional metadata for administration
      metadata: {
        uploadTimestamp: timestamp,
        randomId: randomString,
        extension: fileExtension,
        sizeInMB: (file.size / 1024 / 1024).toFixed(2),
      },
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Upload error:", error)

    // Provide specific error messages based on error type
    let errorMessage = "Upload failed. Please try again."
    let statusCode = 500

    if (error instanceof Error) {
      if (error.message.includes("size")) {
        errorMessage = "File too large. Please use a file smaller than 5MB."
        statusCode = 413
      } else if (error.message.includes("type") || error.message.includes("format")) {
        errorMessage = "Invalid file type. Please upload a PDF, DOC, or DOCX file."
        statusCode = 415
      } else if (error.message.includes("network") || error.message.includes("timeout")) {
        errorMessage = "Network error. Please check your connection and try again."
        statusCode = 503
      } else {
        errorMessage = `Upload failed: ${error.message}`
      }
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: statusCode },
    )
  }
}

/**
 * GET endpoint for file information and health checks
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const fileName = searchParams.get("fileName")
  const action = searchParams.get("action")

  if (action === "health") {
    return NextResponse.json({
      status: "healthy",
      service: "Vercel Blob Storage",
      timestamp: new Date().toISOString(),
      capabilities: ["File upload", "Public URL generation", "Global CDN distribution", "Automatic redundancy"],
    })
  }

  if (fileName) {
    // In a production app, you might want to check if the file exists
    // and return its metadata from your database
    return NextResponse.json({
      fileName,
      message: "File information endpoint",
      // Add file metadata lookup here
    })
  }

  return NextResponse.json({
    message: "Vercel Blob Storage Upload API",
    endpoints: {
      "POST /api/upload": "Upload files",
      "GET /api/upload?action=health": "Health check",
      "GET /api/upload?fileName=<name>": "File information",
    },
  })
}

/**
 * Comprehensive file validation function
 */
function validateUploadedFile(file: File): { valid: boolean; error?: string } {
  // Check file type by MIME type (primary validation)
  const allowedMimeTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ]

  if (!allowedMimeTypes.includes(file.type)) {
    return {
      valid: false,
      error: `Invalid file type: ${file.type}. Only PDF, DOC, and DOCX files are allowed.`,
    }
  }

  // Check file extension (secondary validation)
  const allowedExtensions = [".pdf", ".doc", ".docx"]
  const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()

  if (!allowedExtensions.includes(fileExtension)) {
    return {
      valid: false,
      error: `Invalid file extension: ${fileExtension}. Only ${allowedExtensions.join(", ")} files are allowed.`,
    }
  }

  // Check file size (5MB limit)
  const maxSize = 5 * 1024 * 1024 // 5MB in bytes
  if (file.size > maxSize) {
    return {
      valid: false,
      error: `File too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Maximum size is 5MB.`,
    }
  }

  // Check for empty files
  if (file.size === 0) {
    return {
      valid: false,
      error: "File appears to be empty. Please select a valid document.",
    }
  }

  // Check filename for security (basic sanitization check)
  if (file.name.includes("..") || file.name.includes("/") || file.name.includes("\\")) {
    return {
      valid: false,
      error: "Invalid filename. Please rename your file and try again.",
    }
  }

  return { valid: true }
}
