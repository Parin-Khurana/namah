"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Award, MapPin } from "lucide-react"

export function PreviousEvent() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Previous Event</h2>
          <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">Namah Model United Nations 2023</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg">
              In August 2023, Namah Group proudly hosted the Namah Model United Nations (MUN) on 12-13 August 2023,
              which brought together over 300 delegates from across the globe for a transformative experience in
              diplomacy, international relations, and global governance.
            </p>
            <p className="text-lg">
              The summit was a huge success, offering young minds the opportunity to engage in meaningful debates,
              discuss global issues, and simulate real-world UN proceedings. With delegates tackling issues such as
              climate change, peace and security, and human rights, Namah MUN 2023 was a space where the future leaders
              of the world gathered to shape their understanding of global challenges and solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h4 className="font-semibold">300+ Delegates</h4>
                  <p className="text-muted-foreground text-sm">From around the world</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Chief Guest</h4>
                  <p className="text-muted-foreground text-sm">Maithili Ganjoo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h4 className="font-semibold">August 12-13, 2023</h4>
                  <p className="text-muted-foreground text-sm">Two days of engagement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Global Issues</h4>
                  <p className="text-muted-foreground text-sm">Climate change, human rights, security</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10"></div>
            <img
              src="/placeholder.svg?height=800&width=1200"
              alt="Namah MUN 2023 Event"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
