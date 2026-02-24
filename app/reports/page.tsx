import type { Metadata } from "next"
import { ReportsClient } from "@/components/reports/reports-client"

export const metadata: Metadata = {
  title: "Health Reports - Pregaviag",
  description:
    "Track your health parameters, visualize trends, and get AI-powered risk predictions for a healthier pregnancy.",
}

export default function ReportsPage() {
  return <ReportsClient />
}
