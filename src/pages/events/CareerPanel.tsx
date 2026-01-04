import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Users, 
  Briefcase,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Target,
  Rocket,
  BookOpen,
  Linkedin
} from "lucide-react";

const CareerPanel = () => {
  const panelInsights = [
    "How to explore business opportunities in high school and prepare for college programs",
    "Strategies for breaking into competitive industries and developing leadership skills",
    "Lessons learned from real-world experiences, including internships, entrepreneurship, and career challenges",
    "College application advice, including tips for getting into top business programs and maximizing opportunities while in school"
  ];

  const features = [
    {
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
      title: "1 Hour",
      description: "Interactive session"
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Expert Panel",
      description: "Business professionals & college students"
    },
    {
      icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Q&A Session",
      description: "Direct engagement with panelists"
    }
  ];

  {/* const speakers = [
    {
      name: "Speaker Name",
      title: "Business Professional",
      company: "Company Name",
      bio: "An experienced business leader with expertise in entrepreneurship and strategic management. Passionate about mentoring the next generation of business professionals.",
      image: "/placeholder.svg"
    },
    {
      name: "Speaker Name",
      title: "College Student",
      company: "University Name",
      bio: "A dedicated student pursuing a degree in business administration with a focus on finance. Active in entrepreneurship clubs and internship programs.",
      image: "/placeholder.svg"
    },
    {
      name: "Speaker Name",
      title: "Entrepreneur",
      company: "Startup Name",
      bio: "Founder of a successful startup, bringing real-world experience in building businesses from the ground up and navigating industry challenges.",
      image: "/placeholder.svg"
    },
    {
      name: "Speaker Name",
      title: "Industry Expert",
      company: "Corporation Name",
      bio: "A seasoned professional with years of experience in competitive industries, offering insights on career development and leadership skills.",
      image: "/placeholder.svg"
    }
  ]; */}

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
                <span>Featured Event</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight px-2">
                Career & Mentorship Panel
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                An interactive panel with local business professionals and college students sharing their journeys in business and entrepreneurship.
              </p>
            </div>
          </div>
        </section>

        {/* Features Cards */}
        <section className="py-6 md:py-10 -mt-2 md:-mt-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="p-2.5 md:p-5 text-center bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all">
                  <div className="w-8 h-8 md:w-11 md:h-11 mx-auto mb-2 md:mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xs md:text-base mb-0.5">{feature.title}</h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground leading-tight">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Panel Overview */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-4 md:p-6 lg:p-8 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="flex items-center gap-2 mb-3 md:mb-5">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Panel Overview</h2>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
                  Students will hear firsthand how panelists got started in their fields, navigated college, 
                  and developed the skills needed to succeed in business.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Students will have the opportunity to ask questions, engage with panelists, and gain guidance 
                  for both their academic and career paths.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Panel Insights */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-5 md:mb-8">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-accent/10 text-accent mb-3">
                  <Lightbulb className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs font-medium">What You'll Learn</span>
                </div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Panel Insights</h2>
              </div>
              
              <div className="grid gap-2 md:gap-3">
                {panelInsights.map((insight, index) => (
                  <Card 
                    key={index} 
                    className="p-3 md:p-4 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-2.5 md:gap-3">
                      <div className="shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs md:text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-xs md:text-sm text-foreground leading-relaxed pt-0.5 md:pt-1">{insight}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-5 md:mb-8">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-primary/10 text-primary mb-3">
                  <Users className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="text-xs font-medium">Meet the Panelists</span>
                </div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold">Featured Speakers</h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-2 max-w-xl mx-auto px-4">
                  Learn from experienced business professionals and college students.
                </p>
              </div>
              
              {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                {speakers.map((speaker, index) => (
                  <Card key={index} className="p-3 md:p-4 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all group text-center">
                    <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-xs md:text-base mb-0.5 group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-[10px] md:text-xs text-primary font-medium">{speaker.title}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2">{speaker.company}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
                      {speaker.bio}
                    </p>
                  </Card>
                ))}
              </div> */}
              
              <p className="text-center text-sm md:text-base text-muted-foreground italic">
                Speaker lineup will be announced soon.
              </p>
            </div>
          </div>
        </section>

        {/* Who Should Attend 
        <section className="py-6 md:py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-4 md:p-6 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="p-1.5 rounded-lg bg-accent/10">
                    <Target className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold">Who Should Attend</h2>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {[
                    { icon: <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4" />, text: "Business & finance students" },
                    { icon: <Rocket className="w-3.5 h-3.5 md:w-4 md:h-4" />, text: "Aspiring entrepreneurs" },
                    { icon: <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4" />, text: "Career explorers" },
                    { icon: <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4" />, text: "College-bound students" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 md:p-2.5 rounded-lg bg-secondary/50">
                      <div className="text-primary shrink-0">{item.icon}</div>
                      <span className="text-[10px] md:text-xs text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-xl mx-auto space-y-3 md:space-y-5">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold px-2">Ready to Learn from Industry Leaders?</h2>
              <p className="text-xs md:text-sm text-muted-foreground px-4">
                Register now to secure your spot at Launch 211.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
                <Link to="/registration">
                  <Button size="default" className="font-semibold px-5 md:px-6 w-full sm:w-auto text-sm">
                    Register Now
                  </Button>
                </Link>
                <Link to="/#faq">
                  <Button size="default" variant="outline" className="font-semibold px-5 md:px-6 w-full sm:w-auto text-sm">
                    View FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareerPanel;