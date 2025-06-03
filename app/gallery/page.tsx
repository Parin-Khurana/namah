"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Simple gallery images without categories
  const images = [
    {
      id: 1,
      src: `1 (1).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 1",
      title: "Opening Ceremony",
    },
    {
      id: 2,
      src: `1 (2).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 2",
      title: "Keynote Session",
    },
    {
      id: 3,
      src: `1 (3).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 3",
      title: "Panel Discussion",
    },
    {
      id: 4,
      src: `1 (4).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 4",
      title: "Workshop Session",
    },
    {
      id: 5,
      src: `1 (5).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 5",
      title: "Networking Event",
    },
    {
      id: 6,
      src: `1 (6).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 6",
      title: "Competition Finals",
    },
    {
      id: 7,
      src: `1 (7).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 7",
      title: "Award Ceremony",
    },
    {
      id: 8,
      src: `1 (8).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 8",
      title: "Team Building",
    },
    {
      id: 9,
      src: `1 (9).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 9",
      title: "Startup Pitch",
    },
    {
      id: 10,
      src: `1 (10).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 10",
      title: "Cultural Performance",
    },
    {
      id: 11,
      src: `1 (11).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 11",
      title: "Group Photo",
    },
    {
      id: 12,
      src: `1 (12).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 12",
      title: "Innovation Showcase",
    },
    {
      id: 13,
      src: `1 (13).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 13",
      title: "Speaker Session",
    },
    {
      id: 14,
      src: `1 (14).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 14",
      title: "Collaboration Hub",
    },
    {
      id: 15,
      src: `1 (15).jpg?height=400&width=600`,
      alt: "NGVS'25 Event Photo 15",
      title: "Closing Ceremony",
    },
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = images.findIndex((img) => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % images.length
      setSelectedImage(images[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = images.findIndex((img) => img.id === selectedImage)
      const prevIndex = (currentIndex - 1 + images.length) % images.length
      setSelectedImage(images[prevIndex].id)
    }
  }

  const selectedImageData = selectedImage ? images.find((img) => img.id === selectedImage) : null

  return (
    <>
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Event Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Capturing moments from our journey of innovation, leadership, and collaboration
            </p>
          </motion.div>

          {/* Simple Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 aspect-square">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 dark:bg-gray-900/90 rounded-full p-3">
                      <svg
                        className="w-6 h-6 text-gray-900 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Controls */}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white border-0"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = selectedImageData.src
                    link.download = selectedImageData.title
                    link.click()
                  }}
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white border-0"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: selectedImageData.title,
                        url: window.location.href,
                      })
                    }
                  }}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white border-0"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Previous/Next Buttons */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-0"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-0"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image */}
              <div className="flex flex-col items-center">
                <img
                  src={selectedImageData.src || "/placeholder.svg"}
                  alt={selectedImageData.alt}
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
                <div className="mt-4 text-center text-white max-w-2xl">
                  <h3 className="text-xl font-semibold">{selectedImageData.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
