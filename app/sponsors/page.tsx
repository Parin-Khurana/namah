"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import Link from "next/link"

export default function SponsorsPage() {
  const sponsorshipLevels = [
    {
      id: "platinum",
      title: "Platinum Partner",
      price: "₹18,00,000",
      description: "Premium visibility and maximum engagement opportunities",
      benefits: [
        "Exclusive branding as 'Presenting Partner' of NGVS'25",
        "Prime logo placement on all summit materials and website",
        "Dedicated exhibition space (10x10m) in premium location",
        "VIP access for 10 representatives",
        "30-minute keynote speaking opportunity",
        "Sponsored workshop or panel session",
        "Full-page advertisement in summit program",
        "Featured in all press releases and media communications",
        "Access to attendee database (with consent)",
        "Social media promotion (10 dedicated posts)",
        "Logo on main stage backdrop and digital screens",
        "Branded merchandise in attendee welcome packs",
      ],
    },
    {
      id: "gold",
      title: "Gold Partner",
      price: "₹10,00,000",
      description: "High visibility and significant engagement opportunities",
      benefits: [
        "Premium logo placement on summit materials and website",
        "Exhibition space (6x6m) in prominent location",
        "VIP access for 6 representatives",
        "15-minute speaking opportunity",
        "Participation in panel discussion",
        "Half-page advertisement in summit program",
        "Mention in press releases",
        "Social media promotion (6 dedicated posts)",
        "Logo on digital screens throughout venue",
        "Branded item in attendee welcome packs",
      ],
    },
    {
      id: "silver",
      title: "Silver Partner",
      price: "₹7,50,000",
      description: "Strong visibility and engagement opportunities",
      benefits: [
        "Logo placement on summit materials and website",
        "Exhibition space (3x3m)",
        "Access for 4 representatives",
        "Participation in panel discussion",
        "Quarter-page advertisement in summit program",
        "Social media promotion (4 dedicated posts)",
        "Logo on digital screens throughout venue",
      ],
    },
    {
      id: "bronze",
      title: "Bronze Partner",
      price: "₹3,50,000",
      description: "Good visibility and networking opportunities",
      benefits: [
        "Logo placement on website and select materials",
        "Small exhibition space (table and roll-up banner)",
        "Access for 2 representatives",
        "Logo in summit program",
        "Social media promotion (2 dedicated posts)",
      ],
    },
    {
      id: "startup",
      title: "Startup Supporter",
      price: "₹1,75,000",
      description: "Designed for startups and small businesses",
      benefits: [
        "Logo placement on website",
        "Shared exhibition space",
        "Access for 2 representatives",
        "Mention in summit program",
        "Social media mention",
      ],
    },
  ]

  const specialPackages = [
    {
      title: "Innovation Lab Sponsor",
      price: "₹8,50,000",
      description: "Exclusive branding of the Innovation Lab where workshops and hackathons take place",
    },
    {
      title: "Networking Lounge Sponsor",
      price: "₹7,00,000",
      description: "Brand the main networking area where attendees connect throughout the summit",
    },
    {
      title: "Welcome Reception Sponsor",
      price: "₹5,50,000",
      description: "Host the opening night reception with exclusive branding and speaking opportunity",
    },
    {
      title: "Competition Category Sponsor",
      price: "₹5,00,000",
      description: "Sponsor a specific competition category with naming rights and judging opportunity",
    },
    {
      title: "Tech Support Sponsor",
      price: "₹4,00,000",
      description: "Provide and brand all technical support for the summit, including Wi-Fi access",
    },
    {
      title: "Sustainability Partner",
      price: "₹3,50,000",
      description: "Support and brand all eco-friendly initiatives at the summit",
    },
  ]

  const currentSponsors = [
    {
      name: "Global Innovations Inc.",
      tier: "Platinum Partner",
      logo: "/placeholder.svg?height=100&width=250",
      website: "#",
    },
    {
      name: "TechVentures",
      tier: "Gold Partner",
      logo: "/placeholder.svg?height=100&width=250",
      website: "#",
    },
    {
      name: "Future Finance",
      tier: "Gold Partner",
      logo: "/placeholder.svg?height=100&width=250",
      website: "#",
    },
    {
      name: "EcoSolutions",
      tier: "Silver Partner",
      logo: "/placeholder.svg?height=100&width=250",
      website: "#",
    },
    {
      name: "Digital Dynamics",
      tier: "Silver Partner",
      logo: "/placeholder.svg?height=100&width=250",
      website: "#",
    },
    {
      name: "NextGen Media",
      tier: "Silver Partner",
      logo: "/placeholder.svg?height=100&width=250",
      website: "#",
    },
    {
      name: "Creative Collective",
      tier: "Bronze Partner",
      logo: "/placeholder.svg?height=100&width=250",
      website: "#",
    },
    {
      name: "Urban Innovators",
      tier: "Bronze Partner",
      logo: "/placeholder.svg?height=100&width=250",
      website: "#",
    },
    {
      name: "Smart Solutions",
      tier: "Startup Supporter",
      logo: "/placeholder.svg?height=100&width=250",
      website: "#",
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600">
            Partner with NGVS'25
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sponsor the Namah Global Visionaries Summit and connect your brand with the next generation of business
            leaders and changemakers
          </p>
        </div>

        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="packages">Sponsorship Packages</TabsTrigger>
            <TabsTrigger value="special">Special Opportunities</TabsTrigger>
            <TabsTrigger value="current">Current Sponsors</TabsTrigger>
          </TabsList>

          <TabsContent value="packages" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsorshipLevels.map((level, index) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl overflow-hidden border shadow-md ${
                    level.id === "platinum"
                      ? "border-blue-300 dark:border-blue-700 lg:col-span-3"
                      : level.id === "gold"
                        ? "border-yellow-300 dark:border-yellow-700"
                        : level.id === "silver"
                          ? "border-gray-300 dark:border-gray-600"
                          : level.id === "bronze"
                            ? "border-amber-300 dark:border-amber-700"
                            : "border-blue-300 dark:border-blue-700"
                  }`}
                >
                  <div
                    className={`p-6 ${
                      level.id === "platinum"
                        ? "bg-blue-50 dark:bg-blue-900/30"
                        : level.id === "gold"
                          ? "bg-yellow-50 dark:bg-yellow-900/30"
                          : level.id === "silver"
                            ? "bg-gray-50 dark:bg-gray-800"
                            : level.id === "bronze"
                              ? "bg-amber-50 dark:bg-amber-900/30"
                              : "bg-blue-50 dark:bg-blue-900/30"
                    }`}
                  >
                    <h3 className="text-xl font-bold">{level.title}</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">{level.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{level.description}</p>
                  </div>

                  <div className="p-6 bg-white dark:bg-gray-800">
                    <ul className="space-y-3">
                      {level.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check
                            className={`h-5 w-5 mt-0.5 ${
                              level.id === "platinum"
                                ? "text-blue-600 dark:text-blue-400"
                                : level.id === "gold"
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : level.id === "silver"
                                    ? "text-gray-600 dark:text-gray-400"
                                    : level.id === "bronze"
                                      ? "text-amber-600 dark:text-amber-400"
                                      : "text-blue-600 dark:text-blue-400"
                            }`}
                          />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Link href="/become-sponsor">
                        <Button
                          className={`w-full ${
                            level.id === "platinum"
                              ? "bg-blue-600 hover:bg-blue-700"
                              : level.id === "gold"
                                ? "bg-yellow-600 hover:bg-yellow-700"
                                : level.id === "silver"
                                  ? "bg-gray-600 hover:bg-gray-700"
                                  : level.id === "bronze"
                                    ? "bg-amber-600 hover:bg-amber-700"
                                    : "bg-blue-600 hover:bg-blue-700"
                          }`}
                        >
                          Become a {level.title}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="special" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden border shadow-md"
                >
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/30">
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-2xl font-bold">{pkg.price}</span>
                    </div>
                  </div>

                  <div className="p-6 bg-white dark:bg-gray-800">
                    <p className="text-muted-foreground">{pkg.description}</p>

                    <div className="mt-6">
                      <Link href="/become-sponsor">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Inquire About This Package</Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="current" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Our Valued Partners</h2>
              <p className="text-muted-foreground">
                We're proud to partner with these forward-thinking organizations for NGVS'25
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentSponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex flex-col items-center p-6 rounded-xl border bg-white dark:bg-gray-800 hover:shadow-md transition-shadow"
                >
                  <div className="h-24 flex items-center justify-center mb-4">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{sponsor.name}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{sponsor.tier}</p>
                </motion.a>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
