export type JobCategory = "it" | "marketing" | "finance" | "healthcare" | "government"
export type ExperienceLevel = "entry" | "mid" | "senior"
export type JobType = "full-time" | "part-time" | "internship" | "contract"
export type LocationType = "remote" | "onsite" | "hybrid"

export interface Job {
  id: string
  title: string
  company: string
  location: string
  salary?: string
  experienceLevel: ExperienceLevel
  jobType: JobType
  locationType: LocationType
  category: JobCategory
  description: string
  qualifications: string[]
  skills: string[]
  perks: string[]
  postedDate: string
  deadline: string
  companyDescription: string
  companyLogo?: string
}

export const jobCategories = [
  { id: "it", name: "IT & Software" },
  { id: "marketing", name: "Marketing" },
  { id: "finance", name: "Finance" },
  { id: "healthcare", name: "Healthcare" },
  { id: "government", name: "Government & Public Sector" },
]

export const experienceLevels = [
  { id: "entry", name: "Entry Level" },
  { id: "mid", name: "Mid Level" },
  { id: "senior", name: "Senior Level" },
]

export const jobTypes = [
  { id: "full-time", name: "Full-time" },
  { id: "part-time", name: "Part-time" },
  { id: "internship", name: "Internship" },
  { id: "contract", name: "Contract" },
]

export const locationTypes = [
  { id: "remote", name: "Remote" },
  { id: "onsite", name: "Onsite" },
  { id: "hybrid", name: "Hybrid" },
]

