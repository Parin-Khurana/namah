"use client"

import { motion } from "framer-motion"
import { Users, Mic2, Globe, Building, Award } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const statistics = [
  {
    number: 1500,
    suffix: "+",
    label: "Expected Attendees",
    icon: <Users className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  },
  {
    number: 60,
    suffix: "+",
    label: "Global Speakers",
    icon: <Mic2 className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  },
  {
    number: 25,
    suffix: "+",
    label: "Countries Represented",
    icon: <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  },
  {
    number: 20,
    suffix: "+",
    label: "Partner Organizations",
    icon: <Building className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  },
  {
    number: 8,
    suffix: "",
    label: "Competition Categories",
    icon: <Award className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
  },
]

// Counter component that animates from 0 to target number
function Counter({ number, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * number))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, number, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatisticsSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center border-t-4 border-blue-600 dark:border-blue-400"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">
                <Counter number={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
