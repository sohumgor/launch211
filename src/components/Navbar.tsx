import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/launch-211-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [competitionsOpen, setCompetitionsOpen] = useState(false);

  const competitions = [
    { name: "Marketing RP", path: "/competitions/marketing" },
    { name: "Business Ethics RP", path: "/competitions/ethics" },
    { name: "Stock Market Simulation", path: "/competitions/investing" },
    { name: "Venture Pitch Competition", path: "/competitions/pitch" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-all hover:opacity-80 group">
            <img src={logo} alt="Launch 211" className="h-5 md:h-7 w-auto transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Launch 211
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
  {/* Competitions Dropdown */}
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent hover:bg-secondary px-2 py-1 rounded-md">
          Competitions
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-[400px] p-4 bg-popover rounded-lg shadow-lg">
            <div className="grid gap-2">
              {competitions.map((comp) => (
                <Link
                  key={comp.path}
                  to={comp.path}
                  className="block rounded-md p-2 hover:bg-secondary transition-colors"
                >
                  <span className="text-sm font-medium">{comp.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  {/* Other Links */}
  <Link
    to="/events/career-panel"
    className="text-sm font-medium hover:text-primary transition-colors px-2 py-1"
  >
    Career Panel
  </Link>

  <Link
    to="/about"
    className="text-sm font-medium hover:text-primary transition-colors px-2 py-1"
  >
    About Us
  </Link>

  {/* Registration Button */}
  <Link to="/registration">
    <Button variant="default" className="font-semibold px-3 py-1 transition-all hover:scale-105">
      Registration
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
            {/* Competitions Dropdown */}
            <div className="border border-border/50 rounded-lg overflow-hidden">
              <button
                onClick={() => setCompetitionsOpen(!competitionsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-sm">Competitions</span>
                {competitionsOpen ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              
              {competitionsOpen && (
                <div className="bg-background border-t border-border/50">
                  {competitions.map((comp) => (
                    <Link
                      key={comp.path}
                      to={comp.path}
                      className="block px-6 py-2.5 text-sm hover:bg-secondary/50 transition-colors border-l-2 border-primary/30 ml-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {comp.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/events/career-panel"
              className="block px-4 py-3 text-sm font-medium hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career Panel
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
                  Registration
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