"use client"

import Image from "next/image"
import {
  BookOpen,
  ExternalLink,
  ChevronDown,
  Stethoscope,
  Baby,
  ShieldCheck,
  Utensils,
  Heart,
  Scale,
} from "lucide-react"
import { ScrollAnimate } from "@/components/scroll-animate"
import { useState } from "react"
import { cn } from "@/lib/utils"

const articles = [
  {
    icon: Stethoscope,
    title: "Prenatal Care Essentials",
    description:
      "Everything you need to know about prenatal visits, tests, and what to expect at each appointment.",
    link: "#",
    category: "Healthcare",
  },
  {
    icon: Baby,
    title: "Preparing for Labor & Delivery",
    description:
      "A comprehensive guide to understanding the stages of labor, pain management options, and birth plans.",
    link: "#",
    category: "Birth",
  },
  {
    icon: Utensils,
    title: "First Trimester Nutrition Guide",
    description:
      "What to eat, what to avoid, and managing morning sickness during your first 12 weeks.",
    link: "#",
    category: "Nutrition",
  },
  {
    icon: Heart,
    title: "Emotional Wellbeing During Pregnancy",
    description:
      "Understanding mood changes, managing anxiety, and building a support system during pregnancy.",
    link: "#",
    category: "Wellness",
  },
  {
    icon: ShieldCheck,
    title: "Safe Medications During Pregnancy",
    description:
      "A guide to over-the-counter medications that are safe and those to avoid while pregnant.",
    link: "#",
    category: "Healthcare",
  },
  {
    icon: Scale,
    title: "Healthy Weight Gain Guidelines",
    description:
      "Understanding healthy weight gain ranges by trimester and BMI, and how to stay on track.",
    link: "#",
    category: "Nutrition",
  },
]

const faqs = [
  {
    question: "How often should I see my doctor during pregnancy?",
    answer:
      "Typically, visits are monthly until week 28, then every 2 weeks until week 36, and weekly until delivery. Your provider may adjust this based on your individual needs.",
  },
  {
    question: "What foods should I avoid during pregnancy?",
    answer:
      "Avoid raw fish (sushi), unpasteurized dairy, deli meats, high-mercury fish (shark, swordfish), raw eggs, and limit caffeine to under 200mg per day.",
  },
  {
    question: "When will I feel my baby move for the first time?",
    answer:
      "Most first-time mothers feel movement (quickening) between weeks 18-25. It may feel like fluttering, bubbles, or gentle tapping. Experienced mothers may feel it earlier.",
  },
  {
    question: "Is exercise safe during pregnancy?",
    answer:
      "Yes! Most forms of moderate exercise are safe and encouraged. Walking, swimming, prenatal yoga, and light strength training are excellent options. Always consult your provider first.",
  },
  {
    question: "How much water should I drink while pregnant?",
    answer:
      "Aim for 8-12 glasses (about 2.3 liters) of water per day. Proper hydration supports amniotic fluid levels, nutrient transport, and can help reduce swelling and constipation.",
  },
  {
    question: "When should I go to the hospital during labor?",
    answer:
      "The general rule is 5-1-1: contractions every 5 minutes, lasting 1 minute each, for at least 1 hour. Also go immediately if your water breaks, you have heavy bleeding, or reduced baby movement.",
  },
]

const externalLinks = [
  { title: "American Pregnancy Association", url: "https://americanpregnancy.org", description: "Comprehensive pregnancy information and resources." },
  { title: "March of Dimes", url: "https://marchofdimes.org", description: "Leading nonprofit for maternal and baby health." },
  { title: "WHO Pregnancy Guidelines", url: "https://who.int", description: "World Health Organization prenatal care recommendations." },
  { title: "CDC Pregnancy Resources", url: "https://cdc.gov", description: "Centers for Disease Control pregnancy health guidelines." },
]

export function ResourcesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-background px-4 py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <BookOpen className="h-4 w-4" />
              Knowledge Hub
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
              Pregnancy <span className="text-primary">Resources</span>
            </h1>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              Curated articles, frequently asked questions, and trusted external
              links from healthcare professionals to support your journey.
            </p>
          </div>
          <div className="relative flex-1">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-200 to-purple-400 opacity-20 blur-2xl" />
            <Image
              src="/images/resources.jpg"
              alt="Pregnancy resources illustration"
              width={500}
              height={400}
              className="relative rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollAnimate>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Featured <span className="text-primary">Articles</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Expert-written guides covering every aspect of pregnancy health
                and preparation.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <ScrollAnimate key={article.title} delay={i * 80}>
                <a
                  href={article.link}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <article.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {article.title}
                  </h3>
                  <p className="flex-1 leading-relaxed text-muted-foreground">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary">
                    Read More
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </a>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-secondary px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollAnimate>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Answers to the most common questions from expecting mothers.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-12 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <ScrollAnimate key={i} delay={i * 60}>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="pr-4 font-semibold text-card-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                        openFaq === i && "rotate-180"
                      )}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="animate-fade-in border-t border-border px-5 pb-5 pt-3">
                      <p className="leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollAnimate>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Trusted <span className="text-primary">External Links</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Reputable organizations and resources for additional information.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {externalLinks.map((link, i) => (
              <ScrollAnimate key={link.title} delay={i * 80}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {link.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </a>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
