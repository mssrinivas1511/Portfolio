import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-glass border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2024 Alex Morgan. All rights reserved.
            </p>
          </div>
          <div className="flex items-center text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-accent animate-pulse" fill="currentColor" />
            <span>& Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;