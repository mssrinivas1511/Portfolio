// Public portfolio content exposed through the MCP server.
// Mirrors what is already published on the site.
import { siteConfig } from '../site-config';

export const profile = {
  name: "Manda Sai Srinivas",
  title: "Associate Product Manager",
  location: "Pune, Maharashtra, India",
  summary:
    "Associate Product Manager focused on transforming ideas into impactful products. Combines data-driven decision making with user-centric design, ensuring every product delivers real value to end users while achieving business objectives.",
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
      title: "Conversational AI",
      description: "Owned product definition and launch of the NLP-based WhatsApp AI Assistant: 30% user engagement and 90%+ successful response rate",
    },
    {
      title: "Feature adoption",
      description: "Shipped targeted customer-app improvements in every release and increased feature adoption",
    },
    {
      title: "Cross-functional delivery",
      description: "Shipped across customer app, web app, client dashboard and driver app with design, development and QA teams",
    },
  ],
  resumeUrl: siteConfig.resumeUrl,
} as const;

export const projects = [
  {
    id: 1,
    slug: "rekart-whatsapp-ai-assistant",
    title: "Rekart WhatsApp AI Assistant",
    category: "AI / Conversational Product",
    role: "Associate Product Manager",
    description:
      "Owned product definition and launch of the NLP-based WhatsApp AI Assistant for Rekart - a SaaS delivery management platform for subscription and recurring-delivery businesses (milk, tiffin, grocery), used by 300+ client businesses.",
    impact: "30% user engagement and 90%+ successful response rate",
    technologies: ["NLP/AI", "WhatsApp Business API", "Razorpay", "Easebuzz", "Mixpanel", "Jira", "Confluence"],
    url: "/projects/rekart-whatsapp-ai-assistant",
  },
  {
    id: 2,
    slug: "rekart-customer-app",
    title: "Rekart Customer App Transformation",
    category: "SaaS / Mobile & Web App",
    role: "Associate Product Manager",
    description:
      "End-to-end product evolution of the Rekart Customer App across three phases: subscription and plan-selection UX, payment clarity, search and history redesign, and a homepage redesign replacing internal Sales Territory selection with delivery-address-driven personalised catalogues and multi-location ordering.",
    impact:
      "Increased feature adoption through iterative customer-app improvements across client businesses",
    technologies: ["Mixpanel", "Jira", "Confluence", "Figma", "Razorpay", "Easebuzz", "React Native"],
    url: "/projects/rekart-customer-app",
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
  "Product Management with Gen AI Certificate",
  "AI Product Management Certificate",
  "Figma Certified",
] as const;

export const contact = {
  email: "ssai55030@gmail.com",
  phone: "+91 7287070114",
  location: "Pune, Maharashtra, India",
  social: {
    linkedin: "https://www.linkedin.com/in/mssrinivas1511",
    whatsapp: "https://wa.me/917287070114",
    github: "https://github.com/mssrinivas1511",
  },
} as const;
