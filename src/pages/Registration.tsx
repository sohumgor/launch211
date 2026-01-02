import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, ArrowRight } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">Event Registration</h1>
            <p className="text-xl text-muted-foreground">
              Secure your spot at Launch 211
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                  <Calendar className="text-primary-foreground" size={40} />
                </div>
                <h2 className="text-3xl font-bold">Registration Coming Soon</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're finalizing our registration system to ensure the best experience. 
                  Registration will open shortly and will be linked here.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="text-center space-y-2 p-6 rounded-lg bg-secondary/50">
                  <Users className="mx-auto text-primary" size={32} />
                  <h3 className="font-semibold">Team or Solo</h3>
                  <p className="text-sm text-muted-foreground">
                    Participate individually or with your team
                  </p>
                </div>
                <div className="text-center space-y-2 p-6 rounded-lg bg-secondary/50">
                  <Trophy className="mx-auto text-accent" size={32} />
                  <h3 className="font-semibold">Multiple Events</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose from 4 competitions and workshops
                  </p>
                </div>
                <div className="text-center space-y-2 p-6 rounded-lg bg-secondary/50">
                  <Calendar className="mx-auto text-primary" size={32} />
                  <h3 className="font-semibold">One Day Event</h3>
                  <p className="text-sm text-muted-foreground">
                    Full day of competitions and learning
                  </p>
                </div>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-lg">What to Expect:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Free admission for all registered students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Compete for cash prizes up to $1,000 per competition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Learn from industry professionals and guest speakers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Network with peers and business leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Receive certificates of participation and achievement</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <p className="text-muted-foreground mb-4">
                  Questions about registration? Contact us below.
                </p>
                <Button size="lg" variant="outline" asChild>
                  <a href="/#faq">View FAQs</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
