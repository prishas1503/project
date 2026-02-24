"use client"

import { Baby, Heart, Sparkles, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const milestones = [
  { week: 4, label: "Heartbeat detected", icon: Heart, trimester: 1 },
  { week: 8, label: "First ultrasound", icon: Baby, trimester: 1 },
  { week: 12, label: "End of 1st trimester", icon: CheckCircle, trimester: 1 },
  { week: 16, label: "Baby can hear", icon: Baby, trimester: 2 },
  { week: 20, label: "Halfway point", icon: Sparkles, trimester: 2 },
  { week: 24, label: "Viability milestone", icon: Heart, trimester: 2 },
  { week: 28, label: "3rd trimester begins", icon: Baby, trimester: 3 },
  { week: 32, label: "Baby practices breathing", icon: Heart, trimester: 3 },
  { week: 36, label: "Head-down position", icon: Baby, trimester: 3 },
  { week: 40, label: "Due date!", icon: Sparkles, trimester: 3 },
]

interface TrimesterTimelineProps {
  currentWeek: number
}

export function TrimesterTimeline({ currentWeek }: TrimesterTimelineProps) {
  return (
    <div className="relative">
      {/* Progress track */}
      <div className="absolute left-5 top-0 h-full w-0.5 bg-purple-200 md:left-1/2 md:-translate-x-1/2" />
      <div
        className="absolute left-5 top-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-700 transition-all duration-700 md:left-1/2 md:-translate-x-1/2"
        style={{
          height: `${Math.min(100, (currentWeek / 40) * 100)}%`,
        }}
      />

      <div className="flex flex-col gap-6">
        {milestones.map((m, i) => {
          const reached = currentWeek >= m.week
          const isLeft = i % 2 === 0

          return (
            <div
              key={m.week}
              className={cn(
                "relative flex items-center gap-4 md:gap-0",
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Dot */}
              <div
                className={cn(
                  "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                  reached
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-purple-200 bg-card text-muted-foreground"
                )}
              >
                <m.icon className="h-4 w-4" />
              </div>

              {/* Card */}
              <div
                className={cn(
                  "flex-1 md:w-1/2",
                  isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                )}
              >
                <div
                  className={cn(
                    "rounded-xl border p-3 transition-all",
                    reached
                      ? "border-primary/30 bg-purple-50"
                      : "border-border bg-card"
                  )}
                >
                  <p className="text-xs font-semibold text-primary">
                    Week {m.week}
                  </p>
                  <p className={cn(
                    "text-sm font-medium",
                    reached ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {m.label}
                  </p>
                </div>
              </div>

              {/* Empty space for other side */}
              <div className="hidden flex-1 md:block md:w-1/2" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
