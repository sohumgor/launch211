import { FormEvent, useState } from "react";
import { ArrowRight, Gavel, Handshake, Presentation } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { event as eventDetails, sponsorTiers } from "@/content/site";

const GetInvolved = () => {
  const [preparedMessage, setPreparedMessage] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");

  const handleSubmit = (formEvent: FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    const form = new FormData(formEvent.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const organization = String(form.get("organization") || "Not provided");
    const interest = String(form.get("interest") || "General involvement");
    const message = String(form.get("message") || "");
    const subject = `LaunchPoint involvement: ${interest}`;
    const body = `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nInterest: ${interest}\n\n${message}`;

    setPreparedMessage(`To: ${eventDetails.email}\nSubject: ${subject}\n\n${body}`);
    setCopyStatus("idle");
    window.location.href = `mailto:${eventDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  };

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
          <div className="site-container inquiry-grid">
            <div className="inquiry-copy">
              <p className="eyebrow eyebrow-light">Involvement inquiry</p>
              <h2>Tell us how you would like to help.</h2>
              <p>Share a few details and we will prepare an email to the student team. Nothing is sent until you review and send it from your email app.</p>
              <div className="inquiry-contact"><span>Prefer to write directly?</span><a href={`mailto:${eventDetails.email}`}>{eventDetails.email}</a></div>
            </div>

            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field"><label htmlFor="inquiry-name">Name <span>required</span></label><input id="inquiry-name" name="name" autoComplete="name" required /></div>
                <div className="form-field"><label htmlFor="inquiry-email">Email <span>required</span></label><input id="inquiry-email" name="email" type="email" autoComplete="email" required /></div>
              </div>
              <div className="form-field"><label htmlFor="inquiry-organization">Organization <span>optional</span></label><input id="inquiry-organization" name="organization" autoComplete="organization" /></div>
              <div className="form-field"><label htmlFor="inquiry-interest">I am interested in <span>required</span></label><select id="inquiry-interest" name="interest" defaultValue="" required><option value="" disabled>Select one</option><option>Judging</option><option>Leading a workshop</option><option>Speaking or mentoring</option><option>Sponsorship</option><option>Volunteering</option><option>Another kind of support</option></select></div>
              <div className="form-field"><label htmlFor="inquiry-message">Message <span>required</span></label><textarea id="inquiry-message" name="message" rows={5} placeholder="Tell us about your background, idea, or availability." required /></div>
              <button className="button button-primary" type="submit" aria-describedby="inquiry-helper">Open prepared email <ArrowRight aria-hidden="true" /></button>
              <p className="form-helper" id="inquiry-helper">You will review and send the message from your email app. Nothing is sent automatically.</p>
              {preparedMessage && <div className="form-status" role="status" aria-live="polite"><strong>Email draft prepared.</strong><p>If your email app did not open, copy the prepared message and email it to <a href={`mailto:${eventDetails.email}`}>{eventDetails.email}</a>.</p><button className="copy-button" type="button" onClick={handleCopy}>{copyStatus === "copied" ? "Message copied" : "Copy prepared message"}</button>{copyStatus === "failed" && <p className="copy-error" role="alert">Copying was blocked by your browser. Please email the address above directly.</p>}</div>}
            </form>
          </div>
        </section>

        <section className="section partner-section" id="sponsors" tabIndex={-1}>
          <div className="site-container">
            <div className="section-heading-row"><div><p className="eyebrow">Sponsorship</p><h2>Five ways to back the conference.</h2></div><p>Sponsorship supports student awards, workshops, and access to real-world business experience.</p></div>
            <div className="tier-list">{sponsorTiers.map((tier) => <article className="tier-card" key={tier.name}><div className="tier-summary"><h3>{tier.name}</h3><div className="tier-amount">{tier.amount}</div><p>{tier.note}</p></div><div className="tier-benefits"><p>Included benefits</p><ul>{tier.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></div></article>)}</div>
            <div className="sponsor-inquiry"><p><strong>Looking for a different fit?</strong> Custom partnerships are available.</p><a className="text-link" href="#inquiry">Start a sponsorship inquiry <ArrowRight aria-hidden="true" /></a></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;
