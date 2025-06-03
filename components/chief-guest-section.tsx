"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function ChiefGuestSection() {
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
          <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl">Our Previous Chief Guest</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Insights from our distinguished guest at Namah MUN 2023
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/10 z-10"></div>
            <img
              src="/placeholder.svg?height=800&width=600"
              alt="Maithili Ganjoo"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Maithili Ganjoo</h3>
                <p className="text-white/80">Chief Guest, Namah MUN 2023</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-none shadow-lg overflow-visible">
              <CardContent className="p-8 relative">
                <div className="absolute -top-6 -left-6 bg-blue-600 rounded-full p-3 shadow-lg">
                  <Quote className="h-8 w-8 text-white" />
                </div>
                <blockquote className="text-lg italic mt-6 mb-6">
                  "The Namah MUN was an exceptional event that showcased the talent, dedication, and vision of young
                  leaders. The level of debate, the quality of organization, and the passion of the participants were
                  truly impressive. Events like these are crucial for developing the diplomatic and leadership skills
                  that our world needs."
                </blockquote>
                <div className="text-right">
                  <p className="font-bold text-blue-600 dark:text-blue-400">Maithili Ganjoo</p>
                  <p className="text-sm text-muted-foreground">Chief Guest, Namah MUN 2023</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
