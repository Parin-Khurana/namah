"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Instagram, ExternalLink, Play } from "lucide-react"
import Link from "next/link"

export default function PodcastPage() {
  const instagramReels = [
    {
      id: 1,
      url: "https://www.instagram.com/p/DJzBD_-JPmi/",
      embedUrl: "https://www.instagram.com/p/DJzBD_-JPmi/embed/",
      title: "NGVS'25 Announcement",
      description:
        "Get ready for the most revolutionary summit of 2025! Join us for an incredible journey of innovation and leadership.",
      thumbnail: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 2,
      url: "https://www.instagram.com/p/DJEU4_Dp5Ho/",
      embedUrl: "https://www.instagram.com/p/DJEU4_Dp5Ho/embed/",
      title: "Behind the Scenes",
      description: "Take a look behind the scenes as we prepare for NGVS'25. Exciting things are coming your way!",
      thumbnail: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 3,
      url: "https://www.instagram.com/p/DJzBD_-JPmi/",
      embedUrl: "https://www.instagram.com/p/DJzBD_-JPmi/embed/",
      title: "Speaker Spotlight",
      description: "Meet our incredible lineup of speakers who will be sharing their expertise at NGVS'25.",
      thumbnail: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 4,
      url: "https://www.instagram.com/p/DJEU4_Dp5Ho/",
      embedUrl: "https://www.instagram.com/p/DJEU4_Dp5Ho/embed/",
      title: "Competition Preview",
      description: "Discover the exciting competitions and challenges waiting for you at the summit.",
      thumbnail: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 5,
      url: "https://www.instagram.com/p/DJzBD_-JPmi/",
      embedUrl: "https://www.instagram.com/p/DJzBD_-JPmi/embed/",
      title: "Team Preparation",
      description: "Our dedicated team is working hard to make NGVS'25 an unforgettable experience for everyone.",
      thumbnail: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 6,
      url: "https://www.instagram.com/p/DJEU4_Dp5Ho/",
      embedUrl: "https://www.instagram.com/p/DJEU4_Dp5Ho/embed/",
      title: "Registration Open",
      description: "Don't miss out! Registration is now open for NGVS'25. Secure your spot today!",
      thumbnail: "/placeholder.svg?height=600&width=400",
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            NGVS'25 Media
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest content, announcements, and behind-the-scenes moments from the Namah Global
            Visionaries Summit 2025
          </p>
        </div>

        {/* Featured Instagram Reels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Featured Content</h2>
            <p className="text-muted-foreground">Check out our latest Instagram reels and updates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instagramReels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-[9/16] max-h-[500px] relative bg-gray-100 dark:bg-gray-700">
                  {/* Instagram Embed with Fallback */}
                  <div className="w-full h-full">
                    <iframe
                      src={reel.embedUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      className="w-full h-full"
                      title={reel.title}
                      onError={(e) => {
                        // Fallback if embed fails
                        e.currentTarget.style.display = "none"
                        const fallback = e.currentTarget.nextElementSibling
                        if (fallback) fallback.style.display = "flex"
                      }}
                    />

                    {/* Fallback Preview */}
                    <div
                      className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white p-6 text-center"
                      style={{ display: "none" }}
                    >
                      <div className="bg-white/20 rounded-full p-4 mb-4">
                        <Play className="h-12 w-12" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{reel.title}</h3>
                      <p className="text-white/90 mb-6 text-sm">{reel.description}</p>
                      <Link
                        href={reel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-sm"
                      >
                        <Instagram className="h-4 w-4" />
                        View on Instagram
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{reel.title}</h3>
                    <p className="text-muted-foreground text-sm">{reel.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Link href={reel.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                      >
                        <Instagram className="mr-2 h-3 w-3" />
                        View on Instagram
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8"
        >
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Stay Connected</h2>
              <p className="text-muted-foreground">
                Follow us on social media for the latest updates, behind-the-scenes content, and exclusive announcements
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://www.instagram.com/namahgroup/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12 px-6">
                  <Instagram className="h-5 w-5 mr-2" />
                  Follow on Instagram
                </Button>
              </Link>

              <Link href="mailto:connect.namahgroup@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12 px-6">
                  <svg
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Us
                </Button>
              </Link>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>YouTube channel coming soon with exclusive interviews and summit highlights!</p>
            </div>
          </div>
        </motion.div>

        {/* Content Preview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-6"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">What to Expect</h2>
            <p className="text-muted-foreground">More exciting content coming your way</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold mb-2">Daily Updates</h3>
              <p className="text-sm text-muted-foreground">Follow our journey as we prepare for NGVS'25</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-bold mb-2">Speaker Interviews</h3>
              <p className="text-sm text-muted-foreground">Exclusive conversations with industry leaders</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-bold mb-2">Live Coverage</h3>
              <p className="text-sm text-muted-foreground">Real-time updates during the summit</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
