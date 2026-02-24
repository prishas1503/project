import { Hero } from "@/components/home/hero"
import { MotivationalQuote } from "@/components/home/motivational-quote"
import { BabyGrowth } from "@/components/home/baby-growth"
import { HydrationTracker } from "@/components/home/hydration-tracker"
import { Features } from "@/components/home/features"
import { Testimonials } from "@/components/home/testimonials"
import { CtaSection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <MotivationalQuote />
      <BabyGrowth />
      <HydrationTracker />
      <Features />
      <Testimonials />
      <CtaSection />
    </>
  )
}
