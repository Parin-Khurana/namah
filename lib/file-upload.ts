import { put } from "@vercel/blob"

export interface UploadResult {
  success: boolean
  url?: string
  error?: string
  fileName?: string
  fileSize?: number
  uploadedAt?: string
}

/**
 * VERCEL BLOB STORAGE MECHANISM
 *
 * Platform: Vercel Blob Storage
 * Location: Vercel's global edge network (distributed across multiple regions)
 * Access Method: Direct HTTPS URLs with CDN acceleration
 * Security: Public URLs with optional access tokens
 * Persistence: Files stored permanently until manually deleted
 * Redundancy: Automatic replication across multiple data centers
 *
 * URL Structure: https://[blob-id].public.blob.vercel-storage.com/[filename]
 *
 * Storage Process:
 * 1. File validation on client-side
 * 2. Upload to Vercel Blob via API
 * 3. Unique filename generation to prevent conflicts
 * 4. Metadata storage in Supabase database
 * 5. Return of permanent HTTPS URL
 */

export async function uploadFileToBlob(file: File): Promise<UploadResult> {
  try {
    // Validate file before upload
    if (!file) {
      return { success: false, error: "No file provided" }
    }

    // Additional file validation
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]

    if (!allowedTypes.includes(file.type)) {
      return {
        success: false,
        error: "Invalid file type. Only PDF, DOC, and DOCX files are allowed.",
      }
    }

    // Check file size (5MB limit)
    const maxSize = 5 * 1024 * 1024 // 5MB in bytes
    if (file.size > maxSize) {
      return {
        success: false,
        error: `File too large. Maximum size is 5MB. Your file is ${(file.size / 1024 / 1024).toFixed(2)}MB.`,
      }
    }

    // Generate unique filename to prevent conflicts
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split(".").pop()?.toLowerCase()
    const sanitizedOriginalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
    const uniqueFileName = `resume_${timestamp}_${randomString}_${sanitizedOriginalName}`

    console.log("Uploading file:", {
      originalName: file.name,
      uniqueName: uniqueFileName,
      size: file.size,
      type: file.type,
    })

    // Upload to Vercel Blob with public access
    const blob = await put(uniqueFileName, file, {
      access: "public",
      handleUploadUrl: "/api/upload", // Custom upload handler
    })

    console.log("Upload successful:", blob)

    return {
      success: true,
      url: blob.url,
      fileName: uniqueFileName,
      fileSize: file.size,
      uploadedAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Blob upload error:", error)

    // Provide specific error messages based on error type
    let errorMessage = "Upload failed. Please try again."

    if (error instanceof Error) {
      if (error.message.includes("network")) {
        errorMessage = "Network error. Please check your internet connection."
      } else if (error.message.includes("size")) {
        errorMessage = "File too large. Please use a file smaller than 5MB."
      } else if (error.message.includes("type")) {
        errorMessage = "Invalid file type. Please upload a PDF, DOC, or DOCX file."
      } else {
        errorMessage = error.message
      }
    }

    return {
      success: false,
      error: errorMessage,
    }
  }
}

/**
 * Alternative upload method using FormData for more control
 */
export async function uploadFileViaAPI(file: File): Promise<UploadResult> {
  try {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("type", "resume")
    formData.append("timestamp", Date.now().toString())

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json()
      return {
        success: false,
        error: errorData.error || `Upload failed with status ${response.status}`,
      }
    }

    const result = await response.json()
    return {
      success: true,
      url: result.url,
      fileName: result.fileName,
      fileSize: result.size,
      uploadedAt: result.uploadedAt,
    }
  } catch (error) {
    console.error("API upload error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Upload failed",
    }
  }
}

/**
 * Utility function to validate file on client-side before upload
 */
export function validateFileBeforeUpload(file: File): { valid: boolean; error?: string } {
  // Check file type
  const allowedExtensions = [".pdf", ".doc", ".docx"]
  const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()

  if (!allowedExtensions.includes(fileExtension)) {
    return {
      valid: false,
      error: `Invalid file type. Please upload: ${allowedExtensions.join(", ")}`,
    }
  }

  // Check MIME type
  const allowedMimeTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ]

  if (!allowedMimeTypes.includes(file.type)) {
    return {
      valid: false,
      error: "Invalid file format. Please ensure your file is a valid document.",
    }
  }

  // Check file size
  const maxSize = 5 * 1024 * 1024 // 5MB
  if (file.size > maxSize) {
    return {
      valid: false,
      error: `File too large. Maximum size: 5MB (your file: ${(file.size / 1024 / 1024).toFixed(2)}MB)`,
    }
  }

  // Check for empty files
  if (file.size === 0) {
    return {
      valid: false,
      error: "File appears to be empty. Please select a valid document.",
    }
  }

  return { valid: true }
}
