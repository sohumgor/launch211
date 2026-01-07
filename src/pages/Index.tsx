import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import DateLocationBar from "@/components/home/DateLocationBar";
import EventsSection from "@/components/home/EventsSection";
import AgendaSectionNew from "@/components/home/AgendaSectionNew";
import PrizesSection from "@/components/home/PrizesSection";
import SponsorsSection from "@/components/home/SponsorsSection";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="date-location">
          <DateLocationBar />
        </section>

        <section id="events">
          <EventsSection />
        </section>

        <section id="agenda">
          <AgendaSectionNew />
        </section>

        <section id="prizes">
          <PrizesSection />
        </section>

        <section id="sponsors">
          <SponsorsSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
