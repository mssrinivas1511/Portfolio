import { Card } from '@/components/ui/card';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';
import { siteConfig, emailHref, whatsappHref } from '@/lib/site-config';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: emailHref,
    external: false,
    action: 'Send an email',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mssrinivas1511',
    href: siteConfig.social.linkedin,
    external: true,
    action: 'Connect on LinkedIn',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 72870 70114',
    href: whatsappHref,
    external: true,
    action: 'Message on WhatsApp',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-heading">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-4xl font-bold mb-4">Let's talk</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm open to Associate PM and PM roles in B2B SaaS, commerce and AI products.
            The quickest way to reach me is email or LinkedIn.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactCards.map(({ icon: Icon, label, value, href, external, action }) => (
            <Card key={label} className="glass p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="eyebrow mb-1">{label}</p>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="text-foreground font-medium break-all hover:text-primary transition-colors mb-4"
              >
                {value}
              </a>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {action}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
