import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Handshake, ArrowRight } from "lucide-react";

const PrizesSection = () => {
  const prizes = [
    {
      icon: Trophy,
      place: "1st Place",
      amount: "$1,000",
      color: "from-yellow-400 to-yellow-600",
      benefits: ["Cash Prize", "Winner Certificate", "Mentorship Opportunity"],
    },
    {
      icon: Medal,
      place: "2nd Place",
      amount: "$500",
      color: "from-gray-300 to-gray-400",
      benefits: ["Cash Prize", "Runner-up Certificate", "Industry Connections"],
    },
    {
      icon: Award,
      place: "3rd Place",
      amount: "$250",
      color: "from-orange-400 to-orange-600",
      benefits: ["Cash Prize", "Participant Certificate", "Networking Access"],
    },
  ];

  return (
    <section className="py-20" style={{ background: "var(--gradient-section-3)" }}>
      <div className="container mx-auto px-4">

        {/* Prize Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Total Prize Pool</h2>

          <div className="my-8">
            <div className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              $TBD
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cash prizes awarded across all four competition categories
          </p>

          <p className="text-lg text-muted-foreground">
            Each competition offers 1st, 2nd, and 3rd place prizes. Visit individual competition pages for prize breakdowns.
          </p>
        </div>

        {/* Post Event Opportunities Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 shadow-lg">
            
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary flex items-center gap-2">
              <Handshake className="w-5 h-5 md:w-6 md:h-6" />
              Post-Event Opportunities
            </h2>

            <p className="text-sm md:text-base text-muted-foreground mb-5">
              The long-term goal is not just competition — it's cultivating sustainable, student-led ventures that may develop into real local businesses. Top-performing teams will receive:
            </p>

            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>
                  <strong className="text-foreground">Office Hours</strong> with local business owners, investors, and potential venture firms
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>
                  <strong className="text-foreground">Structured Feedback Sessions</strong> with detailed judge commentary on your pitch
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>
                  <strong className="text-foreground">Mentorship & Advisory Support</strong> from Palatine Area Chamber of Commerce member mentors
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>
                  <strong className="text-foreground">Potential Early-Stage Advisory</strong> and investment pathways for the most promising ventures
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>
                  <strong className="text-foreground">Venture Continuation Funding</strong> — prize money structured to directly advance your pitched business
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