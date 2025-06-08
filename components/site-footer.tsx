"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full border-t py-12 bg-muted/30 dark:bg-muted/10"
    >
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">NGVS'25</h3>
          <p className="text-sm text-muted-foreground">
            Namah Global Visionaries Summit 2025 — a revolutionary platform where changemakers, entrepreneurs, creators,
            and dreamers come together.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.instagram.com/namahgroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/speakers"
                className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                href="/schedule"
                className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                href="/podcast"
                className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Podcast
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Get Involved</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/register"
                className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/join-us"
                className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Join Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/sponsors"
                className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Become a Sponsor
              </Link>
            </li>
            <li>
              <Link
                href="/apply-speaker"
                className="text-sm text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Apply as Speaker
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={16} className="text-blue-600 dark:text-blue-400" />
              connect.namahgroup@gmail.com
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={16} className="text-blue-600 dark:text-blue-400" />
              +91 (123) 456-7890
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-blue-600 dark:text-blue-400 mt-1" />
              <span>Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Namah Global Visionaries Summit. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Powered by @TheNamahGroup</p>
        </div>
      </div>
    </motion.footer>
  )
}
