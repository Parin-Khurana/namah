"use client"

import { motion } from "framer-motion"
import { MessageSquare, Award, Lightbulb, Handshake, GraduationCap } from "lucide-react"

const benefits = [
  {
    title: "Diplomatic Skills",
    description: "Develop negotiation, public speaking, and conflict resolution skills essential for future leaders.",
    icon: <MessageSquare className="h-12 w-12 text-primary" />,
  },
  {
    title: "Global Recognition",
    description: "Participate in prestigious conferences recognized by educational institutions worldwide.",
    icon: <Award className="h-12 w-12 text-primary" />,
  },
  {
    title: "Leadership Development",
    description: "Take on roles that challenge you to lead, organize, and make critical decisions.",
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
  },
  {
    title: "Networking Opportunities",
    description: "Connect with like-minded peers and professionals from around the world.",
    icon: <Handshake className="h-12 w-12 text-primary" />,
  },
  {
    title: "Educational Growth",
    description: "Gain deep insights into international relations, global issues, and policy-making.",
    icon: <GraduationCap className="h-12 w-12 text-primary" />,
  },
]

export function BenefitsGrid() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Join NAMAH MUN</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Discover the benefits of participating in our Model United Nations conferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border-t-4 border-primary"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
