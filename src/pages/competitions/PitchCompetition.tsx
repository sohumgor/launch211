import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Clock, Users, Trophy, Target, FileText, Download, BookOpen, Lightbulb, CheckCircle2, ArrowRight, Calendar, Building2, Handshake, GraduationCap} from "lucide-react";
import { Link } from "react-router-dom";

const PitchCompetition = () => {
  const knowledgeAreas = [
    "Business Model & Strategy",
    "Market Analysis & Opportunity",
    "Financial Planning & Projections",
    "Competitive Landscape",
    "Customer Value Proposition",
    "Revenue Models & Growth Strategy",
    "Funding & Investment Fundamentals",
    "Risk Management & Mitigation"
  ];

  const pitchDeckSections = [
    {
      title: "Company Purpose",
      points: [
        "What is your company and what does it do? (One clear sentence)",
        "What specific customer pain are you addressing?",
        "Why are current solutions inadequate?"
      ]
    },
    {
      title: "Problem",
      points: [
        "What specific pain or frustration does your target customer experience?",
        "What solutions exist today — and why do they fall short?",
        "What evidence do you have that this problem is real and urgent?"
      ]
    },
    {
      title: "Solution & Value Proposition",
      points: [
        "How does your solution solve the customer's problem?",
        "What specific benefits does your solution provide?",
        "How does your solution make the customer's life meaningfully better?",
        "What makes your approach different or better than what exists?"
      ]
    },
    {
      title: "Why Now?",
      points: [
        "What has changed recently — in technology, behavior, regulation, or culture — that makes this the right moment?",
        "Why couldn't this have worked 5 years ago, or why is it more urgent today?",
        "What trends are enabling or accelerating the need for your solution?"
      ]
    },
    {
      title: "Market Size & Customer Validation",
      points: [
        "What is your market size? (TAM, SAM, SOM with clear calculations)",
        "Who is your beachhead segment and why did you choose them?",
        "Who are your early adopters and what evidence shows they'll pay?",
        "How large is the overall market — and what realistic slice can you capture first?",
        "Who specifically are your first target customers?"
      ]
    },
    {
      title: "Competitive Understanding & Positioning",
      points: [
        "Who are your main competitors (direct and indirect)?",
        "How do you differentiate from existing solutions?",
        "What is your unique competitive advantage?",
        "Why will customers choose you over alternatives?"
      ]
    },
    {
      title: "Business Model & Go-to-Market",
      points: [
        "How does the business charge customers? (subscription, one-time purchase, service fee, etc.)",
        "Why does that pricing model make sense for this product and customer?",
        "What is your specific plan to reach first customers — name the channels partners, or outreach tactics.",
        "Walk through the actual steps from zero to first sale."
      ]
    }
  ];

  const judges = [
    {
      name: "Mayank Mehta",
      title: "Assistant Director of Entrepreneurial Education, iVenture Team",
      image: "/placeholder.svg",
    },
    {
      name: "Sarah Chen",
      title: "Venture Capital Partner",
      image: "/placeholder.svg",
    },
    {
      name: "David Williams",
      title: "Serial Entrepreneur & Angel Investor",
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
                  <Rocket className="text-primary-foreground" size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-[hsl(195,70%,40%)] to-accent bg-clip-text text-transparent pb-1">Venture Pitch</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A comprehensive pitch competition testing your ability to apply startup principles and entrepreneurial thinking
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">
            {/* Registration Deadline - Smaller & Subtle */}
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
                <div className="font-semibold text-[10px] md:text-base text-primary">Live Pitch</div>
                <div className="text-[8px] md:text-sm text-muted-foreground">Event Type</div>
              </Card>
              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">
                <Users className="mx-auto mb-1 md:mb-2 text-accent" size={16} />
                <div className="font-semibold text-[10px] md:text-base text-accent">2-5 Members</div>
                <div className="text-[8px] md:text-sm text-muted-foreground">Team Size</div>
              </Card>
              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">
                <Clock className="mx-auto mb-1 md:mb-2 text-primary" size={16} />
                <div className="font-semibold text-[10px] md:text-base text-primary">7 Minute Presentation</div>
                <div className="text-[8px] md:text-sm text-muted-foreground"> + 3 Minute Q&A</div>
              </Card>
            </div>

            {/* Prize Section */}
            {/* Prize Section - Highlighted Early */}
            <Card className="p-4 md:p-8 bg-gradient-to-br from-primary/10 via-[hsl(195,70%,95%)] to-accent/10 border-accent/30 shadow-lg">
              <h2 className="text-base md:text-3xl font-bold mb-3 md:mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Competition Prizes</h2>
              <div className="grid grid-cols-3 gap-3 md:gap-6">
                <div className="text-center space-y-2 md:space-y-3">
                  <div className="text-2xl md:text-5xl font-bold text-primary">1st</div>
                  <div className="text-xl md:text-4xl font-bold">$1,000</div>
                  <div className="text-xs md:text-base text-muted-foreground italic">Venture Funding</div>
                </div>
                <div className="text-center space-y-2 md:space-y-3">
                  <div className="text-2xl md:text-5xl font-bold text-accent">2nd</div>
                  <div className="text-xl md:text-4xl font-bold">$500</div>
                  <div className="text-xs md:text-base text-muted-foreground italic">Venture Funding</div>
                </div>
                <div className="text-center space-y-2 md:space-y-3">
                  <div className="text-2xl md:text-5xl font-bold text-primary">3rd</div>
                  <div className="text-xl md:text-4xl font-bold">$250</div>
                  <div className="text-xs md:text-base text-muted-foreground italic">Venture Funding</div>
                </div>
              </div>
              <br></br>
              <p className="text-xs md:text-sm text-muted-foreground text-center">
                Prize awards are structured as checks or scholarship-style disbursements intended to directly advance winning teams' business ventures — not just general prize money.
              </p> 
            </Card>

            {/* Post-Event Opportunities */}
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 shadow-lg">
            
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary flex items-center gap-2">
              <Handshake className="w-5 h-5 md:w-6 md:h-6" />
              Post-Event Opportunities
            </h2>

            <p className="text-sm md:text-base text-muted-foreground mb-5">
              The long-term goal is not just competition — it's cultivating student educational and business ventures, representing an investment in the local community. Top-performing teams will receive:
            </p>

            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>
                  <strong className="text-foreground">Office Hours</strong> with local business owners and professionals
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>
                  <strong className="text-foreground">Career-focused</strong> mentorship from local business leaders
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>
                  <strong className="text-foreground">Structured feedback</strong> to sharpen skills, direction, and career vision
                </span>
              </li>

              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />
                <span>
                  <strong className="text-foreground">Potential Early-Stage Advisory</strong> and investment pathways for the most promising ventures
                </span>
              </li>
            </ul>

          </Card>

            {/* Event Overview */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Event Overview</h2>
              <div className="space-y-3 md:space-y-4 text-xs md:text-base text-muted-foreground leading-relaxed">
                <p>
                  The LaunchPoint Venture Pitch Competition is a structured simulation of early-stage venture capital evaluation. Teams of 2–5 students develop and present original business concepts — products or services — to panels of business professionals who evaluate presentations using standardized, investor-style judging criteria.
                </p>
                <p>
                  Students are expected to justify market assumptions, defend revenue logic, respond to critical questioning, and demonstrate execution feasibility. This is not just a presentation event — it's a rigorous, applied entrepreneurial experience.
                </p>
                <p>
                  The competition structure directly aligns with the D211 Business Incubator program curriculum and goes above and beyond by incorporating real-world venture capital evaluation norms. Our materials and rubrics have been reviewed by the iVenture Accelerator team at the University of Illinois Urbana-Champaign, ensuring alignment with how real startups are evaluated.
                </p>
              </div>
              <br></br>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <GraduationCap className="text-primary shrink-0 mt-0.5" size={18} />
                    <div>
                      <div className="font-semibold text-foreground text-xs md:text-sm">D211 Business Incubator Aligned</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">Curriculum-aligned rubrics and structure</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                    <Building2 className="text-accent shrink-0 mt-0.5" size={18} />
                    <div>
                      <div className="font-semibold text-foreground text-xs md:text-sm">UIUC iVenture Reviewed</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">Real venture capital evaluation standards</div>
                    </div>
                  </div>
                </div>
            </Card>

            {/* Knowledge Areas */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <BookOpen className="text-primary" size={24} />
                Knowledge Areas
              </h2>
              <p className="text-xs md:text-base text-muted-foreground mb-4">
                Participants should be prepared to demonstrate understanding across these core entrepreneurship concepts:
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
                    Preparation Phase
                  </h3>
                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                    Teams have all time prior to the in-person competition date to craft their pitch and presentation. Teams have access to all resources during the pitch including devices, notes, visuals, slides, props (optional).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                    <Target className="text-accent" size={16} />
                    Presentation (7 minutes)
                  </h3>
                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                    The team delivers their pitch covering all required sections. The timekeeper provides a 1-minute warning and then indicates when time is up. At that point, participants must stop immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">
                    <Target className="text-primary" size={16} />
                    Question & Answer (3 minutes)
                  </h3>
                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">
                    The judge asks standard questions to determine understanding and probe critical thinking. For teams greater than 1, every team member must participate by responding to at least one question during this session.
                  </p>
                </div>
              </div>
            </Card>

            

            {/* Pitch Deck Requirements */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <Lightbulb className="text-primary" size={24} />
                What to Include in Your Pitch
              </h2>
              <p className="text-xs md:text-base text-muted-foreground mb-4">
                Your 7 minute presentation should address the evaluation criteria. Consider including these elements (all not required but recommended):
              </p>
              <div className="space-y-4 md:space-y-6">
                {pitchDeckSections.map((section, index) => (
                  <div key={index} className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-xs md:text-lg mb-2 text-primary">{index + 1}. {section.title}</h3>
                    <ul className="space-y-1 text-xs md:text-base text-muted-foreground ml-2">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={14} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            {/* Scoring & Evaluation */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scoring & Evaluation (100 Points Total)</h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-primary">I. Business Strategy & Presentation – 70 Points</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">Evaluates the team's market awareness, problem understanding, and business approach.</p>
                  <ul className="space-y-1 text-xs md:text-base text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Company Purpose (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Problem Defintion (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Solution & Value Proposition (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Why Now? (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Market Size & Customer Validation (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Competitive Understanding & Positioning (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Business Model & Go-to-Market Strategy (10 pts)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-lg mb-2 text-accent">II. Communication & Presentation – 30 Points</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">Evaluates the professional quality of the delivery and the team's ability to communicate effectively.</p>
                  <ul className="space-y-1 text-xs md:text-base text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Clarity & Articulation – Ideas expressed clearly and understandably (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Professional Presence – Confidence, poise, and engagement; all members participate (10 pts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Response to Questions – Thoughtful, substantive responses to judge questions (10 pts)</span>
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
                    <li className="flex items-center gap-2">• Pitch deck presentation (Google Slides or PowerPoint)</li>
                    <li className="flex items-center gap-2">• At least one device with internet access</li>
                    <li className="flex items-center gap-2">• Any presentation materials (notecards, printed notes)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xs md:text-base mb-2 text-accent">Items We Provide</h3>
                  <ul className="space-y-1 text-xs md:text-base text-muted-foreground">
                    <li className="flex items-center gap-2">• Internet access</li>
                    <li className="flex items-center gap-2">• Projector/screen for pitchdeck and visuals</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 md:p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-xs md:text-sm text-muted-foreground">
                  <strong className="text-accent">Tip: </strong>OPEN NOTE presentation, but practice your pitch until it feels natural and conversational, not memorized. Ensure all team members understand every aspect of the venture and can speak confidently.
                </p>
              </div>
            </Card>

            {/* Event Guide Download */}
            {/* Event Guide Download */}
            <Card className="p-4 md:p-6 bg-primary/5 border-primary/20">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <FileText className="text-primary" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-lg mb-0.5 md:mb-1">Complete Event Guide</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Download the full Venture Pitch Competition guide with strategic tips, presentation requirements, and detailed evaluation criteria</p>
                  </div>
                </div>
                <Button asChild className="w-full gap-2 text-sm">
                  <a
                    href={`${import.meta.env.BASE_URL}documents/Venture_Pitch.pdf`}
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
                    <h3 className="font-semibold text-sm md:text-lg mb-0.5 md:mb-1">Presentation Rubric</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">View the official rating sheet for the pitch</p>
                  </div>
                </div>
            <Button
              asChild
              variant="outline"
              className="w-full gap-2 text-sm border-accent/30 hover:bg-accent/10"
            >
              <a
                href={`${import.meta.env.BASE_URL}documents/Venture_Pitch_Rubric.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
                View PDF
              </a>
            </Button>
              </div>
            </Card>

            {/* Important Reminders */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <Lightbulb className="text-accent" size={24} />
                Important Reminders
              </h2>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-xs md:text-base mb-1 text-primary">All Team Members Must Participate</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Every team member must respond to at least one question during the Q&A period.</p>
                </div>
                <div className="p-3 md:p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-xs md:text-base mb-1 text-accent">Practice Your Presentation</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Ten minutes goes quickly. Practice multiple times to ensure smooth delivery and time management.</p>
                </div>
                <div className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-xs md:text-base mb-1 text-primary">Be Authentic</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Judges value honesty, self-awareness, and genuine learning over trying to impress with jargon or pretending you made no mistakes.</p>
                </div>
                <div className="p-3 md:p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-xs md:text-base mb-1 text-accent">Focus on Storytelling</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Sharing information is a first step, but getting the audience engaged in the story (the emotional pull) tends to set winners apart.</p>
                </div>
              </div>
            </Card>

            {/* Judges Section
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">
              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Competition Judges</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                {judges.map((judge, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-2 md:mb-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Users className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-xs md:text-base">{judge.name}</h3>
                    <p className="text-[10px] md:text-sm text-muted-foreground">{judge.title}</p>
                  </div>
                ))}
              </div>
            </Card>
               */}
            {/* CTA */}
            <div className="text-center space-y-4 md:space-y-6">
              <Link to="/registration">
                <Button size="lg" className="text-lg px-8 transition-all hover:scale-105">
                  Register a Team Now
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
