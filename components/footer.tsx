import Link from "next/link"
import { Heart, Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = [
  { href: "/weekly-guide", label: "Week-by-Week Guide" },
  { href: "/nutrition", label: "Nutrition & Wellness" },
  { href: "/due-date", label: "Due Date Calculator" },
  { href: "/reports", label: "Health Reports" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-serif text-xl font-bold text-foreground">
                Pregaviag
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Your trusted companion through every stage of pregnancy. Empowering
              mothers with knowledge, care, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Connect With Us</h3>
            <p className="text-sm text-muted-foreground">hello@pregaviag.com</p>
            <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>{'2026 Pregaviag. All rights reserved. Made with love for expecting mothers.'}</p>
        </div>
      </div>
    </footer>
  )
}
