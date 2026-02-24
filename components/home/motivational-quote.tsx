"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"

const quotes = [
  { text: "A baby is something you carry inside you for nine months, in your arms for three years, and in your heart until the day you die.", author: "Mary Mason" },
  { text: "Making the decision to have a child is momentous. It is to decide forever to have your heart go walking around outside your body.", author: "Elizabeth Stone" },
  { text: "Pregnancy is a process that invites you to surrender to the unseen force behind all life.", author: "Judy Ford" },
  { text: "There is no way to be a perfect mother, and a million ways to be a good one.", author: "Jill Churchill" },
  { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
  { text: "The moment a child is born, the mother is also born. She never existed before.", author: "Osho" },
  { text: "A mother's joy begins when new life is stirring inside and a tiny heartbeat is heard for the very first time.", author: "Unknown" },
  { text: "Birth is not only about making babies. Birth is about making mothers: strong, competent, capable mothers.", author: "Barbara Katz Rothman" },
  { text: "Giving birth and being born brings us into the essence of creation, where the human spirit is courageous and bold.", author: "Harriette Hartigan" },
  { text: "Being pregnant means every day is another day closer to meeting the love of my life.", author: "Unknown" },
]

export function MotivationalQuote() {
  const [quote, setQuote] = useState(quotes[0])
  const [fadeKey, setFadeKey] = useState(0)

  useEffect(() => {
    const today = new Date()
    const dayIndex = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % quotes.length
    setQuote(quotes[dayIndex])
    setFadeKey((k) => k + 1)
  }, [])

  return (
    <section className="bg-secondary px-4 py-12 md:py-16">
      <ScrollAnimate>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-200 px-4 py-1.5 text-sm font-medium text-purple-900">
            <Quote className="h-4 w-4" />
            Daily Inspiration
          </div>
          <div key={fadeKey} className="animate-fade-in">
            <blockquote className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              {`"${quote.text}"`}
            </blockquote>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              {"--- "}{quote.author}
            </p>
          </div>
        </div>
      </ScrollAnimate>
    </section>
  )
}
