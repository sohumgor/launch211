import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const MarketingWorkshop = () => {
  const teachers = [
    { name: "Emily Parker", title: "Senior Marketing Director", image: "/placeholder.svg" },
    { name: "Kevin Nguyen", title: "Digital Marketing Expert", image: "/placeholder.svg" },
    { name: "Rachel Green", title: "Brand Strategy Consultant", image: "/placeholder.svg" },
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
                <TrendingUp className="text-primary-foreground" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Marketing Workshop</h1>
              <p className="text-xl text-muted-foreground">
                Learn essential marketing strategies from industry professionals
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
              <div className="font-semibold text-[10px] md:text-base">Hands-On</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">Interactive Learning</div>
            </Card>
          </div>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Workshop Overview</h2>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">
              Join marketing professionals and learn the fundamentals of creating effective marketing campaigns. 
              This hands-on workshop covers everything from market research and audience targeting to content 
              creation and campaign measurement.
            </p>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
              Whether you're interested in competing in the Marketing Challenge or simply want to understand 
              how businesses reach their customers, this workshop will give you practical skills you can apply 
              immediately.
            </p>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">What You'll Learn</h2>
            <div className="space-y-2 md:space-y-4 text-xs md:text-base text-muted-foreground">
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Marketing Fundamentals</h3>
                <p>Understanding the 4 Ps (Product, Price, Place, Promotion) and how they work together</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Target Audience Analysis</h3>
                <p>Identifying and understanding your ideal customer through demographics, psychographics, and behavior</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Digital Marketing Channels</h3>
                <p>Overview of social media, email, content marketing, SEO, and paid advertising</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Campaign Development</h3>
                <p>Creating cohesive campaigns with clear objectives, messaging, and calls-to-action</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Metrics & Analytics</h3>
                <p>Measuring campaign success and using data to optimize performance</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-secondary/50 border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Workshop Activities</h2>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Interactive presentation with real-world case studies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Small group exercises creating customer personas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Hands-on campaign planning activity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Q&A session with marketing professionals</span>
              </li>
            </ul>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Who Should Attend</h2>
            <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-4">This workshop is perfect for:</p>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">• Students participating in the Marketing Challenge</li>
              <li className="flex items-center gap-2">• Anyone interested in marketing careers</li>
              <li className="flex items-center gap-2">• Aspiring entrepreneurs who need to market their business</li>
              <li className="flex items-center gap-2">• Students with no prior marketing experience</li>
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

export default MarketingWorkshop;
