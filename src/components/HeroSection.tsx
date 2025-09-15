import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-float" style={{
        animationDelay: '4s'
      }} />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-float" style={{
        animationDelay: '1s'
      }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">M S SrinivaS</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-4">
            Product Manager | Building the Future of Tech
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I design, manage, and launch digital products that solve real-world problems. 
            Specializing in AI-driven solutions and scalable tech innovations.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-slide-in-up" style={{
        animationDelay: '0.2s'
      }}>
          <Button variant="hero" size="lg" onClick={() => scrollToSection('#projects')} className="text-lg px-8 py-3">
            View My Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-3">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('#contact')} className="text-lg px-8 py-3">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;