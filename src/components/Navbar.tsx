import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/launchpoint_logo_full.png";

const links = [
  { label: "Conference", to: "/about" },
  { label: "Venture Pitch", to: "/competitions/pitch" },
  { label: "Business Roleplay", to: "/competitions/roleplay" },
  { label: "Schedule", to: "/schedule" },
  { label: "Get involved", to: "/get-involved" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="site-container header-inner">
        <Link to="/" className="brand-link" aria-label="LaunchPoint home">
          <img src={logo} alt="LaunchPoint" className="brand-logo" width="634" height="215" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/registration" className="button button-small button-primary">
            Registration
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav site-container" aria-label="Mobile navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `mobile-nav-link${isActive ? " active" : ""}`}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/registration" className="button button-primary mobile-register">Registration</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
