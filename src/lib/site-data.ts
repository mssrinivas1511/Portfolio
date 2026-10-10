import resumeAsset from '../assets/final-resume.pdf.asset.json';

// Runtime-neutral data shared by the website and agent tools.
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