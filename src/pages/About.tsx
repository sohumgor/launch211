import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  const founders = [
    {
      name: "Dr. Sarah Johnson",
      title: "Event Founder & Director",
      image: "/placeholder.svg",
      bio: "With over 15 years of experience in business education, Dr. Johnson founded Launch 211 to provide students with real-world business competition experience. She has mentored hundreds of students and is passionate about developing the next generation of business leaders.",
    },
    {
      name: "Michael Chen",
      title: "Co-Founder & Operations Lead",
      image: "/placeholder.svg",
      bio: "Michael brings extensive entrepreneurial experience to Launch 211. As a successful startup founder and business consultant, he designs competitions that mirror real business challenges and connects students with industry professionals.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Header */}
        <section className="py-20" style={{ background: 'var(--gradient-page-header)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold">About Launch 211</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering the next generation of business leaders through competition, 
                education, and real-world experience
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="p-4 md:p-8 lg:p-12 bg-card border-border">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Our Mission</h2>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
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
                  <ul className="list-disc list-inside space-y-2 ml-4">
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
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Meet Our Founders</h2>
                <p className="text-sm md:text-xl text-muted-foreground">
                  The visionaries behind Launch 211
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                {founders.map((founder, index) => (
                  <Card
                    key={index}
                    className="p-4 md:p-8 bg-card border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="space-y-3 md:space-y-6">
                      <div className="flex justify-center">
                        <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden bg-secondary/50">
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg md:text-2xl font-bold mb-1">{founder.name}</h3>
                        <p className="text-primary font-medium text-sm md:text-base">{founder.title}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-xs md:text-base">
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
