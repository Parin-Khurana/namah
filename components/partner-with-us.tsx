"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Handshake, Award, Globe, Users } from "lucide-react"

export function PartnerWithUs() {
  const benefits = [
    {
      icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      text: "Global Visibility & Brand Exposure",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      text: "Access to Young Talent & Innovators",
    },
    {
      icon: <Handshake className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      text: "Strategic Networking Opportunities",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      text: "Corporate Social Responsibility",
    },
  ]

  // Text animation for the title
  const titleWords = "Partner with NGVS'25".split(" ")

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-300/20 dark:bg-yellow-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex space-x-2">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-3xl font-extrabold tracking-tighter md:text-4xl"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl text-blue-600 dark:text-blue-400 font-semibold"
              >
                Elevate Your Brand, Empower the Future
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg text-muted-foreground"
              >
                Join forces with NGVS'25 to connect with the next generation of leaders, innovators, and changemakers.
                Our partnership opportunities offer unique platforms to showcase your brand while supporting youth
                empowerment and social impact.
              </motion.p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm"
                >
                  {benefit.icon}
                  <p className="font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="pt-4"
            >
              <Link href="/become-sponsor">
                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700">
                  Explore Partnership Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-yellow-600/20 z-10"></div>
            <img
              src="/placeholder.svg?height=800&width=600"
              alt="Partnership opportunities"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Join Our Growing Network</h3>
                <p className="text-white/80">Connect with industry leaders and visionary youth</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
