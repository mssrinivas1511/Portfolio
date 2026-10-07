import { Linkedin, Github, Mail } from 'lucide-react';
import { siteConfig, emailHref } from '@/lib/site-config';

const Footer = () => {
  const socials = [
    { icon: Linkedin, label: 'LinkedIn', url: siteConfig.social.linkedin },
    { icon: Mail, label: 'Email', url: emailHref },
    { icon: Github, label: 'GitHub', url: siteConfig.social.github },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="portfolio-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-center md:text-left">
            © 2026 {siteConfig.name}
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target={url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
