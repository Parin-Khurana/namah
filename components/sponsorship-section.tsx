"use client"

import { motion } from "framer-motion"
import { Eye, Network, Heart, Mic2, ArrowUpRight, Globe } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    title: "Unmatched Brand Visibility",
    icon: <Eye className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Reach thousands of young innovators, entrepreneurs, and professionals across diverse industries.",
  },
  {
    title: "Exclusive Networking Opportunities",
    icon: <Network className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description:
      "Connect directly with global entrepreneurs, top-tier professionals, investors, and potential clients.",
  },
  {
    title: "Corporate Social Responsibility",
    icon: <Heart className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Align your brand with a movement of change and demonstrate your commitment to social innovation.",
  },
  {
    title: "Speaking Opportunities",
    icon: <Mic2 className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Showcase your expertise in front of an engaged audience and position your brand as a thought leader.",
  },
  {
    title: "Enhanced Marketing Reach",
    icon: <Globe className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description:
      "Boost your brand's exposure through event promotions, social media, website presence, and media partnerships.",
  },
]

export function SponsorshipSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-purple-50 dark:bg-purple-900/20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-6 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Partner with NGVS'25</h2>
          <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">Be a Part of the Change</p>
          <p className="text-lg text-muted-foreground">
            By sponsoring this dynamic event, your brand will not only gain exposure but will also be seen as a champion
            of social change, entrepreneurship, and the next generation of business leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link href="/become-sponsor">
            <button className="group px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium inline-flex items-center">
              Become a Sponsor
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
