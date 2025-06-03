"use client"

import { motion } from "framer-motion"
import { Users, Award, MessageSquare, Users2, Lightbulb, UserPlus } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    title: "Inspire a Global Audience",
    icon: <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Address a diverse and engaged audience of thousands of ambitious young minds.",
  },
  {
    title: "Share Your Vision",
    icon: <Lightbulb className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Tell your story and provide insights on leadership, entrepreneurship, and social change.",
  },
  {
    title: "Be a Recognized Thought Leader",
    icon: <Award className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Establish yourself as a key voice in business, social innovation, and entrepreneurship.",
  },
  {
    title: "Collaborate with Industry Visionaries",
    icon: <Users2 className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Join a dynamic community of thought leaders, entrepreneurs, and influencers.",
  },
  {
    title: "Enhance Your Professional Brand",
    icon: <UserPlus className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Elevate your personal brand and visibility within the global business ecosystem.",
  },
  {
    title: "Contribute to Social Impact",
    icon: <MessageSquare className="h-10 w-10 text-purple-600 dark:text-purple-400" />,
    description: "Help drive social and business innovation through your experiences and insights.",
  },
]

export function SpeakerOpportunities() {
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Speak at NGVS'25</h2>
              <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">
                Share Your Expertise. Shape the Future.
              </p>
              <p className="text-lg text-muted-foreground">
                NGVS'25 is where visionaries, changemakers, and industry leaders converge to inspire and empower the
                next generation of entrepreneurs, creators, and innovators. We invite successful entrepreneurs, business
                moguls, social innovators, and thought leaders who are passionate about driving change to share their
                stories, insights, and experiences at our summit.
              </p>
              <p className="text-lg text-muted-foreground">
                If you're ready to influence the future, this is your platform. Step onto the stage at NGVS'25 and
                become a part of a global movement for progress.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/apply-speaker">
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium">
                  Apply to Be a Speaker
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-purple-600"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
