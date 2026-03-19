import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, ArrowRight, Rocket } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <div className="py-10 md:py-16 mb-6 md:mb-12 animate-fade-in" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="text-center space-y-2 md:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-[hsl(195,70%,40%)] to-accent bg-clip-text text-transparent">Team Registration</h1>
              <p className="text-sm md:text-xl text-muted-foreground px-2">
                Register your team for the LaunchPoint Venture Pitch Summit
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-10 md:pb-16">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">

          <Card className="p-4 md:p-8 lg:p-12 bg-card border-accent/20 shadow-lg">
            <div className="space-y-4 md:space-y-8">
              <div className="text-center space-y-2 md:space-y-4">
                <div className="inline-flex p-3 md:p-4 rounded-full bg-gradient-to-br from-primary to-accent mb-2 md:mb-4">
                  <Rocket className="text-primary-foreground" size={24} />
                </div>
                <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Registration Coming Soon</h2>
                <p className="text-xs md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                  We're finalizing our registration system. Once ready, the registration link will be posted here. Registration will close 7 days before the event.
                </p>
                <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <a
                    href="https://forms.gle/h2XLN4iWxxHHy2BE6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fill Out Interest Form →
                  </a>
                </Button>
              </div>

            </div>

              <div className="grid grid-cols-3 gap-2 md:gap-6 pt-4 md:pt-8">
                <div className="text-center space-y-1 md:space-y-2 p-2 md:p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-accent/20">
                  <Users className="mx-auto text-primary" size={20} />
                  <h3 className="font-semibold text-primary text-[10px] md:text-base">Teams of 2–5</h3>
                  <p className="text-[9px] md:text-sm text-muted-foreground hidden md:block">
                    Form a team and develop your venture pitch together
                  </p>
                </div>
                <div className="text-center space-y-1 md:space-y-2 p-2 md:p-6 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20">
                  <Trophy className="mx-auto text-accent" size={20} />
                  <h3 className="font-semibold text-accent text-[10px] md:text-base">$1,750 Prize Pool</h3>
                  <p className="text-[9px] md:text-sm text-muted-foreground hidden md:block">
                    Plus post-event mentorship and venture continuation opportunities
                  </p>
                </div>
                <div className="text-center space-y-1 md:space-y-2 p-2 md:p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-accent/20">
                  <Calendar className="mx-auto text-primary" size={20} />
                  <h3 className="font-semibold text-primary text-[10px] md:text-base">April 25, 2026</h3>
                  <p className="text-[9px] md:text-sm text-muted-foreground hidden md:block">
                    Half-day event
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 via-transparent to-accent/5 p-3 md:p-6 rounded-xl border border-accent/20 space-y-2 md:space-y-4">
                <h3 className="font-semibold text-sm md:text-lg text-primary">What to Expect:</h3>
                <ul className="space-y-1.5 md:space-y-2 text-muted-foreground text-xs md:text-base">
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={14} />
                    <span>Open to all high school students</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={14} />
                    <span>Compete for venture continuation funding ($1,000 / $500 / $250)</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={14} />
                    <span>Present to panels of experienced business professionals</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={14} />
                    <span>Post-event opportunities: office hours, mentorship, and advisory support</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={14} />
                    <span>Catering provided — lunch or snacks depending on schedule</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/5 p-3 md:p-4 rounded-lg border border-accent/10">
                <h4 className="font-semibold text-xs md:text-sm mb-1.5 md:mb-2">Registration will require:</h4>
                <ul className="text-[11px] md:text-sm text-muted-foreground space-y-0.5 md:space-y-1">
                  <li>• Team member names (2–5 students)</li>
                  <li>• Adult faculty contact information</li>
                  <li>• Registration fee covering catered lunch TBD</li>
                </ul>
              </div>

              <div className="text-center pt-2 md:pt-4">
                <p className="text-muted-foreground mb-2 md:mb-4 text-xs md:text-base">
                  Questions about registration? Check our FAQ or send us a message.
                </p>
                <Button size="sm" variant="outline" asChild className="md:text-base">
                  <a href="/#faq">View FAQs</a>
                </Button>
              </div>
            </div>
          </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
