// Clean, simplified agenda with cohesive blue-teal theme
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { 
  Utensils, 
  Clock, 
  Megaphone, 
  Scale, 
  TrendingUp, 
  Rocket,
  Coffee,
  Trophy,
  Users
} from "lucide-react";

type ScheduleEvent = {
  name: string;
  path: string | null;
  color: string | null;
  colspan?: number;
  isBold?: boolean;
  icon?: React.ReactNode;
};

type ScheduleRow = {
  time: string;
  events: ScheduleEvent[];
  rowIcon?: React.ReactNode;
  isHighlight?: boolean;
};

const AgendaSectionNew = () => {
  const schedule: ScheduleRow[] = [
    {
      time: "8:00 - 9:00 AM",
      rowIcon: <Users className="w-4 h-4" />,
      events: [{ 
        name: "Career & Mentorship Panel", 
        path: "/events/career-panel", 
        color: "bg-gradient-to-r from-primary to-accent text-white",
        icon: <Users className="w-3.5 h-3.5" />,
        colspan: 1 
      }],
    },
    {
      time: "9:00 - 9:30 AM",
      rowIcon: <Coffee className="w-4 h-4" />,
      events: [{ name: "Break", path: null, color: null, colspan: 1 }],
    },
    {
      time: "9:30 AM - 3:30 PM",
      rowIcon: <Trophy className="w-4 h-4" />,
      isHighlight: true,
      events: [
        { name: "Marketing RP", path: "/competitions/marketing", color: "bg-primary/90 hover:bg-primary text-white", icon: <Megaphone className="w-3.5 h-3.5" /> },
        { name: "Business Ethics RP", path: "/competitions/ethics", color: "bg-accent/90 hover:bg-accent text-white", icon: <Scale className="w-3.5 h-3.5" /> },
        { name: "Stock Market Sim", path: "/competitions/finance", color: "bg-primary/90 hover:bg-primary text-white", icon: <TrendingUp className="w-3.5 h-3.5" /> },
        { name: "Big Pitch", path: "/competitions/pitch", color: "bg-accent/90 hover:bg-accent text-white", icon: <Rocket className="w-3.5 h-3.5" /> },
      ],
    },
    {
      time: "3:30 - 4:00 PM",
      rowIcon: <Clock className="w-4 h-4" />,
      events: [{ name: "Award Prep", path: null, color: null, colspan: 1 }],
    },
    {
      time: "4:00 - 5:00 PM",
      rowIcon: <Trophy className="w-4 h-4" />,
      events: [{ name: "Award Ceremony", path: null, color: null, colspan: 1, isBold: true }],
    },
  ];

  const renderEvent = (event: ScheduleEvent, compact = false) => {
    const sizeClasses = compact ? 'text-xs px-2 py-1.5 gap-1' : 'px-3 py-2 gap-2';
    
    if (event.path && event.color) {
      return (
        <Link 
          to={event.path} 
          className={`inline-flex items-center ${sizeClasses} rounded-lg transition-all duration-200 ${event.color} shadow-sm hover:shadow-md hover:scale-105`}
        >
          {event.icon}
          <span className="font-medium">{event.name}</span>
        </Link>
      );
    }
    
    if (event.color) {
      return (
        <span className={`inline-flex items-center ${sizeClasses} rounded-lg ${event.color} shadow-sm`}>
          {event.icon}
          <span className="font-medium">{event.name}</span>
        </span>
      );
    }
    
    return (
      <span className={`text-muted-foreground ${event.isBold ? 'font-bold text-primary' : 'italic'} ${compact ? 'text-xs' : 'text-sm'}`}>
        {event.name}
      </span>
    );
  };

  return (
    <section id="agenda" className="py-12 md:py-20 relative" style={{ background: 'var(--gradient-section-2)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 space-y-2 md:space-y-4 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">One-Day Agenda</h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Career panel in the morning, competitions all day — your path to success
          </p>
        </div>

        <Card className="p-3 sm:p-4 md:p-8 bg-card/90 backdrop-blur-sm border-border/50 overflow-hidden max-w-4xl mx-auto shadow-xl">
          {/* Lunch Note Banner */}
          <div className="mb-4 md:mb-6 flex items-center justify-center gap-2 text-xs md:text-sm bg-gradient-to-r from-primary/5 to-accent/5 py-2 px-3 md:px-4 rounded-lg border border-accent/20">
            <Utensils className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent shrink-0" />
            <span className="text-muted-foreground text-center">
              <span className="font-semibold text-primary">Lunch 11 AM - 1 PM</span>
              <span className="hidden sm:inline"> — grab food anytime!</span>
            </span>
          </div>

          {/* Timeline View - Works for all screen sizes */}
          <div className="space-y-2 md:space-y-3">
            {schedule.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`p-3 md:p-4 rounded-xl border transition-all ${
                  row.isHighlight 
                    ? 'bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20' 
                    : row.events[0]?.isBold 
                      ? 'bg-primary/5 border-primary/20' 
                      : 'bg-card/50 border-border/30 hover:bg-accent/5'
                }`}
              >
                {/* Time Header */}
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <span className="text-primary shrink-0">{row.rowIcon}</span>
                  <span className="font-semibold text-xs md:text-sm text-primary">{row.time}</span>
                </div>
                
                {/* Events */}
                {row.events.length === 1 ? (
                  <div className="pl-6">
                    {renderEvent(row.events[0], true)}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pl-6">
                    {row.events.map((event, eventIndex) => (
                      <div key={eventIndex}>
                        {renderEvent(event, true)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AgendaSectionNew;