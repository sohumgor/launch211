import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Clock, Users, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

const EthicsCompetition = () => {
  const judges = [
    {
      name: "Dr. Robert Stevens",
      title: "Business Ethics Professor, Northwestern University",
      image: "/placeholder.svg",
    },
    {
      name: "Patricia Wong",
      title: "Chief Compliance Officer, Major Corporation",
      image: "/placeholder.svg",
    },
    {
      name: "James Anderson",
      title: "Corporate Social Responsibility Director",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header with gradient */}
        <div className="py-12 mb-12 animate-fade-in" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent to-primary mb-4">
                <Scale className="text-primary-foreground" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Business Ethics Role Play</h1>
              <p className="text-xl text-muted-foreground">
                Navigate complex ethical dilemmas in business
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <Clock className="mx-auto mb-1 md:mb-2 text-accent" size={16} />
              <div className="font-semibold text-[10px] md:text-base">9:00 AM - 11:00 AM</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">2 Hours</div>
            </Card>
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <Users className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
              <div className="font-semibold text-[10px] md:text-base">Teams of 2-3</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">Or Individual</div>
            </Card>
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <Trophy className="mx-auto mb-1 md:mb-2 text-accent" size={16} />
              <div className="font-semibold text-[10px] md:text-base">$1,750 Prize Pool</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">1st, 2nd, 3rd Place</div>
            </Card>
          </div>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Competition Overview</h2>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">
              The Business Ethics Competition challenges you to think critically about the moral and ethical 
              dimensions of business decisions. In today's business world, ethical leadership is more important 
              than ever. This competition will test your ability to identify ethical issues, analyze competing 
              interests, and recommend principled solutions.
            </p>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
              You'll face realistic scenarios involving corporate responsibility, stakeholder conflicts, 
              environmental concerns, and more. Demonstrate your moral reasoning, business acumen, and 
              communication skills as you defend your ethical positions.
            </p>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Competition Format</h2>
            <div className="space-y-3 md:space-y-6">
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-accent" size={16} />
                  Round 1: Case Analysis (45 minutes)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Teams receive an ethical dilemma case study and must identify key issues, stakeholders, 
                  and potential solutions. Apply ethical frameworks and business principles to analyze the situation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-primary" size={16} />
                  Round 2: Written Response (30 minutes)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Prepare a structured written analysis outlining your ethical reasoning, recommended course 
                  of action, and anticipated consequences. Quality of argumentation and clarity are essential.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-accent" size={16} />
                  Round 3: Oral Defense (8 minutes per team)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Present your analysis to judges and respond to challenging questions. Defend your position 
                  while demonstrating respect for alternative viewpoints.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Judging Criteria</h2>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Ethical Framework (25%):</strong> Application of ethical theories and principles</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Stakeholder Analysis (20%):</strong> Identification and consideration of all affected parties</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Critical Thinking (25%):</strong> Depth of analysis and logical reasoning</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Practical Solutions (15%):</strong> Feasibility and effectiveness of recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Communication (15%):</strong> Clarity and persuasiveness of written and oral presentation</span>
              </li>
            </ul>
          </Card>

          <Card className="p-4 md:p-8 bg-secondary/50 border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Topics Covered</h2>
            <div className="grid md:grid-cols-2 gap-4 text-xs md:text-base text-muted-foreground">
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-center gap-2">• Corporate social responsibility</li>
                <li className="flex items-center gap-2">• Environmental sustainability</li>
                <li className="flex items-center gap-2">• Workplace ethics</li>
                <li className="flex items-center gap-2">• Data privacy and security</li>
              </ul>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-center gap-2">• Conflicts of interest</li>
                <li className="flex items-center gap-2">• Fair labor practices</li>
                <li className="flex items-center gap-2">• Marketing ethics</li>
                <li className="flex items-center gap-2">• Financial transparency</li>
              </ul>
            </div>
          </Card>

          {/* PDF Download Button */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">Competition Rules & Guidelines</h3>
                <p className="text-sm text-muted-foreground">Download the complete competition packet</p>
              </div>
              <Button asChild className="w-full sm:w-auto">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download PDF
                </a>
              </Button>
            </div>
          </Card>

          {/* Prize Section */}
          <Card className="p-4 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="text-base md:text-3xl font-bold mb-3 md:mb-8 text-center">Competition Prizes</h2>
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <div className="text-center space-y-1">
                <div className="text-2xl md:text-5xl font-bold text-primary">1st</div>
                <div className="text-lg md:text-3xl font-bold">$5,000</div>
                <div className="text-[10px] md:text-sm text-muted-foreground">Winner Certificate</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl md:text-5xl font-bold text-accent">2nd</div>
                <div className="text-lg md:text-3xl font-bold">$2,500</div>
                <div className="text-[10px] md:text-sm text-muted-foreground">Runner-up Certificate</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl md:text-5xl font-bold text-primary">3rd</div>
                <div className="text-lg md:text-3xl font-bold">$1,000</div>
                <div className="text-[10px] md:text-sm text-muted-foreground">Participant Certificate</div>
              </div>
            </div>
          </Card>

          {/* Judges Section */}
          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-3xl font-bold mb-3 md:mb-8 text-center">Meet the Judges</h2>
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

          <div className="text-center space-y-4 pt-4">
            <Link to="/registration">
              <Button size="lg" className="text-lg px-8 transition-all hover:scale-105">
                Register for This Competition
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Questions? <a href="/#faq" className="text-primary hover:underline">View our FAQ</a>
            </p>
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EthicsCompetition;
