"use client"

import { useState, useRef, useEffect } from "react"
import { weeklyData } from "@/lib/weekly-data"
import { WeekCard } from "./week-card"
import { Baby, Heart, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const trimesterLabels = ["First Trimester", "Second Trimester", "Third Trimester"]

export function WeeklyGuideClient() {
  const [selectedTrimester, setSelectedTrimester] = useState<1 | 2 | 3 | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = selectedTrimester
    ? weeklyData.filter((w) => w.trimester === selectedTrimester)
    : weeklyData

  useEffect(() => {
    function handleScroll() {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const totalHeight = el.scrollHeight - window.innerHeight
      const scrolled = -rect.top
      const pct = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100))
      setScrollProgress(pct)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Progress bar */}
      <div className="fixed left-0 right-0 top-[57px] z-40 h-1.5 bg-secondary">
        <div
          className="h-full rounded-r-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-purple-50 to-background px-4 pb-12 pt-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Baby className="h-4 w-4" />
            40 Weeks of Wonder
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Your Week-by-Week{" "}
            <span className="text-primary">Pregnancy Guide</span>
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Track your baby&apos;s development and get personalized wellness tips
            for each week of your pregnancy journey.
          </p>
        </div>

        {/* Trimester filter */}
        <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setSelectedTrimester(null)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              selectedTrimester === null
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-muted-foreground hover:bg-secondary"
            )}
          >
            All Weeks
          </button>
          {[1, 2, 3].map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTrimester(t as 1 | 2 | 3)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                selectedTrimester === t
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              )}
            >
              {trimesterLabels[t - 1]}
            </button>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="relative mx-auto max-w-5xl px-4 py-12 lg:px-8">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

        <div className="flex flex-col gap-8">
          {filtered.map((week, i) => (
            <WeekCard key={week.week} data={week} index={i} />
          ))}
        </div>

        {/* End marker */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="h-7 w-7" />
          </div>
          <p className="font-serif text-xl font-bold text-foreground">
            Welcome to the World!
          </p>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm">Congratulations on your journey</span>
          </div>
        </div>
      </section>
    </div>
  )
}
