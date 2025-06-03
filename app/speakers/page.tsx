"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import Link from "next/link"

export default function SpeakersPage() {
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "CEO & Founder",
      organization: "TechVentures India",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dr. Kumar is a renowned entrepreneur and technology leader with over 15 years of experience in building successful startups and leading digital transformation initiatives.",
      expertise: ["Entrepreneurship", "Technology Innovation", "Digital Transformation"],
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "rajesh@techventures.in",
      },
    },
    {
      name: "Priya Sharma",
      position: "Social Impact Leader",
      organization: "Change Makers Foundation",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Priya is a passionate advocate for social change and has led numerous initiatives focused on education, women empowerment, and sustainable development.",
      expertise: ["Social Innovation", "Women Empowerment", "Sustainable Development"],
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "priya@changemakers.org",
      },
    },
    {
      name: "Arjun Patel",
      position: "Investment Director",
      organization: "Future Capital Partners",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Arjun specializes in early-stage investments and has helped numerous startups scale their operations and achieve sustainable growth.",
      expertise: ["Venture Capital", "Startup Scaling", "Financial Strategy"],
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "arjun@futurecapital.com",
      },
    },
    {
      name: "Dr. Meera Reddy",
      position: "Innovation Strategist",
      organization: "Global Innovation Hub",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dr. Reddy is an expert in innovation management and has worked with Fortune 500 companies to develop breakthrough products and services.",
      expertise: ["Innovation Strategy", "Product Development", "Corporate Innovation"],
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "meera@innovationhub.com",
      },
    },
    {
      name: "Vikram Singh",
      position: "Digital Marketing Expert",
      organization: "Brand Builders Agency",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Vikram has helped hundreds of brands build their digital presence and create impactful marketing campaigns that drive real business results.",
      expertise: ["Digital Marketing", "Brand Strategy", "Content Creation"],
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "vikram@brandbuilders.in",
      },
    },
    {
      name: "Ananya Gupta",
      position: "Sustainability Consultant",
      organization: "Green Future Solutions",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ananya works with organizations to implement sustainable practices and develop environmentally responsible business strategies.",
      expertise: ["Sustainability", "Environmental Strategy", "Green Business"],
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "ananya@greenfuture.org",
      },
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Our Speakers
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the industry leaders, innovators, and visionaries who will be sharing their expertise at the summit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{speaker.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{speaker.position}</p>
                  <p className="text-muted-foreground text-sm">{speaker.organization}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{speaker.bio}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-2">
                  <Link
                    href={speaker.socials.linkedin}
                    className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href={speaker.socials.twitter}
                    className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Twitter size={18} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href={speaker.socials.instagram}
                    className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Instagram size={18} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href={`mailto:${speaker.socials.email}`}
                    className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Want to Speak at Our Summit?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for inspiring speakers to share their expertise and insights with our community.
          </p>
          <Link href="/apply-speaker">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium">
              Apply to Be a Speaker
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
