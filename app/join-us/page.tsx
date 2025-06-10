"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { getSupabaseClient } from "@/lib/supabase"

export default function JoinUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    participationType: "delegate",
    committeeInterests: [] as string[],
    message: "",
    termsAccepted: false,
  })
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCommitteeInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      committeeInterests: checked
        ? [...prev.committeeInterests, interest]
        : prev.committeeInterests.filter((item) => item !== interest),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const supabase = getSupabaseClient()

      const { error } = await supabase.from("membership_applications").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          participation_type: formData.participationType,
          committee_interests: formData.committeeInterests,
          message: formData.message || null,
          terms_accepted: formData.termsAccepted,
          status: "pending",
        },
      ])

      if (error) {
        console.error("Supabase error:", error)
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your application. Please try again.",
          variant: "destructive",
        })
      } else {
        setIsSubmitted(true)
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest in joining NGVS '25. We'll contact you soon!",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="container py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Application Submitted Successfully!</h1>
          <p className="text-muted-foreground">
            Thank you for your interest in joining NAMAH MUN. We have received your membership application and will
            review it shortly. You'll hear from us within 3-5 business days.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>What happens next:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Our team will review your application</li>
              <li>We'll contact you via email for any additional information</li>
              <li>You'll receive confirmation of your membership status</li>
              <li>Welcome package and next steps will be shared</li>
            </ul>
          </div>
          <Button onClick={() => (window.location.href = "/")} className="mt-6">
            Return to Homepage
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join NAMAH MUN</h1>
          <p className="text-muted-foreground">
            Become a delegate, chair, or organizer in our Model United Nations community
          </p>
        </div>

        <div className="space-y-4 border rounded-lg p-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Membership Application</h2>
            <p className="text-sm text-muted-foreground">
              Please fill out the form below to apply for membership. We'll contact you shortly after receiving your
              application.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name *</Label>
                <Input
                  id="first-name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name *</Label>
                <Input
                  id="last-name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>

            {/* <div className="space-y-2">
              <Label>Participation Type *</Label>
              <RadioGroup
                value={formData.participationType}
                onValueChange={(value) => handleInputChange("participationType", value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="delegate" id="delegate" />
                  <Label htmlFor="delegate">Delegate (Conference fees apply)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="chair" id="chair" />
                  <Label htmlFor="chair">Committee Chair/Director (Application required)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="organizer" id="organizer" />
                  <Label htmlFor="organizer">Conference Organizer (Volunteer position)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="trainer" id="trainer" />
                  <Label htmlFor="trainer">MUN Trainer (Experience required)</Label>
                </div>
              </RadioGroup>
            </div> */}

            {/* <div className="space-y-2">
              <Label>Committee Interests (select all that apply)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Security Council",
                  "General Assembly",
                  "Human Rights",
                  "Economic & Social",
                  "Environment",
                  "Crisis Committee",
                  "International Court of Justice",
                  "Historical Committees",
                ].map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                      checked={formData.committeeInterests.includes(interest)}
                      onCheckedChange={(checked) => handleCommitteeInterestChange(interest, checked as boolean)}
                    />
                    <Label htmlFor={interest.toLowerCase().replace(/[^a-z0-9]/g, "-")}>{interest}</Label>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="space-y-2">
              <Label htmlFor="message">Why do you want to join our organization?</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us about your interest in Model United Nations and what you hope to achieve..."
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                required
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a href="/terms" className="underline hover:text-primary">
                  terms and conditions
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
