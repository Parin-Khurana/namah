"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { FileUpload } from "@/components/file-upload"
import { uploadFileToBlob } from "@/lib/file-upload"
import { StorageInfo } from "@/components/storage-info"
import { SimpleLogo } from "@/components/simple-logo"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [teamSize, setTeamSize] = useState("A")
  const [registrationType, setRegistrationType] = useState("participant")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  // Form data state
  const [formData, setFormData] = useState({
    registration_type: "participant",
    team_name: "",
    team_size: 1,
    member_name: "",
    email: "",
    age: "",
    nationality: "",
    mobile: "",
    institution: "",
    grade: "",
    address: "",
    reference_code: "",
    instagram_url: "",
    resume_file_name: "",
    resume_file_path: "",
    resume_file_size: 0,
  })

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  // Handle radio group changes
  const handleTeamSizeChange = (value) => {
    setTeamSize(value)
    const sizeMap = { A: 1, B: 2, C: 3, D: 4, E: 5 }
    setFormData({
      ...formData,
      team_size: sizeMap[value],
    })
  }

  const handleRegistrationTypeChange = (value) => {
    setRegistrationType(value)
    setFormData({
      ...formData,
      registration_type: value,
    })
  }

  // Handle file upload
  const handleFileUpload = async (file: File) => {
    try {
      const result = await uploadFileToBlob(file)

      if (result.success && result.url) {
        setFormData({
          ...formData,
          resume_file_name: result.fileName || file.name,
          resume_file_path: result.url,
          resume_file_size: result.fileSize || file.size,
        })

        toast({
          title: "Resume uploaded successfully!",
          description: "Your resume has been securely uploaded and will be included with your registration.",
        })

        return result
      } else {
        throw new Error(result.error || "Upload failed")
      }
    } catch (error) {
      console.error("File upload error:", error)
      return {
        success: false,
        error: error instanceof Error ? error.message : "Upload failed",
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Prepare data for database insertion
      const registrationData = {
        ...formData,
        resume_uploaded_at: formData.resume_file_path ? new Date().toISOString() : null,
      }

      // Insert data into Supabase
      const { data, error } = await supabase.from("registrations").insert([registrationData]).select()

      if (error) {
        throw error
      }

      // Show success message
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering for the summit. We've sent a confirmation email with further details.",
      })

      setFormSubmitted(true)
    } catch (error) {
      console.error("Error submitting registration:", error)
      setError("There was an error submitting your registration. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const teamSizeOptions = [
    { value: "A", label: "1" },
    { value: "B", label: "2" },
    { value: "C", label: "3" },
    { value: "D", label: "4" },
    { value: "E", label: "5" },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600">
            Register for the Summit
          </h1>
          <p className="text-muted-foreground">
            Join us at the Namah Global Visionaries Summit and be part of the change
          </p>
          <p className="text-sm text-blue-600 font-medium mt-2">Delhi • 3-Day Event</p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md">
            <SimpleLogo />
          </div>
        </div>

        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center space-y-4"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-400">Registration Successful!</h2>
            <p className="text-green-700 dark:text-green-300">
              Thank you for registering for the summit. We've sent a confirmation email with further details.
            </p>
            {formData.resume_file_path && (
              <p className="text-sm text-green-600 dark:text-green-400">
                ✓ Resume uploaded successfully: {formData.resume_file_name}
              </p>
            )}
            <Button
              onClick={() => {
                setFormSubmitted(false)
                setStep(1)
                setFormData({
                  registration_type: "participant",
                  team_name: "",
                  team_size: 1,
                  member_name: "",
                  email: "",
                  age: "",
                  nationality: "",
                  mobile: "",
                  institution: "",
                  grade: "",
                  address: "",
                  reference_code: "",
                  instagram_url: "",
                  resume_file_name: "",
                  resume_file_path: "",
                  resume_file_size: 0,
                })
              }}
              className="mt-4 bg-blue-600 hover:bg-blue-700"
            >
              Register Another Person
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Registration Form</h2>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Kindly Note: Since this is a team competition, every participant of the team shall fill up the form
                  individually. Kindly mention your team name so that team members can be identified.
                </p>
                <div className="text-sm font-medium">Step {step} of 2</div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 2) * 100}%` }}
                ></div>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <Label>Registration Type</Label>
                    <RadioGroup
                      defaultValue={registrationType}
                      onValueChange={handleRegistrationTypeChange}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-blue-600 transition-colors">
                        <RadioGroupItem value="participant" id="participant" />
                        <Label htmlFor="participant" className="cursor-pointer">
                          Participant
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-blue-600 transition-colors">
                        <RadioGroupItem value="team-member" id="team-member" />
                        <Label htmlFor="team-member" className="cursor-pointer">
                          Team Member
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-blue-600 transition-colors">
                        <RadioGroupItem value="speaker" id="speaker" />
                        <Label htmlFor="speaker" className="cursor-pointer">
                          Speaker
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-blue-600 transition-colors">
                        <RadioGroupItem value="sponsor" id="sponsor" />
                        <Label htmlFor="sponsor" className="cursor-pointer">
                          Sponsor
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="team_name">NAME OF TEAM</Label>
                    <Input id="team_name" value={formData.team_name} onChange={handleInputChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label>NUMBER OF TEAM MEMBERS</Label>
                    <RadioGroup
                      defaultValue={teamSize}
                      onValueChange={handleTeamSizeChange}
                      className="grid grid-cols-5 gap-4"
                    >
                      {teamSizeOptions.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-blue-600 transition-colors"
                        >
                          <RadioGroupItem value={option.value} id={`team-size-${option.value}`} />
                          <Label htmlFor={`team-size-${option.value}`} className="cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="member_name">NAME OF TEAM MEMBER REGISTERING</Label>
                    <Input id="member_name" value={formData.member_name} onChange={handleInputChange} required />
                  </div>

                  <div className="flex justify-end">
                    <Button type="button" onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-700">
                      Next
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email">EMAIL ID</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleInputChange} required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">AGE</Label>
                      <Input id="age" type="number" value={formData.age} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">NATIONALITY</Label>
                      <Input id="nationality" value={formData.nationality} onChange={handleInputChange} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile">MOBILE NUMBER WITH COUNTRY CODE (Whatsapp activated)</Label>
                    <Input id="mobile" type="tel" value={formData.mobile} onChange={handleInputChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institution">NAME OF INSTITUTION CURRENTLY ENROLLED IN (SCHOOL/University)</Label>
                    <Input id="institution" value={formData.institution} onChange={handleInputChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade">GRADE IN SCHOOL/YEAR IN UNIVERSITY</Label>
                    <Input id="grade" value={formData.grade} onChange={handleInputChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">ADDRESS</Label>
                    <Textarea id="address" rows={3} value={formData.address} onChange={handleInputChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reference_code">REFERENCE CODE</Label>
                    <Input id="reference_code" value={formData.reference_code} onChange={handleInputChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instagram_url">INSTAGRAM PROFILE URL (if any)</Label>
                    <Input id="instagram_url" type="url" value={formData.instagram_url} onChange={handleInputChange} />
                  </div>

                  <div className="space-y-2">
                    <Label>UPLOAD YOUR RESUME/CV HERE</Label>
                    <FileUpload
                      onFileUpload={handleFileUpload}
                      acceptedTypes={[".pdf", ".doc", ".docx"]}
                      maxSize={5}
                      disabled={isSubmitting}
                    />
                    <p className="text-xs text-muted-foreground">
                      Your resume will be securely stored and accessible to our review team.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="/terms" className="underline text-blue-600 hover:text-blue-700">
                        terms and conditions
                      </a>
                    </Label>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" onClick={() => setStep(1)} variant="outline">
                      Back
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Registration"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        )}

        <StorageInfo />
      </div>
    </div>
  )
}
