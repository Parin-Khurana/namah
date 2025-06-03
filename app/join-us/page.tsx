import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function JoinUsPage() {
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

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" />
            </div>

            <div className="space-y-2">
              <Label>Participation Type</Label>
              <RadioGroup defaultValue="delegate">
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
            </div>

            <div className="space-y-2">
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
                    <Checkbox id={interest.toLowerCase().replace(/[^a-z0-9]/g, "-")} />
                    <Label htmlFor={interest.toLowerCase().replace(/[^a-z0-9]/g, "-")}>{interest}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Why do you want to join our organization?</Label>
              <Textarea id="message" rows={4} />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a href="/terms" className="underline">
                  terms and conditions
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
