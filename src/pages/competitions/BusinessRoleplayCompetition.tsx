import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, Clock, Users, Target, FileText, Download, BookOpen, Lightbulb, CheckCircle2, Calendar, ArrowRight, Handshake, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessRoleplayCompetition = () => {

  const knowledgeAreas = [
    "Business Management & Leadership",
    "Strategic Decision-Making",
    "Marketing Strategy & Customer Analysis",
    "Financial Reasoning & Resource Allocation",
    "Operations & Process Improvement",
    "Problem Identification & Solution Development",
    "Professional Communication",
    "Implementation Planning",
    "Real-World Business Problem Solving"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>

        {/* Header */}
        <div className="py-12 mb-12 animate-fade-in overflow-visible" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <div className="text-center space-y-4">

                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent via-[hsl(195,70%,40%)] to-primary mb-4 shadow-lg">
                  <BriefcaseBusiness className="text-primary-foreground" size={40} />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-[hsl(195,70%,40%)] to-accent bg-clip-text text-transparent pb-1">
                  Business Roleplay
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A high-pressure business simulation where students analyze real-world challenges, develop strategic solutions, and present recommendations to industry professionals.
                </p>

              </div>

            </div>
          </div>
        </div>


        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">


            {/* Registration Deadline */}
            <Card className="p-2 md:p-4 bg-card border-border/50">

              <div className="flex items-center justify-between gap-2">

                <div className="flex items-center gap-1.5 min-w-0">

                  <Calendar className="text-primary w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />

                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                      Registration Deadline:
                    </span>

                    <span className="font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">
                      TBD
                    </span>

                  </div>

                </div>


                <Link to="/registration" className="flex-shrink-0">

                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="gap-1 text-[10px] sm:text-xs md:text-sm h-7 sm:h-8 px-2 sm:px-3 md:px-3"
                  >

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

                <div className="font-semibold text-[10px] md:text-base text-primary">
                  Roleplay Simulation
                </div>

                <div className="text-[8px] md:text-sm text-muted-foreground">
                  Event Type
                </div>

              </Card>



              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">

                <Users className="mx-auto mb-1 md:mb-2 text-accent" size={16} />

                <div className="font-semibold text-[10px] md:text-base text-accent">
                  2-4 Members
                </div>

                <div className="text-[8px] md:text-sm text-muted-foreground">
                  Team Format
                </div>

              </Card>



              <Card className="p-2 md:p-4 text-center bg-card border-accent/20 shadow-md">

                <Clock className="mx-auto mb-1 md:mb-2 text-primary" size={16} />

                <div className="font-semibold text-[10px] md:text-base text-primary">
                  30 Minutes
                </div>

                <div className="text-[8px] md:text-sm text-muted-foreground">
                  Total Competition Time
                </div>

              </Card>


            </div>




            {/* Prize Section */}
            <Card className="p-4 md:p-8 bg-gradient-to-br from-primary/10 via-[hsl(195,70%,95%)] to-accent/10 border-accent/30 shadow-lg">

              <h2 className="text-base md:text-3xl font-bold mb-3 md:mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Competition Prizes
              </h2>


              <div className="grid grid-cols-3 gap-3 md:gap-6">


                <div className="text-center space-y-2 md:space-y-3">

                  <div className="text-2xl md:text-5xl font-bold text-primary">
                    1st
                  </div>

                  <div className="text-xl md:text-4xl font-bold">
                    $1,000
                  </div>

                  <div className="text-xs md:text-base text-muted-foreground italic">
                    Scholarship-style Award
                  </div>

                </div>



                <div className="text-center space-y-2 md:space-y-3">

                  <div className="text-2xl md:text-5xl font-bold text-accent">
                    2nd
                  </div>

                  <div className="text-xl md:text-4xl font-bold">
                    $500
                  </div>

                  <div className="text-xs md:text-base text-muted-foreground italic">
                    Scholarship-style Award
                  </div>

                </div>



                <div className="text-center space-y-2 md:space-y-3">

                  <div className="text-2xl md:text-5xl font-bold text-primary">
                    3rd
                  </div>

                  <div className="text-xl md:text-4xl font-bold">
                    $250
                  </div>

                  <div className="text-xs md:text-base text-muted-foreground italic">
                    Scholarship-style Award
                  </div>

                </div>


              </div>


              <br />

              <p className="text-xs md:text-sm text-muted-foreground text-center">
                Prize awards are structured as scholarship-style recognition intended to reward outstanding business analysis, strategic thinking, and professional execution.
              </p>


            </Card>



            {/* Overview */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">

              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Event Overview
              </h2>


              <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-6">

                The LaunchPoint Business Roleplay Competition places students into realistic business decision-making scenarios focused on management, marketing, finance, and organizational strategy.

              </p>


              <p className="text-xs md:text-base text-muted-foreground leading-relaxed">

                Participants receive a confidential business challenge on-site and must quickly analyze the situation, identify key issues, develop a strategic recommendation, and communicate their solution to a panel of business professionals. The event is designed to mirror the problem-solving and decision-making processes used by professionals in the workplace.

              </p>


            </Card>
                        {/* Professional Alignment */}
            <Card className="p-4 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 shadow-md">

              <h2 className="text-base md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">

                <Handshake className="text-primary" size={24} />

                Developed With Business Professionals

              </h2>


              <p className="text-xs md:text-base text-muted-foreground leading-relaxed mb-4">

                LaunchPoint Business Roleplay scenarios are designed to reflect the types of challenges professionals encounter in real organizations. The competition structure emphasizes applied problem-solving, strategic thinking, and communication skills valued in today's workforce.

              </p>


              <p className="text-xs md:text-base text-muted-foreground leading-relaxed">

                Event development is guided by business professionals and executives to ensure scenarios align with realistic business environments, including challenges faced by organizations in management, marketing, finance, and operations.

              </p>



              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-6">


                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">

                  <Building2 className="text-primary shrink-0 mt-0.5" size={18} />

                  <div>

                    <div className="font-semibold text-foreground text-xs md:text-sm">
                      Workforce Skill Alignment
                    </div>

                    <div className="text-[10px] md:text-xs text-muted-foreground">
                      Designed around skills used in professional environments
                    </div>

                  </div>

                </div>



                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">

                  <Target className="text-accent shrink-0 mt-0.5" size={18} />

                  <div>

                    <div className="font-semibold text-foreground text-xs md:text-sm">
                      Real-World Decision Making
                    </div>

                    <div className="text-[10px] md:text-xs text-muted-foreground">
                      Students practice analyzing complex business situations
                    </div>

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

                Participants should be prepared to demonstrate understanding across core business management concepts:

              </p>



              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">

                {knowledgeAreas.map((area, index) => (

                  <div 
                    key={index}
                    className="flex items-center gap-2 text-xs md:text-base text-muted-foreground"
                  >

                    <CheckCircle2 
                      className="text-accent flex-shrink-0" 
                      size={16} 
                    />

                    <span>{area}</span>

                  </div>

                ))}

              </div>


            </Card>






            {/* Timing Structure */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">


              <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

                Timing Structure

              </h2>



              <div className="space-y-3 md:space-y-6">


                <div>

                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">

                    <Target className="text-primary" size={16} />

                    Preparation Phase (20 Minutes)

                  </h3>


                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">

                    Participants receive a confidential business scenario on-site and have 20 minutes to analyze the challenge, identify key considerations, and develop a strategic response. Given notecards to structure presentation.

                  </p>


                </div>





                <div>

                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">

                    <Target className="text-accent" size={16} />

                    Presentation (7 Minutes)

                  </h3>


                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">

                    Students present their recommendations to a panel of judges, explaining their analysis, proposed strategy, and implementation approach.

                  </p>


                </div>





                <div>

                  <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 flex items-center gap-2">

                    <Target className="text-primary" size={16} />

                    Question & Answer (3 Minutes)

                  </h3>


                  <p className="text-muted-foreground ml-5 md:ml-7 text-[10px] md:text-base">

                    Judges ask follow-up questions to evaluate the student's reasoning, adaptability, and ability to defend strategic recommendations.

                  </p>


                </div>


              </div>


            </Card>






            {/* Scoring & Evaluation */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">


              <h2 className="text-base md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

                Scoring & Evaluation

              </h2>



              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">


                <h3 className="font-semibold text-sm md:text-lg text-primary mb-2">

                  Detailed Evaluation Criteria Coming Soon

                </h3>


                <p className="text-xs md:text-base text-muted-foreground">

                  The official judging rubric is currently being developed with business professionals to ensure evaluation standards accurately reflect real-world business analysis, strategic thinking, communication, and execution skills.

                </p>


              </div>



            </Card>





            {/* Required Items */}
            <Card className="p-4 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 shadow-md">


              <h2 className="text-base md:text-2xl font-bold mb-4 text-primary">

                Required Items & Materials

              </h2>



              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">


                <h3 className="font-semibold text-sm md:text-lg text-accent mb-2">

                  Competition Details Coming Soon

                </h3>


                <p className="text-xs md:text-base text-muted-foreground">

                  Specific guidelines regarding preparation materials, allowed resources, technology use, and competition procedures are currently being finalized.

                </p>


              </div>


            </Card>
                        {/* Event Guide */}
            <Card className="p-4 md:p-6 bg-primary/5 border-primary/20">

              <div className="flex flex-col gap-3 md:gap-4">

                <div className="flex items-start gap-3 md:gap-4">

                  <div className="p-2 md:p-3 rounded-lg bg-primary/10 flex-shrink-0">

                    <FileText className="text-primary" size={20} />

                  </div>


                  <div className="min-w-0">

                    <h3 className="font-semibold text-sm md:text-lg mb-0.5 md:mb-1">
                      Complete Event Guide
                    </h3>


                    <p className="text-xs md:text-sm text-muted-foreground">

                      The official Business Roleplay guide, including event procedures, preparation resources, and detailed competition information, will be available soon.

                    </p>


                  </div>


                </div>



                <Button 
                  disabled
                  className="w-full gap-2 text-sm"
                >

                  <Download size={16} />

                  Coming Soon

                </Button>


              </div>


            </Card>






            {/* Sample Scenarios */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">


              <h2 className="text-base md:2xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">

                <FileText className="text-primary" size={24} />

                Sample Business Scenarios

              </h2>



              <p className="text-xs md:text-base text-muted-foreground mb-4">

                Sample roleplay scenarios will be released to help participants understand the format and practice analyzing realistic business challenges.

              </p>



              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">


                <h3 className="font-semibold text-sm md:text-base text-primary">

                  Scenario Library Coming Soon

                </h3>


                <p className="text-xs md:text-sm text-muted-foreground mt-2">

                  Future resources may include sample management, marketing, finance, and operations-focused scenarios.

                </p>


              </div>



            </Card>







            {/* Post Event Opportunities */}
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 shadow-lg">


              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary flex items-center gap-2">

                <Handshake className="w-5 h-5 md:w-6 md:h-6" />

                Post-Event Opportunities

              </h2>



              <p className="text-sm md:text-base text-muted-foreground mb-5">

                LaunchPoint extends beyond competition day by connecting outstanding participants with continued opportunities for professional growth and engagement with the local business community.

              </p>



              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">


                <li className="flex items-start gap-2">

                  <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />

                  <span>

                    <strong className="text-foreground">
                      Professional Mentorship
                    </strong> with business leaders and executives

                  </span>

                </li>




                <li className="flex items-start gap-2">

                  <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />

                  <span>

                    <strong className="text-foreground">
                      Career Insights
                    </strong> through connections with professionals across business fields

                  </span>

                </li>





                <li className="flex items-start gap-2">

                  <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />

                  <span>

                    <strong className="text-foreground">
                      Structured Feedback
                    </strong> to strengthen strategic thinking and communication skills

                  </span>

                </li>





                <li className="flex items-start gap-2">

                  <ArrowRight className="text-accent flex-shrink-0 mt-1" size={16} />

                  <span>

                    <strong className="text-foreground">
                      Continued Community Connections
                    </strong> through LaunchPoint's business network

                  </span>

                </li>



              </ul>



            </Card>







            {/* Tips Section */}
            <Card className="p-4 md:p-8 bg-card border-accent/20 shadow-md">


              <h2 className="text-base md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">

                <Lightbulb className="text-accent" size={24} />

                Key Tips for Success

              </h2>




              <ul className="space-y-3 text-xs md:text-base text-muted-foreground">


                <li className="flex items-start gap-3">

                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />

                  <span>

                    <strong>
                      Understand the Business Problem:
                    </strong> Before proposing solutions, clearly identify the organization's challenge and objectives.

                  </span>

                </li>




                <li className="flex items-start gap-3">

                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />

                  <span>

                    <strong>
                      Think Strategically:
                    </strong> Strong responses balance creativity with realistic implementation.

                  </span>

                </li>




                <li className="flex items-start gap-3">

                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />

                  <span>

                    <strong>
                      Defend Your Reasoning:
                    </strong> Judges evaluate not only the recommendation but the logic behind the decision.

                  </span>

                </li>




                <li className="flex items-start gap-3">

                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />

                  <span>

                    <strong>
                      Communicate Professionally:
                    </strong> Present ideas clearly and confidently as if speaking to business executives.

                  </span>

                </li>


              </ul>


            </Card>








            {/* CTA */}
            <div className="text-center space-y-4 pt-4">


              <Link to="/registration">

                <Button 
                  size="lg" 
                  className="text-lg px-8 transition-all hover:scale-105"
                >

                  Register for This Competition

                </Button>

              </Link>



              <p className="text-sm text-muted-foreground">

                Questions?{" "}

                <a 
                  href="/#faq" 
                  className="text-primary hover:underline"
                >
                  View our FAQ
                </a>


              </p>



            </div>



          </div>

        </div>


      </main>


      <Footer />

    </div>

  );


};


export default BusinessRoleplayCompetition;