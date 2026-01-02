import { Card } from "@/components/ui/card";

interface Judge {
  name: string;
  title: string;
  image: string;
}

interface JudgesSectionProps {
  judges: Judge[];
}

const JudgesSection = ({ judges }: JudgesSectionProps) => {
  return (
    <Card className="p-4 md:p-8 bg-card border-border">
      <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-8 text-center">Meet the Judges</h2>
      <div className="grid grid-cols-3 gap-3 md:gap-8">
        {judges.map((judge, index) => (
          <div key={index} className="text-center space-y-2 md:space-y-4">
            <div className="mx-auto w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden bg-secondary/50">
              <img src={judge.image} alt={judge.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-xs md:text-lg">{judge.name}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground">{judge.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default JudgesSection;
