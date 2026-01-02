import { Card } from "@/components/ui/card";

const CompetitionPrizes = () => {
  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <h2 className="text-3xl font-bold mb-8 text-center">Competition Prizes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center space-y-2">
          <div className="text-5xl font-bold text-primary">1st</div>
          <div className="text-3xl font-bold">$5,000</div>
          <div className="text-sm text-muted-foreground">Winner Certificate</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-5xl font-bold text-accent">2nd</div>
          <div className="text-3xl font-bold">$2,500</div>
          <div className="text-sm text-muted-foreground">Runner-up Certificate</div>
        </div>
        <div className="text-center space-y-2">
          <div className="text-5xl font-bold text-primary">3rd</div>
          <div className="text-3xl font-bold">$1,000</div>
          <div className="text-sm text-muted-foreground">Participant Certificate</div>
        </div>
      </div>
    </Card>
  );
};

export default CompetitionPrizes;
