import { Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/launchpoint_logo_full.png";
import { event } from "@/content/site";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container footer-grid">
      <div className="footer-brand">
        <img src={logo} alt="LaunchPoint" width="634" height="215" />
        <p>A student-led regional business conference connecting high school students with the local business community.</p>
      </div>
      <div>
        <p className="footer-label">Explore</p>
        <div className="footer-links">
          <Link to="/about">The conference</Link>
          <Link to="/competitions/pitch">Venture Pitch</Link>
          <Link to="/competitions/roleplay">Business Roleplay</Link>
          <Link to="/schedule">Schedule</Link>
        </div>
      </div>
      <div>
        <p className="footer-label">Get involved</p>
        <div className="footer-links">
          <Link to="/registration">Student updates</Link>
          <Link to="/get-involved">Judges and volunteers</Link>
          <Link to="/get-involved#sponsors">Sponsors</Link>
          <a href={event.interestForm} target="_blank" rel="noreferrer">Interest form</a>
        </div>
      </div>
      <div>
        <p className="footer-label">Contact</p>
        <div className="footer-links footer-contact">
          <a href={`mailto:${event.email}`}><Mail aria-hidden="true" />{event.email}</a>
          <a href={event.instagram} target="_blank" rel="noreferrer"><Instagram aria-hidden="true" />{event.instagramLabel}</a>
          <span><MapPin aria-hidden="true" />Palatine, Illinois</span>
        </div>
      </div>
    </div>
    <div className="site-container footer-bottom">
      <span>© {new Date().getFullYear()} LaunchPoint</span>
      <span>Built for students ready to learn by doing.</span>
    </div>
  </footer>
);

export default Footer;
