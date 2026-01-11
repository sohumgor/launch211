import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, ArrowRight, School, Bus, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Registration = () => {
  const schools = [
    { name: "Palatine High School", district: "D211" },
    { name: "William Fremd High School", district: "D211" },
    { name: "James B. Conant High School", district: "D211" },
    { name: "Hoffman Estates High School", district: "D211" },
    { name: "Schaumburg High School", district: "D211" },
    { name: "Buffalo Grove High School", district: "D214" },
    { name: "John Hersey High School", district: "D214" },
    { name: "Prospect High School", district: "D214" },
    { name: "Wheeling High School", district: "D214" },
    { name: "Rolling Meadows High School", district: "D214" },
    { name: "Elk Grove High School", district: "D214" },
    { name: "Lake Zurich Community High School", district: "CUSD95" },
    { name: "Barrington High School", district: "CUSD220" },
    { name: "Adlai E. Stevenson High School", district: "D125" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
          {/* Header */}
          <div className="text-center space-y-2 md:space-y-4 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Event Registration</h1>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground px-2">
              Secure your spot at Launch 211
            </p>
          </div>

          {/* Registration Status - Smaller */}
          <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-2 md:space-y-3">
              <div className="inline-flex p-2 md:p-3 rounded-full bg-gradient-to-br from-primary to-accent mb-1 md:mb-2">
                <Calendar className="text-primary-foreground w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold px-2">Registration Opens Soon</h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                Registration will be handled through your school's business department head or Launch 211 sponsor. Students cannot register directly online.
              </p>
            </div>
          </Card>

          {/* Eligible Schools - Moved Up */}
          <Card className="p-4 sm:p-6 md:p-8 bg-card border-border">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold">Eligible Schools</h2>
            </div>
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Students from the following schools are eligible to attend. Contact your business department head or Launch 211 sponsor to register.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {schools.map((school, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-secondary/50"
                  >
                    <School className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm font-medium text-foreground truncate">{school.name}</p>
                      <p className="text-xs text-muted-foreground">{school.district}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-accent/10 p-3 md:p-4 rounded-lg border border-accent/20">
                <p className="text-xs md:text-sm text-foreground text-center">
                  School not listed?{" "}
                  <a href="mailto:launch211team@gmail.com" className="font-semibold text-primary hover:text-accent transition-colors">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </Card>

          {/* How to Register */}
          <Card className="p-4 sm:p-6 md:p-8 bg-card border-border">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <School className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold">How to Register</h2>
            </div>
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                To participate in Launch 211, students must register through their school's <span className="font-semibold text-foreground">business department head</span> or designated <span className="font-semibold text-foreground">Launch 211 sponsor</span>.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <h4 className="font-semibold text-sm md:text-base">Competition Registration</h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Register individually or as a team for any of the four competitions. All participants are invited to the Career & Mentorship Panel.
                  </p>
                </div>

                <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    <h4 className="font-semibold text-sm md:text-base">Career Panel Only</h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Want to attend only the Career & Mentorship Panel? Your sponsor can register you for this option.
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 p-3 md:p-4 rounded-lg border border-accent/20">
                <p className="text-xs md:text-sm text-foreground">
                  <span className="font-semibold">Important:</span> Students cannot register directly. Contact your business department head or Launch 211 sponsor to participate.
                </p>
              </div>
            </div>
          </Card>

          {/* Transportation */}
          <Card className="p-4 sm:p-6 md:p-8 bg-card border-border">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Bus className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold">Transportation</h2>
            </div>
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Transportation will be provided for all participants. Students will travel by bus from their school to Palatine High School, accompanied by their school's Launch 211 sponsor(s).
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    <h4 className="font-semibold text-xs md:text-sm">Arrival Time</h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Buses arrive at <span className="font-semibold text-foreground">7:30 AM</span>
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    <h4 className="font-semibold text-xs md:text-sm">Event Location</h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Palatine High School<br />
                    1111 N Rohlwing Rd<br />
                    Palatine, IL 60074
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Presentation Scheduling - Moved Down */}
          <Card className="p-4 sm:p-6 md:p-8 bg-card border-border">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold">Presentation Details</h2>
            </div>
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                As the event approaches, your presentation slot time and room assignment will be communicated to you through your Launch 211 sponsor. You will receive:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-xs md:text-sm mb-1">Presentation Time</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Your specific time slot</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-xs md:text-sm mb-1">Room Location</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Your assigned room number</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 p-3 md:p-4 rounded-lg border border-primary/20">
                <p className="text-xs md:text-sm text-foreground">
                  <span className="font-semibold">Important:</span> Check with your Launch 211 sponsor before the event to confirm your presentation time and room location.
                </p>
              </div>
            </div>
          </Card>

          {/* What to Expect */}
          <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 className="text-lg md:text-xl font-bold mb-4">What to Expect</h2>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={16} />
                <span className="text-xs md:text-sm text-muted-foreground">Free admission for all registered students</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={16} />
                <span className="text-xs md:text-sm text-muted-foreground">Compete for cash prizes in four exciting competitions</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={16} />
                <span className="text-xs md:text-sm text-muted-foreground">Learn from industry professionals at the Career & Mentorship Panel</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={16} />
                <span className="text-xs md:text-sm text-muted-foreground">Network with peers and business leaders</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={16} />
                <span className="text-xs md:text-sm text-muted-foreground">Receive certificates of participation and achievement</span>
              </li>
            </ul>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground px-2">
              Questions about registration or logistics?
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
              <Link to="/#faq">
                <Button size="default" variant="outline" className="w-full sm:w-auto">
                  View FAQs
                </Button>
              </Link>
              <a href="mailto:launch211team@gmail.com">
                <Button size="default" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;