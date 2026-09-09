import { ArrowRight, ArrowUpRight, CheckCircle2, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { event } from "@/content/site";

const Registration = () => (
  <div className="site-shell">
    <Seo title="Registration" description="Join the LaunchPoint interest list and receive Fall 2026 registration updates." />
    <Navbar />
    <main>
      <PageHero eyebrow="Student registration" title="Registration is being finalized." intro="Join the interest list now. We will send the final registration details before enrollment opens." />
      <section className="section">
        <div className="site-container">
          <div className="registration-panel">
            <div>
              <Clock3 aria-hidden="true" /><h2>Get the update first.</h2>
              <p>The interest form is not a commitment and does not reserve a competition spot. It tells the team who wants to hear when full registration opens.</p>
              <a href={event.interestForm} target="_blank" rel="noreferrer" className="button button-primary">Complete the interest form <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div>
              <p className="eyebrow">Currently planned</p><h3>Conference details</h3>
              <ul>{[event.date, event.time, event.venue, "Venture Pitch and Business Roleplay", "Workshops, lunch, and awards"].map(detail => <li key={detail}><CheckCircle2 aria-hidden="true" />{detail}</li>)}</ul>
            </div>
          </div>
          <div className="content-grid registration-notes">
            <aside className="content-aside">
              <h3>Participation details</h3>
              <dl>
                <div><dt>Registration fee</dt><dd>{event.registrationFee}</dd></div>
                <div><dt>Team sizes</dt><dd>2–4 members in both guides</dd></div>
                <div><dt>Entering both events</dt><dd>Pending confirmation</dd></div>
                <div><dt>Event guides</dt><dd>Roleplay available · Venture Pitch draft</dd></div>
              </dl>
            </aside>
            <div className="prose-block">
              <h2>Start preparing with your team.</h2>
              <p>Both current competition guides specify teams of 2–4. Every member presents and answers at least one judge question. Venture Pitch materials are still drafts.</p>
              <p>Read the event guides for timing, allowed materials, scoring, and practice resources.</p>
              <div className="guide-next"><Link to="/competitions/roleplay" className="text-link">Business Roleplay guide <ArrowRight aria-hidden="true" /></Link><Link to="/competitions/pitch" className="text-link">Venture Pitch draft guide <ArrowRight aria-hidden="true" /></Link></div>
              <div className="callout"><strong>Before registration opens</strong><p>The fee is expected to be approximately $20 to help cover conference costs. The final fee, competition selection rules, accessibility information, and required forms will be shared before registration opens.</p></div>
              <p>School or adviser question? Email <a href={"mailto:" + event.email}>{event.email}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Registration;
