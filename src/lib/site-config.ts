// Single source of truth for every outbound link / CTA destination on the site.
export const siteConfig = {
  name: 'M S SrinivaS',
  role: 'Product Manager',
  email: 'ssai55030@gmail.com',
  phone: '+91 7287070114',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  resumeUrl: '/cv-srinivas.pdf',
  resumeFileName: 'M-S-Srinivas-Resume.pdf',
  // Update this to a Calendly / Google Calendar booking link when available.
  // Falls back to a pre-filled email if left empty.
  calendarUrl: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/mssrinivas1511',
    twitter: 'https://twitter.com/SaiSrinivaS2371',
    github: 'https://github.com/mssrinivas1511',
    instagram: 'https://www.instagram.com/nivas_1511/',
  },
} as const;

export const scheduleCallHref =
  siteConfig.calendarUrl ||
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    'Schedule a call with M S SrinivaS',
  )}&body=${encodeURIComponent(
    "Hi Srinivas,\n\nI'd like to schedule a call. Here are a few times that work for me:\n\n- \n- \n\nThanks!",
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
