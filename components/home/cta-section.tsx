"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimate } from "@/components/scroll-animate"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 to-purple-900 py-16 md:py-24">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500 opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-purple-400 opacity-15 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <ScrollAnimate>
          <h2 className="font-serif text-3xl font-bold text-purple-50 md:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-purple-200">
            Join thousands of mothers who trust Pregaviag for a healthier, more
            informed pregnancy experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-purple-50 text-purple-900 shadow-lg hover:bg-purple-100"
            >
              <Link href="/weekly-guide">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-300 bg-transparent text-purple-50 hover:bg-purple-800 hover:text-purple-50"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  )
}
