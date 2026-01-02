import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { TrendingUp, Scale, DollarSign, Lightbulb } from "lucide-react";

const AgendaSection = () => {
  const events = [
    {
      icon: TrendingUp,
      title: "Marketing Challenge",
      time: "9:00 AM - 11:00 AM",
      description: "Develop and present innovative marketing strategies for real-world business scenarios. Teams will compete to create the most compelling marketing campaigns.",
      path: "/competitions/marketing",
      color: "from-primary to-accent",
    },
    {
      icon: Scale,
      title: "Business Ethics Competition",
      time: "9:00 AM - 11:00 AM",
      description: "Navigate complex ethical dilemmas in business. Demonstrate critical thinking and moral reasoning in challenging corporate scenarios.",
      path: "/competitions/ethics",
      color: "from-accent to-primary",
    },
    {
      icon: DollarSign,
      title: "Finance & Investing Stock Market Challenge",
      time: "11:30 AM - 1:30 PM",
      description: "Test your financial acumen in our simulated stock market competition. Make strategic investment decisions and manage portfolio risk.",
      path: "/competitions/finance",
      color: "from-primary to-accent",
    },
    {
      icon: Lightbulb,
      title: "VC Pitch Competition",
      time: "2:00 PM - 4:00 PM",
      description: "Pitch your startup idea to a panel of real venture capitalists. Compete for funding and mentorship opportunities.",
      path: "/competitions/pitch",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="agenda" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">One-Day Agenda</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four exciting competitions throughout the day. Choose your path to victory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <Link
                key={event.path}
                to={event.path}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card border-border">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${event.color}`}>
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">{event.time}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                    <div className="pt-2 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
