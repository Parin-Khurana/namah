"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Handshake, Award, Globe, Users } from "lucide-react"

export function PartnerBox() {
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  // Animated text
  const animatedText = "Partner with Namah Summit".split(" ").map((word, i) => (
    <motion.span
      key={i}
      custom={i}
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ))

  // Shimmer animation for the border
  const shimmerVariants = {
    initial: {
      backgroundPosition: "0% 0%",
    },
    animate: {
      backgroundPosition: "100% 0%",
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        duration: 3,
        ease: "linear",
      },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative p-0.5 rounded-xl overflow-hidden"
    >
      <motion.div
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-yellow-400 to-red-400 opacity-70"
        style={{ backgroundSize: "200% 100%" }}
      />

      <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">{animatedText}</h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-blue-600 dark:text-blue-400 font-semibold"
            >
              Elevate Your Brand, Empower the Future
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted-foreground"
            >
              Join forces with the Namah Global Visionaries Summit to connect with the next generation of leaders,
              innovators, and changemakers. Our partnership opportunities offer unique platforms to showcase your brand
              while supporting youth empowerment and social impact.
            </motion.p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex items-center gap-2"
              >
                <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">Global Visibility</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="flex items-center gap-2"
              >
                <Users className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                <span className="text-sm">Access to Young Talent</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="flex items-center gap-2"
              >
                <Handshake className="h-5 w-5 text-red-600 dark:text-red-400" />
                <span className="text-sm">Strategic Networking</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="flex items-center gap-2"
              >
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">Corporate Social Responsibility</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link href="/sponsors">
                <Button className="mt-4 rounded-full bg-blue-600 hover:bg-blue-700">
                  Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/3 relative h-[200px] md:h-[250px] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-yellow-600/20 to-red-600/20 z-10"></div>
            <img
              src="/placeholder.svg?height=500&width=400"
              alt="Partnership opportunities"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
