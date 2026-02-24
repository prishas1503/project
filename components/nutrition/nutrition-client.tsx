"use client"

import Image from "next/image"
import {
  Apple,
  Salad,
  Droplets,
  Dumbbell,
  Brain,
  Moon,
  Heart,
  Leaf,
  Coffee,
  Fish,
  Egg,
  Milk,
} from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"

const dietTips = [
  {
    icon: Apple,
    title: "Fruits & Vegetables",
    description:
      "Aim for 5+ servings daily. Dark leafy greens, berries, and citrus fruits provide essential folate, vitamin C, and fiber for you and your baby.",
  },
  {
    icon: Fish,
    title: "Omega-3 Rich Foods",
    description:
      "Salmon, sardines, and walnuts support baby's brain and eye development. Aim for 2 servings of low-mercury fish per week.",
  },
  {
    icon: Egg,
    title: "Lean Proteins",
    description:
      "Chicken, eggs, beans, and tofu provide amino acids crucial for baby's tissue growth. Include protein in every meal.",
  },
  {
    icon: Milk,
    title: "Calcium Sources",
    description:
      "Dairy products, fortified plant milks, and leafy greens strengthen baby's developing bones and teeth.",
  },
  {
    icon: Salad,
    title: "Whole Grains",
    description:
      "Brown rice, oatmeal, and whole wheat bread provide sustained energy and essential B vitamins for fetal development.",
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description:
      "Drink 8-12 glasses of water daily. Proper hydration supports amniotic fluid levels and reduces swelling.",
  },
]

const exercises = [
  {
    icon: Dumbbell,
    title: "Prenatal Yoga",
    description:
      "Gentle poses improve flexibility, reduce back pain, and help prepare your body for labor. Focus on hip-opening postures.",
    intensity: "Low",
  },
  {
    icon: Heart,
    title: "Walking",
    description:
      "A 30-minute daily walk improves circulation, boosts mood, and maintains cardiovascular fitness throughout pregnancy.",
    intensity: "Low",
  },
  {
    icon: Leaf,
    title: "Swimming",
    description:
      "The buoyancy of water relieves joint stress while providing a full-body workout. Excellent for all trimesters.",
    intensity: "Moderate",
  },
  {
    icon: Dumbbell,
    title: "Light Strength Training",
    description:
      "Modified squats, arm exercises with light weights, and pelvic floor exercises build strength for delivery.",
    intensity: "Moderate",
  },
]

const mentalHealth = [
  {
    icon: Brain,
    title: "Mindfulness Meditation",
    description:
      "Practice 10-15 minutes of guided meditation daily. Focus on breath awareness and body scanning to reduce anxiety.",
  },
  {
    icon: Moon,
    title: "Quality Sleep Routine",
    description:
      "Establish a calming bedtime ritual. Use a pregnancy pillow, avoid screens before bed, and sleep on your left side.",
  },
  {
    icon: Heart,
    title: "Journaling",
    description:
      "Write about your feelings, fears, and hopes. Journaling during pregnancy helps process emotions and creates beautiful memories.",
  },
  {
    icon: Coffee,
    title: "Social Connection",
    description:
      "Stay connected with loved ones and join a prenatal support group. Sharing experiences reduces isolation and builds community.",
  },
]

export function NutritionClient() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-background px-4 py-16 md:py-24">
        {/* Animated wave background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
          <svg
            className="animate-wave absolute bottom-0 h-32 w-[200%]"
            viewBox="0 0 2880 120"
            fill="none"
          >
            <path
              d="M0,60 C480,120 960,0 1440,60 C1920,120 2400,0 2880,60 L2880,120 L0,120Z"
              className="fill-primary"
            />
          </svg>
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <Apple className="h-4 w-4" />
              Nourish Your Journey
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
              Nutrition &{" "}
              <span className="text-primary">Wellness Guide</span>
            </h1>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              Expert-curated diet tips, safe exercise routines, and mental
              wellness practices designed for every stage of your pregnancy.
            </p>
          </div>
          <div className="relative flex-1">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-200 to-purple-400 opacity-20 blur-2xl" />
            <Image
              src="/images/nutrition.jpg"
              alt="Healthy pregnancy nutrition illustration"
              width={500}
              height={400}
              className="relative rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Diet Tips */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimate>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Diet & <span className="text-primary">Nutrition Tips</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Fuel your body and your baby with the right nutrients at every
                stage.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dietTips.map((tip, i) => (
              <ScrollAnimate key={tip.title} delay={i * 80}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <tip.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {tip.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Exercises */}
      <section className="bg-secondary px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimate>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Safe <span className="text-primary">Exercise Routines</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Stay active and strong with exercises recommended for expecting
                mothers.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {exercises.map((ex, i) => (
              <ScrollAnimate key={ex.title} delay={i * 100}>
                <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <ex.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {ex.title}
                      </h3>
                      <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">
                        {ex.intensity}
                      </span>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      {ex.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimate>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Mental <span className="text-primary">Wellness Practices</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Your emotional health matters just as much. Nurture your mind
                alongside your body.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {mentalHealth.map((item, i) => (
              <ScrollAnimate key={item.title} delay={i * 100}>
                <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
