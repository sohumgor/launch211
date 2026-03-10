import { Card } from "@/components/ui/card";
import { 
  Users, 
  Coffee, 
  Trophy,
  Rocket,
  Utensils,
  Clock,
  MessageSquare
} from "lucide-react";

const AgendaSectionNew = () => {
  const schedule = [
    { time: "8:00 – 8:30 AM", event: "Arrival and Check-In", icon: <Users className="w-4 h-4" />, highlight: "yellow" },
    { time: "8:30 – 8:45 AM", event: "Brief Opening Remarks and Information", icon: <MessageSquare className="w-4 h-4" />, highlight: null },
    { time: "8:45 – 9:00 AM", event: "Break", icon: <Coffee className="w-4 h-4" />, highlight: null },
    { time: "~9:00 – 11:30 AM", event: "Venture Pitch Presentations (2–4 Breakout Rooms)", icon: <Rocket className="w-4 h-4" />, highlight: "blue" },
    { time: "11:30 – 12:30 PM", event: "Lunch Break", icon: <Utensils className="w-4 h-4" />, highlight: null },
    { time: "~12:30 – 2:00 PM", event: "Venture Pitch Presentations Continue", icon: <Rocket className="w-4 h-4" />, highlight: "blue" },
    { time: "2:00 – 2:30 PM", event: "Deliberation and Finalization of Judging", icon: <Clock className="w-4 h-4" />, highlight: null },
    { time: "2:30 – 3:00 PM", event: "Award Ceremony and Closing Remarks", icon: <Trophy className="w-4 h-4" />, highlight: "green" },
  ];

  return (
    <section
    id="agenda"
    className="py-12 md:py-20 relative"
    style={{ background: 'var(--gradient-section-2)' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 space-y-2 md:space-y-4 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Event Day Schedule</h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Half-day program with lunch — April 25, 2026
          </p>
        </div>

        <Card className="p-3 sm:p-4 md:p-8 bg-card/90 backdrop-blur-sm border-border/50 overflow-hidden max-w-3xl mx-auto shadow-xl">
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
                <span className="text-primary shrink-0 mt-0.5">{row.icon}</span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
                  <div className="font-semibold text-xs md:text-sm text-primary whitespace-nowrap min-w-[130px] md:min-w-[170px]">
                    {row.time}
                  </div>
                  <div className={`text-xs md:text-sm ${row.highlight === "green" ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                    {row.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 md:mt-4 text-[10px] md:text-xs text-muted-foreground italic px-3">
            *An optional passive Stock Market Simulation may run concurrently as an engagement activity for students waiting to present.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default AgendaSectionNew;
