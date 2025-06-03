import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "NAMAH Regional MUN",
      date: "October 15-17, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "University Conference Center",
      description:
        "A three-day conference focusing on regional issues with committees including UNSC, UNHRC, and WHO. Open to university and high school students.",
    },
    {
      id: 2,
      title: "NAMAH Youth MUN",
      date: "November 5-6, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "International School Auditorium",
      description:
        "A two-day conference designed for high school students with beginner-friendly committees including UNGA, ECOSOC, and UNESCO.",
    },
    {
      id: 3,
      title: "NAMAH Global Summit",
      date: "January 20-23, 2025",
      time: "8:30 AM - 6:00 PM",
      location: "Grand Convention Center",
      description:
        "Our flagship four-day conference with advanced committees including Security Council, G20, and Climate Action Summit. Open to experienced delegates.",
    },
    {
      id: 4,
      title: "NAMAH Crisis Committee",
      date: "March 15-16, 2025",
      time: "9:00 AM - 9:00 PM",
      location: "Diplomatic Academy",
      description:
        "An intensive two-day crisis committee simulation dealing with historical and hypothetical international crises. For advanced delegates only.",
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">MUN Conferences</h1>
          <p className="text-muted-foreground">Join us at our upcoming Model United Nations conferences</p>
        </div>

        <div className="grid gap-6">
          {events.map((event) => (
            <div key={event.id} id={`event-${event.id}`} className="border rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              <p>{event.description}</p>
              <Button>Register</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
