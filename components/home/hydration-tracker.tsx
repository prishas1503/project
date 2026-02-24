"use client"

import { useState } from "react"
import { Droplets, Plus, Minus, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimate } from "@/components/scroll-animate"

const GOAL = 10 // glasses

export function HydrationTracker() {
  const [glasses, setGlasses] = useState(0)

  const percentage = Math.min(100, (glasses / GOAL) * 100)

  function add() {
    setGlasses((g) => Math.min(GOAL, g + 1))
  }
  function remove() {
    setGlasses((g) => Math.max(0, g - 1))
  }
  function reset() {
    setGlasses(0)
  }

  return (
    <section className="bg-background px-4 py-12 md:py-16">
      <ScrollAnimate>
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Droplets className="h-4 w-4" />
            Stay Hydrated
          </div>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Hydration <span className="text-primary">Tracker</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Aim for {GOAL} glasses of water daily to support your pregnancy.
          </p>

          {/* Water bottle animation */}
          <div className="mx-auto mt-8 flex items-center justify-center">
            <div className="relative h-64 w-32 overflow-hidden rounded-b-3xl rounded-t-xl border-2 border-purple-300 bg-purple-50">
              {/* Neck */}
              <div className="absolute left-1/2 top-0 z-10 h-6 w-12 -translate-x-1/2 rounded-t-lg border-2 border-b-0 border-purple-300 bg-purple-200" />
              {/* Water fill */}
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-purple-400 transition-all duration-700 ease-out"
                style={{ height: `${percentage}%` }}
              >
                {/* Wave effect */}
                <div className="absolute -top-2 left-0 right-0 h-4">
                  <svg viewBox="0 0 128 16" className="w-full" preserveAspectRatio="none">
                    <path
                      d="M0,8 C32,16 64,0 96,8 C112,12 120,4 128,8 L128,16 L0,16Z"
                      className="fill-purple-400 opacity-50"
                    />
                  </svg>
                </div>
              </div>
              {/* Label */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <span className={`text-2xl font-bold ${percentage > 50 ? "text-purple-50" : "text-purple-700"}`}>
                  {glasses}/{GOAL}
                </span>
              </div>
            </div>
          </div>

          {/* Progress text */}
          <p className="mt-4 text-sm font-medium text-primary">
            {percentage === 100
              ? "You reached your goal! Great job!"
              : `${Math.round(percentage)}% of daily goal`}
          </p>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={remove}
              disabled={glasses === 0}
              className="h-10 w-10 rounded-full border-purple-300 text-foreground hover:bg-purple-100"
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Remove glass</span>
            </Button>
            <Button
              onClick={add}
              disabled={glasses >= GOAL}
              size="lg"
              className="rounded-full shadow-lg shadow-primary/25"
            >
              <Plus className="mr-1 h-4 w-4" />
              Add Glass
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={reset}
              className="h-10 w-10 rounded-full border-purple-300 text-foreground hover:bg-purple-100"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="sr-only">Reset tracker</span>
            </Button>
          </div>
        </div>
      </ScrollAnimate>
    </section>
  )
}
