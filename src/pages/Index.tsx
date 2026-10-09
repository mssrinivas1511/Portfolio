import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ReleasesSection from '@/components/ReleasesSection';
import SkillsSection from '@/components/SkillsSection';

import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Manda Sai Srinivas - Associate Product Manager';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Associate Product Manager building subscription, payments and conversational AI products for Rekart, a B2B SaaS platform used by 300+ businesses.');
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Support deep links like /#projects (e.g. coming back from a case study)
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }));
      }
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        <ExperienceSection />
        <AboutSection />
        <ProjectsSection />
        <ReleasesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
