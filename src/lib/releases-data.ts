import variantsProductCard from '@/assets/shipped/variants-product-card.png';
import dashboardPending from '@/assets/shipped/dashboard-pending.png';
import appHomeAddress from '@/assets/shipped/app-home-address.png';
import appTrialOffers from '@/assets/shipped/app-trial-offers.png';
import appUpcomingDeliveries from '@/assets/shipped/app-upcoming-deliveries.png';
import appRichPush from '@/assets/shipped/app-rich-push.png';
import ticketsMyTickets from '@/assets/shipped/tickets-my-tickets.png';
import ticketsAdmin from '@/assets/shipped/tickets-admin.png';
import waViewOptions from '@/assets/shipped/wa-view-options.png';
import waAddressLocation from '@/assets/shipped/wa-address-location.png';

export interface Release {
  slug: string;
  version: string;
  title: string;
  summary: string;
  surfaces: string[];
  highlights: string[];
  screens: { src: string; caption: string }[];
  problem: string;
  personas: { name: string; need: string }[];
  requirements: string[];
  scope: string[];
  outOfScope: string[];
  functionalRequirements: string[];
  successMetrics: { metric: string; signal: string }[];
  process: string[];
  outcome: string;
  /** Optional link to the related case study. */
  caseStudySlug?: string;
}

/**
 * Real shipped releases, taken from the client release notes I wrote and sent out
 * as product newsletters.
 */
