"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Delegate, MUN 2023",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The Namah MUN provided me with invaluable diplomatic skills and a global network of like-minded peers. The conference was exceptionally well-organized and intellectually challenging.",
    },
    {
      id: 2,
      name: "Ananya Desai",
      role: "Delegate, MUN 2023",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "As a delegate at Namah MUN, I was impressed by the professionalism and dedication of the organizing team. The committees were well-researched and debates were substantive.",
    },
    {
      id: 3,
      name: "Ravi Shankar",
      role: "Team Member, NGVS'25",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Being part of the NGVS'25 team has been an incredible journey of growth and learning. We're committed to creating an unforgettable experience that empowers young visionaries.",
    },
    {
      id: 4,
      name: "Neelgagan",
      role: "Sponsor, NGVS'25",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Supporting NGVS'25 has been a rewarding experience. The team's dedication to fostering innovation and leadership among youth aligns perfectly with our values of empowering the next generation.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-900/10">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl">What People Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Hear from our sponsors, delegates, and team members
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden py-10 max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-100/50 dark:bg-blue-900/20 rounded-xl -z-10"></div>

          <div className="absolute top-4 left-4 opacity-20">
            <Quote size={40} className="text-blue-600" />
          </div>

          <div className="px-8 py-6">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="pt-6 px-0 flex flex-col items-center text-center">
                <motion.blockquote
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg italic mb-6 max-w-3xl mx-auto"
                >
                  "{testimonials[current].quote}"
                </motion.blockquote>

                <Avatar className="h-16 w-16 border-2 border-blue-600 mb-4">
                  <AvatarImage
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                  />
                  <AvatarFallback>
                    {testimonials[current].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <motion.div
                  key={`name-${current}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
                </motion.div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${current === index ? "bg-blue-600 w-6" : "bg-muted"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
