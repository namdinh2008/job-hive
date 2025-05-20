"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import {
  mockJobs,
  jobCategories,
  experienceLevels,
  jobTypes,
  locationTypes,
  searchJobs,
  filterJobs,
  sortJobs,
  type JobCategory,
  type ExperienceLevel,
  type JobType,
  type LocationType,
} from "@/lib/data"
import JobCard from "@/components/job-card"
import SearchBar from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface Filters {
  category?: string[]
  experienceLevel?: string[]
  jobType?: string[]
  locationType?: string[]
  location?: string
}

export default function Home() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [jobs, setJobs] = useState(mockJobs)
  const [savedJobs, setSavedJobs] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [filters, setFilters] = useState<Filters>({})
  const [sortBy, setSortBy] = useState<"date" | "salary" | "relevance">("relevance")
  const [currentPage, setCurrentPage] = useState(1)
  const JOBS_PER_PAGE = 9

  // Calculate paginated jobs
  const paginatedJobs = jobs.slice((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE)
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE)

  // Reset page to 1 when jobs, filters, search, or category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [jobs, filters, searchQuery])

  useEffect(() => {
    const savedJobsFromStorage = localStorage.getItem("savedJobs")
    if (savedJobsFromStorage) {
      setSavedJobs(JSON.parse(savedJobsFromStorage))
    }

    // No need to parse filters from URL for this simplified version
    setFilters({})
    setSortBy("relevance")
    setSearchQuery("")
    setJobs(mockJobs)
  }, [])

  useEffect(() => {
    let filteredJobs = mockJobs
    if (searchQuery) {
      filteredJobs = searchJobs(searchQuery)
    }
    if (Object.keys(filters).length > 0) {
      filteredJobs = filterJobs(filteredJobs, filters)
    }
    filteredJobs = sortJobs(filteredJobs, sortBy)
    setJobs(filteredJobs)
    setCurrentPage(1)
  }, [filters, sortBy, searchQuery])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleMultiSelect = (key: keyof Filters, value: string) => {
    setFilters((prev) => {
      const arr = Array.isArray(prev[key]) ? [...prev[key] as string[]] : []
      if (arr.includes(value)) {
        const newArr = arr.filter((v) => v !== value)
        return { ...prev, [key]: newArr.length > 0 ? newArr : undefined }
      } else {
        return { ...prev, [key]: [...arr, value] }
      }
    })
  }

  const toggleSaveJob = (jobId: string) => {
    let updatedSavedJobs

    if (savedJobs.includes(jobId)) {
      updatedSavedJobs = savedJobs.filter((id) => id !== jobId)
    } else {
      updatedSavedJobs = [...savedJobs, jobId]
    }

    setSavedJobs(updatedSavedJobs)
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs))
  }

  // Handler for sort dropdown
  const handleSortChange = (value: "date" | "salary" | "relevance") => {
    setSortBy(value)
  }

  // Handler for location input
  const handleLocationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, location: e.target.value || undefined }))
  }

  // Dropdown UI for each filter
  const renderDropdown = (
    label: string,
    key: keyof Filters,
    options: { id: string; name: string }[],
  ) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="min-w-[160px] justify-between">
          {label}
          <span className="ml-2">▼</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="flex flex-col gap-2">
          {options.map((opt) => (
            <Label key={opt.id} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={Array.isArray(filters[key]) ? filters[key]!.includes(opt.id) : false}
                onCheckedChange={() => handleMultiSelect(key, opt.id)}
              />
              {opt.name}
            </Label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )

  return (
    <div className="container py-6 md:py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Find Your Dream Job</h1>
          <p className="text-muted-foreground">
            Browse through thousands of job opportunities tailored to your skills and preferences.
          </p>
        </div>

        <div className="space-y-6">
          {/* SearchBar now filters as user types, no button */}
          <SearchBar
            onSearch={(query: string) => setSearchQuery(query)}
            initialQuery={searchQuery}
          />

          <div className="flex flex-wrap gap-4 mb-4 items-center">
            {/* Sort Dropdown */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="min-w-[160px] justify-between">
                  Sort: {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}
                  <span className="ml-2">▼</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-44">
                <div className="flex flex-col gap-2">
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      checked={sortBy === "relevance"}
                      onChange={() => handleSortChange("relevance")}
                    />
                    Relevance
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      checked={sortBy === "date"}
                      onChange={() => handleSortChange("date")}
                    />
                    Date (Newest)
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      checked={sortBy === "salary"}
                      onChange={() => handleSortChange("salary")}
                    />
                    Salary (High to Low)
                  </Label>
                </div>
              </PopoverContent>
            </Popover>
            {/* Location Input */}
            <input
              type="text"
              placeholder="Search by location..."
              className="border rounded px-3 py-2 text-sm min-w-[200px]"
              value={filters.location || ""}
              onChange={handleLocationInput}
            />
            {/* Filter Dropdowns */}
            {renderDropdown("Job Category", "category", jobCategories)}
            {renderDropdown("Experience Level", "experienceLevel", experienceLevels)}
            {renderDropdown("Job Type", "jobType", jobTypes)}
            {renderDropdown("Work Type", "locationType", locationTypes)}
            {/* Clear Button */}
            <Button
              variant="outline"
              className="ml-2"
              onClick={() => setFilters({})}
            >
              Clear
            </Button>
          </div>

          <Tabs
            defaultValue="all"
            value="all"
            className="w-full"
          >
            <TabsContent value="all" className="mt-0">
              {jobs.length > 0 ? (
                <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {paginatedJobs.map((job) => (
                    <JobCard key={job.id} job={job} onSave={toggleSaveJob} isSaved={savedJobs.includes(job.id)} />
                  ))}
                </div>
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-8 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                      >
                        Prev
                      </Button>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                          key={i + 1}
                          variant={currentPage === i + 1 ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </Button>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="text-lg font-medium">No jobs found</h3>
                  <p className="text-muted-foreground mt-1">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </TabsContent>

            {jobCategories.map((category) => {
              const categoryJobs = jobs.filter((job) => job.category === category.id)
              const categoryTotalPages = Math.ceil(categoryJobs.length / JOBS_PER_PAGE)
              const categoryPaginatedJobs = categoryJobs.slice((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE)
              return (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                  {categoryJobs.length > 0 ? (
                    <>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {categoryPaginatedJobs.map((job) => (
                        <JobCard key={job.id} job={job} onSave={toggleSaveJob} isSaved={savedJobs.includes(job.id)} />
                      ))}
                  </div>
                      {categoryTotalPages > 1 && (
                        <div className="flex justify-center mt-8 gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                          >
                            Prev
                          </Button>
                          {Array.from({ length: categoryTotalPages }, (_, i) => (
                            <Button
                              key={i + 1}
                              variant={currentPage === i + 1 ? "default" : "outline"}
                              size="sm"
                              onClick={() => setCurrentPage(i + 1)}
                            >
                              {i + 1}
                            </Button>
                          ))}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((p) => Math.min(categoryTotalPages, p + 1))}
                            disabled={currentPage === categoryTotalPages}
                          >
                            Next
                          </Button>
                        </div>
                      )}
                    </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <h3 className="text-lg font-medium">No jobs found in {category.name}</h3>
                    <p className="text-muted-foreground mt-1">
                      Try adjusting your search or filters to find what you're looking for.
                    </p>
                  </div>
                )}
              </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