export const mockJobs: Job[] = [
  {
    id: "job-001",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    experienceLevel: "senior",
    jobType: "full-time",
    locationType: "remote",
    category: "it",
    description:
      "We are looking for a Senior Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications using React and Next.js.",
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in frontend development",
      "Strong knowledge of React, Next.js, and TypeScript",
      "Experience with state management libraries like Redux or Zustand",
      "Experience with CSS frameworks like Tailwind CSS",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    perks: ["Competitive salary", "Remote work", "Health insurance", "401(k) matching", "Unlimited PTO"],
    postedDate: "2023-05-01",
    deadline: "2023-06-01",
    companyDescription:
      "TechCorp is a leading technology company specializing in web and mobile application development.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-002",
    title: "Marketing Manager",
    company: "BrandBoost",
    location: "New York, NY",
    salary: "$90,000 - $110,000",
    experienceLevel: "mid",
    jobType: "full-time",
    locationType: "hybrid",
    category: "marketing",
    description:
      "We are seeking a Marketing Manager to develop and implement marketing strategies to promote our products and services.",
    qualifications: [
      "Bachelor's degree in Marketing or related field",
      "3+ years of experience in marketing",
      "Experience with digital marketing campaigns",
      "Strong analytical skills",
      "Excellent communication skills",
    ],
    skills: ["Digital Marketing", "SEO", "Social Media Marketing", "Content Marketing", "Analytics"],
    perks: ["Competitive salary", "Hybrid work model", "Health insurance", "Professional development budget"],
    postedDate: "2023-05-05",
    deadline: "2023-06-05",
    companyDescription:
      "BrandBoost is a marketing agency that helps businesses grow their brand presence and reach their target audience.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-003",
    title: "Financial Analyst",
    company: "MoneyWise",
    location: "Chicago, IL",
    salary: "$80,000 - $95,000",
    experienceLevel: "mid",
    jobType: "full-time",
    locationType: "onsite",
    category: "finance",
    description:
      "We are looking for a Financial Analyst to join our team. You will be responsible for analyzing financial data and providing insights to support business decisions.",
    qualifications: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "3+ years of experience in financial analysis",
      "Proficiency in Excel and financial modeling",
      "Knowledge of financial reporting and analysis",
      "Strong analytical skills",
    ],
    skills: ["Financial Analysis", "Excel", "Financial Modeling", "Budgeting", "Forecasting"],
    perks: ["Competitive salary", "Bonus potential", "Health insurance", "401(k) matching", "Professional development"],
    postedDate: "2023-05-10",
    deadline: "2023-06-10",
    companyDescription:
      "MoneyWise is a financial services company that provides financial planning and investment management services.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-004",
    title: "Registered Nurse",
    company: "HealthFirst Hospital",
    location: "Boston, MA",
    salary: "$75,000 - $90,000",
    experienceLevel: "mid",
    jobType: "full-time",
    locationType: "onsite",
    category: "healthcare",
    description: "We are seeking a Registered Nurse to provide patient care in our medical-surgical unit.",
    qualifications: [
      "Bachelor's degree in Nursing",
      "Current RN license",
      "2+ years of experience in a hospital setting",
      "BLS certification",
      "Excellent communication and interpersonal skills",
    ],
    skills: [
      "Patient Care",
      "Medical-Surgical Nursing",
      "Electronic Health Records",
      "Patient Education",
      "Medication Administration",
    ],
    perks: ["Competitive salary", "Sign-on bonus", "Health insurance", "Retirement plan", "Tuition reimbursement"],
    postedDate: "2023-05-15",
    deadline: "2023-06-15",
    companyDescription:
      "HealthFirst Hospital is a leading healthcare provider committed to delivering high-quality patient care.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-005",
    title: "Policy Analyst",
    company: "Government Affairs Office",
    location: "Washington, DC",
    salary: "$85,000 - $100,000",
    experienceLevel: "mid",
    jobType: "full-time",
    locationType: "hybrid",
    category: "government",
    description:
      "We are looking for a Policy Analyst to research and analyze policy issues and provide recommendations to government officials.",
    qualifications: [
      "Master's degree in Public Policy, Political Science, or related field",
      "3+ years of experience in policy analysis",
      "Knowledge of legislative processes",
      "Strong research and analytical skills",
      "Excellent writing and communication skills",
    ],
    skills: ["Policy Analysis", "Research", "Government Relations", "Legislative Analysis", "Report Writing"],
    perks: [
      "Competitive salary",
      "Government benefits",
      "Retirement plan",
      "Professional development",
      "Work-life balance",
    ],
    postedDate: "2023-05-20",
    deadline: "2023-06-20",
    companyDescription:
      "The Government Affairs Office is a government agency that develops and implements public policies.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-006",
    title: "Junior Web Developer",
    company: "WebSolutions",
    location: "Austin, TX",
    salary: "$70,000 - $85,000",
    experienceLevel: "entry",
    jobType: "full-time",
    locationType: "hybrid",
    category: "it",
    description:
      "We are seeking a Junior Web Developer to join our team. You will be responsible for developing and maintaining web applications.",
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "1+ years of experience in web development",
      "Knowledge of HTML, CSS, and JavaScript",
      "Familiarity with React or other frontend frameworks",
      "Basic understanding of backend technologies",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    perks: [
      "Competitive salary",
      "Hybrid work model",
      "Health insurance",
      "Professional development",
      "Casual work environment",
    ],
    postedDate: "2023-05-25",
    deadline: "2023-06-25",
    companyDescription:
      "WebSolutions is a web development agency that creates custom websites and web applications for businesses.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-007",
    title: "Social Media Specialist",
    company: "DigitalEdge",
    location: "Los Angeles, CA",
    salary: "$60,000 - $75,000",
    experienceLevel: "entry",
    jobType: "full-time",
    locationType: "remote",
    category: "marketing",
    description:
      "We are looking for a Social Media Specialist to create and manage content for our social media platforms.",
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "1+ years of experience in social media management",
      "Experience with social media platforms and analytics tools",
      "Strong writing and communication skills",
      "Creative mindset",
    ],
    skills: ["Social Media Management", "Content Creation", "Analytics", "Copywriting", "Graphic Design"],
    perks: [
      "Competitive salary",
      "Remote work",
      "Health insurance",
      "Professional development",
      "Creative work environment",
    ],
    postedDate: "2023-05-30",
    deadline: "2023-06-30",
    companyDescription: "DigitalEdge is a digital marketing agency that helps businesses grow their online presence.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-008",
    title: "Accountant",
    company: "FinancePro",
    location: "Denver, CO",
    salary: "$65,000 - $80,000",
    experienceLevel: "mid",
    jobType: "full-time",
    locationType: "onsite",
    category: "finance",
    description: "We are seeking an Accountant to maintain financial records and prepare financial reports.",
    qualifications: [
      "Bachelor's degree in Accounting or related field",
      "2+ years of experience in accounting",
      "Knowledge of accounting principles and practices",
      "Proficiency in accounting software",
      "Attention to detail",
    ],
    skills: ["Accounting", "Financial Reporting", "Bookkeeping", "Tax Preparation", "QuickBooks"],
    perks: ["Competitive salary", "Health insurance", "401(k) matching", "Professional development", "Paid time off"],
    postedDate: "2023-06-01",
    deadline: "2023-07-01",
    companyDescription:
      "FinancePro is an accounting firm that provides accounting and tax services to individuals and businesses.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-009",
    title: "Medical Assistant",
    company: "CarePoint Clinic",
    location: "Seattle, WA",
    salary: "$50,000 - $60,000",
    experienceLevel: "entry",
    jobType: "full-time",
    locationType: "onsite",
    category: "healthcare",
    description: "We are looking for a Medical Assistant to perform clinical and administrative duties in our clinic.",
    qualifications: [
      "Medical Assistant certification",
      "1+ years of experience as a Medical Assistant",
      "Knowledge of medical terminology and procedures",
      "Electronic health record experience",
      "Strong communication skills",
    ],
    skills: ["Patient Care", "Vital Signs", "Medical Records", "Appointment Scheduling", "Patient Education"],
    perks: ["Competitive salary", "Health insurance", "Retirement plan", "Paid time off", "Professional development"],
    postedDate: "2023-06-05",
    deadline: "2023-07-05",
    companyDescription:
      "CarePoint Clinic is a primary care clinic that provides comprehensive healthcare services to patients.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-010",
    title: "Public Relations Specialist",
    company: "Government Communications Office",
    location: "Atlanta, GA",
    salary: "$70,000 - $85,000",
    experienceLevel: "mid",
    jobType: "full-time",
    locationType: "hybrid",
    category: "government",
    description:
      "We are seeking a Public Relations Specialist to develop and implement communication strategies for government initiatives.",
    qualifications: [
      "Bachelor's degree in Public Relations, Communications, or related field",
      "3+ years of experience in public relations",
      "Experience with media relations",
      "Strong writing and communication skills",
      "Knowledge of government operations",
    ],
    skills: ["Public Relations", "Media Relations", "Press Releases", "Communication Strategy", "Crisis Management"],
    perks: [
      "Competitive salary",
      "Government benefits",
      "Retirement plan",
      "Professional development",
      "Work-life balance",
    ],
    postedDate: "2023-06-10",
    deadline: "2023-07-10",
    companyDescription:
      "The Government Communications Office is responsible for managing public communications for government agencies.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-011",
    title: "Data Scientist",
    company: "DataInsights",
    location: "Seattle, WA",
    salary: "$110,000 - $140,000",
    experienceLevel: "senior",
    jobType: "full-time",
    locationType: "remote",
    category: "it",
    description:
      "We are looking for a Data Scientist to analyze complex data sets and develop machine learning models to solve business problems.",
    qualifications: [
      "Master's or PhD in Computer Science, Statistics, or related field",
      "5+ years of experience in data science",
      "Proficiency in Python and data analysis libraries",
      "Experience with machine learning algorithms",
      "Strong statistical knowledge",
    ],
    skills: ["Python", "Machine Learning", "Data Analysis", "Statistics", "SQL"],
    perks: ["Competitive salary", "Remote work", "Health insurance", "401(k) matching", "Professional development"],
    postedDate: "2023-06-15",
    deadline: "2023-07-15",
    companyDescription: "DataInsights is a data analytics company that helps businesses make data-driven decisions.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "job-012",
    title: "Content Marketing Manager",
    company: "ContentCraft",
    location: "Chicago, IL",
    salary: "$85,000 - $105,000",
    experienceLevel: "mid",
    jobType: "full-time",
    locationType: "hybrid",
    category: "marketing",
    description:
      "We are seeking a Content Marketing Manager to develop and execute content strategies that drive engagement and conversions.",
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "4+ years of experience in content marketing",
      "Experience with content management systems",
      "Strong writing and editing skills",
      "Knowledge of SEO best practices",
    ],
    skills: ["Content Strategy", "SEO", "Content Creation", "Editorial Planning", "Analytics"],
    perks: [
      "Competitive salary",
      "Hybrid work model",
      "Health insurance",
      "Professional development",
      "Creative work environment",
    ],
    postedDate: "2023-06-20",
    deadline: "2023-07-20",
    companyDescription:
      "ContentCraft is a content marketing agency that helps businesses create and distribute valuable content.",
    companyLogo: "/placeholder.svg?height=80&width=80",
  },
]

