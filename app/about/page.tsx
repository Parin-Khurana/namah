"use client"

import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Dr. Sarah Williams",
    position: "Secretary-General",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Williams has over 15 years of experience in international relations and has served as Secretary-General for 5 years.",
  },
  {
    name: "Michael Chen",
    position: "Deputy Secretary-General",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael oversees conference operations and delegate affairs, bringing 8 years of MUN experience.",
  },
  {
    name: "Aisha Patel",
    position: "Director of Committees",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Aisha manages committee structures and ensures high-quality debate across all conferences.",
  },
  {
    name: "Carlos Rodriguez",
    position: "Head of Training",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Carlos leads our delegate training programs and workshops for schools and universities.",
  },
  {
    name: "Emma Johnson",
    position: "Director of Outreach",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Emma handles partnerships with schools, universities, and international organizations.",
  },
  {
    name: "David Kim",
    position: "Technology Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "David manages our digital platforms, registration systems, and conference technology.",
  },
]

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            About NAMAH MUN
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about our Model United Nations organization
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-center">Our Story</h2>
            <div className="bg-muted/50 dark:bg-muted/20 rounded-xl p-8 shadow-sm">
              <p className="leading-relaxed">
                NAMAH Model United Nations was founded with the vision of creating a platform for young diplomats to
                develop their skills in international relations, public speaking, and conflict resolution. Since our
                inception, we have organized numerous successful conferences and trained hundreds of delegates.
              </p>
              <p className="mt-4 leading-relaxed">
                What began as a small campus initiative has grown into one of the most respected MUN organizations,
                attracting participants from universities and schools worldwide. Our commitment to diplomatic excellence
                and creating authentic UN simulation experiences has established NAMAH MUN as a leader in the field.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-center">Our Mission</h2>
            <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-8 shadow-sm">
              <p className="leading-relaxed">
                Our mission is to foster diplomatic skills, global awareness, and leadership through Model United
                Nations. We believe in creating educational experiences that prepare the next generation of global
                leaders to address the world's most pressing challenges through diplomacy, negotiation, and
                international cooperation.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-background border shadow-sm"
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden bg-primary/10 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-primary font-medium">{member.position}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