export const releases: Release[] = [
  {
    slug: 'release-3-51-smarter-store-tools',
    version: 'Release 3.51.0',
    title: 'Smarter tools for the store',
    summary:
      'Catalogue, storefront and dashboard improvements that gave clients more control over how their products are priced, grouped and delivered.',
    surfaces: ['Customer App', 'Admin Dashboard'],
    problem: 'Customers had to scan separate product cards for each pack or size, while operations teams lacked a consolidated view of pending fulfilment and precise product-level ordering controls.',
    personas: [
      { name: 'Subscriber', need: 'Compare variants, pricing and discounts without leaving the product card.' },
      { name: 'Catalogue manager', need: 'Group, find and order variants while controlling what customers see.' },
      { name: 'Operations manager', need: 'See pending deliveries together and apply cut-off rules that match inventory operations.' },
    ],
    requirements: ['Reduce catalogue clutter without hiding choice.', 'Make pricing and discount information actionable at the decision point.', 'Give operations teams tighter cut-off and pending-delivery controls.'],
    scope: ['Product variant grouping', 'Pricing and discount bubbles', 'Product-level cut-off times', 'Combined pending-delivery view', 'Cut-off reminders'],
    outOfScope: ['Changing payment partners or checkout settlement', 'Redesigning the complete catalogue information architecture', 'Replacing delivery routing workflows'],
    functionalRequirements: ['Allow variants to be grouped, searched and drag-reordered in Catalogue.', 'Let clients choose whether CTAs show pricing, discount or both.', 'Allow a product cut-off to override the delivery-slot default.', 'Combine one-time orders and subscription deliveries in one pending view.', 'Notify customers one hour before the applicable cut-off.'],
    successMetrics: [
      { metric: 'Variant selection rate', signal: 'Customers switching pack or size from the grouped card.' },
      { metric: 'Order completion', signal: 'Conversion after viewing pricing or discount bubbles.' },
      { metric: 'Pending-delivery resolution', signal: 'Orders actioned from the consolidated dashboard view.' },
      { metric: 'Missed cut-offs', signal: 'Reduction in orders attempted after the configured cut-off.' },
    ],
    process: ['Synthesised client and customer friction into release requirements.', 'Aligned catalogue, storefront and operations behaviour with Design, Engineering and QA.', 'Validated override rules, reminder timing and dashboard links before release.', 'Prepared client-facing release communication and adoption guidance.'],
    outcome: 'The shipped release connected customer choice with operational control: a cleaner variant experience on the storefront and more actionable planning tools in the dashboard.',
    highlights: [
      'Product variants (different packs and sizes) grouped into a single product card, so customers switch variants without leaving the card — with Variant Groups managed, searched and drag-reordered from the Catalogue section of the dashboard.',
      'Actionable pricing & discount bubbles on the Buy Once and Subscribe buttons, with a client-side toggle to show pricing, discount or both.',
      'Product-level custom cut-off times that override the delivery slot default, giving clients tighter inventory and order planning.',
      'Today’s Undelivered Orders reworked into Today’s Pending Deliveries — one-time orders and subscription deliveries in a single view that links straight to Delivery Overview.',
      'Order cut-off reminder notifications one hour before cut-off, reducing missed orders and last-minute support calls.',
    ],
    screens: [
      { src: variantsProductCard, caption: 'Variant chips inside a single product card, with pricing and discount bubbles on the CTAs.' },
      { src: dashboardPending, caption: 'Today’s Pending Deliveries on the client dashboard, linked to Delivery Overview.' },
    ],
  },
  {
    slug: 'release-3-49-refreshed-rekart-experience',
    version: 'Release 3.49.0',
    title: 'The refreshed Rekart experience',
    summary:
      'A full redesign of the Customer App and Admin Panel — cleaner, faster and more intuitive, with no change to existing client workflows.',
    surfaces: ['Customer App', 'Web App', 'Admin Panel'],
    problem: 'Customer-facing navigation reflected internal business concepts, making address-based discovery, delivery visibility, payments and account tasks harder than they needed to be.',
    personas: [
      { name: 'Recurring subscriber', need: 'See upcoming deliveries and manage routine account tasks quickly.' },
      { name: 'Multi-address customer', need: 'Shop the correct catalogue for each delivery location.' },
      { name: 'Client administrator', need: 'Introduce richer engagement features without disrupting existing workflows.' },
    ],
    requirements: ['Replace internal Sales Territory selection with customer-friendly address selection.', 'Bring high-frequency account and delivery tasks closer to the main navigation.', 'Preserve existing client workflows while modernising the experience.'],
    scope: ['Address-driven homepage', 'Profile and bottom-navigation updates', 'Checkout and transaction history', 'Trial offers', 'Rich push notifications', 'Personalised referrals'],
    outOfScope: ['Changing the underlying territory model', 'Replacing existing payment gateways', 'Rebuilding client operational workflows'],
    functionalRequirements: ['Refresh the catalogue automatically when the delivery address changes.', 'Group Wallet, History, Support, Personal Details and Address Book under Profile.', 'Show Upcoming Deliveries in bottom navigation grouped by date.', 'Show trial offers only to eligible customers and remove them after redemption.', 'Compose and deliver image-based push notifications from the Admin Panel.'],
    successMetrics: [
      { metric: 'Address-to-catalogue success', signal: 'Customers reaching the correct catalogue after selecting an address.' },
      { metric: 'Upcoming delivery usage', signal: 'Visits and repeat usage from the new bottom-navigation entry.' },
      { metric: 'Checkout completion', signal: 'Customers completing checkout after viewing bill, item count and wallet balance.' },
      { metric: 'Offer adoption', signal: 'Eligible customers viewing and redeeming trial offers.' },
    ],
    process: ['Gathered customer and client insights and reviewed competing delivery experiences.', 'Reframed territory logic into an address-led customer journey.', 'Defined requirements, edge cases and acceptance criteria across app, web and admin surfaces.', 'Coordinated Design, Engineering and QA through validation and release communication.'],
    outcome: 'The redesign shipped a clearer, address-led experience while retaining the operational model clients already relied on.',
    highlights: [
      'Multi-address selection on the homepage — a Zomato/Blinkit-style experience where the catalogue updates automatically for the selected delivery address, replacing internal Sales Territory selection.',
      'Profile moved one tap away, grouping Wallet, Delivery History, Bills & Transactions, Support, Personal Details and Address Book in one place.',
      'Upcoming Deliveries promoted into the bottom navigation, so “what am I getting next?” is always one tap away.',
      'Cleaner checkout highlighting total bill, item count and wallet balance, plus a redesigned transaction history with quick filter chips and infinite scroll.',
      'Trial Offers widget for eligible customers, rich push notifications with images composed from the Admin Panel, and personalised referral codes based on the customer’s username.',
    ],
    screens: [
      { src: appHomeAddress, caption: 'Address-driven homepage with the delivery calendar and personalised catalogue.' },
      { src: appTrialOffers, caption: 'Trial Offers widget — visible only to eligible customers, and it disappears once availed.' },
      { src: appUpcomingDeliveries, caption: 'Upcoming Deliveries in the bottom navigation, grouped by delivery date.' },
      { src: appRichPush, caption: 'Rich push notifications with images, delivered across Android, iOS and the web app.' },
    ],
    caseStudySlug: 'rekart-customer-app',
  },
  {
    slug: 'release-3-47-ticketing-system',
    version: 'Release 3.47.0',
    title: 'Ticketing system for customer support',
    summary:
      'Support moved inside the product: customers raise and track tickets in the app, while support teams manage every concern from one workspace in the Admin Panel.',
    surfaces: ['Customer App', 'Admin Panel'],
    problem: 'Customer concerns were handled across disconnected support channels, limiting status visibility for customers and making ownership, prioritisation and history difficult for support teams.',
    personas: [
      { name: 'Customer', need: 'Raise an issue with evidence and follow its status without repeating the context.' },
      { name: 'Support agent', need: 'Respond from one thread with the complete issue history.' },
      { name: 'Support manager', need: 'Configure ownership, priority and response expectations.' },
    ],
    requirements: ['Create one traceable thread per concern.', 'Support common issue categories and image evidence.', 'Give teams configurable ownership and lifecycle controls.'],
    scope: ['Ticket creation and attachments', 'Customer ticket history and statuses', 'Admin ticket workspace', 'Priority and ownership rules', 'Real-time notifications'],
    outOfScope: ['Replacing real-time human support', 'Automated AI resolution', 'External help-desk migration'],
    functionalRequirements: ['Let customers select a category, explain the concern and attach images.', 'Expose Open, Awaiting You and Resolved states in My Tickets.', 'Preserve all customer-agent replies in one issue thread.', 'Allow configurable priorities, owners, timelines and lifecycle rules.', 'Notify default owners and relevant hub users when a ticket is raised.'],
    successMetrics: [
      { metric: 'Ticket containment', signal: 'Concerns raised and resolved inside the product.' },
      { metric: 'First-response time', signal: 'Time between ticket creation and the first support response.' },
      { metric: 'Resolution time', signal: 'Time from Open to Resolved by category and priority.' },
      { metric: 'Reopen rate', signal: 'Resolved tickets returned to an active state.' },
    ],
    process: ['Mapped customer issue categories and support-team workflows.', 'Defined statuses, ownership, priority, response and notification rules.', 'Worked with Design, Engineering and QA across customer and admin experiences.', 'Validated ticket history, attachment and real-time notification scenarios.'],
    outcome: 'Support moved into a shared, traceable product workflow: customers gained status visibility and teams gained centralised ownership and history.',
    highlights: [
      'Customers raise tickets with image attachments across delivery, product, subscription, payment, technical, container, profile and other categories.',
      'My Tickets gives customers ticket history, live status (Open, Awaiting You, Resolved) and a single thread per issue.',
      'Centralised Tickets module for the support team: respond, track progress, assign ownership and keep the full support history.',
      'Configurable priorities, ownership, response timelines and lifecycle rules to match how each client actually runs support.',
      'Real-time notifications to default ticket owners and hub users the moment a ticket is raised.',
    ],
    screens: [
      { src: ticketsMyTickets, caption: 'My Tickets in the Customer App — status filters, categories and full ticket history.' },
      { src: ticketsAdmin, caption: 'Centralised ticket workspace in the Admin Panel with priority, scope and ownership.' },
    ],
  },
  {
    slug: 'rekart-assistant-whatsapp-launch',
    version: 'Product launch',
    title: 'Rekart Assistant on WhatsApp',
    summary:
      'A conversational assistant on the official WhatsApp Business Platform: customers order, subscribe, pay and get support inside the chat — no app download, no waiting on support.',
    surfaces: ['WhatsApp Business Platform'],
    problem: 'Routine ordering, subscription, payment and support journeys depended on an app download or a support call, excluding customers who preferred messaging and increasing repetitive support work.',
    personas: [
      { name: 'Messaging-first customer', need: 'Order and manage deliveries without installing or opening an app.' },
      { name: 'Recurring subscriber', need: 'Change a subscription and pay within a guided conversation.' },
      { name: 'Support agent', need: 'Take over when automation cannot safely complete the request.' },
    ],
    requirements: ['Keep journeys guided and policy-compliant on the official WhatsApp platform.', 'Validate identity, address, payment and order details before confirmation.', 'Provide a clear fallback to a human agent.'],
    scope: ['Registration and address capture', 'Ordering and subscription management', 'UPI and wallet payments', 'Order updates', 'Human support hand-off', 'Dashboard synchronisation'],
    outOfScope: ['Open-ended advice outside supported Rekart intents', 'Processing unsupported image or audio requests', 'Replacing the Customer App and web app'],
    functionalRequirements: ['Register customers and capture a pinned delivery location in chat.', 'Support guided order and subscription creation, pause, cancel, modify and renew actions.', 'Provide UPI or wallet payment, recharge and payment history flows.', 'Synchronise confirmed actions with the Rekart dashboard.', 'Hand the conversation to an agent when the assistant cannot complete it.'],
    successMetrics: [
      { metric: 'Conversation completion', signal: 'Supported journeys completed without agent intervention.' },
      { metric: 'Successful response rate', signal: 'Messages correctly handled within supported intents.' },
      { metric: 'Human hand-off rate', signal: 'Conversations transferred, segmented by reason.' },
      { metric: 'Repeat engagement', signal: 'Customers returning to WhatsApp for another product action.' },
    ],
    process: ['Identified high-frequency workflows suitable for conversational self-service.', 'Defined intents, entities, validations, fallbacks and acceptance criteria.', 'Coordinated Engineering, QA, Business and Support through phased validation.', 'Reviewed conversations and used feedback to improve flows and launch communication.'],
    outcome: 'The launch created a complete messaging-first path from registration and location capture to ordering, payment and support, while preserving human hand-off.',
    highlights: [
      'Self-registration and address capture in chat, with a pinned map location so the very first delivery reaches the right doorstep.',
      'Guided subscription creation, plus pause, cancel, modify and renew without a single phone call.',
      'In-chat payments by UPI or prepaid wallet, wallet recharge and past payment history.',
      'Instant order updates and confirmations, with hand-off to a human agent for anything the assistant cannot answer.',
      'Permission-first by design — policy-compliant on the official WhatsApp Business Platform, with every order syncing back to the Rekart dashboard.',
    ],
    screens: [
      { src: waViewOptions, caption: 'The in-chat action menu customers pick from — order, subscribe, wallet, payments, support.' },
      { src: waAddressLocation, caption: 'Address capture followed by a pinned location, collected entirely inside the chat.' },
    ],
    caseStudySlug: 'rekart-whatsapp-ai-assistant',
  },
];
