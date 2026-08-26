import type { Major } from "./resources";

export type CareerTrack = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  majors: Major[];
  searchTerms: string[];
  priorities: string[];
};

export const careerTracks: CareerTrack[] = [
  {
    slug: "software-engineering",
    title: "Software Engineering",
    shortTitle: "Software Engineering",
    description:
      "The deepest track on WantAnInternship: internship repositories, startup boards, interview prep, application tools and new-grad resources for software roles.",
    majors: ["Computer Science", "Data Science", "Cybersecurity", "Engineering"],
    searchTerms: ["software", "developer", "engineering", "swe", "coding", "technical"],
    priorities: [
      "Apply early and consistently using the active internship repositories.",
      "Build one or two projects you can explain deeply in an interview.",
      "Practice data structures, algorithms and online assessments before recruiting peaks.",
      "Keep a simple application tracker and follow up on referrals or recruiter conversations.",
    ],
  },
  {
    slug: "ai-data",
    title: "AI, Machine Learning & Data",
    shortTitle: "AI / Data",
    description:
      "Resources for data science, machine learning, analytics and AI-focused internships and research opportunities.",
    majors: ["Data Science", "Computer Science", "Research"],
    searchTerms: ["data", "machine learning", "ai", "analytics", "research"],
    priorities: [
      "Show evidence that you can work with real datasets, not only coursework.",
      "Target both software and data-specific recruiting pipelines.",
      "Use research programs when industry experience is limited.",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    description:
      "Security-focused internship, government, technical preparation and early-career discovery resources.",
    majors: ["Cybersecurity", "Computer Science"],
    searchTerms: ["security", "cyber", "government", "technical"],
    priorities: [
      "Build hands-on proof through labs, CTFs or security projects.",
      "Check government and defense-oriented student pipelines in addition to tech companies.",
      "Prepare for networking, operating systems and security fundamentals interviews.",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering",
    shortTitle: "Engineering",
    description:
      "Broad engineering internship sources covering technical companies, university recruiting and public-sector opportunities.",
    majors: ["Engineering"],
    searchTerms: ["engineering", "hardware", "technical", "manufacturing"],
    priorities: [
      "Filter by your engineering discipline when you reach each job board.",
      "Use university recruiting and career fairs alongside public job boards.",
      "Highlight hands-on design, lab and project experience.",
    ],
  },
  {
    slug: "finance",
    title: "Finance",
    shortTitle: "Finance",
    description:
      "Internship and early-career resources for finance, banking, investing and related business roles.",
    majors: ["Finance", "Business"],
    searchTerms: ["finance", "bank", "business", "analyst"],
    priorities: [
      "Start early for structured finance recruiting cycles.",
      "Use campus recruiting heavily for banks and large employers.",
      "Prepare concise behavioral stories and basic technical finance questions.",
    ],
  },
  {
    slug: "business",
    title: "Business & Consulting",
    shortTitle: "Business",
    description:
      "General business, operations, consulting and analyst internship discovery resources.",
    majors: ["Business", "Finance", "Marketing"],
    searchTerms: ["business", "consulting", "operations", "analyst"],
    priorities: [
      "Keep your search broad across analyst, operations and strategy titles.",
      "Use alumni and campus recruiting to complement online applications.",
      "Practice structured behavioral and case-style interviews where relevant.",
    ],
  },
  {
    slug: "marketing",
    title: "Marketing",
    shortTitle: "Marketing",
    description:
      "Resources for marketing, growth, communications, content and related internships.",
    majors: ["Marketing", "Business", "Design"],
    searchTerms: ["marketing", "growth", "communications", "content"],
    priorities: [
      "Create a small portfolio with campaigns, content or measurable projects.",
      "Search startup boards for growth and generalist opportunities.",
      "Show metrics and outcomes whenever possible on your resume.",
    ],
  },
  {
    slug: "design",
    title: "Design",
    shortTitle: "Design",
    description:
      "Discovery resources for product design, UX/UI and creative internships, with an emphasis on portfolio-ready experience.",
    majors: ["Design", "Marketing"],
    searchTerms: ["design", "ux", "ui", "product", "creative"],
    priorities: [
      "Treat your portfolio as the primary proof of your ability.",
      "Explain the problem, process and tradeoffs behind each project.",
      "Use startup boards where small teams often hire design generalists.",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    shortTitle: "Healthcare",
    description:
      "Student opportunities across healthcare organizations, research environments and general internship platforms.",
    majors: ["Healthcare", "Research"],
    searchTerms: ["health", "medical", "research", "hospital"],
    priorities: [
      "Use research programs and large health-system career pages in parallel.",
      "Highlight clinical, volunteer, lab or patient-facing experience when relevant.",
      "Check eligibility requirements early for regulated or credentialed roles.",
    ],
  },
  {
    slug: "research",
    title: "Research",
    shortTitle: "Research",
    description:
      "University, lab, REU and research-program resources for students considering academic or research-heavy careers.",
    majors: ["Research", "Data Science", "Healthcare", "Computer Science"],
    searchTerms: ["research", "reu", "lab", "university"],
    priorities: [
      "Apply to multiple structured programs rather than betting on one lab.",
      "Email faculty with a specific reason their work interests you.",
      "Keep a concise project or research summary ready to share.",
    ],
  },
];

export function getCareerTrack(slug: string) {
  return careerTracks.find((track) => track.slug === slug);
}
