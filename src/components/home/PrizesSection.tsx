import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

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
    <section className="py-20" style={{ background: 'var(--gradient-section-3)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Total Prize Pool</h2>
          <div className="my-8">
            <div className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              $36,000
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cash prizes awarded across all four competition categories
          </p>
          <p className="text-lg text-muted-foreground">
            Each competition offers 1st, 2nd, and 3rd place prizes. Visit individual competition pages for prize breakdowns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
