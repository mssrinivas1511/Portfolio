import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';
import { downloadResume } from '@/lib/site-config';
import ThemeToggle from "./ThemeToggle";


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#projects' },
    { name: 'Launches', href: '#releases' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="portfolio-container">
        <div className="flex items-center justify-between h-[72px]">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('#home')}
            aria-label="Back to top"
            className="h-auto min-w-0 justify-start px-0 text-left hover:bg-transparent"
          >
            <span className="flex min-w-0 flex-col items-start leading-tight">
              <span className="truncate text-sm font-semibold text-foreground sm:text-base">Manda Sai Srinivas</span>
              <span className="truncate text-[11px] font-normal text-muted-foreground sm:text-xs">
                Associate Product Manager
              </span>
            </span>
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="link"
                onClick={() => scrollToSection(item.href)}
                className="h-auto p-0 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {item.name}
              </Button>
            ))}
            <ThemeToggle />
            <Button 
              variant="hero" 
              size="sm" 
              className="ml-1"
              onClick={() => {
                downloadResume();
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass absolute left-5 right-5 top-[72px] p-4 sm:left-6 sm:right-6">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start text-muted-foreground hover:text-primary"
                >
                  {item.name}
                </Button>
              ))}
              <Button 
                variant="hero" 
                size="sm" 
                className="mt-4"
                onClick={() => {
                  downloadResume();
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;