"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "When and where is the summit taking place?",
      answer:
        "The Namah Global Visionaries Summit will take place in Delhi. The exact venue details will be announced closer to the event date. Stay tuned to our website and social media channels for updates.",
    },
    {
      question: "How can I register for the summit?",
      answer:
        "You can register through our website by visiting the Registration page and filling out the form. Early registration is recommended as spaces are limited.",
    },
    {
      question: "Is this both a business and youth summit?",
      answer:
        "Yes! The Namah Global Visionaries Summit is uniquely positioned as both a business and youth summit - the first of its kind. We bring together young innovators with business leaders, creating a powerful platform for collaboration, learning, and growth across generations and sectors.",
    },
    {
      question: "What kind of competitions will be held at the summit?",
      answer:
        "The summit will feature a diverse range of competitions including business plan presentations, social impact projects, startup pitches, MUN simulations, and more. Each competition is designed to challenge participants and showcase their talents.",
    },
    {
      question: "Who can attend the summit?",
      answer:
        "The summit welcomes students, young professionals, entrepreneurs, business leaders, and anyone passionate about innovation, leadership, and social change. Specific eligibility criteria may apply for certain competitions.",
    },
    {
      question: "How can I become a sponsor?",
      answer:
        "You can explore our sponsorship packages on the Sponsors page and contact us through the form to discuss partnership opportunities. We offer various tiers of sponsorship with different benefits and visibility options to suit organizations of all sizes.",
    },
    {
      question: "Are there accommodation options for participants from outside Delhi?",
      answer:
        "Yes, we will provide information about recommended accommodation options near the venue. Registered participants will receive this information in their confirmation emails.",
    },
    {
      question: "How can I apply to be a speaker?",
      answer:
        "You can apply to be a speaker by filling out the application form on our 'Apply as Speaker' page. We're looking for experts in business innovation, social entrepreneurship, leadership, and related fields.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Find answers to common questions about NGVS'25
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions? Chat with our assistant using the chat button in the bottom right or{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              contact us directly
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
