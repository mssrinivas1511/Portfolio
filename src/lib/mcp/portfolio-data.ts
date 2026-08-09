// Public portfolio content exposed through the MCP server.
// Mirrors what is already published on the site.

export const profile = {
  name: "SrinivaS",
  title: "Product Manager",
  location: "Visakhapatnam, Andhra Pradesh, India",
  summary:
    "Product Manager focused on transforming ideas into impactful products. Combines data-driven decision making with user-centric design, ensuring every product delivers real value to end users while achieving business objectives.",
  coreExpertise: [
    "Product Strategy",
    "Roadmapping",
    "User Research",
    "Data Analytics",
    "AI/ML Product Development",
    "Agile/Scrum",
    "Stakeholder Management",
    "Go-to-Market",
    "UX Collaboration",
    "Technical Product Management",
  ],
  achievements: [
    {
      title: "Product Launches",
      description: "15+ successful product launches with 2M+ users",
    },
    {
      title: "Growth Impact",
      description: "300% user growth and 40% revenue increase",
    },
    {
      title: "Team Leadership",
      description: "Led cross-functional teams of 20+ professionals",
    },
  ],
  resumeUrl: "/cv-srinivas.pdf",
} as const;

export const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    category: "Enterprise SaaS",
    role: "Senior Product Manager",
    description:
      "Revolutionary AI assistant that analyzes business data and provides actionable insights. Increased user productivity by 60% and reduced analysis time from hours to minutes.",
    impact: "2M+ users, 60% productivity increase",
    technologies: ["AI/ML", "React", "Python", "AWS"],
  },
  {
    id: 2,
    title: "Next-Gen Fintech Mobile App",
    category: "Fintech",
    role: "Lead Product Manager",
    description:
      "Complete financial ecosystem with AI-driven insights, seamless payments, and personalized investment recommendations. Achieved 300% user growth in 12 months.",
    impact: "300% user growth, $5M ARR",
    technologies: ["React Native", "Node.js", "Blockchain", "ML"],
  },
  {
    id: 3,
    title: "Healthcare Data Intelligence",
    category: "HealthTech",
    role: "Product Manager",
    description:
      "HIPAA-compliant platform that aggregates patient data across systems, providing real-time insights for healthcare providers. Improved patient outcomes by 40%.",
    impact: "40% improved outcomes, 100+ hospitals",
    technologies: ["Vue.js", "FHIR", "Azure", "Analytics"],
  },
] as const;

export const skillCategories = [
  {
    title: "Product Strategy",
    skills: [
      { name: "Roadmapping", level: 95 },
      { name: "Market Research", level: 90 },
      { name: "Competitive Analysis", level: 88 },
      { name: "Product Vision", level: 93 },
    ],
  },
  {
    title: "Analytics & Data",
    skills: [
      { name: "Data Analytics", level: 92 },
      { name: "A/B Testing", level: 89 },
      { name: "SQL", level: 85 },
      { name: "Product Metrics", level: 94 },
    ],
  },
  {
    title: "Leadership",
    skills: [
      { name: "Team Management", level: 91 },
      { name: "Stakeholder Management", level: 93 },
      { name: "Cross-functional Collaboration", level: 96 },
      { name: "Agile/Scrum", level: 88 },
    ],
  },
  {
    title: "Technical",
    skills: [
      { name: "API Integration", level: 83 },
      { name: "Technical Documentation", level: 90 },
      { name: "System Architecture", level: 79 },
      { name: "Cloud Platforms", level: 82 },
    ],
  },
] as const;

export const tools = [
  "Figma",
  "Jira",
  "Confluence",
  "Mixpanel",
  "Amplitude",
  "Tableau",
  "Notion",
  "Slack",
  "GitHub",
  "Balsamiq",
  "Google Analytics",
  "Hotjar",
] as const;

export const certifications = [
  "Certified UI/UX Designer",
  "Google Analytics Certified",
  "Figma Expert Diploma",
  "Product Management Certificate",
] as const;

export const contact = {
  email: "ssai55030@gmail.com",
  phone: "+91 7287070114",
  location: "Visakhapatnam, Andhra Pradesh",
  social: {
    linkedin: "https://www.linkedin.com/in/mssrinivas1511",
    twitter: "https://twitter.com/SaiSrinivaS2371",
    github: "https://github.com/mssrinivas1511",
    instagram: "https://www.instagram.com/nivas_1511/",
  },
} as const;
