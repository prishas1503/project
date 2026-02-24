import type { Metadata } from "next"
import { CommunityClient } from "@/components/community/community-client"

export const metadata: Metadata = {
  title: "Community - Pregaviag",
  description:
    "Connect with other expecting mothers, share experiences, and find support in the Pregaviag community.",
}

export default function CommunityPage() {
  return <CommunityClient />
}
