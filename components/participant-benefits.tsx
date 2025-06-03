"use client"

import { motion } from "framer-motion"
import { Users, Award, Network, Globe, Briefcase, Zap, Heart } from "lucide-react"

const benefits = [
  {
    title: "Learn from Industry Leaders",
    icon: <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Gain insights from successful entrepreneurs and business experts.",
  },
  {
    title: "Compete in High-Stakes Challenges",
    icon: <Award className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Test your skills and ideas in competitive, real-world scenarios.",
  },
  {
    title: "Connect with Youth Speakers",
    icon: <Network className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Engage directly with young innovators who are changing the world.",
  },
  {
    title: "Expand Your Network",
    icon: <Globe className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Build connections with peers and professionals from around the globe.",
  },
  {
    title: "Get Real-World Exposure",
    icon: <Briefcase className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Showcase your talents to potential employers and investors.",
  },
  {
    title: "Access Business Opportunities",
    icon: <Zap className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Discover funding, mentorship, and partnership possibilities.",
  },
  {
    title: "Create Social Change",
    icon: <Heart className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Develop solutions that make a positive impact on society.",
  },
]

export function ParticipantBenefits() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Join Us?</h2>
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">For Participants</h3>
              <p className="text-lg text-muted-foreground">
                NGVS'25 is more than just a summit — it's a launchpad for your career, ideas, and impact. Whether you're
                looking to ignite your entrepreneurial journey, learn from top-tier experts, or make connections that
                could transform your future, this is the event where you'll unlock endless opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10"></div>
            <img
              src="/placeholder.svg?height=1000&width=800"
              alt="Participants at a business summit"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
