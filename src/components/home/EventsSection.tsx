import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import logo from "@/assets/launchpoint_logo.png";
import chamberLogo from "@/assets/palatine_chamber_logo.png";
import { 
  Rocket,
  GraduationCap,
  Building2,
  Handshake,
  ArrowRight
} from "lucide-react";

const EventsSection = () => {
  const highlights = [
    {
      title: "Venture Pitch Competition",
      description: "Present your business venture to panels of experienced professionals using real investor-style evaluation.",
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      path: "/competitions/pitch",
      isLink: true,
    },
    {
      title: "Network & Continuation",
      description: "Opportunties for post-event mentorship, advisory, and even investment for winning teams.",
      icon: <Handshake className="w-5 h-5 md:w-6 md:h-6" />,
      path: null,
      isLink: false,
    },
    {
      title: "D211 Business Incubator Aligned",
      description: "Competition structure aligns with and goes beyond the Business Incubator program curriculum.",
      icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />,
      path: null,
      isLink: false,
    },
    {
      title: "UIUC iVenture Aligned",
      description: "Reviewed by the iVenture Accelerator team at the University of Illinois Urbana-Champaign, ensuring real venture capital alignment.",
      icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" />,
      path: null,
      isLink: false,
    }
  ];

  return (
    
    <section className="py-20" style={{ background: 'var(--gradient-section-3)' }}>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
            The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">LaunchPoint</span> Experience
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            A focused, high-impact venture pitch competition designed for real-world entrepreneurial learning.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => {
            const content = (
              <Card className="h-full p-3 md:p-5 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {item.description}
                </p>
                {item.isLink && (
                  <div className="hidden md:flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                )}
              </Card>
            );

            return item.isLink && item.path ? (
              <Link key={index} to={item.path} className="group">
                {content}
              </Link>
            ) : (
              <div key={index} className="group">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
