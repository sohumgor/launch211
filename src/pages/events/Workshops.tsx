import { ArrowRight, BarChart3, Lightbulb, Megaphone, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

const tracks = [
  { icon: Megaphone, title: "Marketing & branding", leader: "Marketing leader or CMO", description: "Customer insight, positioning, storytelling, and go-to-market decisions." },
  { icon: BarChart3, title: "Finance & investing", leader: "Financial advisor or finance professional", description: "Opportunity, financial choices, valuation, tradeoffs, and risk." },
  { icon: Lightbulb, title: "Entrepreneurship", leader: "Founder or operator", description: "Problem discovery, idea testing, business models, and building momentum." },
];

const Workshops = () => (
  <div className="site-shell">
    <Seo title="Workshops" description="Interactive LaunchPoint business workshops led by local professionals." />
    <Navbar />
    <main>
      <PageHero eyebrow="Professional workshops" title="Ask better questions. Practice useful skills." intro="A 90-minute block of interactive sessions where students learn with business professionals, not just listen to them." />

      <section className="section workshop-overview">
        <div className="site-container">
          <div className="section-heading-row"><div><p className="eyebrow">Proposed tracks</p><h2>Three lenses on real business work.</h2></div><div><p>Students are expected to select a track during registration based on their interests. Final sessions and leaders will be announced as the program is confirmed.</p><span className="planning-badge">Leaders to be announced</span></div></div>
          <div className="workshop-track-grid">{tracks.map(({ icon: Icon, title, leader, description }, index) => <article className="workshop-track" key={title}><div className="workshop-number">0{index + 1}</div><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p><span>{leader}</span></article>)}</div>
        </div>
      </section>

      <section className="section workshop-format-section">
        <div className="site-container workshop-format-grid">
          <div><p className="eyebrow eyebrow-light">Inside each session</p><h2>Built for participation.</h2><p>Planning materials call for workshops that combine professional context with an activity, small-group discussion, and time for student questions.</p></div>
          <ol className="workshop-steps"><li><span>01</span><div><h3>Career story</h3><p>How the leader entered the field and what the work is really like.</p></div></li><li><span>02</span><div><h3>Practical framework</h3><p>A useful way to approach a real problem in that profession.</p></div></li><li><span>03</span><div><h3>Hands-on activity</h3><p>Students apply the framework individually or in small groups.</p></div></li><li><span>04</span><div><h3>Discussion and questions</h3><p>Students compare decisions and ask the professional directly.</p></div></li></ol>
        </div>
      </section>

      <section className="section">
        <div className="site-container workshop-bottom-grid"><div><Users aria-hidden="true" /><p className="eyebrow">For students</p><h2>Choose during registration.</h2><p>Workshop selection is planned as part of conference registration. Track capacity, exact topics, and room assignments are still being finalized.</p><Link to="/registration" className="text-link">Get registration updates <ArrowRight aria-hidden="true" /></Link></div><div><MessageSquare aria-hidden="true" /><p className="eyebrow">For professionals</p><h2>Lead a useful room.</h2><p>LaunchPoint is recruiting professionals who can teach through a practical exercise and an honest conversation about their field.</p><Link to="/get-involved#inquiry" className="text-link">Propose a workshop <ArrowRight aria-hidden="true" /></Link></div></div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Workshops;
