import { ArrowUpRight, CheckCircle2, Clock3 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { event } from "@/content/site";

const Registration = () => <div className="site-shell"><Seo title="Registration | LaunchPoint" description="Join the LaunchPoint interest list and receive Fall 2026 registration updates."/><Navbar/><main>
  <PageHero eyebrow="Student registration" title="Registration is being finalized." intro="Join the interest list now. We will send confirmed eligibility, fees, team rules, and competition registration details before enrollment opens."/>
  <section className="section"><div className="site-container"><div className="registration-panel"><div><Clock3/><h2>Get the update first.</h2><p>The interest form is not a commitment and does not reserve a competition spot. It tells the team who wants to hear when full registration opens.</p><a href={event.interestForm} target="_blank" rel="noreferrer" className="button button-primary">Complete the interest form <ArrowUpRight/></a></div><div><p className="eyebrow">Currently planned</p><h3>Conference details</h3><ul><li><CheckCircle2/> {event.date}</li><li><CheckCircle2/> {event.time}</li><li><CheckCircle2/> {event.venue}</li><li><CheckCircle2/> Venture Pitch and Business Roleplay</li><li><CheckCircle2/> Workshops, lunch, and awards</li></ul></div></div>
    <div className="content-grid registration-notes"><aside className="content-aside"><h3>Still to be confirmed</h3><dl><div><dt>Registration fee</dt><dd>Pending</dd></div><div><dt>Team sizes</dt><dd>Pending</dd></div><div><dt>Competition selection</dt><dd>Pending</dd></div><div><dt>Final rulebooks</dt><dd>Pending</dd></div></dl></aside><div className="prose-block"><h2>No guessed details.</h2><p>We are publishing what is known and clearly labeling what is still being decided. Full registration will not open until participation rules, costs, accessibility information, and required forms are ready.</p><div className="callout"><strong>School or adviser question?</strong><p>Email <a href={`mailto:${event.email}`}>{event.email}</a> and the team will follow up.</p></div></div></div>
  </div></section>
</main><Footer/></div>;
export default Registration;

