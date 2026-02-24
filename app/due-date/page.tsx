import type { Metadata } from "next"
import { DueDateClient } from "@/components/due-date/due-date-client"

export const metadata: Metadata = {
  title: "Due Date Calculator - Pregaviag",
  description:
    "Calculate your estimated due date by entering the first day of your last menstrual period. Track your pregnancy timeline with Pregaviag.",
}

export default function DueDatePage() {
  return <DueDateClient />
}
