import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import About from "./pages/About";
import MarketingChallenge from "./pages/competitions/MarketingChallenge";
import EthicsCompetition from "./pages/competitions/EthicsCompetition";
import FinanceChallenge from "./pages/competitions/FinanceChallenge";
import PitchCompetition from "./pages/competitions/PitchCompetition";
import MarketingWorkshop from "./pages/workshops/MarketingWorkshop";
import EthicsWorkshop from "./pages/workshops/EthicsWorkshop";
import FinanceWorkshop from "./pages/workshops/FinanceWorkshop";
import PitchWorkshop from "./pages/workshops/PitchWorkshop";

const queryClient = new QueryClient();

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/competitions/marketing" element={<MarketingChallenge />} />
          <Route path="/competitions/ethics" element={<EthicsCompetition />} />
          <Route path="/competitions/finance" element={<FinanceChallenge />} />
          <Route path="/competitions/pitch" element={<PitchCompetition />} />
          <Route path="/workshops/marketing" element={<MarketingWorkshop />} />
          <Route path="/workshops/ethics" element={<EthicsWorkshop />} />
          <Route path="/workshops/finance" element={<FinanceWorkshop />} />
          <Route path="/workshops/pitch" element={<PitchWorkshop />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
