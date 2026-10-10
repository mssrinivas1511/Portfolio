import { siteConfig } from './site-data';
import { toast } from 'sonner';

// Single source of truth for every outbound link / CTA destination on the site.
export { siteConfig };

/** Message pre-filled when someone reaches out on WhatsApp. */
export const outreachMessage =
  'Hi Srinivas, I came across your portfolio and would like to connect.';

/** Email link. */
export const emailHref = `mailto:${siteConfig.email}`;

/** WhatsApp chat that opens with the message pre-typed. */
export const whatsappHref = `${siteConfig.social.whatsapp}?text=${encodeURIComponent(
  outreachMessage,
)}`;

/** Downloads validated PDF bytes, including in the local preview without CDN routing. */
export const downloadResume = async () => {
  try {
    const origin = window.location.hostname === 'localhost'
      ? 'https://mssrinivas1511.lovable.app'
      : window.location.origin;
    const response = await fetch(new URL(siteConfig.resumeUrl, origin));
    if (!response.ok || !response.headers.get('content-type')?.includes('application/pdf')) {
      throw new Error('Resume unavailable');
    }
    const blobUrl = URL.createObjectURL(await response.blob());
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = siteConfig.resumeFileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);
  } catch {
    toast.error('The resume could not be downloaded. Please try again.');
  }
};
