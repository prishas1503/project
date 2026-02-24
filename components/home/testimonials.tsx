"use client"

import { ScrollAnimate } from "@/components/scroll-animate"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    week: "Week 32",
    text: "Pregaviag has been my constant companion. The weekly guides made me feel so prepared and less anxious throughout my pregnancy.",
  },
  {
    name: "Emily R.",
    week: "Week 28",
    text: "The nutrition tips are incredible! I finally know exactly what to eat in each trimester. This site is a game-changer for first-time moms.",
  },
  {
    name: "Jessica L.",
    week: "Week 36",
    text: "I love the due date calculator and the week-by-week timeline. It makes the journey feel magical watching my baby grow each week.",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollAnimate>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Loved by <span className="text-primary">Expecting Mothers</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Hear from the amazing women who trust Pregaviag on their journey.
            </p>
          </div>
        </ScrollAnimate>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollAnimate key={t.name} delay={i * 150}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {`"${t.text}"`}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.week}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  )
}