export function getJobById(id: string): Job | undefined {
  return mockJobs.find((job) => job.id === id)
}

export function getJobsByCategory(category: JobCategory): Job[] {
  return mockJobs.filter((job) => job.category === category)
}

export function searchJobs(query: string): Job[] {
  const lowercaseQuery = query.toLowerCase()
  return mockJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(lowercaseQuery) ||
      job.company.toLowerCase().includes(lowercaseQuery) ||
      job.id.toLowerCase().includes(lowercaseQuery),
  )
}

export function filterJobs(
  jobs: Job[],
  filters: {
    category?: JobCategory
    experienceLevel?: ExperienceLevel
    jobType?: JobType
    location?: string
    locationType?: LocationType
  },
): Job[] {
  return jobs.filter((job) => {
    if (filters.category && job.category !== filters.category) return false
    if (filters.experienceLevel && job.experienceLevel !== filters.experienceLevel) return false
    if (filters.jobType && job.jobType !== filters.jobType) return false
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) return false
    if (filters.locationType && job.locationType !== filters.locationType) return false
    return true
  })
}

export function sortJobs(jobs: Job[], sortBy: "date" | "salary" | "relevance"): Job[] {
  const sortedJobs = [...jobs]

  switch (sortBy) {
    case "date":
      return sortedJobs.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
    case "salary":
      return sortedJobs.sort((a, b) => {
        const aSalary = a.salary ? Number.parseInt(a.salary.replace(/[^0-9]/g, "")) : 0
        const bSalary = b.salary ? Number.parseInt(b.salary.replace(/[^0-9]/g, "")) : 0
        return bSalary - aSalary
      })
    case "relevance":
    default:
      return sortedJobs
  }
}
