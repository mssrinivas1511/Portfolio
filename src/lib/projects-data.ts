import wireframeWhatsappFlow from '@/assets/wireframe-whatsapp-flow.jpg';
import wireframeCustomerApp from '@/assets/wireframe-customer-app.jpg';
import waViewOptions from '@/assets/shipped/wa-view-options.png';
import waSelectProduct from '@/assets/shipped/wa-select-product.png';
import waSubscriptionFlow from '@/assets/shipped/wa-subscription-flow.png';
import appHomeAddress from '@/assets/shipped/app-home-address.png';
import appUpcomingDeliveries from '@/assets/shipped/app-upcoming-deliveries.png';
import appTrialOffers from '@/assets/shipped/app-trial-offers.png';


export interface ProjectSection {
  heading: string;
  intro?: string;
  bullets?: string[];
  flow?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  role: string;
  product: string;
  caseStudyLabel: string;
  impact: string;
  image: string;
  selectedWork: {
    tag: string;
    title: string;
    summary: string;
    timeline: string;
    outcome: string;
  };
  /** High-fidelity screens from the actual product work. */
  hiFi?: { src: string; title: string; caption: string }[];
  /** Low-fidelity wireframe / flow sheet that preceded the high-fidelity work. */
  wireframe?: { src: string; title: string; caption: string };
  technologies: string[];

  metrics?: { value: string; label: string }[];
  overview: string[];
  sections: ProjectSection[];
  responsibilities: string[];
  skills: string[];
}

