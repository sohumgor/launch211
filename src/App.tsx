import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import About from "./pages/About";
import MarketingChallenge from "./pages/competitions/MarketingChallenge";
import EthicsCompetition from "./pages/competitions/EthicsCompetition";
import FinanceChallenge from "./pages/competitions/FinanceChallenge";
import PitchCompetition from "./pages/competitions/PitchCompetition";
import CareerPanel from "./pages/events/CareerPanel";

const queryClient = new QueryClient();

// Scroll to top component
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/competitions/marketing" element={<MarketingChallenge />} />
          <Route path="/competitions/ethics" element={<EthicsCompetition />} />
          <Route path="/competitions/investing" element={<FinanceChallenge />} />
          <Route path="/competitions/pitch" element={<PitchCompetition />} />
          <Route path="/events/career-panel" element={<CareerPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;