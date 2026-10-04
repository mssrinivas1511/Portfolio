// Single source of truth for every outbound link / CTA destination on the site.
export const siteConfig = {
  name: 'Manda Sai Srinivas',
  role: 'Associate Product Manager',
  email: 'ssai55030@gmail.com',
  phone: '+91 7287070114',
  location: 'Pune, Maharashtra, India',
  resumeUrl: '/MSSRINIVAS_CV.pdf',
  resumeFileName: 'MSSRINIVAS_CV.pdf',
  // Update this to a Calendly / Google Calendar booking link when available.
  // Falls back to a pre-filled email if left empty.
  calendarUrl: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/mssrinivas1511',
    whatsapp: 'https://wa.me/917287070114',
    github: 'https://github.com/mssrinivas1511',
    instagram: 'https://www.instagram.com/nivas_1511/',
  },
} as const;

/** One predefined outreach message reused across email, WhatsApp and Instagram. */
export const outreachMessage =
  "Hi Srinivas, I would like to connect with you to have a discussion on those lines.";

export const outreachSubject = 'Would like to connect for a discussion';

/** Email with subject + message already filled in. */
export const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  outreachSubject,
)}&body=${encodeURIComponent(`${outreachMessage}\n\n`)}`;

/** WhatsApp chat that opens with the message pre-typed. */
export const whatsappHref = `${siteConfig.social.whatsapp}?text=${encodeURIComponent(
  outreachMessage,
)}`;

/** Instagram direct-message thread (Instagram does not allow pre-filled text). */
export const instagramDmHref = 'https://ig.me/m/nivas_1511';

export const scheduleCallHref =
  siteConfig.calendarUrl ||
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    'Schedule a call with Manda Sai Srinivas',
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
