import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { downloadResume } from '@/lib/site-config';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '30%', label: 'User engagement achieved' },
    { value: '90%+', label: 'Successful AI response rate' },
    { value: '300+', label: 'Client businesses served' },
  ];


  return <section id="home" className="relative min-h-[calc(100svh-3rem)] flex items-center justify-center overflow-hidden pt-28 pb-20">
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-in-up">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm Manda Sai Srinivas
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-4">
            Associate Product Manager turning customer insight into shipped products
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I lead discovery and cross-functional delivery for customer journeys, subscriptions,
            payments and conversational AI experiences at Rekart.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8" style={{
        animationDelay: '0.2s'
      }}>
          <Button variant="hero" size="lg" onClick={() => scrollToSection('#projects')} className="text-lg px-8 py-3">
            View My Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-3" onClick={downloadResume}>
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('#contact')} className="text-lg px-8 py-3">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12" style={{ animationDelay: '0.3s' }}>
          {stats.map(({ value, label }) => (
            <div key={label} className="glass rounded-lg px-4 py-5">
              <div className="text-2xl font-bold text-primary">
                {value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>


      </div>
    </section>;
};
export default HeroSection;
