"use client"

import { motion } from "framer-motion"
import { Globe, Mic, Briefcase, Heart } from "lucide-react"

export function EventHighlights() {
  const highlights = [
    {
      icon: <Globe className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Global Youth-Focused Competitions",
      description: "Engage in challenging competitions designed to showcase your talents on a global stage.",
    },
    {
      icon: <Mic className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />,
      title: "Powerful Speaker Sessions",
      description: "Learn from industry leaders, innovators, and changemakers through inspiring talks and panels.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-red-600 dark:text-red-400" />,
      title: "Business & Entrepreneurship Exposure",
      description: "Gain valuable insights and connections to help launch or grow your entrepreneurial journey.",
    },
    {
      icon: <Heart className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Social Impact",
      description: "Discover how to create meaningful change and address pressing global challenges.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl">Event Highlights</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            What makes NGVS'25 a must-attend summit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-blue-100 dark:border-blue-900/30"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 mx-auto">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{highlight.title}</h3>
              <p className="text-center text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
