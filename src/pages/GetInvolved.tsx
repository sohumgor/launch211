import { ArrowRight, Gavel, Handshake, Mail, Presentation } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { event as eventDetails } from "@/content/site";

const GetInvolved = () => {
  return (
    <div className="site-shell">
      <Seo title="Get Involved" description="Judge, teach, mentor, volunteer, or sponsor LaunchPoint." />
      <Navbar />
      <main>
        <PageHero eyebrow="Professionals and partners" title="Bring the business community into the room." intro="LaunchPoint works when students meet professionals who are willing to share context, ask thoughtful questions, and take their ideas seriously." />

        <section className="section involvement-options">
          <div className="site-container">
            <h2 className="sr-only">Ways to get involved</h2>
            <div className="card-grid">
              <article className="info-card"><Gavel aria-hidden="true" /><h3>Judge</h3><p>Evaluate a competition, offer useful feedback, and model how decisions are made professionally.</p></article>
              <article className="info-card"><Presentation aria-hidden="true" /><h3>Teach or mentor</h3><p>Lead an interactive workshop, speak honestly about your field, or support student teams.</p></article>
              <article className="info-card"><Handshake aria-hidden="true" /><h3>Sponsor</h3><p>Fund awards and conference operations while investing visibly in regional student talent.</p></article>
            </div>
          </div>
        </section>

        <section className="section inquiry-section" id="inquiry" tabIndex={-1}>
          <div className="site-container direct-contact-layout">
            <div className="inquiry-copy">
              <p className="eyebrow eyebrow-light">Work with LaunchPoint</p>
              <h2>Help students learn from real experience.</h2>
              <p>Judges, workshop leaders, mentors, volunteers, and community partners can contact the student team directly.</p>
            </div>
            <div className="direct-contact-card">
              <Mail aria-hidden="true" />
              <p className="eyebrow">Direct contact</p>
              <h3>Email the LaunchPoint team.</h3>
              <p>Tell us how you would like to participate, your organization, and any relevant availability.</p>
              <a className="button button-primary" href={`mailto:${eventDetails.email}?subject=${encodeURIComponent("LaunchPoint involvement")}`}>Email {eventDetails.email} <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section partner-section" id="sponsors" tabIndex={-1}>
          <div className="site-container">
            <div className="section-heading-row"><div><p className="eyebrow">Sponsorship</p><h2>Coming soon.</h2></div><p>Meet the sponsors supporting LaunchPoint. Partner announcements and logos will be shared here soon.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;
