import Link from "next/link"
import { Briefcase } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Briefcase className="h-6 w-6" />
              <span>JobHive</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Find your dream job with JobHive. We connect talented professionals with top companies.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/saved-jobs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-muted-foreground hover:text-foreground transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/?category=it" className="text-muted-foreground hover:text-foreground transition-colors">
                  IT & Software
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=marketing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=finance"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=healthcare"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=government"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Government & Public Sector
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">123 Job Street, Career City</li>
              <li>
                <Link
                  href="mailto:info@jobhive.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@jobhive.com
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} JobHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
