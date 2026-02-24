"use client"

import { useState } from "react"
import { format, addDays, differenceInWeeks, differenceInDays } from "date-fns"
import {
  CalendarDays,
  Baby,
  Heart,
  Clock,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollAnimate } from "@/components/scroll-animate"

interface DueDateResult {
  dueDate: Date
  currentWeek: number
  daysRemaining: number
  trimester: string
  progress: number
}

function calculateDueDate(lmpDate: Date): DueDateResult {
  const dueDate = addDays(lmpDate, 280) // 40 weeks
  const today = new Date()
  const currentWeek = Math.max(0, differenceInWeeks(today, lmpDate))
  const daysRemaining = Math.max(0, differenceInDays(dueDate, today))
  const totalDays = 280
  const daysPassed = totalDays - daysRemaining
  const progress = Math.min(100, Math.max(0, (daysPassed / totalDays) * 100))

  let trimester = "First Trimester"
  if (currentWeek >= 28) trimester = "Third Trimester"
  else if (currentWeek >= 13) trimester = "Second Trimester"

  return { dueDate, currentWeek, daysRemaining, trimester, progress }
}

export function DueDateClient() {
  const [dateStr, setDateStr] = useState("")
  const [result, setResult] = useState<DueDateResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  function handleCalculate() {
    if (!dateStr) return
    const lmp = new Date(dateStr)
    if (isNaN(lmp.getTime())) return

    const res = calculateDueDate(lmp)
    setResult(res)
    setShowResult(false)
    // Trigger animation
    requestAnimationFrame(() => {
      setShowResult(true)
    })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-purple-50 to-background px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <CalendarDays className="h-4 w-4" />
            Plan Your Journey
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Due Date <span className="text-primary">Calculator</span>
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Enter the first day of your last menstrual period to estimate when
            your little one will arrive.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-background px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl">
          <ScrollAnimate>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="lmp-date"
                    className="text-sm font-semibold text-card-foreground"
                  >
                    First Day of Your Last Period
                  </Label>
                  <Input
                    id="lmp-date"
                    type="date"
                    value={dateStr}
                    onChange={(e) => setDateStr(e.target.value)}
                    className="border-border bg-background text-foreground"
                  />
                  <p className="text-xs text-muted-foreground">
                    This is used to estimate your due date based on the standard
                    280-day (40-week) pregnancy cycle.
                  </p>
                </div>

                <Button
                  onClick={handleCalculate}
                  size="lg"
                  className="w-full shadow-lg shadow-primary/25"
                >
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Calculate Due Date
                </Button>
              </div>
            </div>
          </ScrollAnimate>

          {/* Result */}
          {result && showResult && (
            <div className="animate-fade-in-up mt-8">
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-purple-50 to-card p-6 shadow-lg md:p-8">
                {/* Due Date */}
                <div className="mb-6 text-center">
                  <div className="animate-pulse-soft mb-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-primary-foreground">
                    <Sparkles className="h-4 w-4" />
                    <span className="font-semibold">Estimated Due Date</span>
                  </div>
                  <p className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
                    {format(result.dueDate, "MMMM d, yyyy")}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Pregnancy Progress</span>
                    <span className="font-semibold text-primary">
                      {Math.round(result.progress)}%
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-purple-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-1000"
                      style={{ width: `${result.progress}%` }}
                    />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-primary">
                      <Baby className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Current Week</p>
                      <p className="text-lg font-bold text-card-foreground">
                        Week {result.currentWeek}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Days Remaining</p>
                      <p className="text-lg font-bold text-card-foreground">
                        {result.daysRemaining} days
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-primary">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Trimester</p>
                      <p className="text-lg font-bold text-card-foreground">
                        {result.trimester}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
                  This is an estimate based on a 280-day pregnancy cycle. Your
                  actual due date may vary. Please consult your healthcare
                  provider for an accurate assessment.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
