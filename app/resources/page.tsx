import type { Metadata } from "next"
import { ResourcesClient } from "@/components/resources/resources-client"

export const metadata: Metadata = {
  title: "Resources - Pregaviag",
  description:
    "Curated articles, FAQs, and trusted external links for expecting mothers. Expert pregnancy resources at your fingertips.",
}

export default function ResourcesPage() {
  return <ResourcesClient />
}
