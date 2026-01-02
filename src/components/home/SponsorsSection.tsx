import sponsorLogo from "@/assets/sponsor-logo-placeholder.png";

const SponsorsSection = () => {
  const sponsors = [
    "TechCorp Industries",
    "Innovation Partners LLC",
    "Future Finance Group",
    "Venture Capital Associates",
    "District 211 Foundation",
    "Business Leaders Alliance",
    "Startup Accelerator Network",
    "Corporate Excellence Fund",
  ];

  return (
    <section className="py-20 overflow-hidden" style={{ background: 'var(--gradient-section-2)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Our Sponsors</h2>
          <p className="text-xl text-muted-foreground">
            Proudly supported by leading businesses and organizations
          </p>
        </div>

        {/* Scrolling Carousel - Desktop */}
        <div className="relative hidden md:block">
          <div className="flex animate-scroll">
            {/* First set of sponsors */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`sponsor-1-${index}`}
                className="flex-shrink-0 mx-8 px-6 py-6 bg-card rounded-lg border border-border shadow-sm transition-all hover:shadow-md hover:scale-105 flex flex-col items-center gap-4"
              >
                <img src={sponsorLogo} alt={sponsor} className="w-24 h-24 object-contain" />
                <span className="text-lg font-semibold text-foreground whitespace-nowrap text-center">
                  {sponsor}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`sponsor-2-${index}`}
                className="flex-shrink-0 mx-8 px-6 py-6 bg-card rounded-lg border border-border shadow-sm transition-all hover:shadow-md hover:scale-105 flex flex-col items-center gap-4"
              >
                <img src={sponsorLogo} alt={sponsor} className="w-24 h-24 object-contain" />
                <span className="text-lg font-semibold text-foreground whitespace-nowrap text-center">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Carousel - Mobile (Scaled Down) */}
        <div className="relative md:hidden">
          <div className="flex animate-scroll">
            {/* First set of sponsors */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`sponsor-mobile-1-${index}`}
                className="flex-shrink-0 mx-4 px-4 py-4 bg-card rounded-lg border border-border shadow-sm transition-all hover:shadow-md hover:scale-105 flex flex-col items-center gap-3"
              >
                <img src={sponsorLogo} alt={sponsor} className="w-16 h-16 object-contain" />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap text-center">
                  {sponsor}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`sponsor-mobile-2-${index}`}
                className="flex-shrink-0 mx-4 px-4 py-4 bg-card rounded-lg border border-border shadow-sm transition-all hover:shadow-md hover:scale-105 flex flex-col items-center gap-3"
              >
                <img src={sponsorLogo} alt={sponsor} className="w-16 h-16 object-contain" />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap text-center">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SponsorsSection;
