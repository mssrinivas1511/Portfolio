import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import ReleaseDetail from "./pages/ReleaseDetail";
import Auth from "./pages/Auth";
import OAuthConsent from "./pages/OAuthConsent";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "next-themes";
import ScrollReveal from "./components/ScrollReveal";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ScrollReveal />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/launches/:slug" element={<ReleaseDetail />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/.lovable/oauth/consent" element={<OAuthConsent />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
