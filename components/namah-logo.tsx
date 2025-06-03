"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function NamahLogo({ size = "default" }) {
  const sizes = {
    small: { width: 32, height: 32 },
    default: { width: 48, height: 48 },
    large: { width: 64, height: 64 },
  }

  const { width, height } = sizes[size] || sizes.default

  return (
    <Link href="/" className="flex items-center gap-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-full"
        style={{ width, height }}
      >
        <Image
          src="/placeholder.svg?height=100&width=100"
          alt="Namah Logo"
          width={width}
          height={height}
          className="object-contain"
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400"
      >
        NAMAH
      </motion.span>
    </Link>
  )
}
