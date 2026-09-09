import { ArrowRight, BarChart3, BriefcaseBusiness, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

const tracks = [
  { icon: Megaphone, title: "Marketing Workshop" },
  { icon: BarChart3, title: "Finance Workshop" },
  { icon: BriefcaseBusiness, title: "Business Management Workshop" },
];

const Workshops = () => (
  <div className="site-shell">
    <Seo title="Workshops" description="Interactive LaunchPoint business workshops led by local professionals." />
    <Navbar />
    <main>
      <PageHero eyebrow="Professional workshops" title="Explore your interests in business." intro="Marketing, Finance, and Business Management workshops are planned for LaunchPoint. Session details will be announced soon." />

      <section className="section workshop-overview">
        <div className="site-container">
          <div className="section-heading-row"><div><p className="eyebrow">Workshop tracks</p><h2>Find your field.</h2></div><span className="planning-badge">Details coming soon</span></div>
          <div className="workshop-track-grid">{tracks.map(({ icon: Icon, title }, index) => <article className="workshop-track workshop-track-preview" key={title}><div className="workshop-number">0{index + 1}</div><Icon aria-hidden="true" /><h3>{title}</h3></article>)}</div>
          <Link to="/registration" className="text-link workshop-registration-link">Get registration updates <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

    </main>
    <Footer />
  </div>
);

export default Workshops;
