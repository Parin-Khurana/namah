"use client"

import { motion } from "framer-motion"

export function EventStatistics() {
  const stats = [
    { icon: "🎤", value: "30+", label: "Curated Speakers & Mentors" },
    { icon: "🌍", value: "100+", label: "Campuses Engaged" },
    { icon: "💼", value: "800+", label: "Anticipated Delegates" },
    { icon: "🤝", value: "20+", label: "Brands & Partners" },
    { icon: "🏛", value: "", label: "Pan-India & Global Outreach" },
    { icon: "🧠", value: "10+", label: "Power-Packed Competitions" },
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
          <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl">Summit by the Numbers</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">The scale and impact of NGVS'25</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-md transition-all hover:-translate-y-1 border border-blue-100 dark:border-blue-900/30"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
