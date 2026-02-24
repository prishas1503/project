"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-background to-purple-100">
      {/* Decorative wave SVG */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1360,60 1440,80 L1440,120 L0,120Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:py-24 lg:flex-row lg:gap-12 lg:px-8 lg:py-32">
        {/* Text */}
        <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <CalendarDays className="h-4 w-4" />
            Your Pregnancy Journey Starts Here
          </span>

          <h1 className="animate-fade-in-up animation-delay-100 max-w-xl text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Nurturing Every Step of{" "}
            <span className="text-primary">Motherhood</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
            From your first trimester to the joyful arrival, Pregaviag is your
            trusted guide with expert tips, weekly insights, and a caring
            community.
          </p>

          <div className="animate-fade-in-up animation-delay-300 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30">
              <Link href="/weekly-guide">
                Explore Weekly Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-secondary">
              <Link href="/due-date">Calculate Due Date</Link>
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="animate-fade-in-up animation-delay-400 relative flex-1">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-200 to-purple-400 opacity-20 blur-2xl" />
            <Image
              src="/images/hero-mother.jpg"
              alt="Illustration of a mother and baby in soft purple tones"
              width={600}
              height={600}
              priority
              className="relative rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
