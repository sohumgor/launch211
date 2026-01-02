import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Users, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

const FinanceChallenge = () => {
  const judges = [
    {
      name: "Richard Goldman",
      title: "Portfolio Manager, Investment Firm",
      image: "/placeholder.svg",
    },
    {
      name: "Maria Rodriguez",
      title: "Financial Analyst, Trading Company",
      image: "/placeholder.svg",
    },
    {
      name: "Thomas Lee",
      title: "Wealth Management Advisor",
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
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                <DollarSign className="text-primary-foreground" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Stock Market Simulation</h1>
              <p className="text-xl text-muted-foreground">
                Test your financial acumen in simulated stock market trading
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <Clock className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
              <div className="font-semibold text-[10px] md:text-base">11:30 AM - 1:30 PM</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">2 Hours</div>
            </Card>
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <Users className="mx-auto mb-1 md:mb-2 text-accent" size={16} />
              <div className="font-semibold text-[10px] md:text-base">Individual</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">Or Teams of 2</div>
            </Card>
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <Trophy className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
              <div className="font-semibold text-[10px] md:text-base">$1,750 Prize Pool</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">1st, 2nd, 3rd Place</div>
            </Card>
          </div>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Competition Overview</h2>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">
              The Finance & Investing Stock Market Challenge puts you in the driver's seat of portfolio 
              management. Using a sophisticated stock market simulator, you'll make real-time investment 
              decisions, manage risk, and compete to achieve the highest returns on your virtual portfolio.
            </p>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
              This competition tests your understanding of financial markets, investment strategies, risk 
              management, and your ability to make informed decisions under pressure. You'll need to analyze 
              market trends, evaluate company fundamentals, and balance risk versus reward to outperform 
              the competition.
            </p>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Competition Format</h2>
            <div className="space-y-3 md:space-y-6">
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-primary" size={16} />
                  Setup & Training (20 minutes)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Introduction to the trading platform and competition rules. Each participant receives a 
                  virtual portfolio with $100,000 in starting capital. Brief market overview provided.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-accent" size={16} />
                  Trading Session 1 (45 minutes)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Active trading period where participants buy and sell stocks, manage their portfolio, 
                  and respond to market events. Real-time rankings displayed throughout.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-primary" size={16} />
                  Market Analysis Break (15 minutes)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Review performance, analyze market conditions, and adjust strategy for the next session.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                  <Target className="text-accent" size={16} />
                  Trading Session 2 (40 minutes)
                </h3>
                <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                  Final trading period with increased market volatility. Make your final moves to maximize 
                  returns and secure your position on the leaderboard.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Judging Criteria</h2>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Portfolio Returns (50%):</strong> Total return on investment (ROI) compared to starting capital</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Risk Management (25%):</strong> Portfolio diversification and volatility management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Trading Strategy (15%):</strong> Consistency and rationale behind investment decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span><strong>Market Outperformance (10%):</strong> Returns relative to market benchmark indices</span>
              </li>
            </ul>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Skills You'll Use</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 md:space-y-4">
                <h3 className="font-semibold text-sm md:text-lg">Technical Skills</h3>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-base text-muted-foreground">
                  <li className="flex items-center gap-2">• Financial statement analysis</li>
                  <li className="flex items-center gap-2">• Technical chart reading</li>
                  <li className="flex items-center gap-2">• Valuation methods</li>
                  <li className="flex items-center gap-2">• Risk assessment</li>
                </ul>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h3 className="font-semibold text-sm md:text-lg">Strategic Skills</h3>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-base text-muted-foreground">
                  <li className="flex items-center gap-2">• Portfolio diversification</li>
                  <li className="flex items-center gap-2">• Market timing</li>
                  <li className="flex items-center gap-2">• Decision-making under pressure</li>
                  <li className="flex items-center gap-2">• Trend analysis</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-secondary/50 border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">What You'll Learn</h2>
            <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-4">
              This competition provides hands-on experience with:
            </p>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">• Real-world stock market dynamics</li>
              <li className="flex items-center gap-2">• Investment portfolio construction and management</li>
              <li className="flex items-center gap-2">• Risk versus reward trade-offs</li>
              <li className="flex items-center gap-2">• Market research and company analysis</li>
              <li className="flex items-center gap-2">• Trading psychology and emotional discipline</li>
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

export default FinanceChallenge;
