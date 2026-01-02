import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const FinanceWorkshop = () => {
  const teachers = [
    { name: "Andrew Mitchell", title: "Investment Banker", image: "/placeholder.svg" },
    { name: "Laura Chen", title: "Financial Planner", image: "/placeholder.svg" },
    { name: "Robert Davis", title: "Stock Market Analyst", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="py-12 mb-12 animate-fade-in" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                <DollarSign className="text-primary-foreground" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Finance Workshop</h1>
              <p className="text-xl text-muted-foreground">
                Master the fundamentals of finance and investing
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
              <div className="font-semibold text-[10px] md:text-base">Throughout Day</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">90 Minutes</div>
            </Card>
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <Users className="mx-auto mb-1 md:mb-2 text-accent" size={16} />
              <div className="font-semibold text-[10px] md:text-base">All Levels</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">No Prerequisites</div>
            </Card>
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <BookOpen className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
              <div className="font-semibold text-[10px] md:text-base">Practical</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">Real-World Focus</div>
            </Card>
          </div>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Workshop Overview</h2>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">
              Learn the fundamentals of investing, financial markets, and portfolio management from finance 
              professionals. This workshop demystifies the stock market and gives you practical knowledge for 
              making informed investment decisions.
            </p>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
              Whether you're preparing for the Stock Market Challenge or building financial literacy for your 
              future, this hands-on workshop will teach you how markets work, how to evaluate investments, 
              and how to build a balanced portfolio.
            </p>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">What You'll Learn</h2>
            <div className="space-y-2 md:space-y-4 text-xs md:text-base text-muted-foreground">
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Stock Market Basics</h3>
                <p>Understanding how exchanges work, what stocks represent, and how trading functions</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Investment Analysis</h3>
                <p>Fundamental and technical analysis techniques for evaluating securities</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Portfolio Management</h3>
                <p>Asset allocation, diversification, and risk management strategies</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Financial Statements</h3>
                <p>Reading and interpreting balance sheets, income statements, and cash flow statements</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Market Psychology</h3>
                <p>Understanding investor behavior and avoiding common psychological pitfalls</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-secondary/50 border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Workshop Activities</h2>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Live market analysis session with real stocks</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Practice trading simulation exercises</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Portfolio construction and rebalancing activity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Case studies of successful (and unsuccessful) investors</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Strategy session for the Stock Market Challenge</span>
              </li>
            </ul>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Key Concepts Covered</h2>
            <div className="grid md:grid-cols-2 gap-4 text-xs md:text-base text-muted-foreground">
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-center gap-2">• Stocks, bonds, and ETFs</li>
                <li className="flex items-center gap-2">• Bull and bear markets</li>
                <li className="flex items-center gap-2">• Market indices and benchmarks</li>
                <li className="flex items-center gap-2">• Valuation metrics (P/E, P/B, etc.)</li>
                <li className="flex items-center gap-2">• Growth vs. value investing</li>
              </ul>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-center gap-2">• Risk and return relationship</li>
                <li className="flex items-center gap-2">• Compound interest and time value</li>
                <li className="flex items-center gap-2">• Market orders vs. limit orders</li>
                <li className="flex items-center gap-2">• Sector rotation and trends</li>
                <li className="flex items-center gap-2">• Long-term vs. short-term strategies</li>
              </ul>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Who Should Attend</h2>
            <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-4">This workshop is perfect for:</p>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">• Students participating in the Finance & Investing Challenge</li>
              <li className="flex items-center gap-2">• Anyone interested in personal finance and investing</li>
              <li className="flex items-center gap-2">• Students considering careers in finance or economics</li>
              <li className="flex items-center gap-2">• Beginners with no prior finance knowledge</li>
            </ul>
          </Card>

          {/* PDF Download Button */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">Workshop Materials</h3>
                <p className="text-sm text-muted-foreground">Download the complete workshop packet</p>
              </div>
              <Button asChild className="w-full sm:w-auto">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download PDF
                </a>
              </Button>
            </div>
          </Card>

          {/* Teachers Section */}
          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-3xl font-bold mb-3 md:mb-8 text-center">Meet Your Instructors</h2>
            <div className="grid grid-cols-3 gap-3 md:gap-8">
              {teachers.map((teacher, index) => (
                <div key={index} className="text-center space-y-2 md:space-y-4">
                  <div className="mx-auto w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden bg-secondary/50">
                    <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs md:text-lg">{teacher.name}</h3>
                    <p className="text-[10px] md:text-sm text-muted-foreground">{teacher.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center space-y-4 pt-4">
            <Link to="/registration">
              <Button size="lg" className="text-lg px-8 transition-all hover:scale-105">
                Register for This Workshop
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

export default FinanceWorkshop;
