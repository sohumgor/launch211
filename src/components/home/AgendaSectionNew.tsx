import { Card } from "@/components/ui/card";
import {
  Users,
  Trophy,
  Rocket,
  Utensils,
  Presentation,
} from "lucide-react";

const AgendaSectionNew = () => {
  const schedule = [
    {
      time: "8:00 – 9:00 AM",
      event: "Check-In & Opening Ceremony",
      icon: <Users className="w-4 h-4" />,
      highlight: "yellow",
    },
    {
      time: "9:00 – 11:00 AM",
      event: "Venture Pitch Judging | Business Roleplay Judging",
      icon: <Rocket className="w-4 h-4" />,
      highlight: "blue",
    },
    {
      time: "11:00 AM – 12:00 PM",
      event: "Catered Lunch",
      icon: <Utensils className="w-4 h-4" />,
      highlight: null,
    },
    {
      time: "12:00 – 1:30 PM",
      event: "Professional Workshops",
      icon: <Presentation className="w-4 h-4" />,
      highlight: "yellow",
    },
    {
      time: "1:45 – 2:15 PM",
      event: "Awards Ceremony & Closing Remarks",
      icon: <Trophy className="w-4 h-4" />,
      highlight: "green",
    },
  ];

  return (
    <section
      id="agenda"
      className="py-12 md:py-20 relative"
      style={{ background: "var(--gradient-section-2)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 space-y-2 md:space-y-4 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Event Day Schedule
          </h2>

          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Saturday, October 17, 2026 • 8:00 AM – 2:15 PM • Palatine High School
          </p>
        </div>

        <Card className="p-3 sm:p-4 md:p-8 bg-card/90 backdrop-blur-sm border-border/50 overflow-hidden max-w-4xl mx-auto shadow-xl">
          <div className="space-y-0">
            {schedule.map((row, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 md:gap-4 p-3 md:p-4 border-b border-border/30 last:border-b-0 transition-all ${
                  row.highlight === "yellow"
                    ? "bg-yellow-50/50 dark:bg-yellow-950/20"
                    : row.highlight === "blue"
                    ? "bg-primary/5"
                    : row.highlight === "green"
                    ? "bg-green-50/50 dark:bg-green-950/20"
                    : "hover:bg-accent/5"
                }`}
              >
                <span className="text-primary shrink-0 mt-0.5">
                  {row.icon}
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
                  <div className="font-semibold text-xs md:text-sm text-primary whitespace-nowrap min-w-[130px] md:min-w-[170px]">
                    {row.time}
                  </div>

                  <div
                    className={`text-xs md:text-sm ${
                      row.highlight === "green"
                        ? "font-bold text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {row.event}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[10px] md:text-xs text-muted-foreground italic px-3">
            Schedule subject to minor adjustments.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default AgendaSectionNew;