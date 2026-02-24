"use client"

import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollAnimate } from "@/components/scroll-animate"
import { Confetti } from "./confetti"
import { cn } from "@/lib/utils"

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactClient() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [shakeField, setShakeField] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  function validate(): FormErrors {
    const errs: FormErrors = {}
    if (!name.trim()) errs.name = "Please enter your name."
    if (!email.trim()) {
      errs.email = "Please enter your email."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address."
    }
    if (!message.trim()) errs.message = "Please enter a message."
    else if (message.trim().length < 10) errs.message = "Message must be at least 10 characters."
    return errs
  }

  function triggerShake(field: string) {
    setShakeField(field)
    setTimeout(() => setShakeField(null), 500)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)

    if (Object.keys(errs).length > 0) {
      const firstError = Object.keys(errs)[0]
      triggerShake(firstError)
      return
    }

    // Success
    setSubmitted(true)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 4000)
  }

  function handleReset() {
    setName("")
    setEmail("")
    setMessage("")
    setErrors({})
    setSubmitted(false)
  }

  return (
    <div>
      {showConfetti && <Confetti />}

      {/* Header */}
      <section className="bg-gradient-to-b from-purple-50 to-background px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Mail className="h-4 w-4" />
            Get in Touch
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Have questions, feedback, or just want to say hello? We would love to
            hear from you.
          </p>
        </div>
      </section>

      <section className="bg-background px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-6 lg:w-1/3">
              <ScrollAnimate>
                <div className="flex flex-col gap-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@pregaviag.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+1 (555) 123-4567",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "San Francisco, CA",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-card-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimate>
            </div>

            {/* Form */}
            <div className="lg:flex-1">
              <ScrollAnimate delay={100}>
                {submitted ? (
                  <div className="animate-fade-in flex flex-col items-center gap-4 rounded-2xl border border-primary/30 bg-gradient-to-br from-purple-50 to-card p-8 text-center shadow-lg shadow-primary/10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Message Sent!
                    </h2>
                    <p className="max-w-sm leading-relaxed text-muted-foreground">
                      Thank you for reaching out, {name}! We will get back to you
                      as soon as possible.
                    </p>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="mt-2 border-primary/30 text-foreground hover:bg-secondary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8"
                    noValidate
                  >
                    <h2 className="mb-6 font-serif text-xl font-bold text-card-foreground">
                      Send Us a Message
                    </h2>

                    <div className="flex flex-col gap-5">
                      {/* Name */}
                      <div
                        className={cn(
                          "flex flex-col gap-1.5",
                          shakeField === "name" && "animate-shake"
                        )}
                      >
                        <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value)
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
                          }}
                          placeholder="Your full name"
                          className={cn(
                            "border-border bg-background text-foreground",
                            errors.name && "border-destructive"
                          )}
                        />
                        {errors.name && (
                          <p className="animate-fade-in text-xs text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div
                        className={cn(
                          "flex flex-col gap-1.5",
                          shakeField === "email" && "animate-shake"
                        )}
                      >
                        <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                          }}
                          placeholder="you@example.com"
                          className={cn(
                            "border-border bg-background text-foreground",
                            errors.email && "border-destructive"
                          )}
                        />
                        {errors.email && (
                          <p className="animate-fade-in text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div
                        className={cn(
                          "flex flex-col gap-1.5",
                          shakeField === "message" && "animate-shake"
                        )}
                      >
                        <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value)
                            if (errors.message)
                              setErrors((prev) => ({ ...prev, message: undefined }))
                          }}
                          placeholder="Tell us what's on your mind..."
                          rows={5}
                          className={cn(
                            "border-border bg-background text-foreground",
                            errors.message && "border-destructive"
                          )}
                        />
                        {errors.message && (
                          <p className="animate-fade-in text-xs text-destructive">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full shadow-lg shadow-primary/25"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
