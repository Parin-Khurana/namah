"use client"

import { motion } from "framer-motion"
import { Shield, Globe, Zap, Database, Lock, CheckCircle } from "lucide-react"

export function StorageInfo() {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Global CDN",
      description: "Files distributed across Vercel's global edge network for fast access worldwide",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Secure Storage",
      description: "Enterprise-grade security with automatic encryption and redundancy",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Instant Access",
      description: "Direct HTTPS URLs with CDN acceleration for immediate file access",
    },
    {
      icon: <Database className="h-6 w-6 text-purple-600" />,
      title: "Metadata Tracking",
      description: "Complete file metadata stored in Supabase for administration and tracking",
    },
    {
      icon: <Lock className="h-6 w-6 text-red-600" />,
      title: "Access Control",
      description: "Secure file access with optional authentication and permission controls",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: "Reliable Delivery",
      description: "99.9% uptime with automatic failover and multi-region replication",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 space-y-6"
    >
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold">File Storage & Security</h3>
        <p className="text-muted-foreground">
          Your documents are stored securely using Vercel Blob Storage with enterprise-grade infrastructure
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-2"
          >
            <div className="flex items-center gap-3">
              {feature.icon}
              <h4 className="font-semibold text-sm">{feature.title}</h4>
            </div>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-3">
        <h4 className="font-semibold text-sm">Technical Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="font-medium">Storage Platform:</span>
            <p className="text-muted-foreground">Vercel Blob Storage</p>
          </div>
          <div>
            <span className="font-medium">File Access:</span>
            <p className="text-muted-foreground">Direct HTTPS URLs</p>
          </div>
          <div>
            <span className="font-medium">Supported Formats:</span>
            <p className="text-muted-foreground">PDF, DOC, DOCX</p>
          </div>
          <div>
            <span className="font-medium">Maximum Size:</span>
            <p className="text-muted-foreground">5MB per file</p>
          </div>
          <div>
            <span className="font-medium">URL Structure:</span>
            <p className="text-muted-foreground">https://[id].public.blob.vercel-storage.com/[filename]</p>
          </div>
          <div>
            <span className="font-medium">Retention:</span>
            <p className="text-muted-foreground">Permanent until manually deleted</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
