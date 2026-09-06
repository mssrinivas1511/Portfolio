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
  version: string;
  title: string;
  summary: string;
  surfaces: string[];
  highlights: string[];
  screens: { src: string; caption: string }[];
  /** Optional link to the related case study. */
  caseStudySlug?: string;
}

/**
 * Real shipped releases, taken from the client release notes I wrote and sent out
 * as product newsletters.
 */
export const releases: Release[] = [
  {
    version: 'Release 3.51.0',
    title: 'Smarter tools for the store',
    summary:
      'Catalogue, storefront and dashboard improvements that gave clients more control over how their products are priced, grouped and delivered.',
    surfaces: ['Customer App', 'Admin Dashboard'],
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
    version: 'Release 3.49.0',
    title: 'The refreshed Rekart experience',
    summary:
      'A full redesign of the Customer App and Admin Panel — cleaner, faster and more intuitive, with no change to existing client workflows.',
    surfaces: ['Customer App', 'Web App', 'Admin Panel'],
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
    version: 'Release 3.47.0',
    title: 'Ticketing system for customer support',
    summary:
      'Support moved inside the product: customers raise and track tickets in the app, while support teams manage every concern from one workspace in the Admin Panel.',
    surfaces: ['Customer App', 'Admin Panel'],
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
    version: 'Product launch',
    title: 'Rekart Assistant on WhatsApp',
    summary:
      'A conversational assistant on the official WhatsApp Business Platform: customers order, subscribe, pay and get support inside the chat — no app download, no waiting on support.',
    surfaces: ['WhatsApp Business Platform'],
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
