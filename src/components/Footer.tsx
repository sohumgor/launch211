import { Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { event } from "@/content/site";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container footer-grid">
      <div className="footer-brand">
        <Link to="/" className="footer-wordmark" aria-label="LaunchPoint home"><span>Launch</span><strong>Point</strong></Link>
        <p>A student-led regional business conference connecting high school students with the local business community.</p>
      </div>
      <div><p className="footer-label">Explore</p><div className="footer-links"><Link to="/about">About</Link><Link to="/competitions/pitch">Venture Pitch</Link><Link to="/competitions/roleplay">Business Roleplay</Link><Link to="/events/workshops">Workshops</Link><Link to="/schedule">Schedule</Link></div></div>
      <div><p className="footer-label">Get involved</p><div className="footer-links"><Link to="/registration">Student updates</Link><Link to="/get-involved#inquiry">Judges and volunteers</Link><Link to="/get-involved#sponsors">Sponsors</Link></div></div>
      <div><p className="footer-label">Contact</p><div className="footer-links footer-contact"><a href={`mailto:${event.email}`}><Mail aria-hidden="true" />{event.email}</a><a href={event.instagram} target="_blank" rel="noreferrer"><Instagram aria-hidden="true" />{event.instagramLabel}</a><span><MapPin aria-hidden="true" />Palatine, Illinois</span></div></div>
    </div>
    <div className="site-container footer-bottom"><span>&copy; {new Date().getFullYear()} LaunchPoint</span><span>Built for students ready to learn by doing.</span></div>
  </footer>
);

export default Footer;
