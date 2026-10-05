import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { downloadResume, siteConfig } from '@/lib/site-config';
import portrait from '@/assets/srinivas-portrait.jpeg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '300+', label: 'Client businesses on Rekart' },
    { value: '130+', label: 'Clients live on the WhatsApp AI Assistant' },
    { value: '20+', label: 'Product enhancements shipped' },
    { value: '90%+', label: 'Supported AI queries resolved' },
  ];

  return (
    <section id="home" className="pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="portfolio-container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h1 className="mb-4">Manda Sai Srinivas</h1>
            <p className="mb-5 text-xl font-medium text-foreground md:text-2xl">
              Associate Product Manager · B2B SaaS · Conversational AI
            </p>
            <p className="mx-auto max-w-[720px] text-lg leading-relaxed text-muted-foreground lg:mx-0">
              I build subscription, payments and conversational AI experiences for Rekart - a delivery
              platform used by 300+ businesses. Most recently I owned the WhatsApp AI Assistant, now
              live with 130+ of them.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button variant="hero" size="lg" onClick={() => scrollToSection('#projects')}>
                View case studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={downloadResume}>
                <Download className="mr-2 h-5 w-5" />
                Download resume
              </Button>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="order-1 mx-auto lg:order-2">
            <div className="overflow-hidden rounded-xl border border-border bg-card p-2 shadow-sm">
              <img
                src={portrait}
                alt="Manda Sai Srinivas portrait"
                width={776}
                height={788}
                className="h-48 w-48 rounded-lg object-cover object-top sm:h-56 sm:w-56 lg:h-64 lg:w-64"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="glass rounded-lg px-4 py-5 text-center">
              <div className="text-2xl font-bold text-primary">{value}</div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
