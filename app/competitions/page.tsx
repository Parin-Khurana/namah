"use client"

import React from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Briefcase, Heart, Lightbulb, Users, Scale, Trophy, Palette, Code, Award, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function CompetitionsPage() {
  const competitions = [
    {
      id: "business-plans",
      title: "Business Plans",
      icon: <Briefcase className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      description:
        "Develop comprehensive business strategies and pitch your innovative ideas to a panel of industry experts and investors.",
      format: "Team-based (2-4 members)",
      eligibility: "Open to all participants aged 18-30",
      prizes: [
        "₹3,50,000 for 1st Place",
        "₹1,75,000 for 2nd Place",
        "₹70,000 for 3rd Place",
        "Mentorship opportunities",
      ],
      timeline: [
        "Submission Deadline: July 15, 2025",
        "Preliminary Round: August 16, 2025",
        "Final Round: August 17, 2025",
      ],
      criteria: [
        "Innovation and originality",
        "Market potential and scalability",
        "Financial viability",
        "Implementation strategy",
        "Presentation quality",
      ],
    },
    {
      id: "social-impact",
      title: "Social Impact Projects",
      icon: <Heart className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      description:
        "Create solutions that address pressing social and environmental challenges, demonstrating how innovation can drive positive change.",
      format: "Team-based (2-5 members)",
      eligibility: "Open to all participants aged 16-30",
      prizes: ["₹2,80,000 for 1st Place", "₹1,40,000 for 2nd Place", "₹70,000 for 3rd Place", "Implementation support"],
      timeline: [
        "Submission Deadline: July 20, 2025",
        "Preliminary Round: August 16, 2025",
        "Final Round: August 17, 2025",
      ],
      criteria: [
        "Social impact potential",
        "Innovation and creativity",
        "Feasibility and sustainability",
        "Scalability",
        "Presentation quality",
      ],
    },
    {
      id: "startup-pitches",
      title: "Startup Pitches",
      icon: <Lightbulb className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      description:
        "Present your startup to potential investors and industry experts in a high-stakes pitch competition.",
      format: "Individual or team-based (up to 3 members)",
      eligibility: "Early-stage startups (pre-Series A)",
      prizes: ["₹7,00,000 investment opportunity", "Incubator placement", "Mentorship package", "Media exposure"],
      timeline: [
        "Application Deadline: July 10, 2025",
        "Selection Announcement: July 25, 2025",
        "Pitch Competition: August 17, 2025",
      ],
      criteria: [
        "Business model viability",
        "Market opportunity",
        "Team capability",
        "Traction and progress",
        "Pitch delivery",
      ],
    },
    {
      id: "mun-simulation",
      title: "MUN Simulation",
      icon: <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      description:
        "Engage in diplomatic negotiations and international policy discussions in a simulated United Nations environment.",
      format: "Individual participation in committees",
      eligibility: "Open to all participants aged 16-30",
      prizes: ["Best Delegate Awards", "Outstanding Delegation", "Best Position Paper", "Diplomacy Award"],
      timeline: [
        "Registration Deadline: July 30, 2025",
        "Position Papers Due: August 10, 2025",
        "Simulation: August 15-17, 2025",
      ],
      criteria: [
        "Diplomatic skills",
        "Negotiation ability",
        "Public speaking",
        "Resolution drafting",
        "Adherence to country policy",
      ],
    },
    {
      id: "moot-court",
      title: "Moot Court",
      icon: <Scale className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      description:
        "Argue legal cases and develop your advocacy skills in a simulated court environment judged by legal professionals.",
      format: "Team-based (2 members)",
      eligibility: "Law students and young legal professionals",
      prizes: ["Best Team Award", "Best Oralist", "Best Memorial", "Networking with legal professionals"],
      timeline: [
        "Registration Deadline: July 15, 2025",
        "Memorials Due: August 5, 2025",
        "Oral Rounds: August 16-17, 2025",
      ],
      criteria: [
        "Legal reasoning",
        "Oral advocacy skills",
        "Knowledge of law",
        "Response to questions",
        "Professional demeanor",
      ],
    },
    {
      id: "leadership-challenges",
      title: "Leadership Challenges",
      icon: <Trophy className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      description:
        "Test your leadership abilities through strategic problem-solving scenarios and team management exercises.",
      format: "Individual participation",
      eligibility: "Open to all participants aged 18-30",
      prizes: ["Leadership Excellence Award", "Executive Mentorship", "Leadership Development Program Scholarship"],
      timeline: [
        "Registration Deadline: July 25, 2025",
        "Preliminary Challenges: August 15, 2025",
        "Final Challenge: August 17, 2025",
      ],
      criteria: [
        "Decision-making ability",
        "Team management",
        "Communication skills",
        "Adaptability",
        "Strategic thinking",
      ],
    },
    {
      id: "design-competitions",
      title: "Design Competitions",
      icon: <Palette className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      description: "Showcase your creative talents in graphic design, UX/UI, and product design challenges.",
      format: "Individual or team-based (up to 2 members)",
      eligibility: "Open to all designers and creative professionals",
      prizes: ["₹2,10,000 for 1st Place", "₹1,05,000 for 2nd Place", "₹35,000 for 3rd Place", "Portfolio showcase"],
      timeline: [
        "Brief Release: July 1, 2025",
        "Submission Deadline: August 10, 2025",
        "Exhibition and Judging: August 16-17, 2025",
      ],
      criteria: [
        "Creativity and originality",
        "Technical execution",
        "User experience",
        "Adherence to brief",
        "Presentation quality",
      ],
    },
    {
      id: "hackathons",
      title: "Hackathons",
      icon: <Code className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      description:
        "Collaborate to develop innovative tech solutions to real-world problems in an intensive coding competition.",
      format: "Team-based (3-5 members)",
      eligibility: "Open to programmers, developers, and tech enthusiasts",
      prizes: [
        "₹4,90,000 for 1st Place",
        "₹2,10,000 for 2nd Place",
        "₹70,000 for 3rd Place",
        "Tech company internships",
      ],
      timeline: [
        "Registration Deadline: July 20, 2025",
        "Problem Statement Release: August 15, 2025",
        "24-Hour Hackathon: August 16-17, 2025",
      ],
      criteria: ["Technical innovation", "Functionality", "User experience", "Business potential", "Presentation"],
    },
  ]

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
            Competition Categories
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase your talents and compete in these exciting categories at NGVS'25
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
          <Tabs defaultValue={competitions[0].id} className="w-full">
            <div className="overflow-x-auto pb-4">
              <TabsList className="inline-flex min-w-max">
                {competitions.map((competition) => (
                  <TabsTrigger key={competition.id} value={competition.id} className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      {React.cloneElement(competition.icon, { className: "h-4 w-4" })}
                      <span>{competition.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {competitions.map((competition) => (
              <TabsContent key={competition.id} value={competition.id} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="md:w-2/3 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        {competition.icon}
                      </div>
                      <h2 className="text-2xl font-bold">{competition.title}</h2>
                    </div>

                    <p className="text-lg">{competition.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          Format & Eligibility
                        </h3>
                        <p className="text-muted-foreground">
                          <strong>Format:</strong> {competition.format}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Eligibility:</strong> {competition.eligibility}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          Timeline
                        </h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {competition.timeline.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Clock className="h-4 w-4 mt-0.5 text-blue-600 dark:text-blue-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 space-y-3">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        Prizes
                      </h3>
                      <ul className="space-y-1 text-sm">
                        {competition.prizes.map((prize, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
                            {prize}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
                      <h3 className="text-lg font-semibold">Judging Criteria</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {competition.criteria.map((criterion, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
                            {criterion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Link href="/register">
                    <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
                      Register for this Competition
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.div>
    </div>
  )
}
