import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Users, Trophy, Target, FileText, Download, BookOpen, Lightbulb, CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinanceChallenge = () => {
  const knowledgeAreas = [
    "Investment Fundamentals",
    "Portfolio Management & Diversification",
    "Market Research & Analysis",
    "Risk Assessment & Management",
    "Financial Statement Analysis",
    "Investment Strategies",
    "Economic Indicators & Market Conditions",
    "Asset Classes & Securities"
  ];

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
        <div className="py-12 mb-12 animate-fade-in overflow-visible" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary via-[hsl(195,70%,40%)] to-accent mb-4 shadow-lg">
                  <DollarSign className="text-primary-foreground" size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-[hsl(195,70%,40%)] to-accent bg-clip-text text-transparent pb-1">Stock Market Simulation</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A comprehensive two-round competition testing your investment principles and financial analysis in real-world market conditions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">
            <Card className="p-2 md:p-4 bg-card border-border/50">
  <div className="flex items-center justify-between gap-2">
    <div className="flex items-center gap-1.5 min-w-0">
      <Calendar className="text-primary w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
      <div className="min-w-0">
        <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Registration Deadline: </span>
        <span className="font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">TBD</span>
      </div>
    </div>
    <Link to="/registration" className="flex-shrink-0">
      <Button size="sm" variant="ghost" className="gap-1 text-[10px] sm:text-xs md:text-sm h-7 sm:h-8 px-2 sm:px-3 md:px-3">
        Details
        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      </Button>
    </Link>
  </div>
</Card>
            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">
                <FileText className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
                <div className="font-semibold text-[10px] md:text-base text-primary">Simulation + Presentation</div>
                <div className="text-[8px] md:text-sm text-muted-foreground">Event Type</div>
              </Card>
              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">
                <Users className="mx-auto mb-1 md:mb-2 text-accent" size={16} />
                <div className="font-semibold text-[10px] md:text-base text-accent">1-4 Members</div>
                <div className="text-[8px] md:text-sm text-muted-foreground">Team Size</div>
              </Card>
              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">
                <Clock className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
                <div className="font-semibold text-[10px] md:text-base text-primary">2 Rounds</div>
                <div className="text-[8px] md:text-sm text-muted-foreground">2-Week Sim + Presentation</div>
              </Card>
            </div>

            {/* Prize Section - Highlighted Early */}
            <Card className="p-4 md:p-8 bg-gradient-to-br from-primary/10 via-[hsl(195,70%,95%)] to-accent/10 border-accent/30 shadow-lg">
              <h2 className="text-base md:text-3xl font-bold mb-3 md:mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Competition Prizes</h2>
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

            {/* Overview */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Event Overview</h2>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">
                The Stock Market Simulation is a comprehensive two-round competition that tests participants' ability to apply investment principles and financial analysis in real-world market conditions. Students engage in a multi-week online stock market simulation, building and managing an investment portfolio using actual market data.
              </p>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                The top-performing teams advance to an in-person presentation round where they must demonstrate deep understanding of investment strategies, risk management, and financial decision-making. Participants will develop critical skills in market research, portfolio construction, fundamental and technical analysis, and strategic communication.
              </p>
            </Card>

            {/* Knowledge Areas */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <BookOpen className="text-primary" size={24} />
                Knowledge Areas
              </h2>
              <p className="text-xs md:text-base text-muted-foreground mb-4">
                Participants should be prepared to demonstrate understanding across these core investment concepts:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                {knowledgeAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs md:text-base text-muted-foreground">
                    <CheckCircle2 className="text-accent flex-shrink-0" size={16} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-4 md:p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-primary w-5 h-5 md:w-6 md:h-6" />
                <h2 className="text-lg md:text-2xl font-bold">Competition Timeline</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border/50">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <h3 className="font-semibold text-sm md:text-base">Round 1 Registration Deadline</h3>
                      <span className="text-xs md:text-sm font-semibold text-primary">TBD</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Register through your school's business department head or Launch 211 sponsor</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border/50">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold text-accent">2</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <h3 className="font-semibold text-sm md:text-base">Platform Access & Setup</h3>
                      <span className="text-xs md:text-sm font-semibold text-accent">TBD</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Teams receive access codes and set up accounts on How The Market Works</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border/50">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold text-primary">3</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <h3 className="font-semibold text-sm md:text-base">Trading Period Begins</h3>
                      <span className="text-xs md:text-sm font-semibold text-primary">TBD</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">2-week simulation starts with $100,000 virtual capital per team</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border/50">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold text-accent">4</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <h3 className="font-semibold text-sm md:text-base">Trading Period Ends</h3>
                      <span className="text-xs md:text-sm font-semibold text-accent">TBD</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Final portfolios locked; top 10 teams calculated</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border/50">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold text-primary">5</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <h3 className="font-semibold text-sm md:text-base">Round 2 Finalists Announced</h3>
                      <span className="text-xs md:text-sm font-semibold text-primary">TBD</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Top 10 teams notified and given presentation guidelines</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/30">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                    <Trophy className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <h3 className="font-semibold text-sm md:text-base">Round 2: In-Person Presentations</h3>
                      <span className="text-xs md:text-sm font-semibold text-primary">TBD</span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Finalists present portfolios at Palatine High School</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link to="/registration">
                  <Button size="sm" variant="ghost" className="gap-1 text-xs md:text-sm">
                    Registration Details
                    <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </Card>
            {/* Round 1 - Detailed Section */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <Target className="text-primary" size={24} />
                Round 1: Online Stock Market Simulation
              </h2>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                Teams compete in an online stock market simulation using real market data. This round tests your ability to apply investment principles, manage risk, and build a diversified portfolio in live market conditions.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                {/* Platform & Starting Capital */}
                <div className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-primary">Simulation Platform</h3>
                  <ul className="space-y-2 text-xs md:text-base text-muted-foreground ml-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>The simulation runs on <a href="https://www.howthemarketworks.com" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 font-medium">How The Market Works</a> — a free, real-time stock market simulation platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Starting Capital:</strong> Each team begins with <span className="text-primary font-bold">$100,000</span> in virtual funds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>Trade stocks, ETFs, and mutual funds using real-time market data and pricing</span>
                    </li>
                  </ul>
                </div>

                {/* Timeframe */}
                <div className="p-3 md:p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-accent">Competition Timeframe</h3>
                  <ul className="space-y-2 text-xs md:text-base text-muted-foreground ml-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Duration:</strong> 2 weeks (14 calendar days) of active trading</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>End Date:</strong> Trading concludes 7 days before the in-person competition date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Trading Hours:</strong> Follow regular market hours (9:30 AM – 4:00 PM EST, Monday-Friday)</span>
                    </li>
                  </ul>
                </div>

                {/* Access & Registration */}
                <div className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-primary">How to Access the Simulation</h3>
                  <ul className="space-y-2 text-xs md:text-base text-muted-foreground ml-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Teacher Registration:</strong> Your teacher/advisor will receive registration codes for your school</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Team Setup:</strong> Create your team account using the unique registration code provided by your teacher</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Join the Contest:</strong> Once registered, your team will be automatically enrolled in the Launch 211 competition group</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Start Trading:</strong> Begin trading immediately once the simulation period opens</span>
                    </li>
                  </ul>
                </div>

                {/* Advancement */}
                <div className="p-3 md:p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-accent/30">
                  <h3 className="font-semibold text-xs md:text-lg mb-2 flex items-center gap-2">
                    <Trophy className="text-primary" size={18} />
                    Advancement to Round 2
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground">
                    The <strong className="text-primary">top 10 teams</strong> with the highest portfolio returns at the end of the simulation period will advance to Round 2: In-Person Portfolio Presentation.
                  </p>
                </div>
              </div>
            </Card>

            {/* Round 2 - Brief Overview */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <Target className="text-accent" size={24} />
                Round 2: In-Person Portfolio Presentation
              </h2>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-4">
                The top 10 teams from Round 1 advance to present their investment strategies in person. This round evaluates your ability to articulate financial decisions, demonstrate understanding of investment principles, and communicate professionally.
              </p>
              <div className="p-3 md:p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-xs md:text-base text-muted-foreground">
                  <strong className="text-accent">Note:</strong> Round 2 scoring is completely independent of Round 1 results. Judges evaluate your presentation skills and financial understanding—not whether you made or lost money during the simulation.
                </p>
              </div>
            </Card>

            {/* Timing Structure - Round 2 */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Round 2 Timing Structure</h2>
              <div className="space-y-3 md:space-y-6">
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                    <Target className="text-primary" size={16} />
                    Presentation (7-10 minutes)
                  </h3>
                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                    The team delivers their investment strategy analysis, portfolio rationale, and key insights. The timekeeper provides a 1-minute warning and then indicates when time is up. At that point, participants must stop immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                    <Target className="text-accent" size={16} />
                    Question & Answer (3 minutes)
                  </h3>
                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                    The judges ask standard questions plus any team-specific questions to determine understanding and probe critical thinking. Every team member must participate by responding to at least one question during this session.
                  </p>
                </div>
              </div>
            </Card>

            {/* Scoring & Evaluation */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scoring & Evaluation - Round 2 (100 Points)</h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-primary">I. Portfolio Strategy & Presentation – 70 Points</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">Evaluates your investment strategy, financial understanding, and portfolio management approach.</p>
                  <ul className="space-y-1 text-xs md:text-base text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Investment Thesis & Objectives – Clear goals, coherent philosophy (14 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Portfolio Construction Logic – Rationale for stock selection and sizing (14 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Strategic Adaptability – Adjustments based on market conditions (14 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Data Interpretation & Financial Understanding (14 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Diversification or Concentration Rationale (14 pts)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-accent">II. Communication & Presentation – 30 Points</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">Evaluates the professional quality of delivery and communication effectiveness.</p>
                  <ul className="space-y-1 text-xs md:text-base text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Clarity & Articulation – Ideas expressed clearly and understandably (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Professional Presence – Confidence, poise, all members participate (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Response to Questions – Thoughtful, substantive answers (10 pts)</span>
                    </li>
                  </ul>
                </div>
                <div className="p-3 md:p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    <strong className="text-primary">Important:</strong> Round 2 scoring is completely independent of Round 1 results. Judges evaluate only your ability to articulate strategy, demonstrate financial understanding, and communicate professionally—not whether you made or lost money.
                  </p>
                </div>
              </div>
            </Card>

            {/* Required Items */}
            <Card className="p-4 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-primary">Required Items & Materials</h2>
              <div className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h3 className="font-semibold text-xs md:text-base mb-2 text-accent">Round 1 - Items You Need</h3>
                    <ul className="space-y-1 text-xs md:text-base text-muted-foreground">
                      <li className="flex items-center gap-2">• Working device with internet access</li>
                      <li className="flex items-center gap-2">• Team account setup through teachers' registration</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs md:text-base mb-2 text-accent">Round 1 - We Provide</h3>
                    <ul className="space-y-1 text-xs md:text-base text-muted-foreground">
                      <li className="flex items-center gap-2">• Registration codes for simulation platform</li>
                      <li className="flex items-center gap-2">• Access to How The Market Works</li>
                      <li className="flex items-center gap-2">• $100,000 starting virtual capital</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h3 className="font-semibold text-xs md:text-base mb-2 text-accent">Round 2 - Items You Need</h3>
                    <ul className="space-y-1 text-xs md:text-base text-muted-foreground">
                      <li className="flex items-center gap-2">• Presentation materials (notecards, printed notes)</li>
                      <li className="flex items-center gap-2">• Device to access portfolio history/notes</li>
                      <li className="flex items-center gap-2">• Optional: Visual aid or slideshow</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs md:text-base mb-2 text-accent">Round 2 - We Provide</h3>
                    <ul className="space-y-1 text-xs md:text-base text-muted-foreground">
                      <li className="flex items-center gap-2">• Internet access</li>
                      <li className="flex items-center gap-2">• Projector/screen for visuals (optional)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Event Guide Download */}
            <Card className="p-4 md:p-6 bg-primary/5 border-primary/20">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <FileText className="text-primary" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-lg mb-0.5 md:mb-1">Complete Event Guide</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Download the full Stock Market Simulation guide with strategic tips, presentation requirements, and detailed evaluation criteria</p>
                  </div>
                </div>
                <Button asChild className="w-full gap-2 text-sm">
                  <a
                    href={`${import.meta.env.BASE_URL}documents/Stock_Market.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={16} />
                    View PDF
                  </a>
                </Button>
              </div>
            </Card>

            {/* Round 2 Judging Instructions Download */}
            <Card className="p-4 md:p-6 bg-accent/5 border-accent/20">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-lg bg-accent/10 flex-shrink-0">
                    <FileText className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-lg mb-0.5 md:mb-1">Round 2 Rubric</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">View the official rating sheet for the portfolio presentation round</p>
                  </div>
                </div>
            <Button
              asChild
              variant="outline"
              className="w-full gap-2 text-sm border-accent/30 hover:bg-accent/10"
            >
              <a
                href={`${import.meta.env.BASE_URL}documents/Stock_Market_Rubric.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
                View PDF
              </a>
            </Button>
              </div>
            </Card>

            {/* Judges Section 
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-3xl font-bold mb-3 md:mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Meet the Judges</h2>
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

export default FinanceChallenge;
