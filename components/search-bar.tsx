"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  onSearch: (query: string) => void
  initialQuery?: string
}

export default function SearchBar({ onSearch, initialQuery = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search jobs, companies, or job IDs..."
          className="pl-10 pr-20"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-8">
          Search
        </Button>
      </div>
    </form>
  )
}
