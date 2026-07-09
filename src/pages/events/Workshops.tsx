import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Briefcase, Lightbulb, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Workshops = () => {
  const workshops = [
    {
      title: "Business Strategy & Consulting",
      description:
        "Explore how professionals analyze challenges, develop recommendations, and create solutions for organizations.",
    },
    {
      title: "Entrepreneurship & Innovation",
      description:
        "Learn how entrepreneurs identify opportunities, build ideas, and transform concepts into real ventures.",
    },
    {
      title: "Finance & Business Decision-Making",
      description:
        "Discover how financial professionals evaluate opportunities, manage risk, and make strategic decisions.",
    },
    {
      title: "Marketing & Brand Strategy",
      description:
        "Understand how businesses build brands, reach customers, and create effective marketing strategies.",
    },
  ];

  const experience = [
    "Career insights directly from business professionals and executives",
    "Interactive activities connected to real workplace scenarios",
    "Practical skills applicable to future careers and competitions",
    "Opportunities to ask questions and learn from industry experiences",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Header */}
        <div
          className="py-12 mb-12 animate-fade-in"
          style={{ background: "var(--gradient-page-header)" }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent to-primary mb-4">
                <Briefcase className="text-primary-foreground" size={40} />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LaunchPoint Workshops
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect with business professionals, explore careers, and develop
                real-world skills through interactive experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">

              <Card className="p-3 md:p-5 text-center border-accent/20 shadow-md">
                <Clock className="mx-auto mb-2 text-primary" size={20} />
                <div className="font-semibold text-xs md:text-base">
                  90 Minutes
                </div>
                <div className="text-[10px] md:text-sm text-muted-foreground">
                  Workshop Length
                </div>
              </Card>

              <Card className="p-3 md:p-5 text-center border-accent/20 shadow-md">
                <Users className="mx-auto mb-2 text-accent" size={20} />
                <div className="font-semibold text-xs md:text-base">
                  All Students
                </div>
                <div className="text-[10px] md:text-sm text-muted-foreground">
                  No Experience Required
                </div>
              </Card>

              <Card className="p-3 md:p-5 text-center border-accent/20 shadow-md">
                <Calendar className="mx-auto mb-2 text-primary" size={20} />
                <div className="font-semibold text-xs md:text-base">
                  Registration Required
                </div>
                <div className="text-[10px] md:text-sm text-muted-foreground">
                  Reserve Your Spot
                </div>
              </Card>

            </div>


            {/* Overview */}
            <Card className="p-4 md:p-8 border-accent/20 shadow-md">

              <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Workshop Experience
              </h2>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                LaunchPoint Workshops provide students with opportunities to
                learn directly from experienced business professionals and
                executives. Each session combines career insights, industry
                knowledge, and interactive activities designed around the real
                work professionals do every day.
              </p>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Participants will explore different areas of business while
                developing communication, problem-solving, and strategic
                thinking skills that prepare them for future academic and
                career opportunities.
              </p>

            </Card>


            {/* What Includes */}
            <Card className="p-4 md:p-8 border-accent/20 shadow-md">

              <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                <Lightbulb size={24}/>
                What Workshops Include
              </h2>

              <div className="space-y-3">

                {experience.map((item,index)=>(
                  <div key={index} className="flex gap-2 text-sm md:text-base text-muted-foreground">
                    <CheckCircle2 className="text-accent flex-shrink-0" size={18}/>
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </Card>


            {/* Workshop Offerings */}
            <Card className="p-4 md:p-8 border-accent/20 shadow-md">

              <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Workshop Offerings
              </h2>

              <p className="text-sm text-muted-foreground mb-6">
                Multiple workshop experiences will be available throughout the
                event. Specific speakers, topics, and schedules will be announced
                soon.
              </p>


              <div className="grid md:grid-cols-2 gap-4">

                {workshops.map((workshop,index)=>(
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-secondary/30 border border-border"
                  >

                    <h3 className="font-semibold mb-2">
                      {workshop.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {workshop.description}
                    </p>

                  </div>
                ))}

              </div>

            </Card>


            {/* Coming Soon */}
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20">

              <h2 className="text-xl md:text-2xl font-bold mb-3 text-primary">
                Additional Workshops Coming Soon
              </h2>

              <p className="text-sm md:text-base text-muted-foreground">
                We are continuing to develop additional workshop opportunities
                with business professionals and executives across multiple
                industries. More details, speakers, and registration information
                will be announced soon.
              </p>

            </Card>


            {/* Registration CTA */}
            <div className="text-center space-y-4 pt-4">

              <Link to="/registration">
                <Button
                  size="lg"
                  className="text-lg px-8 transition-all hover:scale-105"
                >
                  Register for Workshops
                  <ArrowRight className="ml-2" size={18}/>
                </Button>
              </Link>

              <p className="text-sm text-muted-foreground">
                Workshop availability and schedules will be announced soon.
              </p>

            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Workshops;