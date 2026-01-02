import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Clock, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const PitchWorkshop = () => {
  const teachers = [
    { name: "Jennifer Wu", title: "Startup Founder & Mentor", image: "/placeholder.svg" },
    { name: "Christopher Hall", title: "Pitch Coach", image: "/placeholder.svg" },
    { name: "Amanda Foster", title: "Venture Capital Advisor", image: "/placeholder.svg" },
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
                <Lightbulb className="text-primary-foreground" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">VC Pitch Workshop</h1>
              <p className="text-xl text-muted-foreground">
                Learn to craft and deliver winning startup pitches
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
              <div className="font-semibold text-[10px] md:text-base">Hands-On</div>
              <div className="text-[8px] md:text-sm text-muted-foreground">Practice Pitching</div>
            </Card>
          </div>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Workshop Overview</h2>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">
              Master the art of the pitch with guidance from entrepreneurs and investors who've been on both 
              sides of the table. This workshop breaks down what makes a pitch successful, how to structure 
              your story, and how to deliver with confidence and impact.
            </p>
            <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
              You'll learn the essential elements of a great pitch deck, how to articulate your value proposition, 
              and techniques for handling tough questions from investors. Whether you're preparing for the VC 
              Pitch Competition or working on your own startup, this workshop will sharpen your pitching skills.
            </p>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">What You'll Learn</h2>
            <div className="space-y-2 md:space-y-4 text-xs md:text-base text-muted-foreground">
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Pitch Structure</h3>
                <p>The proven framework for organizing your pitch from problem to ask</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Storytelling Techniques</h3>
                <p>How to craft a compelling narrative that engages and persuades investors</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Slide Design</h3>
                <p>Best practices for creating visual pitch decks that support your message</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Presentation Skills</h3>
                <p>Body language, vocal delivery, and stage presence to command attention</p>
              </div>
              <div className="p-3 md:p-4 bg-secondary/30 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2">Q&A Mastery</h3>
                <p>Strategies for answering difficult questions and handling objections</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-secondary/50 border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Workshop Activities</h2>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Analysis of successful pitch decks from funded startups</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Live pitch demonstrations by entrepreneurs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Small group pitch practice sessions with peer feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Mock Q&A sessions simulating investor questions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>One-on-one coaching time with mentors</span>
              </li>
            </ul>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">The Perfect Pitch Deck</h2>
            <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-4">Learn how to structure each slide:</p>
            <div className="grid md:grid-cols-2 gap-3 text-xs md:text-base text-muted-foreground">
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">1. Hook:</span> Grab attention immediately
              </div>
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">2. Problem:</span> What pain are you solving?
              </div>
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">3. Solution:</span> Your innovative approach
              </div>
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">4. Market:</span> Size and opportunity
              </div>
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">5. Product:</span> How it works
              </div>
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">6. Traction:</span> Proof of concept
              </div>
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">7. Business Model:</span> How you make money
              </div>
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">8. Competition:</span> Your advantage
              </div>
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">9. Team:</span> Why you'll succeed
              </div>
              <div className="p-2 md:p-3 bg-secondary/30 rounded">
                <span className="font-semibold text-foreground">10. Ask:</span> What you need and why
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Presentation Tips</h2>
            <div className="grid md:grid-cols-2 gap-6 text-xs md:text-base text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2 md:mb-3">Do's</h3>
                <ul className="space-y-1 md:space-y-2">
                  <li className="flex items-center gap-2">✓ Tell a story, not just facts</li>
                  <li className="flex items-center gap-2">✓ Practice until you're confident</li>
                  <li className="flex items-center gap-2">✓ Make eye contact with judges</li>
                  <li className="flex items-center gap-2">✓ Show passion for your idea</li>
                  <li className="flex items-center gap-2">✓ Keep slides simple and visual</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 md:mb-3">Don'ts</h3>
                <ul className="space-y-1 md:space-y-2">
                  <li className="flex items-center gap-2">✗ Read from slides</li>
                  <li className="flex items-center gap-2">✗ Use jargon without explaining</li>
                  <li className="flex items-center gap-2">✗ Ignore time limits</li>
                  <li className="flex items-center gap-2">✗ Get defensive during Q&A</li>
                  <li className="flex items-center gap-2">✗ Over-complicate your message</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-card border-border">
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4">Who Should Attend</h2>
            <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-4">This workshop is perfect for:</p>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">• Students participating in the VC Pitch Competition</li>
              <li className="flex items-center gap-2">• Aspiring entrepreneurs with business ideas</li>
              <li className="flex items-center gap-2">• Anyone who wants to improve presentation skills</li>
              <li className="flex items-center gap-2">• Students interested in startups and venture capital</li>
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

export default PitchWorkshop;
