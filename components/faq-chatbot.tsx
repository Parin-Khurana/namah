"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, ChevronDown, ChevronUp } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
}

const faqData = [
  {
    question: "When and where is the summit taking place?",
    answer:
      "The Namah Global Visionaries Summit will take place in Delhi. The exact venue details will be announced closer to the event date.",
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

export function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm the Namah Summit assistant. How can I help you today?", sender: "bot" },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showSuggestions, setShowSuggestions] = useState(true)

  const suggestedQuestions = [
    "When is the event?",
    "Where is NGVS'25 held?",
    "How do I register?",
    "What competitions are there?",
  ]

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    const userMessage: Message = { id: Date.now(), text: input, sender: "user" }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setShowSuggestions(false)

    // Find matching FAQ or provide default response
    setTimeout(() => {
      const lowerInput = input.toLowerCase()
      const matchingFaq = faqData.find(
        (faq) =>
          faq.question.toLowerCase().includes(lowerInput) ||
          lowerInput.includes(faq.question.toLowerCase().split(" ").slice(1, 3).join(" ")),
      )

      const botResponse: Message = {
        id: Date.now() + 1,
        text: matchingFaq
          ? matchingFaq.answer
          : "I don't have specific information about that. Please check our website or contact us at connect.namahgroup@gmail.com for more details.",
        sender: "bot",
      }

      setMessages((prev) => [...prev, botResponse])
    }, 600)
  }

  const handleSuggestedQuestion = (question: string) => {
    // Add user message
    const userMessage: Message = { id: Date.now(), text: question, sender: "user" }
    setMessages((prev) => [...prev, userMessage])
    setShowSuggestions(false)

    // Find matching FAQ or provide default response
    setTimeout(() => {
      const lowerInput = question.toLowerCase()
      const matchingFaq = faqData.find(
        (faq) =>
          faq.question.toLowerCase().includes(lowerInput) ||
          lowerInput.includes(faq.question.toLowerCase().split(" ").slice(1, 3).join(" ")),
      )

      const botResponse: Message = {
        id: Date.now() + 1,
        text: matchingFaq
          ? matchingFaq.answer
          : "I don't have specific information about that. Please check our website or contact us at connect.namahgroup@gmail.com for more details.",
        sender: "bot",
      }

      setMessages((prev) => [...prev, botResponse])
    }, 600)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat assistant"
        >
          <MessageCircle size={24} />
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20, height: "auto" }}
            animate={{
              opacity: 1,
              y: 0,
              height: isMinimized ? "60px" : "400px",
            }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden border"
          >
            <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
              <h3 className="font-semibold">Summit Assistant</h3>
              <div className="flex items-center space-x-2">
                <button onClick={toggleMinimize} className="hover:bg-blue-700 rounded p-1">
                  {isMinimized ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 rounded p-1">
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="p-4 h-[280px] overflow-y-auto">
                  {messages.map((message) => (
                    <div key={message.id} className={`mb-3 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                      <div
                        className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                          message.sender === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}

                  {showSuggestions && messages.length === 1 && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-2">You can ask me about:</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestedQuestions.map((question, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestedQuestion(question)}
                            className="text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
                <div className="border-t p-3 flex">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question..."
                    className="flex-1 mr-2"
                  />
                  <Button onClick={handleSend} size="icon" className="bg-blue-600 hover:bg-blue-700">
                    <Send size={18} />
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