export const projects: Project[] = [
  {
    slug: 'rekart-whatsapp-ai-assistant',
    title: 'Rekart WhatsApp AI Assistant',
    subtitle: 'NLP-based conversational product',
    tagline:
      'Owned product definition and launch of the NLP-based WhatsApp AI Assistant for Rekart.',
    category: 'AI / Conversational Product',
    role: 'Associate Product Manager',
    product: 'Rekart - a SaaS delivery management platform for subscription and recurring-delivery businesses (milk, tiffin, grocery), used by 300+ client businesses.',
    caseStudyLabel: 'Discovery → Launch · 0 → 1',
    impact: '30% user engagement · 90%+ successful response rate',
    image: waViewOptions,
    selectedWork: {
      tag: 'AI · Conversational Product · 0 → 1',
      title: 'Rekart WhatsApp AI Assistant',
      summary:
        'Turning ordering, subscriptions, payments and support into a self-service conversation on WhatsApp.',
      timeline: 'Apr 2026 – Present',
      outcome:
        'Live with 130+ clients · ~30% of registered customers engaged · 90%+ supported queries resolved',
    },
    wireframe: {
      src: wireframeWhatsappFlow,
      title: 'Conversation flow wireframe',
      caption:
        'The intent map and decision tree I wireframed first — entry points, supported intents, fallbacks and hand-off to support — before any visual design.',
    },
    hiFi: [
      {
        src: waSelectProduct,
        title: 'Guided product selection',
        caption:
          'The shipped in-chat flow guides customers from category selection to the exact product without leaving WhatsApp.',
      },
      {
        src: waSubscriptionFlow,
        title: 'Subscription creation in chat',
        caption:
          'Customers choose frequency and delivery preferences through a structured conversation designed for quick completion.',
      },
    ],
    technologies: ['NLP / AI', 'WhatsApp Business API', 'Razorpay', 'Easebuzz', 'Mixpanel', 'Jira', 'Confluence'],
    metrics: [
      { value: '30%', label: 'User engagement' },
      { value: '90%+', label: 'Successful response rate' },
      { value: '300+', label: 'Client businesses served' },
    ],
    overview: [
      'Rekart customers traditionally had to open the Customer App or contact support to place an order, manage a subscription, pay a bill or check their wallet. The opportunity I framed was simple: what if customers could do all of that just by messaging the business on WhatsApp?',
      'I owned this conversational AI initiative end to end — product discovery, conversational UX, requirements and use cases, cross-functional execution, release validation, analytics, feedback loops and go-to-market. It shipped across two phases for Rekart\'s 300+ client businesses.',
    ],
    sections: [
      {
        heading: 'The problem',
        intro:
          'Routine, high-frequency customer actions were locked behind app downloads, logins and multi-screen navigation — and everything that fell through landed on the support team.',
        bullets: [
          'App download and login required for every routine action',
          'Subscription pause / resume / modify needed several screens',
          'Payment and wallet queries went to human support',
          'No lightweight channel for customers who never install the app',
        ],
      },
      {
        heading: 'Conversational architecture I defined',
        flow: `CUSTOMER
   │
   ▼
WhatsApp Chat
   │
   ▼
NLP / AI Conversation
   │
   ├──► Intent Detection
   └──► Context & Entities
   │
   ▼
Conversation Flow
   │
   ▼
Rekart Business Logic
   │
   ├──► Orders
   ├──► Subscriptions
   └──► Wallet / Payments
   │
   ▼
Confirmation ──► WhatsApp Response`,
      },
      {
        heading: 'Phase 1 — Core self-service',
        intro: 'Bringing the most important existing customer workflows into chat.',
        bullets: [
          'One-time orders — "Can I order 2 packets of milk tomorrow?" → intent understood, information validated, order confirmed',
          'Subscription management — pause, resume, modify and cancel recurring deliveries conversationally',
          'Payments — payment link sharing, payment assistance and transaction confirmation',
          'Wallet — balance, payment history and account information on request',
          'Notifications — manual and automated order and payment updates through Rekart',
        ],
      },
      {
        heading: 'Phase 2 — Expanding the conversational journey',
        bullets: [
          'Customer registration directly inside the conversation',
          'Delivery address capture through chat',
          'Subscription creation (not just management)',
          'Enhanced conversational flows — from a set of bot commands to a complete journey',
        ],
      },
      {
        heading: 'Key product decisions',
        bullets: [
          'Registered-number-only interaction: unregistered numbers were guided to the app/website to register, keeping identity and billing safe',
          'Explicit boundaries: untrained conversations, image and audio messages were treated as unsupported instead of being answered inaccurately',
          'Bot-off / human handoff: bot mode could be disabled per conversation so support could take over without breaking the flow',
          'Defined edge cases, validation rules and acceptance criteria for every flow',
        ],
      },
      {
        heading: 'Failure handling & continuous improvement loop',
        flow: `Customer message
      │
      ▼
Was intent understood?
   ┌──┴──┐
  YES    NO
   │      │
   ▼      ▼
Process  Fallback
   │      │
   ▼      ▼
Success  Analyze conversation
            │
            ▼
       Identify gap
            │
            ▼
     Improve flow / prompt`,
      },
      {
        heading: 'Measurement & feedback',
        intro:
          'I tracked the product in Mixpanel and reviewed real conversations after every release to shape the roadmap.',
        bullets: [
          'User engagement and retention',
          'Successful response rate for supported queries',
          'Unsupported queries and unsuccessful conversations',
          'Direct customer and support feedback → prioritised improvements',
        ],
      },
      {
        heading: 'Go-to-market',
        intro:
          'I also owned how the product was communicated and adopted, positioned as "Your Business. Powered by AI. Now on WhatsApp."',
        bullets: [
          'Phase 1 and Phase 2 product communication',
          'Product newsletters and feature campaigns',
          'Launch messaging and customer-facing positioning',
          'Client enablement across national and international accounts',
        ],
      },
    ],
    responsibilities: [
      'Identified which Rekart workflows were suitable for conversational self-service',
      'Defined user journeys, conversational flows, intents, requirements and use cases across Phase 1 and Phase 2',
      'Translated business requirements into actionable product requirements and user stories for engineering',
      'Defined edge cases, validation rules and acceptance criteria',
      'Collaborated with Engineering, Design, QA, Business and Customer Support teams through implementation and UAT',
      'Validated releases, identified post-release issues and drove iterative improvements',
      'Tracked engagement, adoption and retention in Mixpanel; managed delivery in Jira and documentation in Confluence',
      'Drove adoption through newsletters, feature campaigns and launch communication',
    ],
    skills: [
      'Product Discovery',
      'Conversational UX',
      'Requirements & PRDs',
      'Product Strategy',
      'Cross-functional Collaboration',
      'Product Analytics',
      'Go-to-Market',
      'AI Product Management',
    ],
  },
  {
    slug: 'rekart-customer-app',
    title: 'Rekart Customer App Transformation',
    subtitle: 'From complex workflows to a simpler, personalised experience',
    tagline:
      'An end-to-end product evolution simplifying ordering, subscriptions, payments, delivery visibility and location-based catalogue personalisation.',
    category: 'SaaS / Mobile & Web App',
    role: 'Associate Product Manager',
    product: 'Rekart - a SaaS delivery management platform for subscription and recurring-delivery businesses (milk, tiffin, grocery), used by 300+ client businesses.',
    caseStudyLabel: 'Redesign',
    impact: 'Higher feature adoption through iterative customer-app improvements',
    image: appHomeAddress,
    selectedWork: {
      tag: 'SaaS · Mobile & Web · Redesign',
      title: 'Rekart Customer App: from internal territories to address-led ordering',
      summary:
        'Simplifying ordering, subscriptions, payments and delivery visibility, and replacing Sales Territory selection with delivery-address-driven catalogues.',
      timeline: 'Dec 2025 – Present',
      outcome:
        'Customer-reported issues fell ~30% and adoption of shipped features rose ~25% after these releases',
    },
    wireframe: {
      src: wireframeCustomerApp,
      title: 'Customer journey wireframes',
      caption:
        'Low-fidelity screens for home, catalogue, subscription calendar and cart used to align design, engineering and QA on the redesigned journey.',
    },
    hiFi: [
      {
        src: appUpcomingDeliveries,
        title: 'Upcoming deliveries at a glance',
        caption:
          'The shipped navigation gives customers one-tap access to deliveries grouped by date.',
      },
      {
        src: appTrialOffers,
        title: 'Eligible trial offers',
        caption:
          'A targeted trial-offer widget appears only for eligible customers and clears after redemption.',
      },
    ],
    technologies: ['Mixpanel', 'Jira', 'Confluence', 'Figma', 'Razorpay', 'Easebuzz', 'React Native'],
    overview: [
      'Rekart - a SaaS delivery management platform for subscription and recurring-delivery businesses (milk, tiffin, grocery), used by 300+ client businesses. It includes a Customer App, web app, client dashboard and Driver app, with payments powered by Razorpay and Easebuzz.',
      'I gathered insights from customers and clients, ran market research and competitor analysis, and used that to shape the Customer App roadmap. My work covered customer journey redesign, the ordering experience, personalisation, subscriptions, payments, history, navigation and territory-based catalogues — released iteratively with design, development and QA teams.',
    ],
    sections: [
      {
        heading: 'The customer journey I worked on',
        flow: `CUSTOMER APP
     │
     ▼
  HOMEPAGE
     │
 ┌───────────┼───────────┐
 ▼           ▼           ▼
Address    Products    Wallet
 │           │
 ▼           ▼
Personalized Catalogue
     │
     ▼
  Ordering
     │
 ┌───────────┼───────────┐
 ▼           ▼           ▼
One-time  Subscription  Payment
 Order     Management
     │
     ▼
Upcoming Deliveries
     │
     ▼
History / Transactions`,
      },
      {
        heading: 'Phase 1 — Foundation & core experience',
        bullets: [
          'Configurable subscription CTA — default "Subscribe", predefined or custom labels with character limits, so each client could match their own business language',
          'Plan selection — automatically bring the selected (highest-discount) plan into view, including trial plans',
          'Plan switching — refresh only what is needed instead of reloading the whole page, and keep the selected plan',
          'Plan visibility — clearer trial tags, discount presentation and plan categorisation, ordered Trial Plans → Other Plans',
          'Subscription management — clearer status, quantity, delivery information, subscription address and actions, plus address editing',
        ],
      },
      {
        heading: 'Phase 2 — Experience optimisation',
        bullets: [
          'Transaction history redesigned around category/status chips, easier filtering and smoother scrolling',
          'Delivery history redesigned with quick filters and seamless scrolling',
          'Product search behaviour defined precisely — match at the start of words across product name, category, one-line description, volume and variant chips; no mid-word or scattered-character matches',
          'Product detail performance improved from both Store and Homepage entry points, and description typography made readable',
          'Product name separated from product volume ("A2 Milk" + "500 ml" rendered as "A2 Milk 500 ml") for data and UX consistency with less admin effort',
          'UI consistency — icon migration to a single stroke-rounded set, iOS splash logo scaling fix, pull-to-refresh across the app, redesigned empty states, login/signup logo fix',
          'Rekart Stores seller code redesigned into numeric boxes to reduce input errors',
        ],
      },
      {
        heading: 'Phase 3 — Homepage & ordering redesign',
        intro:
          'The most significant change: replacing an internal Sales Territory / Map Zone selection with something customers actually understand — their delivery address.',
        flow: `BEFORE                       AFTER
Login                        Login
  ↓                            ↓
Sales Territory /            Homepage
Map Zone                       ↓
  ↓                          Select Delivery Address
Homepage                       ↓
  ↓                          Address determines Territory
Browse Products                ↓
                             Personalized Catalogue
                               ↓
                             Order`,
      },
      {
        heading: 'Address → Territory → Catalogue → Ordering',
        intro:
          'Delivery address moved onto the Homepage and became the key to personalisation. The catalogue updates automatically for the selected address, so customers never need to understand the underlying business structure.',
        bullets: [
          'Mandatory address selection only for clients using Sales Territories; hidden entirely for clients who do not',
          'Personalised catalogue derived from the delivery location',
          'Multi-location ordering — one customer, multiple delivery locations and cities from the same app and account',
        ],
      },
      {
        heading: 'Homepage & navigation simplification',
        bullets: [
          'Profile entry placed beside the wallet area for easier access',
          'Wallet information made more prominent',
          'Upcoming Deliveries promoted into bottom navigation — answering "what am I getting next?" in one tap',
          'Overall principle: put frequently used customer actions closer to the customer',
        ],
      },
      {
        heading: 'Payment experience & status clarity',
        intro:
          'Payment screens are a high-risk conversion point, so the redesign made the answer to "what am I paying, how much, and what happens next?" obvious.',
        bullets: [
          'Emphasised total bill, number of items and wallet balance in a cleaner layout',
          'Distinct states instead of a generic success message: order placed, subscription created, payment verification pending, cash pickup initiated',
          'Status states defined across orders, subscriptions, wallet recharge and bill payment',
          'Multiple payment methods supported via Razorpay and Easebuzz',
        ],
      },
      {
        heading: 'How I worked',
        bullets: [
          'Gathered insights from customers and clients, plus market research and competitor analysis',
          'Reframed business concepts into customer language (Sales Territory → Delivery Address)',
          'Reduced cognitive load to: Where → What → When → How much → What\'s next',
          'Shipped improvements in every release and increased feature adoption',
          'Worked closely with design, development and QA teams; tracked behaviour in Mixpanel and managed delivery in Jira and Confluence',
        ],
      },
    ],
    responsibilities: [
      'Identified customer experience gaps across ordering, subscriptions, payments, catalogue discovery and delivery management',
      'Gathered customer and client insights, ran market research and competitor analysis',
      'Defined user journeys and translated customer and business requirements into product requirements and user stories',
      'Defined edge cases, validation rules and acceptance criteria',
      'Prioritised UX improvements based on customer friction and business impact',
      'Collaborated with Design, Development and QA teams through implementation and UAT',
      'Validated releases, identified post-release issues and drove iterative improvements across three phases',
      'Tracked adoption and retention in Mixpanel; drove feature adoption through product communication',
    ],
    skills: [
      'Product Discovery',
      'User Research',
      'Market & Competitor Analysis',
      'Information Architecture',
      'Requirements & Acceptance Criteria',
      'Roadmapping',
      'Product Analytics',
      'Cross-functional Execution',
    ],
  },
];

export const getProjectBySlug = (slug?: string) => projects.find((p) => p.slug === slug);
