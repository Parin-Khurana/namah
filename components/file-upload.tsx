"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Upload, File, X, CheckCircle, AlertCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

interface FileUploadProps {
  onFileUpload: (file: File) => Promise<{ success: boolean; url?: string; error?: string }>
  acceptedTypes?: string[]
  maxSize?: number // in MB
  className?: string
  disabled?: boolean
}

export function FileUpload({
  onFileUpload,
  acceptedTypes = [".pdf", ".doc", ".docx"],
  maxSize = 5,
  className = "",
  disabled = false,
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Validate file type and size
  const validateFile = (file: File): { valid: boolean; error?: string } => {
    // Check file type by extension
    const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()
    if (!acceptedTypes.includes(fileExtension)) {
      return {
        valid: false,
        error: `File type not supported. Please upload: ${acceptedTypes.join(", ")}`,
      }
    }

    // Check MIME type for additional security
    const allowedMimeTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!allowedMimeTypes.includes(file.type)) {
      return {
        valid: false,
        error: `Invalid file format. Please ensure your file is a valid ${acceptedTypes.join(", ")} document.`,
      }
    }

    // Check file size (convert MB to bytes)
    const maxSizeBytes = maxSize * 1024 * 1024
    if (file.size > maxSizeBytes) {
      return {
        valid: false,
        error: `File size too large. Maximum size: ${maxSize}MB (your file: ${(file.size / 1024 / 1024).toFixed(2)}MB)`,
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

  // Handle file upload with progress simulation
  const handleFileUpload = async (file: File) => {
    if (disabled) return

    const validation = validateFile(file)
    if (!validation.valid) {
      setUploadError(validation.error || "Invalid file")
      setUploadStatus("error")
      return
    }

    setUploadedFile(file)
    setUploadStatus("uploading")
    setUploadError(null)
    setUploadProgress(0)

    try {
      // Simulate realistic upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 85) {
            clearInterval(progressInterval)
            return 85
          }
          return prev + Math.random() * 15
        })
      }, 150)

      const result = await onFileUpload(file)

      clearInterval(progressInterval)
      setUploadProgress(100)

      if (result.success) {
        setUploadStatus("success")
        setTimeout(() => setUploadProgress(0), 2000) // Reset progress after success
      } else {
        setUploadStatus("error")
        setUploadError(result.error || "Upload failed. Please try again.")
        setUploadProgress(0)
      }
    } catch (error) {
      setUploadStatus("error")
      setUploadError("Network error. Please check your connection and try again.")
      setUploadProgress(0)
    }
  }

  // Drag and drop handlers with proper event handling
  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!disabled) {
        setIsDragOver(true)
      }
    },
    [disabled],
  )

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Only set drag over to false if we're leaving the drop zone entirely
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragOver(false)

      if (disabled) return

      const files = Array.from(e.dataTransfer.files)
      if (files.length > 0) {
        handleFileUpload(files[0])
      } else {
        setUploadError("No files detected. Please try selecting a file instead.")
        setUploadStatus("error")
      }
    },
    [disabled],
  )

  // File input change handler
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileUpload(files[0])
    }
  }

  // Remove uploaded file
  const removeFile = () => {
    setUploadedFile(null)
    setUploadStatus("idle")
    setUploadError(null)
    setUploadProgress(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Get file icon based on type
  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase()
    switch (extension) {
      case "pdf":
        return <FileText className="h-8 w-8 text-red-600" />
      case "doc":
      case "docx":
        return <FileText className="h-8 w-8 text-blue-600" />
      default:
        return <File className="h-8 w-8 text-gray-600" />
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${
            isDragOver && !disabled
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-[1.02]"
              : uploadStatus === "success"
                ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                : uploadStatus === "error"
                  ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                  : "border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={acceptedTypes.join(",")}
          onChange={handleFileInputChange}
          disabled={disabled}
        />

        {uploadStatus === "uploading" ? (
          <div className="space-y-4">
            <div className="animate-pulse">
              <Upload className="h-12 w-12 text-blue-600 mx-auto" />
            </div>
            <div className="space-y-3">
              <p className="text-lg font-medium">Uploading your resume...</p>
              <div className="max-w-xs mx-auto">
                <Progress value={uploadProgress} className="h-2" />
              </div>
              <p className="text-sm text-muted-foreground">{Math.round(uploadProgress)}% complete</p>
              {uploadedFile && (
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  {getFileIcon(uploadedFile.name)}
                  <span className="truncate max-w-[200px]">{uploadedFile.name}</span>
                  <span>({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                </div>
              )}
            </div>
          </div>
        ) : uploadStatus === "success" && uploadedFile ? (
          <div className="space-y-4">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto" />
            <div className="space-y-2">
              <p className="text-lg font-medium text-green-700 dark:text-green-400">Upload Successful!</p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                {getFileIcon(uploadedFile.name)}
                <span className="truncate max-w-[200px]">{uploadedFile.name}</span>
                <span>({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400">
                ✓ Your resume has been securely uploaded and will be included with your registration
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                removeFile()
              }}
              disabled={disabled}
            >
              <X className="h-4 w-4 mr-2" />
              Remove File
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className={`h-12 w-12 mx-auto ${isDragOver ? "text-blue-600" : "text-gray-400"}`} />
            <div className="space-y-2">
              <p className="text-lg font-medium">{isDragOver ? "Drop your file here" : "Upload your resume/CV"}</p>
              <p className="text-sm text-muted-foreground">
                {isDragOver ? "Release to upload" : "Drag and drop your file here, or click to browse"}
              </p>
              <p className="text-xs text-muted-foreground">
                Supported formats: {acceptedTypes.join(", ")} • Maximum size: {maxSize}MB
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Error Display */}
      {uploadStatus === "error" && uploadError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{uploadError}</AlertDescription>
        </Alert>
      )}

      {/* Troubleshooting Tips */}
      {uploadStatus === "error" && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
          <h4 className="font-medium text-sm flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            Troubleshooting Tips:
          </h4>
          <ul className="text-xs text-muted-foreground space-y-1 ml-6">
            <li>• Ensure your file is in PDF, DOC, or DOCX format</li>
            <li>• Check that your file size is under {maxSize}MB</li>
            <li>• Make sure the file isn't corrupted or password-protected</li>
            <li>• Try refreshing the page and uploading again</li>
            <li>• Disable browser extensions that might block file uploads</li>
            <li>• Ensure you have a stable internet connection</li>
            <li>• If using mobile, try switching to desktop browser</li>
          </ul>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setUploadStatus("idle")
              setUploadError(null)
            }}
            className="mt-2"
          >
            Try Again
          </Button>
        </div>
      )}
    </div>
  )
}
