import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import sohumPfp from "@/assets/sohumpfp.jpg";
import rajPfp from "@/assets/rajpfp.jpg";
import logo from "@/assets/launchpoint_logo_full.png";
import chamberLogo from "@/assets/palatine_chamber_logo.png";

const About = () => {
  const founders = [
    {
      name: "Sohum Gorladku",
      title: "Co-Founder & Executive Director",
      image: sohumPfp,
      bio: "Sohum Gorladku is a student at Palatine High School and co-founder of LaunchPoint. He is passionate about helping students explore business, entrepreneurship, and leadership opportunities. As an executive leader of FBLA, Sohum has led initiatives to grow membership, organize competitions, and mentor students in business and finance. He co-founded LaunchPoint to provide students across the district with hands-on business competitions, mentorship, and workshops that develop real-world skills. In his free time, he enjoys writing and conducting independent research on business and finance topics, as well as running cross country.",
    },
    {
      name: "Raj Kamepalli",
      title: "Co-Founder & Financial Lead",
      image: rajPfp,
      bio: "Raj Kamepalli is a student at Palatine High School and co-founder of LaunchPoint. A strong competitor in clubs like FBLA and HOSA, Raj brings experience in finance and a passion for helping students gain hands-on exposure to business and entrepreneurship. He co-founded LaunchPoint to create opportunities for students to apply their skills in real-world business challenges and connect with mentors and peers across the district. In his free time, he enjoys exploring advanced topics in finance and economics, as well as playing lacrosse.",
    },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>

        {/* Header */}
        <section className="py-10 md:py-20" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-6 animate-fade-in">

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-[hsl(195,70%,40%)] to-accent bg-clip-text text-transparent">
                About LaunchPoint
              </h1>

              <p className="text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2">
                A student-led initiative connecting students with real-world business experiences, professional mentorship, and career-building opportunities
              </p>

            </div>
          </div>
        </section>


        {/* Partnership Card */}
        <div className="mt-6 md:mt-12 max-w-lg mx-auto">
          <Card className="p-5 md:p-10 bg-card border-border/50">

            <p className="text-center text-[10px] md:text-xs text-muted-foreground mb-4 md:mb-6 font-medium uppercase tracking-wider">
              In Partnership With
            </p>

            <div className="flex items-center justify-center gap-5 md:gap-8">

              <div className="flex items-center gap-2 md:gap-4">
                <img 
                  src={logo} 
                  alt="LaunchPoint" 
                  className="h-12 md:h-[72px] w-auto object-contain rounded"
                />
              </div>

              <div className="w-[2px] h-10 md:h-16 bg-primary/40 rounded-full" />

              <div className="flex items-center">
                <img 
                  src={chamberLogo} 
                  alt="Palatine Area Chamber of Commerce" 
                  className="h-12 md:h-[72px] w-auto object-contain rounded"
                />
              </div>

            </div>

          </Card>
        </div>



        {/* Mission */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">

              <Card className="p-3 md:p-8 lg:p-12 bg-card border-accent/20 shadow-lg">

                <h2 className="text-lg md:text-3xl lg:text-4xl font-bold mb-2 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Mission
                </h2>

                <div className="space-y-2 md:space-y-4 text-xs md:text-base lg:text-lg text-muted-foreground leading-relaxed">

                  <p>
                    LaunchPoint exists to close the gap between classroom business education and real-world business application. While many students learn foundational business concepts, few opportunities allow them to apply those skills in realistic professional environments guided by experienced business leaders.
                  </p>

                  <p>
                    Our mission is to create accessible opportunities where students develop the skills needed for future careers in business, entrepreneurship, and leadership. Through business competitions, interactive workshops, and professional connections, LaunchPoint allows students to think like founders, executives, analysts, and decision-makers while gaining exposure to real-world business practices.
                  </p>

                  <p>
                    LaunchPoint workshops connect students with business professionals including founders, C-suite executives, analysts, entrepreneurs, and industry leaders. Each workshop combines career insights from professionals with an interactive activity inspired by the work they perform, helping students better understand career pathways while developing practical skills.
                  </p>

                  <p>
                    This initiative provides opportunities open to <strong>all high school students</strong> — without requiring membership in a specific club, prior competition experience, or previous business background. LaunchPoint removes barriers to professional exposure while maintaining a high standard of quality and engagement.
                  </p>

                  <br></br>

                  <h3 className="text-lg md:text-3xl lg:text-4xl font-bold mb-2 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Launch Point Exists To:
                  </h3>

                  <ul className="list-disc list-inside space-y-1 md:space-y-2 ml-2 md:ml-4">

                    <li>
                      Provide students with hands-on business experiences beyond the classroom
                    </li>

                    <li>
                      Connect students directly with professionals, executives, and local organizations
                    </li>

                    <li>
                      Develop workforce-ready skills including communication, strategy, and problem-solving
                    </li>

                    <li>
                      Create realistic environments where students practice business decision-making
                    </li>

                    <li>
                      Encourage entrepreneurship, innovation, and leadership development
                    </li>

                  </ul>

                </div>

              </Card>

            <br></br>
            </div>
          </div>
        </section>



        {/* Founders */}
        <section className="py-10 md:py-20" style={{ background: 'var(--gradient-section-2)' }}>

          <div className="container mx-auto px-4">

            <div className="max-w-6xl mx-auto">

              <div className="text-center mb-6 md:mb-16 space-y-1 md:space-y-4">

                <h2 className="text-xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Meet Our Founders
                </h2>

                <p className="text-xs md:text-xl text-muted-foreground">
                  The student leaders behind LaunchPoint
                </p>

              </div>


              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">

                {founders.map((founder, index) => (

                  <Card
                    key={index}
                    className="p-3 md:p-8 bg-card border-accent/20 hover:shadow-xl hover:shadow-accent/10 transition-all"
                  >

                    <div className="space-y-2 md:space-y-6">

                      <div className="flex justify-center">

                        <div className="w-16 h-16 md:w-40 md:h-40 rounded-full overflow-hidden bg-secondary/50">

                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-full object-cover"
                          />

                        </div>

                      </div>


                      <div className="text-center">

                        <h3 className="text-sm md:text-2xl font-bold mb-0.5 md:mb-1">
                          {founder.name}
                        </h3>

                        <p className="text-primary font-medium text-[10px] md:text-base">
                          {founder.title}
                        </p>

                      </div>


                      <p className="text-muted-foreground leading-relaxed text-[10px] md:text-base">
                        {founder.bio}
                      </p>


                    </div>

                  </Card>

                ))}

              </div>

            </div>

          </div>

        </section>


      </main>

      <Footer />

    </div>
  );
};

export default About;
