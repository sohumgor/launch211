import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Clock, Users, Trophy, Target, FileText, Download, BookOpen, Lightbulb, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const EthicsCompetition = () => {
  const knowledgeAreas = [
    "Ethical Frameworks & Decision-Making Models",
    "Stakeholder Analysis & Management",
    "Corporate Social Responsibility (CSR)",
    "Compliance & Regulatory Standards",
    "Corporate Governance & Accountability",
    "Workplace Ethics & Employee Rights",
    "Environmental & Sustainability Ethics",
    "Consumer Protection & Fair Practices",
    "Transparency & Financial Integrity"
  ];

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
        <div className="py-12 mb-12 animate-fade-in overflow-visible" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent via-[hsl(195,70%,40%)] to-primary mb-4 shadow-lg">
                  <Scale className="text-primary-foreground" size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-[hsl(195,70%,40%)] to-accent bg-clip-text text-transparent pb-1">Business Ethics Role Play</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Step into the role of expert ethics consultants addressing critical, real-world ethical dilemmas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">
            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">
                <FileText className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
                <div className="font-semibold text-[10px] md:text-base text-primary">Role Play</div>
                <div className="text-[8px] md:text-sm text-muted-foreground">Event Type</div>
              </Card>
              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">
                <Users className="mx-auto mb-1 md:mb-2 text-accent" size={16} />
                <div className="font-semibold text-[10px] md:text-base text-accent">1-3 Members</div>
                <div className="text-[8px] md:text-sm text-muted-foreground">Team Size</div>
              </Card>
              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">
                <Clock className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
                <div className="font-semibold text-[10px] md:text-base text-primary">30 Minutes</div>
                <div className="text-[8px] md:text-sm text-muted-foreground">Total Time</div>
              </Card>
            </div>

            {/* Prize Section - Highlighted Early */}
            <Card className="p-4 md:p-8 bg-gradient-to-br from-primary/10 via-[hsl(195,70%,95%)] to-accent/10 border-accent/30 shadow-lg">
              <h2 className="text-base md:text-3xl font-bold mb-3 md:mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Competition Prizes</h2>
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

            {/* Overview */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Event Overview</h2>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">
                The Business Ethics Role Play invites you to step into the role of expert ethics consultants who must rapidly address a critical, real-world ethical dilemma. Participants are tasked with analyzing complex situations, such as navigating stakeholder conflicts, responding to corporate misconduct, or balancing profit with social responsibility, and applying their knowledge of core ethical frameworks and principles to develop a viable and comprehensive resolution.
              </p>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                You will articulate and present your reasoned recommendations to a business executive (the judge), demonstrating professional judgment, organized thinking, and outstanding communication skills while defending your ethical analysis in a high-pressure environment. This event tests your ability to connect ethical principles with business decisions and develop responsible strategies for complex moral challenges.
              </p>
            </Card>

            {/* Knowledge Areas */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <BookOpen className="text-primary" size={24} />
                Knowledge Areas
              </h2>
              <p className="text-xs md:text-base text-muted-foreground mb-4">
                Participants should be prepared to demonstrate understanding across these core ethics concepts:
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

            {/* Timing Structure */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Timing Structure</h2>
              <div className="space-y-3 md:space-y-6">
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                    <Target className="text-primary" size={16} />
                    Preparation Time (20 minutes)
                  </h3>
                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                    Participants review the secret role play scenario/case study provided on-site. A single copy of the scenario is provided and must be shared among team members. A one-minute warning will be provided.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                    <Target className="text-accent" size={16} />
                    Presentation (7 minutes)
                  </h3>
                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                    The team delivers their analysis, recommendations, and rationale to the judge. The timekeeper provides a 1-minute warning and then indicates when time is up. At that point participants must stop immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                    <Target className="text-primary" size={16} />
                    Question & Answer (3 minutes)
                  </h3>
                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                    The judge asks standard questions plus any team-specific questions to determine understanding. Every team member must participate by responding to at least one question during this session.
                  </p>
                </div>
              </div>
            </Card>

            {/* Judging Criteria */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scoring & Evaluation (100 Points Total)</h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-primary">I. Response Criteria – 20 Points</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">Evaluates the participant's ability to analyze the business situation and develop strategic recommendations.</p>
                  <ul className="space-y-1 text-xs md:text-base text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Demonstrates understanding of the role play and defines the business objectives (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Identifies logical solution and develops implementation plan (10 pts)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-accent">II. Performance Indicators – 50 Points</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Technical evaluation criteria reflecting how well participants apply the core ethics concepts outlined in the knowledge areas (e.g., Ethical Foundations, Data Privacy, Sustainability, etc.). The judge evaluates 5 specific Performance Indicators relevant to the scenario, each worth a maximum of 10 points.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-primary">III. Presentation Criteria – 30 Points</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">Evaluates the professional quality of the delivery and critical thinking demonstrated by the team.</p>
                  <ul className="space-y-1 text-xs md:text-base text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Well-organized statements; demonstrates preparedness (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Displays confidence, poised body language, engaging eye contact, and effective voice projection (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Demonstrates ability to effectively answer the judges' questions (10 pts)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Required Items */}
            <Card className="p-4 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-primary">Required Items & Materials</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h3 className="font-semibold text-xs md:text-base mb-2 text-accent">Items Competitors Must Provide</h3>
                  <ul className="space-y-1 text-xs md:text-base text-muted-foreground">
                    <li className="flex items-center gap-2">• Two notecards per competitor</li>
                    <li className="flex items-center gap-2">• Student ID for check-in</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-base mb-2 text-accent">Items We Provide</h3>
                  <ul className="space-y-1 text-xs md:text-base text-muted-foreground">
                    <li className="flex items-center gap-2">• Pencil</li>
                    <li className="flex items-center gap-2">• Secret role play/scenario</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 md:p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="text-xs md:text-sm text-muted-foreground">
                  <strong className="text-destructive">Note:</strong> No technology, reference materials, visuals, or props may be used during the presentation. Role play presentations are closed to all attendees.
                </p>
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
                    <p className="text-xs md:text-sm text-muted-foreground">Download the full Business Ethics Role Play guide with study materials and detailed knowledge area objectives</p>
                  </div>
                </div>
                <Button asChild className="w-full gap-2 text-sm">
                  <a
                    href={`${import.meta.env.BASE_URL}documents/Business_Ethics.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={16} />
                    View PDF
                  </a>
                </Button>
              </div>
            </Card>

            {/* Sample Role Plays */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <FileText className="text-primary" size={24} />
                Sample Role Plays
              </h2>
              <p className="text-xs md:text-base text-muted-foreground mb-4">
                Practice with these sample scenarios to prepare for the competition:
              </p>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-base">Sample Role Play #1</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Practice scenario with stakeholder conflict focus</p>
                  </div>
                  <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="gap-2 w-full sm:w-auto flex-shrink-0"
                >
                  <a
                    href={`${import.meta.env.BASE_URL}documents/Ethics_Sample_1.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={14} />
                    Download
                  </a>
                </Button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-base">Sample Role Play #2</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Practice scenario with corporate responsibility focus</p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="gap-2 w-full sm:w-auto flex-shrink-0"
                  >
                    <a
                      href={`${import.meta.env.BASE_URL}documents/Ethics_Sample_2.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={14} />
                      Download
                    </a>
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-base">Sample Role Play #3</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Practice scenario with data privacy focus</p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="gap-2 w-full sm:w-auto flex-shrink-0"
                  >
                    <a
                      href={`${import.meta.env.BASE_URL}documents/Ethics_Sample_3.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={14} />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Tips Section */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <Lightbulb className="text-accent" size={24} />
                Key Tips for Success
              </h2>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span><strong>Confidentiality:</strong> To maintain fairness, competitors must not discuss or share the role play prompt until the event concludes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span><strong>Use Your Notecards Wisely:</strong> Information may be written on both sides. Notecards will be collected after the role play.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span><strong>Team Participation:</strong> Every team member must participate by responding to at least one question during the Q&A session.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span><strong>Prepare Broadly:</strong> Study all knowledge areas as the scenario may draw from any of them.</span>
                </li>
              </ul>
            </Card>

            {/* Judges Section */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-3xl font-bold mb-3 md:mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Meet the Judges</h2>
              <div className="grid grid-cols-3 gap-3 md:gap-8">
                {judges.map((judge, index) => (
                  <div key={index} className="text-center space-y-2 md:space-y-4">
                    <div className="mx-auto w-16 h-16 md:w-32 md:h-32 rounded-full overflow-hidden bg-secondary/50">
                      <img
                        src={judge.image}
                        alt={judge.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs md:text-lg">{judge.name}</h3>
                      <p className="text-[10px] md:text-sm text-muted-foreground">{judge.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* CTA */}
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