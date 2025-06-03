"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Delegate, Harvard University",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "NAMAH MUN provided me with invaluable diplomatic skills and a global network of like-minded peers. The conferences are exceptionally well-organized and challenging.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chair, Stanford University",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a committee chair at NAMAH MUN, I was impressed by the professionalism and dedication of the organizing team. The delegates were well-prepared and debates were substantive.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Head Delegate, Oxford University",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "My team has participated in NAMAH MUN for three consecutive years. The quality of debate, attention to procedural accuracy, and overall experience keep us coming back.",
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    role: "Faculty Advisor, Sciences Po",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "NAMAH MUN stands out among the many conferences we attend annually. The secretariat's commitment to educational value and diplomatic authenticity is commendable.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 dark:bg-primary/10 rounded-xl -z-10"></div>

      <div className="absolute top-4 left-4 opacity-20">
        <Quote size={40} className="text-primary" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="px-8 py-6"
        >
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="pt-6 px-0 flex flex-col items-center text-center">
              <blockquote className="text-lg italic mb-6 max-w-3xl mx-auto">"{testimonials[current].quote}"</blockquote>

              <Avatar className="h-16 w-16 border-2 border-primary mb-4">
                <AvatarImage src={testimonials[current].image} alt={testimonials[current].name} />
                <AvatarFallback>
                  {testimonials[current].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${current === index ? "bg-primary w-6" : "bg-muted"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
