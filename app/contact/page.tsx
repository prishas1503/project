import type { Metadata } from "next"
import { ContactClient } from "@/components/contact/contact-client"

export const metadata: Metadata = {
  title: "Contact Us - Pregaviag",
  description:
    "Get in touch with the Pregaviag team. We'd love to hear from you!",
}

export default function ContactPage() {
  return <ContactClient />
}
