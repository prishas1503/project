import type { Metadata } from "next"
import { NutritionClient } from "@/components/nutrition/nutrition-client"

export const metadata: Metadata = {
  title: "Nutrition & Wellness - Pregaviag",
  description:
    "Expert diet tips, safe exercises, and mental health practices for a healthy pregnancy at every trimester.",
}

export default function NutritionPage() {
  return <NutritionClient />
}
