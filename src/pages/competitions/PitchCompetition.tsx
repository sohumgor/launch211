import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Clock, Users, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

const PitchCompetition = () => {
  const judges = [
    {
      name: "Alexandra Chen",
      title: "Venture Capital Partner",
      image: "/placeholder.svg",
    },
    {
      name: "Marcus Johnson",
      title: "Angel Investor & Serial Entrepreneur",
      image: "/placeholder.svg",
    },
    {
      name: "Sarah Patel",
      title: "Startup Accelerator Director",
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
                <Lightbulb className="text-primary-foreground" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Venture Pitch Competition</h1>
              <p className="text-xl text-muted-foreground">
                Pitch your startup idea to real venture capitalists
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
              <div className="font-semibold text-[10px] md:text-base">2:00 PM - 4:00 PM</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">2 Hours</div>
            </Card>
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <Users className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
              <div className="font-semibold text-[10px] md:text-base">Teams of 2-5</div>
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
              The VC Pitch Competition is your chance to experience what it's really like to pitch to venture 
              capitalists. Present your innovative startup idea to a panel of real investors and business 
              leaders who will evaluate your concept, business model, and potential for success.
            </p>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
              This is more than just a presentation competition—it's an opportunity to receive valuable 
              feedback from experienced investors, refine your entrepreneurial thinking, and potentially 
              connect with mentors who can help bring your ideas to life. The best pitches demonstrate not 
              just creativity, but also market understanding, feasibility, and strong business fundamentals.
            </p>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Competition Format</h2>
            <div className="space-y-3 md:space-y-6">
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-accent" size={16} />
                  Preliminary Round: Pitch Deck Submission
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Submit a 10-slide pitch deck before the event. Judges review all submissions and select 
                  finalists who will present live. All participants receive written feedback.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-primary" size={16} />
                  Final Round: Live Pitch (5 minutes)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Selected finalists deliver their pitch to the VC panel. Cover your problem, solution, 
                  market opportunity, business model, competitive advantage, and funding needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-accent" size={16} />
                  Q&A Session (5 minutes)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Face challenging questions from the panel. Demonstrate deep understanding of your market, 
                  defend your assumptions, and show your ability to think on your feet.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-primary" size={16} />
                  Deliberation & Awards (30 minutes)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Judges deliberate and provide feedback to each finalist. Winners announced with detailed 
                  commentary on what made their pitches stand out.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Judging Criteria</h2>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Problem & Solution (20%):</strong> Clear articulation of problem and innovative solution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Market Opportunity (20%):</strong> Size, growth potential, and target market definition</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Business Model (20%):</strong> Revenue streams, scalability, and path to profitability</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Competitive Advantage (15%):</strong> Differentiation and defensibility of position</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Team & Execution (15%):</strong> Capability to execute and deliver on vision</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span><strong>Pitch Quality (10%):</strong> Presentation skills and ability to inspire confidence</span>
              </li>
            </ul>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Your Pitch Deck Should Include</h2>
            <div className="grid md:grid-cols-2 gap-4 text-xs md:text-base text-muted-foreground">
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">1.</span> Problem statement
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">2.</span> Your solution
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">3.</span> Market size & opportunity
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">4.</span> Product/service details
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">5.</span> Business model
                </li>
              </ul>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">6.</span> Go-to-market strategy
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">7.</span> Competitive analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">8.</span> Financial projections
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">9.</span> Team & advisors
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">10.</span> Funding ask & use of funds
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-secondary/50 border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Special Opportunities</h2>
            <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-4">
              Beyond prizes, participants may receive:
            </p>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">• One-on-one mentorship sessions with VCs and entrepreneurs</li>
              <li className="flex items-center gap-2">• Introductions to startup accelerators and incubators</li>
              <li className="flex items-center gap-2">• Invitation to exclusive networking events</li>
              <li className="flex items-center gap-2">• Potential follow-up meetings with interested investors</li>
              <li className="flex items-center gap-2">• Recognition in local business community</li>
            </ul>
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
    <div className="text-center space-y-2 md:space-y-3">
      <div className="text-2xl md:text-5xl font-bold text-primary">1st</div>
      <div className="text-xl md:text-4xl font-bold">$TBD</div>
      <div className="text-xs md:text-base text-muted-foreground italic">per team member</div>
      <div className="text-xs md:text-sm text-muted-foreground pt-1 md:pt-2 border-t border-border/30">1st Place Medals</div>
    </div>
    <div className="text-center space-y-2 md:space-y-3">
      <div className="text-2xl md:text-5xl font-bold text-accent">2nd</div>
      <div className="text-xl md:text-4xl font-bold">$TBD</div>
      <div className="text-xs md:text-base text-muted-foreground italic">per team member</div>
      <div className="text-xs md:text-sm text-muted-foreground pt-1 md:pt-2 border-t border-border/30">2nd Place Medals</div>
    </div>
    <div className="text-center space-y-2 md:space-y-3">
      <div className="text-2xl md:text-5xl font-bold text-primary">3rd</div>
      <div className="text-xl md:text-4xl font-bold">$TBD</div>
      <div className="text-xs md:text-base text-muted-foreground italic">per team member</div>
      <div className="text-xs md:text-sm text-muted-foreground pt-1 md:pt-2 border-t border-border/30">3rd Place Medals</div>
    </div>
  </div>
</Card>

          {/* Judges Section 
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
            */}
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

export default PitchCompetition;
