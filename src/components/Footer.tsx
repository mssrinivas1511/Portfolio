import { Heart, Linkedin, Twitter, Github, Instagram, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const Footer = () => {
  const socials = [
    { icon: Linkedin, label: 'LinkedIn', url: siteConfig.social.linkedin },
    { icon: Twitter, label: 'Twitter / X', url: siteConfig.social.twitter },
    { icon: Github, label: 'GitHub', url: siteConfig.social.github },
    { icon: Instagram, label: 'Instagram', url: siteConfig.social.instagram },
    { icon: Mail, label: 'Email', url: `mailto:${siteConfig.email}` },
  ];

  return <footer className="bg-background/80 backdrop-blur-glass border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target={url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-accent animate-pulse" fill="currentColor" />
            <span>& Lovable</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
