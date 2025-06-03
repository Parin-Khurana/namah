"use client"

import { motion } from "framer-motion"
import { Briefcase, Heart, Lightbulb, Users, Scale, Trophy, Palette, Code } from "lucide-react"

const categories = [
  {
    title: "Business Plans",
    icon: <Briefcase className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Develop comprehensive business strategies and pitch your innovative ideas.",
  },
  {
    title: "Social Impact Projects",
    icon: <Heart className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Create solutions that address pressing social and environmental challenges.",
  },
  {
    title: "Startup Pitches",
    icon: <Lightbulb className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Present your startup to potential investors and industry experts.",
  },
  {
    title: "MUN Simulation",
    icon: <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Engage in diplomatic negotiations and international policy discussions.",
  },
  {
    title: "Moot Court",
    icon: <Scale className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Argue legal cases and develop your advocacy skills in a simulated court environment.",
  },
  {
    title: "Leadership Challenges",
    icon: <Trophy className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Test your leadership abilities through strategic problem-solving scenarios.",
  },
  {
    title: "Design Competitions",
    icon: <Palette className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Showcase your creative talents in graphic design, UX/UI, and product design.",
  },
  {
    title: "Hackathons",
    icon: <Code className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Collaborate to develop innovative tech solutions to real-world problems.",
  },
]

export function CompetitionCategories() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Competition Categories</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Showcase your talents and compete in these exciting categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 mx-auto">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-center">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
