"use client"

import type { WeekData } from "@/lib/weekly-data"
import { ScrollAnimate } from "@/components/scroll-animate"
import { Baby, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const trimesterColors: Record<number, string> = {
  1: "bg-purple-100 text-purple-800",
  2: "bg-purple-200 text-purple-900",
  3: "bg-purple-300 text-purple-900",
}

interface WeekCardProps {
  data: WeekData
  index: number
}

export function WeekCard({ data, index }: WeekCardProps) {
  const isLeft = index % 2 === 0

  return (
    <ScrollAnimate delay={50}>
      <div
        className={cn(
          "relative flex flex-col lg:flex-row lg:items-start",
          isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        )}
      >
        {/* Card */}
        <div className={cn("flex-1", isLeft ? "lg:pr-12" : "lg:pl-12")}>
          <div className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
            {/* Week badge */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                  Week {data.week}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-xs font-medium",
                    trimesterColors[data.trimester]
                  )}
                >
                  T{data.trimester}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                {data.babySize}
              </span>
            </div>

            {/* Baby development */}
            <div className="mb-3 flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-primary">
                <Baby className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Baby&apos;s Development
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {data.babyDevelopment}
                </p>
              </div>
            </div>

            {/* Mother tips */}
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-primary">
                <Heart className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Wellness Tip
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {data.motherTips}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Empty space for other side */}
        <div className="hidden flex-1 lg:block" />

        {/* Center dot */}
        <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-card lg:block" />
      </div>
    </ScrollAnimate>
  )
}
