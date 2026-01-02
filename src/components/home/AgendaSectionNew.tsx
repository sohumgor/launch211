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
  Sparkles
} from "lucide-react";

type ScheduleEvent = {
  name: string;
  path: string | null;
  color: string | null;
  colspan?: number;
  isBold?: boolean;
  icon?: React.ReactNode;
  track?: string;
};

type ScheduleRow = {
  time: string;
  events: ScheduleEvent[];
  rowIcon?: React.ReactNode;
  label?: string;
};

const AgendaSectionNew = () => {
  // Blue-teal gradient palette matching navbar colors
  const trackColors = {
    marketing: "bg-gradient-to-br from-[hsl(215,80%,45%)] to-[hsl(200,75%,50%)] text-white hover:from-[hsl(215,80%,40%)] hover:to-[hsl(200,75%,45%)] border border-[hsl(215,80%,35%)]/20 shadow-md",
    ethics: "bg-gradient-to-br from-[hsl(180,70%,40%)] to-[hsl(170,65%,45%)] text-white hover:from-[hsl(180,70%,35%)] hover:to-[hsl(170,65%,40%)] border border-[hsl(180,70%,30%)]/20 shadow-md",
    finance: "bg-gradient-to-br from-[hsl(195,75%,45%)] to-[hsl(185,70%,50%)] text-white hover:from-[hsl(195,75%,40%)] hover:to-[hsl(185,70%,45%)] border border-[hsl(195,75%,35%)]/20 shadow-md",
    pitch: "bg-gradient-to-br from-[hsl(210,85%,35%)] to-[hsl(220,80%,45%)] text-white hover:from-[hsl(210,85%,30%)] hover:to-[hsl(220,80%,40%)] border border-[hsl(210,85%,25%)]/20 shadow-md",
  };

  const trackIcons = {
    marketing: <Megaphone className="w-3.5 h-3.5" />,
    ethics: <Scale className="w-3.5 h-3.5" />,
    finance: <TrendingUp className="w-3.5 h-3.5" />,
    pitch: <Rocket className="w-3.5 h-3.5" />,
  };

  const schedule: ScheduleRow[] = [
    {
      time: "8:00 - 9:30 AM",
      label: "Workshops",
      rowIcon: <Sparkles className="w-4 h-4 text-accent" />,
      events: [
        { name: "Marketing Workshop", path: "/workshops/marketing", color: trackColors.marketing, icon: trackIcons.marketing, track: "Marketing" },
        { name: "Business Ethics Workshop", path: "/workshops/ethics", color: trackColors.ethics, icon: trackIcons.ethics, track: "Ethics" },
        { name: "Investing Workshop", path: "/workshops/finance", color: trackColors.finance, icon: trackIcons.finance, track: "Finance" },
        { name: "Entrepreneurship Workshop", path: "/workshops/pitch", color: trackColors.pitch, icon: trackIcons.pitch, track: "Pitch" },
      ],
    },
    {
      time: "9:30 - 10:00 AM",
      rowIcon: <Coffee className="w-4 h-4 text-muted-foreground" />,
      events: [{ name: "Break", path: null, color: null, colspan: 4 }],
    },
    {
      time: "10:00 AM - 4:00 PM",
      label: "Competitions",
      rowIcon: <Trophy className="w-4 h-4 text-accent" />,
      events: [
        { name: "Marketing Role Play", path: "/competitions/marketing", color: trackColors.marketing, icon: trackIcons.marketing, track: "Marketing" },
        { name: "Business Ethics Role Play", path: "/competitions/ethics", color: trackColors.ethics, icon: trackIcons.ethics, track: "Ethics" },
        { name: "Stock Market Portfolio Defense", path: "/competitions/finance", color: trackColors.finance, icon: trackIcons.finance, track: "Finance" },
        { name: "Big Pitch Competition", path: "/competitions/pitch", color: trackColors.pitch, icon: trackIcons.pitch, track: "Pitch" },
      ],
    },
    {
      time: "4:00 - 5:00 PM",
      rowIcon: <Clock className="w-4 h-4 text-muted-foreground" />,
      events: [{ name: "Award Prep", path: null, color: null, colspan: 4 }],
    },
    {
      time: "5:00 - 6:00 PM",
      rowIcon: <Trophy className="w-4 h-4 text-accent" />,
      events: [{ name: "Award Ceremony", path: null, color: null, colspan: 4, isBold: true }],
    },
  ];

  const renderEvent = (event: ScheduleEvent, isMobile = false) => {
    const sizeClasses = isMobile ? 'text-xs px-2 py-1 gap-1' : 'px-3 py-1.5 gap-1.5';
    const baseClasses = event.color 
      ? `inline-flex items-center ${sizeClasses} rounded-lg transition-all duration-200 ${event.color}` 
      : `text-muted-foreground ${event.isBold ? 'font-bold text-primary' : 'italic'} ${isMobile ? 'text-xs' : ''}`;
    
    if (event.path) {
      return (
        <Link to={event.path} className={`${baseClasses} hover:scale-105 hover:shadow-lg`}>
          {event.icon && <span className={isMobile ? 'w-3 h-3' : ''}>{event.icon}</span>}
          <span className={isMobile ? 'leading-tight' : ''}>{event.name}</span>
        </Link>
      );
    }
    return <span className={baseClasses}>{event.name}</span>;
  };

  // Mobile card view for each time slot
  const renderMobileCard = (row: ScheduleRow, index: number) => {
    const isFullWidth = row.events[0]?.colspan;
    
    return (
      <div 
        key={index} 
        className={`p-3 rounded-xl border border-border/50 ${
          row.events[0]?.isBold ? 'bg-primary/5' : 'bg-card/50'
        }`}
      >
        {/* Time Header */}
        <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-border/30">
          <span className="shrink-0">{row.rowIcon}</span>
          <span className="font-semibold text-xs text-primary">{row.time}</span>
          {row.label && (
            <span className="ml-auto text-[10px] text-accent bg-accent/10 px-1.5 py-0.5 rounded-full font-medium">
              {row.label}
            </span>
          )}
        </div>
        
        {/* Events */}
        {isFullWidth ? (
          <div className="text-center py-1">
            {renderEvent(row.events[0], true)}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-1.5">
            {row.events.map((event, eventIndex) => (
              <div key={eventIndex} className="flex justify-center">
                {renderEvent(event, true)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="agenda" className="py-20" style={{ background: 'var(--gradient-section-2)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Launch 211 Agenda</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Workshops in the morning, competitions all afternoon — your path to success
          </p>
        </div>

        <Card className="p-4 md:p-10 bg-card/90 backdrop-blur-sm border-border/50 overflow-hidden max-w-5xl mx-auto shadow-xl">
          {/* Lunch Note Banner */}
          <div className="mb-6 md:mb-8 flex items-center justify-center gap-2 md:gap-3 text-xs md:text-base bg-gradient-to-r from-primary/5 to-accent/5 py-2.5 md:py-3 px-4 md:px-6 rounded-xl border border-accent/20">
            <div className="p-1.5 md:p-2 bg-accent/10 rounded-full shrink-0">
              <Utensils className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
            </div>
            <span className="text-muted-foreground text-center">
              <span className="font-semibold text-primary">Lunch 11 AM - 1 PM</span>
              <span className="hidden sm:inline"> — grab food anytime during competitions!</span>
            </span>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-accent/30">
                  <th className="text-left py-4 px-4 font-bold text-sm md:text-base w-[160px]">
                    <div className="flex items-center gap-2 text-primary">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>Time</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-3 font-bold text-sm md:text-base">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[hsl(215,80%,45%)] to-[hsl(200,75%,50%)] text-white shadow-sm">
                      <Megaphone className="w-3.5 h-3.5" />
                      <span>Marketing</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-3 font-bold text-sm md:text-base">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[hsl(180,70%,40%)] to-[hsl(170,65%,45%)] text-white shadow-sm">
                      <Scale className="w-3.5 h-3.5" />
                      <span>Ethics</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-3 font-bold text-sm md:text-base">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[hsl(195,75%,45%)] to-[hsl(185,70%,50%)] text-white shadow-sm">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Finance</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-3 font-bold text-sm md:text-base">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[hsl(210,85%,35%)] to-[hsl(220,80%,45%)] text-white shadow-sm">
                      <Rocket className="w-3.5 h-3.5" />
                      <span>Pitch</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, rowIndex) => (
                  <tr 
                    key={rowIndex} 
                    className={`border-b border-border/30 transition-colors hover:bg-accent/5 ${
                      row.events[0]?.isBold ? 'bg-primary/5' : ''
                    }`}
                  >
                    <td className="py-5 px-4 text-sm md:text-base font-medium whitespace-nowrap align-middle">
                      <div className="flex items-center gap-2 text-primary">
                        {row.rowIcon}
                        <span>{row.time}</span>
                      </div>
                    </td>
                    {row.events[0]?.colspan ? (
                      <td colSpan={4} className="py-5 px-3 text-center text-sm md:text-base align-middle">
                        {renderEvent(row.events[0], false)}
                      </td>
                    ) : (
                      row.events.map((event, eventIndex) => (
                        <td key={eventIndex} className="py-5 px-3 text-center text-xs md:text-sm align-middle">
                          {renderEvent(event, false)}
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden space-y-3">
            {schedule.map((row, index) => renderMobileCard(row, index))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AgendaSectionNew;