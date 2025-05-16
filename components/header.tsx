"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Briefcase } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Briefcase className="h-6 w-6" />
          <span>JobHive</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/saved-jobs" className="text-sm font-medium transition-colors hover:text-primary">
            Saved Jobs
          </Link>
          <Link href="/feedback" className="text-sm font-medium transition-colors hover:text-primary">
            Feedback
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="outline" className="hidden md:flex">
            Sign In
          </Button>
          <Button className="hidden md:flex">Sign Up</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/saved-jobs"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Saved Jobs
            </Link>
            <Link
              href="/feedback"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Feedback
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" className="flex-1">
                Sign In
              </Button>
              <Button className="flex-1">Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
