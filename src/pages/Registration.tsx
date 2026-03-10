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
        <div className="py-16 mb-12 animate-fade-in" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-[hsl(195,70%,40%)] to-accent bg-clip-text text-transparent">Team Registration</h1>
              <p className="text-xl text-muted-foreground">
                Register your team for the LaunchPoint Venture Pitch Summit
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-12">

          <Card className="p-8 md:p-12 bg-card border-accent/20 shadow-lg">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                  <Rocket className="text-primary-foreground" size={40} />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Registration Coming Soon</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're finalizing our registration system. Once ready, the registration link will be posted here. Registration will close 7 days before the event.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="text-center space-y-2 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-accent/20">
                  <Users className="mx-auto text-primary" size={32} />
                  <h3 className="font-semibold text-primary">Teams of 2–5</h3>
                  <p className="text-sm text-muted-foreground">
                    Form a team and develop your venture pitch together
                  </p>
                </div>
                <div className="text-center space-y-2 p-6 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20">
                  <Trophy className="mx-auto text-accent" size={32} />
                  <h3 className="font-semibold text-accent">$1,750 Prize Pool</h3>
                  <p className="text-sm text-muted-foreground">
                    Plus post-event mentorship and venture continuation opportunities
                  </p>
                </div>
                <div className="text-center space-y-2 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-accent/20">
                  <Calendar className="mx-auto text-primary" size={32} />
                  <h3 className="font-semibold text-primary">April 25, 2026</h3>
                  <p className="text-sm text-muted-foreground">
                    Half-day event at Harper College Conference Center
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 via-transparent to-accent/5 p-6 rounded-xl border border-accent/20 space-y-4">
                <h3 className="font-semibold text-lg text-primary">What to Expect:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Free admission for all registered teams — open to all high school students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Compete for venture continuation funding ($1,000 / $500 / $250)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Present to panels of experienced business professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Post-event opportunities: office hours, mentorship, and advisory support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Catering provided — lunch or snacks depending on schedule</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                <h4 className="font-semibold text-sm mb-2">Registration will require:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Team member names (2–4 students)</li>
                  <li>• School affiliation</li>
                  <li>• Adult supervisor contact information</li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <p className="text-muted-foreground mb-4">
                  Questions about registration? Check our FAQ or send us a message.
                </p>
                <Button size="lg" variant="outline" asChild>
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
