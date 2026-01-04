import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { 
  Megaphone, 
  Scale, 
  Presentation, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      title: "Marketing Role Play",
      description: "Present creative marketing solutions in simulated business scenarios.",
      icon: <Megaphone className="w-5 h-5 md:w-6 md:h-6" />,
      path: "/competitions/marketing",
    },
    {
      title: "Business Ethics Role Play",
      description: "Navigate ethical dilemmas with sound decision-making.",
      icon: <Scale className="w-5 h-5 md:w-6 md:h-6" />,
      path: "/competitions/ethics",
    },
    {
      title: "Big Pitch Competition",
      description: "Pitch your innovative business idea to a panel of judges.",
      icon: <Presentation className="w-5 h-5 md:w-6 md:h-6" />,
      path: "/competitions/pitch",
    },
    {
      title: "Stock Market Simulation",
      description: "Manage a virtual portfolio and present your strategy.",
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      path: "/competitions/finance",
    }
  ];

  return (
    <section id="events" className="py-10 md:py-16 lg:py-24" style={{ background: 'var(--gradient-section-3)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Competitions</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Showcase your skills across four exciting business competitions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <Link key={index} to={event.path} className="group">
              <Card className="h-full p-3 md:p-5 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {event.icon}
                </div>
                <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-primary transition-colors leading-tight">
                  {event.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {event.description}
                </p>
                <div className="hidden md:flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;