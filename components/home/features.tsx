"use client"

import { Baby, Apple, Calculator, BookOpen, Heart, Users } from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"
import Link from "next/link"

const features = [
  {
    icon: Baby,
    title: "Week-by-Week Guide",
    description:
      "Follow your baby's development from Week 1 to 40 with expert insights and milestones.",
    href: "/weekly-guide",
  },
  {
    icon: Apple,
    title: "Nutrition & Wellness",
    description:
      "Expert diet tips, safe exercises, and mental wellness practices for every trimester.",
    href: "/nutrition",
  },
  {
    icon: Calculator,
    title: "Due Date Calculator",
    description:
      "Instantly calculate your estimated due date and track your pregnancy timeline.",
    href: "/due-date",
  },
  {
    icon: BookOpen,
    title: "Expert Resources",
    description:
      "Curated articles, FAQs, and trusted links from healthcare professionals.",
    href: "/resources",
  },
  {
    icon: Heart,
    title: "Self-Care Tips",
    description:
      "Daily self-care routines and mindfulness practices designed for expecting mothers.",
    href: "/nutrition",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Connect with other mothers and share your journey in a supportive environment.",
    href: "/community",
  },
]

export function Features() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollAnimate>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need for a{" "}
              <span className="text-primary">Healthy Pregnancy</span>
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Comprehensive tools and resources to support you and your baby at
              every step.
            </p>
          </div>
        </ScrollAnimate>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollAnimate key={feature.title} delay={i * 100}>
              <Link href={feature.href} className="group block h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  )
}
