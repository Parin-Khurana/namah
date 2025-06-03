"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Bell } from "lucide-react"
import Link from "next/link"

export default function SchedulePage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Summit Schedule
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plan your NGVS'25 experience with our comprehensive schedule of keynotes, panels, workshops, and networking
            events.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-12 text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <Calendar className="h-24 w-24 text-blue-600 dark:text-blue-400" />
          </div>

          <h2 className="text-3xl font-extrabold mb-4">Coming Soon</h2>

          <p className="text-lg text-muted-foreground mb-8">
            We're finalizing an exciting lineup of speakers, workshops, and events for NGVS'25. Check back soon for the
            complete schedule!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Register Now</Button>
            </Link>

            <Button variant="outline" className="rounded-full">
              <Bell className="mr-2 h-4 w-4" /> Get Notified
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>3 Days of Events</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Delhi</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <h3 className="text-xl font-bold mb-4">What to Expect</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-bold mb-2">Keynote Speeches</h4>
              <p className="text-sm text-muted-foreground">Inspiring talks from industry leaders and visionaries</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-bold mb-2">Interactive Workshops</h4>
              <p className="text-sm text-muted-foreground">Hands-on sessions to develop practical skills</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-bold mb-2">Networking Events</h4>
              <p className="text-sm text-muted-foreground">Opportunities to connect with peers and industry experts</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
