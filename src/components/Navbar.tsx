import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/launchpoint_logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-all hover:opacity-80 group">
            <img src={logo} alt="LaunchPoint" className="h-5 md:h-7 w-auto transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LaunchPoint
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/competitions/pitch" className="text-sm font-medium hover:text-primary transition-colors">
              Competition
            </Link>
            
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>

            <Link to="/registration">
              <Button variant="default" className="font-semibold transition-all hover:scale-105">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <Link
              to="/competitions/pitch"
              className="block px-4 py-3 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Competition
            </Link>

            <Link
              to="/about"
              className="block px-4 py-3 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div className="pt-2">
              <Link to="/registration" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full font-semibold">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
