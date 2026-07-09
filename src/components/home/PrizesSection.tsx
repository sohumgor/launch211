import { Card } from "@/components/ui/card";
import { Handshake, ArrowRight } from "lucide-react";

const PrizesSection = () => {
  return (
    <section
      className="py-20"
      style={{ background: "var(--gradient-section-3)" }}
    >
      <div className="container mx-auto px-4">

        {/* Prize Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Total Prize Pool
          </h2>

          <div className="my-8">
            <div className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              $2,000+
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Over $2,000 in scholarship-style awards recognizing outstanding
            performance across LaunchPoint's competitive events.
          </p>

          <p className="text-lg text-muted-foreground">
            Awards are presented to the top 3 teams in both the Venture
            Pitch and Business Roleplay competitions.
          </p>
        </div>

        {/* Beyond the Competition */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 shadow-lg">

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary flex items-center gap-2">
              <Handshake className="w-5 h-5 md:w-6 md:h-6" />
              Beyond the Competition
            </h2>

            <p className="text-sm md:text-base text-muted-foreground mb-6">
              LaunchPoint is designed to create lasting opportunities—not just
              awards. Outstanding participants from both competitive events may
              receive continued support and connections through our professional
              network.
            </p>

            <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight
                  className="text-accent flex-shrink-0 mt-1"
                  size={16}
                />
                <span>
                  <strong className="text-foreground">
                    One-on-one office hours
                  </strong>{" "}
                  with local entrepreneurs and business professionals.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight
                  className="text-accent flex-shrink-0 mt-1"
                  size={16}
                />
                <span>
                  <strong className="text-foreground">
                    Professional mentorship
                  </strong>{" "}
                  from founders, executives, and Chamber member businesses.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight
                  className="text-accent flex-shrink-0 mt-1"
                  size={16}
                />
                <span>
                  <strong className="text-foreground">
                    Personalized feedback
                  </strong>{" "}
                  to strengthen leadership, presentation, and strategic thinking
                  skills.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight
                  className="text-accent flex-shrink-0 mt-1"
                  size={16}
                />
                <span>
                  <strong className="text-foreground">
                    Connections to the local business community
                  </strong>{" "}
                  for future internships, networking, entrepreneurial
                  opportunities, and continued involvement with LaunchPoint.
                </span>
              </li>
            </ul>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default PrizesSection;