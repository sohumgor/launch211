import { ArrowRight, Building2, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import chamberLogo from "@/assets/Palatine_Chamber_Logo.png";
import sohumPhoto from "@/assets/sohumpfp.jpg";
import rajPhoto from "@/assets/rajpfp.jpg";

const founders = [
  { name: "Sohum Gorladku", role: "Co-Founder & Executive Director", image: sohumPhoto, focus: "Conference strategy, digital experience, outreach, and student programming." },
  { name: "Raj Kamepalli", role: "Co-Founder & Financial Lead", image: rajPhoto, focus: "Financial planning, partnership coordination, and event operations." },
];

const About = () => (
  <div className="site-shell">
    <Seo title="About" description="Meet the students behind LaunchPoint and learn why the conference exists." />
    <Navbar />
    <main>
      <PageHero eyebrow="About LaunchPoint" title="Classroom knowledge, put to work." intro="LaunchPoint is a student-led regional business conference designed to make professional experience more accessible to high school students." />
      <section className="section">
        <div className="site-container content-grid">
          <aside className="content-aside"><h3>At a glance</h3><dl><div><dt>Audience</dt><dd>High school students</dd></div><div><dt>Format</dt><dd>Competitions, workshops, speakers, and mentorship</dd></div><div><dt>Region</dt><dd>Palatine and surrounding communities</dd></div><div><dt>Lead partner</dt><dd>Palatine Area Chamber of Commerce</dd></div></dl></aside>
          <div className="prose-block">
            <h2>Why LaunchPoint exists</h2>
            <p>Students can learn the language of business in class, but it becomes real when they must make a recommendation, defend an assumption, answer an unexpected question, or explain an idea to someone working in the field.</p>
            <p>LaunchPoint creates that setting locally. It gives students a place to test what they know while giving business leaders a clear, structured way to invest in emerging talent.</p>
            <div className="callout"><strong>Student-led. Community-backed.</strong><p>The student team directs the conference vision and experience. Local professionals contribute the judgment, perspective, and connections that make the work authentic.</p></div>
            <h2>What students leave with</h2>
            <div className="card-grid"><article className="info-card"><Lightbulb aria-hidden="true" /><h3>Applied judgment</h3><p>Turn incomplete information into a clear, defensible business decision.</p></article><article className="info-card"><Users aria-hidden="true" /><h3>Professional feedback</h3><p>Hear how leaders evaluate ideas, communication, risk, and execution.</p></article><article className="info-card"><Building2 aria-hidden="true" /><h3>Regional connection</h3><p>Meet peers and professionals who make the local economy work.</p></article></div>
          </div>
        </div>
      </section>

      <section className="section founders-section">
        <div className="site-container">
          <div className="section-heading-row"><div><p className="eyebrow">The student team</p><h2>Meet the students behind LaunchPoint.</h2></div></div>
          <div className="founder-grid">{founders.map((founder) => <article className="founder-card" key={founder.name}><div className="founder-photo"><img src={founder.image} alt={`${founder.name}, ${founder.role}`} loading="lazy" /></div><div className="founder-copy"><p className="eyebrow">Student co-founder</p><h3>{founder.name}</h3><p className="founder-role">{founder.role}</p><p>{founder.focus}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section partner-section">
        <div className="site-container partner-grid"><div><p className="eyebrow">Strategic lead partner</p><h2>Built with the Chamber.</h2><p>The Palatine Area Chamber of Commerce helps connect LaunchPoint with judges, speakers, mentors, sponsors, and member businesses.</p><Link to="/get-involved" className="text-link">See how to get involved <ArrowRight aria-hidden="true" /></Link></div><div className="partner-logo"><img src={chamberLogo} alt="Palatine Area Chamber of Commerce" loading="lazy" /></div></div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
