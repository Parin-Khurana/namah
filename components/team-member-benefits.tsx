"use client"

import { motion } from "framer-motion"
import { Flag, Users, Briefcase, Network, Award, Eye, TrendingUp } from "lucide-react"

const benefits = [
  {
    title: "Lead a Revolutionary Summit",
    icon: <Flag className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Take ownership of key aspects of a groundbreaking global event.",
  },
  {
    title: "Collaborate with Global Thought Leaders",
    icon: <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Work alongside industry experts and visionaries from around the world.",
  },
  {
    title: "Gain Hands-On Experience",
    icon: <Briefcase className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Develop practical skills in event management, marketing, and leadership.",
  },
  {
    title: "Boost Your Professional Network",
    icon: <Network className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Build connections with professionals across various industries.",
  },
  {
    title: "Create Lasting Impact",
    icon: <Award className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Be part of initiatives that drive meaningful change in business and society.",
  },
  {
    title: "Gain Recognition and Visibility",
    icon: <Eye className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Showcase your talents to potential employers and industry leaders.",
  },
  {
    title: "Elevate Your Career",
    icon: <TrendingUp className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Add a prestigious experience to your resume and open new career paths.",
  },
]

const roles = [
  "Event Coordinators",
  "Marketing & PR Specialists",
  "Content Creators",
  "Logistics & Operations Managers",
  "Speakers & Panel Moderators",
  "Creative Team",
  "Volunteer Support",
]

export function TeamMemberBenefits() {
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
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">For Team Members</h2>
          <p className="text-2xl font-semibold text-purple-600 dark:text-purple-400">Lead, Innovate, Inspire.</p>
          <p className="text-lg text-muted-foreground">
            As a team member of NGVS'25, you'll be at the heart of one of the most impactful youth and business summits
            in the world. Your role will allow you to shape the summit, work with visionary leaders, and make an impact
            that goes beyond the event itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold mb-6">Roles Available</h3>
            <div className="space-y-4">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                  <p className="font-medium">{role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Why Join Our Team?</h3>
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="/join-team"
            className="inline-flex items-center px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg"
          >
            Apply to Join Our Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
