"use client"

import { useState } from "react"
import { Baby, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimate } from "@/components/scroll-animate"

const stages = [
  { week: 4, label: "Week 4", size: 8, description: "Poppy seed -- Neural tube forming, heart beginning to develop." },
  { week: 8, label: "Week 8", size: 16, description: "Raspberry -- All major organs have begun forming. Tiny movements start." },
  { week: 12, label: "Week 12", size: 24, description: "Plum -- Reflexes develop. End of first trimester!" },
  { week: 16, label: "Week 16", size: 32, description: "Avocado -- Can hear sounds. Circulatory system fully functional." },
  { week: 20, label: "Week 20", size: 40, description: "Banana -- Halfway there! Legs are now proportional." },
  { week: 24, label: "Week 24", size: 48, description: "Cantaloupe -- Lungs developing surfactant. Face fully formed." },
  { week: 28, label: "Week 28", size: 56, description: "Eggplant -- Can dream during REM sleep. Eyes can blink." },
  { week: 32, label: "Week 32", size: 64, description: "Jicama -- Practicing breathing. Fingernails and toenails present." },
  { week: 36, label: "Week 36", size: 72, description: "Romaine lettuce -- Dropping into position. Fat layers filling out." },
  { week: 40, label: "Week 40", size: 80, description: "Small pumpkin -- Fully developed and ready for the world!" },
]

export function BabyGrowth() {
  const [stageIdx, setStageIdx] = useState(0)
  const stage = stages[stageIdx]

  function prev() {
    setStageIdx((i) => Math.max(0, i - 1))
  }
  function next() {
    setStageIdx((i) => Math.min(stages.length - 1, i + 1))
  }

  return (
    <section className="bg-secondary px-4 py-12 md:py-16">
      <ScrollAnimate>
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-200 px-4 py-1.5 text-sm font-medium text-purple-900">
            <Baby className="h-4 w-4" />
            Baby Growth
          </div>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Watch Your Baby <span className="text-primary">Grow</span>
          </h2>

          {/* Baby illustration */}
          <div className="mt-8 flex items-center justify-center">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-purple-200">
              <div
                className="flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-purple-50 shadow-lg transition-all duration-700 ease-out"
                style={{
                  width: `${stage.size}%`,
                  height: `${stage.size}%`,
                  minWidth: 24,
                  minHeight: 24,
                }}
              >
                <Baby
                  className="transition-all duration-700"
                  style={{
                    width: `${Math.max(14, stage.size * 0.4)}px`,
                    height: `${Math.max(14, stage.size * 0.4)}px`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stage info */}
          <div key={stageIdx} className="animate-fade-in mt-6">
            <p className="text-lg font-bold text-primary">{stage.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {stage.description}
            </p>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={stageIdx === 0}
              className="h-10 w-10 rounded-full border-purple-300 text-foreground hover:bg-purple-100"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous stage</span>
            </Button>
            <div className="flex items-center gap-1.5">
              {stages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStageIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === stageIdx ? "w-6 bg-primary" : "w-2 bg-purple-300"
                  }`}
                  aria-label={`Go to stage ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={stageIdx === stages.length - 1}
              className="h-10 w-10 rounded-full border-purple-300 text-foreground hover:bg-purple-100"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next stage</span>
            </Button>
          </div>

          {/* Progress */}
          <div className="mx-auto mt-4 max-w-xs">
            <div className="h-2 overflow-hidden rounded-full bg-purple-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-500"
                style={{ width: `${((stageIdx + 1) / stages.length) * 100}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Stage {stageIdx + 1} of {stages.length}
            </p>
          </div>
        </div>
      </ScrollAnimate>
    </section>
  )
}
