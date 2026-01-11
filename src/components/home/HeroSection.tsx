import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-conference.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[600px] min-h-[450px] flex items-center justify-center overflow-hidden animate-fade-in" style={{ background: 'var(--gradient-section-1)' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Launch 211 Business Conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Launch 211
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/90 leading-relaxed">
            District 211's Premier Business Competition & Mentorship Event for High School Students
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/registration">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group transition-all hover:scale-105">
                Register Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/#agenda">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105">
                View Schedule
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
