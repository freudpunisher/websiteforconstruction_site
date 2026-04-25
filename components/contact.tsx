"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Construction Way", "Metro City, MC 12345"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["(555) 123-4567", "(555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@buildcraft.com", "projects@buildcraft.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon - Fri: 7AM - 6PM", "Sat: 8AM - 2PM"],
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">
            Start Your Project Today
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Ready to bring your construction project to life? Contact us for a free
            consultation and let&apos;s discuss how we can help.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Thank You!</h3>
                    <p className="mt-2 text-muted-foreground">
                      We&apos;ve received your message and will be in touch shortly.
                    </p>
                    <Button className="mt-6" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(555) 000-0000" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial">Commercial Construction</SelectItem>
                          <SelectItem value="residential">Residential Construction</SelectItem>
                          <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                          <SelectItem value="interior">Interior Finishing</SelectItem>
                          <SelectItem value="design-build">Design-Build</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Submit Request"}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    {info.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
