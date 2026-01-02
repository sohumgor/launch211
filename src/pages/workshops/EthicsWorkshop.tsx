import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const EthicsWorkshop = () => {
  const teachers = [
    { name: "Dr. Michael Brown", title: "Business Ethics Professor", image: "/placeholder.svg" },
    { name: "Susan Taylor", title: "Corporate Ethics Consultant", image: "/placeholder.svg" },
    { name: "Daniel Kim", title: "Compliance Officer", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="py-12 mb-12 animate-fade-in" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent to-primary mb-4">
                <Scale className="text-primary-foreground" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Business Ethics Workshop</h1>
              <p className="text-xl text-muted-foreground">
                Learn to navigate ethical dilemmas in business
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
              <div className="font-semibold text-[10px] md:text-base">Throughout Day</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">90 Minutes</div>
            </Card>
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <Users className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
              <div className="font-semibold text-[10px] md:text-base">All Levels</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">No Prerequisites</div>
            </Card>
            <Card className="p-2 md:p-4 text-center bg-card border-border">
              <BookOpen className="mx-auto mb-1 md:mb-2 text-accent" size={16} />
              <div className="font-semibold text-[10px] md:text-base">Discussion-Based</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">Interactive Learning</div>
            </Card>
          </div>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Workshop Overview</h2>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">
              Business ethics is more than just following rules—it's about making principled decisions that 
              balance competing interests and uphold values. This workshop introduces you to ethical frameworks, 
              real-world dilemmas, and the skills needed to navigate complex business situations with integrity.
            </p>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
              Through case discussions and interactive exercises, you'll learn to identify ethical issues, 
              analyze stakeholder impacts, and develop well-reasoned recommendations. These critical thinking 
              skills are valuable whether you're preparing for the Ethics Competition or building a foundation 
              for ethical leadership.
            </p>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">What You'll Learn</h2>
            <div className="space-y-2 md:space-y-4 text-xs md:text-base text-muted-foreground">
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Ethical Frameworks</h3>
                <p>Introduction to consequentialism, deontology, virtue ethics, and stakeholder theory</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Stakeholder Analysis</h3>
                <p>Identifying who is affected by business decisions and weighing competing interests</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Corporate Social Responsibility</h3>
                <p>Understanding businesses' obligations to society, environment, and communities</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Ethical Decision-Making Process</h3>
                <p>Structured approach to analyzing dilemmas and reaching principled conclusions</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Current Issues</h3>
                <p>Exploration of contemporary ethical challenges in technology, sustainability, and globalization</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-secondary/50 border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Workshop Activities</h2>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Interactive case study discussions with real business dilemmas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Small group ethical analysis exercises</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Debate-style discussions exploring multiple perspectives</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Practical tips for the Ethics Competition</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Q&A with ethics professionals and business leaders</span>
              </li>
            </ul>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Topics Covered</h2>
            <div className="grid md:grid-cols-2 gap-4 text-xs md:text-base text-muted-foreground">
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-center gap-2">• Workplace ethics and employee rights</li>
                <li className="flex items-center gap-2">• Environmental sustainability</li>
                <li className="flex items-center gap-2">• Data privacy and technology ethics</li>
                <li className="flex items-center gap-2">• Marketing ethics and truth in advertising</li>
              </ul>
              <ul className="space-y-1 md:space-y-2">
                <li className="flex items-center gap-2">• Financial ethics and transparency</li>
                <li className="flex items-center gap-2">• Supply chain responsibility</li>
                <li className="flex items-center gap-2">• Conflicts of interest</li>
                <li className="flex items-center gap-2">• International business ethics</li>
              </ul>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Who Should Attend</h2>
            <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-4">This workshop is perfect for:</p>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">• Students participating in the Business Ethics Competition</li>
              <li className="flex items-center gap-2">• Future business leaders interested in responsible management</li>
              <li className="flex items-center gap-2">• Anyone interested in philosophy and critical thinking</li>
              <li className="flex items-center gap-2">• Students who want to develop stronger analytical skills</li>
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

export default EthicsWorkshop;
