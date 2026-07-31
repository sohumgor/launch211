import { BarChart3, Lightbulb, Megaphone } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";

const Workshops = () => <div className="site-shell"><Seo title="Workshops" description="Interactive business workshops led by local professionals."/><Navbar/><main>
  <PageHero eyebrow="Professional workshops" title="Ask better questions. Practice useful skills." intro="LaunchPoint workshops are planned as interactive sessions with professionals, not long lectures or generic career talks."/>
  <section className="section"><div className="site-container"><div className="section-heading-row"><div><p className="eyebrow">Proposed tracks</p><h2>Three lenses on real business work.</h2></div><p>Final sessions and leaders will be announced as the conference program is confirmed.</p></div><div className="card-grid"><article className="info-card"><Megaphone/><h3>Marketing & branding</h3><p>Customer insight, positioning, storytelling, and go-to-market decisions.</p></article><article className="info-card"><BarChart3/><h3>Finance & investing</h3><p>Opportunity, valuation, financial choices, tradeoffs, and risk.</p></article><article className="info-card"><Lightbulb/><h3>Entrepreneurship</h3><p>Problem discovery, idea testing, business models, and momentum.</p></article></div><div className="callout"><strong>Want to lead a session?</strong><p>We are looking for professionals who can combine a short story with an exercise, discussion, or practical framework. Visit Get Involved to start a conversation.</p></div></div></section>
</main><Footer/></div>;
export default Workshops;

