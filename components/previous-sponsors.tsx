"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function PreviousSponsors() {
  const sponsors = [
    {
      name: "Reliance Industries",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "Tata Consultancy Services",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "HDFC Bank",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "Infosys",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "Wipro",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
    {
      name: "Bharti Airtel",
      logo: "/placeholder.svg?height=80&width=200",
      website: "#",
    },
  ]

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
          <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl">Our Previous Sponsors</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            We're proud to have partnered with these forward-thinking organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Link
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-105"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
