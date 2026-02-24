import type { Metadata } from "next"
import { WeeklyGuideClient } from "@/components/weekly-guide/weekly-guide-client"

export const metadata: Metadata = {
  title: "Week-by-Week Pregnancy Guide - Pregaviag",
  description:
    "Follow your pregnancy journey from Week 1 to 40 with baby development milestones and expert wellness tips for each week.",
}

export default function WeeklyGuidePage() {
  return <WeeklyGuideClient />
}
