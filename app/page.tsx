"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  mockJobs,
  jobCategories,
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
import FilterPanel from "@/components/filter-panel"

export default function Home() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [jobs, setJobs] = useState(mockJobs)
  const [savedJobs, setSavedJobs] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [activeCategory, setActiveCategory] = useState<JobCategory | "all">(
    (searchParams.get("category") as JobCategory) || "all",
  )
  const [filters, setFilters] = useState<{
    category?: JobCategory
    experienceLevel?: ExperienceLevel
    jobType?: JobType
    location?: string
    locationType?: LocationType
  }>({})
  const [sortBy, setSortBy] = useState<"date" | "salary" | "relevance">("relevance")

  // Load saved jobs from localStorage on component mount
  useEffect(() => {
    const savedJobsFromStorage = localStorage.getItem("savedJobs")
    if (savedJobsFromStorage) {
      setSavedJobs(JSON.parse(savedJobsFromStorage))
    }

    // Initialize filters from URL params
    const category = searchParams.get("category") as JobCategory | null
    const experienceLevel = searchParams.get("experience") as ExperienceLevel | null
    const jobType = searchParams.get("type") as JobType | null
    const location = searchParams.get("location")
    const locationType = searchParams.get("locationType") as LocationType | null

    const initialFilters: typeof filters = {}
    if (category) initialFilters.category = category
    if (experienceLevel) initialFilters.experienceLevel = experienceLevel
    if (jobType) initialFilters.jobType = jobType
    if (location) initialFilters.location = location
    if (locationType) initialFilters.locationType = locationType

    setFilters(initialFilters)

    // Initialize sort from URL params
    const sort = searchParams.get("sort") as "date" | "salary" | "relevance" | null
    if (sort) setSortBy(sort)

    // Apply initial filters and sort
    applyFiltersAndSort(initialFilters, sort || "relevance", searchParams.get("q") || "")
  }, [])

  // Apply filters and sort to jobs
  const applyFiltersAndSort = (currentFilters: typeof filters, currentSortBy: typeof sortBy, currentQuery: string) => {
    let filteredJobs = mockJobs

    // Apply search query if exists
    if (currentQuery) {
      filteredJobs = searchJobs(currentQuery)
    }

    // Apply filters if any
    if (Object.keys(currentFilters).length > 0) {
      filteredJobs = filterJobs(filteredJobs, currentFilters)
    }

    // Apply sorting
    filteredJobs = sortJobs(filteredJobs, currentSortBy)

    setJobs(filteredJobs)
  }

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query)

    // Update URL
    const params = new URLSearchParams(searchParams.toString())
    if (query) {
      params.set("q", query)
    } else {
      params.delete("q")
    }
    router.push(`/?${params.toString()}`)

    applyFiltersAndSort(filters, sortBy, query)
  }

  // Handle category change
  const handleCategoryChange = (category: JobCategory | "all") => {
    setActiveCategory(category)

    const newFilters = { ...filters }
    if (category !== "all") {
      newFilters.category = category
    } else {
      delete newFilters.category
    }

    setFilters(newFilters)

    // Update URL
    const params = new URLSearchParams(searchParams.toString())
    if (category !== "all") {
      params.set("category", category)
    } else {
      params.delete("category")
    }
    router.push(`/?${params.toString()}`)

    applyFiltersAndSort(newFilters, sortBy, searchQuery)
  }

  // Handle filter change
  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)

    // Update URL
    const params = new URLSearchParams(searchParams.toString())
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    // Remove any filter params that aren't in newFilters
    const filterKeys = ["category", "experienceLevel", "jobType", "location", "locationType"]
    filterKeys.forEach((key) => {
      if (!newFilters[key as keyof typeof newFilters]) {
        params.delete(key)
      }
    })

    router.push(`/?${params.toString()}`)

    applyFiltersAndSort(newFilters, sortBy, searchQuery)
  }

  // Handle sort change
  const handleSortChange = (newSortBy: typeof sortBy) => {
    setSortBy(newSortBy)

    // Update URL
    const params = new URLSearchParams(searchParams.toString())
    if (newSortBy !== "relevance") {
      params.set("sort", newSortBy)
    } else {
      params.delete("sort")
    }
    router.push(`/?${params.toString()}`)

    applyFiltersAndSort(filters, newSortBy, searchQuery)
  }

  // Toggle save job
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
          <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />

          <FilterPanel
            onFilter={handleFilterChange}
            onSort={handleSortChange}
            activeFilters={filters}
            activeSort={sortBy}
          />

          <Tabs
            defaultValue={activeCategory}
            value={activeCategory}
            onValueChange={(value) => handleCategoryChange(value as JobCategory | "all")}
            className="w-full"
          >
            <TabsList className="w-full h-auto flex flex-wrap justify-start mb-6 bg-transparent gap-2">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All Jobs
              </TabsTrigger>
              {jobCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {jobs.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} onSave={toggleSaveJob} isSaved={savedJobs.includes(job.id)} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="text-lg font-medium">No jobs found</h3>
                  <p className="text-muted-foreground mt-1">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </TabsContent>

            {jobCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                {jobs.filter((job) => job.category === category.id).length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {jobs
                      .filter((job) => job.category === category.id)
                      .map((job) => (
                        <JobCard key={job.id} job={job} onSave={toggleSaveJob} isSaved={savedJobs.includes(job.id)} />
                      ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <h3 className="text-lg font-medium">No jobs found in {category.name}</h3>
                    <p className="text-muted-foreground mt-1">
                      Try adjusting your search or filters to find what you're looking for.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
