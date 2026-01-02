import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import DateLocationBar from "@/components/home/DateLocationBar";
import AgendaSectionNew from "@/components/home/AgendaSectionNew";
import PrizesSection from "@/components/home/PrizesSection";
import SponsorsSection from "@/components/home/SponsorsSection";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <DateLocationBar />
        <AgendaSectionNew />
        <PrizesSection />
        <SponsorsSection />
        <FAQSection />
      </main>
      <Footer style={{ background: 'var(--gradient-section-6)' }} />
    </div>
  );
};

export default Index;
