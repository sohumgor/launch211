import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  Rocket,
  BriefcaseBusiness,
  Mic,
  ArrowRight,
} from "lucide-react";

const EventsSection = () => {
  const highlights = [
    {
      category: "COMPETITION",
      categoryColor: "bg-primary/10 text-primary",
      title: "Venture Pitch",
      description:
        "Teams develop an original business concept and present an investor-style pitch to a panel of professionals.",
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      path: "/competitions/pitch",
      isLink: true,
    },
    {
      category: "COMPETITION",
      categoryColor: "bg-primary/10 text-primary",
      title: "Business Roleplay",
      description:
        "Students analyze a real business scenario under time constraints, strategize, and present their solution to a panel of professionals.",
      icon: <BriefcaseBusiness className="w-5 h-5 md:w-6 md:h-6" />,
      path: "/competitions/roleplay",
      isLink: true,
    },
    {
      category: "ENRICHMENT",
      categoryColor: "bg-yellow-100 text-yellow-800",
      title: "Professional Workshops",
      description:
        "Students choose a session led by a local business professional, combining career insight with hands-on learning.",
      icon: <Mic className="w-5 h-5 md:w-6 md:h-6" />,
      path: "/events/workshops",
      isLink: true,
    },
  ];

  return (
    <section
      className="py-14 md:py-20"
      style={{ background: "var(--gradient-section-3)" }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            The{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LaunchPoint
            </span>{" "}
            Experience
          </h2>

          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            LaunchPoint combines high-level business competitions with
            professional workshops, connecting students directly with industry
            leaders through experiential learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {highlights.map((item, index) => {
            const content = (
              <Card className="group h-full p-4 md:p-8 bg-card border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon + Badge */}
                <div className="flex items-center justify-between mb-4 md:mb-8">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>

                  <span
                    className={`px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold tracking-wide ${item.categoryColor}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Desktop only */}
                {item.isLink && (
                  <div className="hidden md:flex mt-8 items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                )}
              </Card>
            );

            return item.isLink ? (
              <Link key={index} to={item.path!} className="group">
                {content}
              </Link>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;