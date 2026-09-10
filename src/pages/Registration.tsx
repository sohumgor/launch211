import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { event } from "@/content/site";

const Registration = () => (
  <div className="site-shell">
    <Seo title="Registration" description="Find the latest Fall 2026 LaunchPoint registration details." />
    <Navbar />
    <main>
      <PageHero eyebrow="Student registration" title="Registration is being finalized." intro="The final date, eligibility, and enrollment details will be posted here before registration opens." />
      <section className="section">
        <div className="site-container">
          <div className="registration-panel">
            <div>
              <Clock3 aria-hidden="true" /><h2>Registration is coming soon.</h2>
              <p>We are confirming the October date and final participation details. This page will be updated when enrollment opens.</p>
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
                <div><dt>Event guides</dt><dd>Roleplay and Venture Pitch available</dd></div>
              </dl>
            </aside>
            <div className="prose-block">
              <h2>Start preparing with your team.</h2>
              <p>Both current competition guides specify teams of 2–4. Every member presents and answers at least one judge question.</p>
              <p>Read the event guides for timing, allowed materials, scoring, and practice resources.</p>
              <div className="guide-next"><Link to="/competitions/roleplay" className="text-link">Business Roleplay guide <ArrowRight aria-hidden="true" /></Link><Link to="/competitions/pitch" className="text-link">Venture Pitch guide <ArrowRight aria-hidden="true" /></Link></div>
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
