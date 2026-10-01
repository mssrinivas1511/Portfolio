import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Linkedin, MessageCircle, Github, Instagram, ArrowRight } from 'lucide-react';
import { siteConfig, scheduleCallHref, emailHref, whatsappHref, instagramDmHref, outreachMessage } from '@/lib/site-config';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      link: emailHref,
      external: false,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Message me directly',
      link: whatsappHref,
      external: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.location,
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: siteConfig.social.linkedin, color: 'hover:text-blue-500' },
    { icon: MessageCircle, label: 'WhatsApp', url: whatsappHref, color: 'hover:text-green-400' },
    { icon: Github, label: 'GitHub', url: siteConfig.social.github, color: 'hover:text-purple-400' },
    { icon: Instagram, label: 'Instagram', url: instagramDmHref, color: 'hover:text-pink-400' },
  ];

  return (
    <section id="contact" className="portfolio-section bg-gradient-to-br from-background to-muted/20">
      <div className="portfolio-container">
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Interested in my work or exploring a product opportunity? Email, WhatsApp or Instagram — the message
            &ldquo;{outreachMessage}&rdquo; is already written for you.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <Card className="glass p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.external ? '_blank' : undefined}
                        rel={info.external ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Social Links */}
          <Card className="glass p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Follow Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 glass rounded-lg hover:scale-105 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-6 h-6 mr-3 shrink-0" />
                  <span className="font-medium text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <Card className="glass p-8 text-center flex flex-col justify-center">
            <h4 className="text-xl font-bold text-foreground mb-4">Ready to Work Together?</h4>
            <p className="text-muted-foreground mb-6">
              Let's build something amazing together. I'm always open to discussing new opportunities.
            </p>
            <div className="space-y-3">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href={scheduleCallHref} target={scheduleCallHref.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
