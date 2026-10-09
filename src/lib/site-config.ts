import resumeAsset from '@/assets/final-resume.pdf.asset.json';

// Single source of truth for every outbound link / CTA destination on the site.
export const siteConfig = {
  name: 'Manda Sai Srinivas',
  role: 'Associate Product Manager',
  email: 'ssai55030@gmail.com',
  phone: '+91 7287070114',
  location: 'Pune, Maharashtra, India',
  resumeUrl: resumeAsset.url,
  resumeFileName: 'Manda_Sai_Srinivas_APM_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/mssrinivas1511',
    whatsapp: 'https://wa.me/917287070114',
    github: 'https://github.com/mssrinivas1511',
  },
} as const;

/** Message pre-filled when someone reaches out on WhatsApp. */
export const outreachMessage =
  'Hi Srinivas, I came across your portfolio and would like to connect.';

/** Email link. */
export const emailHref = `mailto:${siteConfig.email}`;

/** WhatsApp chat that opens with the message pre-typed. */
export const whatsappHref = `${siteConfig.social.whatsapp}?text=${encodeURIComponent(
  outreachMessage,
)}`;

/** Downloads the resume PDF reliably (no navigation, no popup blocking). */
export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = siteConfig.resumeUrl;
  link.download = siteConfig.resumeFileName;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
