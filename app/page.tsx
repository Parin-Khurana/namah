"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { HeroSection } from "@/components/hero-section"
import { EventStatistics } from "@/components/event-statistics"
import { EventHighlights } from "@/components/event-highlights"
import { PartnerBox } from "@/components/partner-box"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ChiefGuestSection } from "@/components/chief-guest-section"
import { PreviousSponsors } from "@/components/previous-sponsors"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Event Statistics */}
        <EventStatistics />

        {/* About Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl text-center">
                Welcome to the Namah Global Visionaries Summit
              </h2>

              <div className="space-y-6 text-lg">
                <p>
                  The Namah Global Visionaries Summit is a revolutionary platform where changemakers, entrepreneurs,
                  creators, and dreamers come together to build, lead, and disrupt the norm. This isn't just another
                  summit. It's an incubator for new ideas, collaborations, and impactful solutions that will shape the
                  future of business, entrepreneurship, and social change.
                </p>

                <p>
                  It's not just a space for discussions — our summit is a catalyst for action. With exclusive
                  competitions, inspiring speaker sessions, and unparalleled networking opportunities, we provide young
                  leaders and innovators with the resources to push boundaries, break barriers, and make a lasting
                  impact on the world.
                </p>
              </div>

              <div className="flex justify-center pt-6">
                <Link href="/register">
                  <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Box */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
          <div className="container px-4 md:px-6">
            <PartnerBox />
          </div>
        </section>

        {/* Event Highlights */}
        <EventHighlights />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Chief Guest Section */}
        <ChiefGuestSection />

        {/* Previous Sponsors */}
        <PreviousSponsors />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-900/10">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-8 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl">Ready to Join NGVS'25?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Be part of a global movement that's shaping the future of business and social change
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="px-8 rounded-full bg-blue-600 hover:bg-blue-700">
                    Register Now
                  </Button>
                </Link>
                <Link href="/join-us">
                  <Button size="lg" variant="outline" className="px-8 rounded-full">
                    Join Our Team
                  </Button>
                </Link>
                <Link href="/sponsors">
                  <Button size="lg" variant="outline" className="px-8 rounded-full">
                    Become a Sponsor
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
