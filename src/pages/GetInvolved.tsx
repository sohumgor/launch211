import { ArrowUpRight, Gavel, Handshake, Presentation } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { event, sponsorTiers } from "@/content/site";

const GetInvolved = () => <div className="site-shell"><Seo title="Get Involved | LaunchPoint" description="Judge, teach, mentor, volunteer, or sponsor LaunchPoint."/><Navbar/><main>
  <PageHero eyebrow="Professionals and partners" title="Bring the business community into the room." intro="LaunchPoint works when students meet professionals who are willing to share context, ask thoughtful questions, and take their ideas seriously."/>
  <section className="section"><div className="site-container"><div className="card-grid"><article className="info-card"><Gavel/><h3>Judge</h3><p>Evaluate a competition, offer useful feedback, and model how decisions are made professionally.</p></article><article className="info-card"><Presentation/><h3>Teach or mentor</h3><p>Lead an interactive workshop, speak honestly about your field, or support student teams.</p></article><article className="info-card"><Handshake/><h3>Sponsor</h3><p>Fund awards and conference operations while investing visibly in regional student talent.</p></article></div><p className="action-row"><a href={`mailto:${event.email}?subject=LaunchPoint involvement`} className="button button-dark">Start a conversation <ArrowUpRight/></a></p></div></section>
  <section className="section partner-section" id="sponsors"><div className="site-container"><div className="section-heading-row"><div><p className="eyebrow">Sponsorship</p><h2>Five ways to back the conference.</h2></div><p>Benefits are based on current sponsorship materials and can be shaped with the team before an agreement is finalized.</p></div><div className="tier-list">{sponsorTiers.map(t=><article className="tier-card" key={t.name}><div><h3>{t.name}</h3><div className="tier-amount">{t.amount}</div><p>{t.note}</p></div><ul>{t.benefits.map(b=><li key={b}>{b}</li>)}</ul></article>)}</div></div></section>
</main><Footer/></div>;
export default GetInvolved;

