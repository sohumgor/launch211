import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  const founders = [
    {
      name: "Sohum Gorladku",
      title: "Co-Founder & Operations Lead",
      image: "/placeholder.svg",
      bio: "Sohum Gorladku is a student at Palatine High School and co-founder of Launch 211. He is passionate about helping students explore business, entrepreneurship, and leadership opportunities. As an executive leader of FBLA, Sohum has led initiatives to grow membership, organize competitions, and mentor students in business and finance. He co-founded Launch 211 to provide students across the district with hands-on business competitions, mentorship, and workshops that develop real-world skills. In his free time, he enjoys writing and conducting independent research on business and finance topics, as well as running cross country.",
    },
    {
      name: "Raj Kamepalli",
      title: "Co-Founder & Financial Lead",
      image: "/placeholder.svg",
      bio: "Raj Kamepalli is a student at Palatine High School and co-founder of Launch 211. A strong competitor in clubs like FBLA and HOSA, Raj brings experience in finance and a passion for helping students gain hands-on exposure to business and entrepreneurship. He co-founded Launch 211 to create opportunities for students to apply their skills in real-world business challenges and connect with mentors and peers across the district. In his free time, he enjoys exploring advanced topics in finance and economics, as well as playing lacrosse.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="py-10 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-6 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-[hsl(195,70%,40%)] to-accent bg-clip-text text-transparent">About Launch 211</h1>
              <p className="text-sm sm:text-base md:text-xl text-muted-foreground leading-relaxed px-2">
                Empowering the next generation of business leaders through competition, 
                education, and real-world experience
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
              <Card className="p-4 sm:p-6 md:p-8 lg:p-12 bg-card border-accent/20 shadow-lg">
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Mission</h2>
                <div className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Launch 211 was created to bridge the gap between classroom learning and real-world 
                    business experience. We believe that high school students are capable of tackling 
                    complex business challenges when given the right environment, mentorship, and opportunities.
                  </p>
                  <p>
                    Our event brings together students, educators, and industry professionals to create 
                    a dynamic learning environment where students can test their skills, learn from experts, 
                    and compete for recognition and prizes. Through our competitions and workshops, we aim to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4">
                    <li>Develop critical thinking and problem-solving skills</li>
                    <li>Foster entrepreneurial mindsets and innovation</li>
                    <li>Build confidence in presenting ideas and business concepts</li>
                    <li>Create networking opportunities with peers and professionals</li>
                    <li>Recognize and reward exceptional student talent</li>
                  </ul>
                  <p>
                    We are committed to making business education accessible, engaging, and relevant 
                    for all students in District 211 and beyond.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-10 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 md:mb-16 space-y-2 md:space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Meet Our Founders</h2>
                <p className="text-xs sm:text-sm md:text-xl text-muted-foreground px-2">
                  The visionaries behind Launch 211
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {founders.map((founder, index) => (
                  <Card
                    key={index}
                    className="p-4 sm:p-6 md:p-8 bg-card border-accent/20 hover:shadow-xl hover:shadow-accent/10 transition-all"
                  >
                    <div className="space-y-3 md:space-y-6">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-full overflow-hidden bg-secondary/50">
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-1">{founder.name}</h3>
                        <p className="text-primary font-medium text-xs sm:text-sm md:text-base">{founder.title}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base text-center sm:text-left">
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
