import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Back to top button */}
      <Button
        variant="hero"
        size="icon"
        className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg animate-float"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Index;
