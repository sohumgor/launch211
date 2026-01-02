import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/launch211-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const competitions = [
    { name: "Marketing Role Play", path: "/competitions/marketing" },
    { name: "Business Ethics Role Play", path: "/competitions/ethics" },
    { name: "Stock Market Simulation", path: "/competitions/finance" },
    { name: "Big Pitch Competition", path: "/competitions/pitch" },
  ];

  const workshops = [
    { name: "Marketing Workshop", path: "/workshops/marketing" },
    { name: "Business Ethics Workshop", path: "/workshops/ethics" },
    { name: "Finance Workshop", path: "/workshops/finance" },
    { name: "Pitch Workshop", path: "/workshops/pitch" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-all hover:opacity-80 group">
            <img src={logo} alt="Launch 211" className="h-7 w-auto transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Launch 211
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-secondary">
                    Competitions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-popover">
                      <div className="grid gap-2">
                        {competitions.map((comp) => (
                          <Link
                            key={comp.path}
                            to={comp.path}
                            className="block rounded-md p-3 hover:bg-secondary transition-colors"
                          >
                            <span className="text-sm font-medium">{comp.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-secondary">
                    Workshops
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-popover">
                      <div className="grid gap-2">
                        {workshops.map((workshop) => (
                          <Link
                            key={workshop.path}
                            to={workshop.path}
                            className="block rounded-md p-3 hover:bg-secondary transition-colors"
                          >
                            <span className="text-sm font-medium">{workshop.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>

            <Link to="/registration">
              <Button variant="default" className="font-semibold transition-all hover:scale-105">
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
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground px-2">Competitions</div>
              {competitions.map((comp) => (
                <Link
                  key={comp.path}
                  to={comp.path}
                  className="block px-4 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {comp.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground px-2">Workshops</div>
              {workshops.map((workshop) => (
                <Link
                  key={workshop.path}
                  to={workshop.path}
                  className="block px-4 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {workshop.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <Link
                to="/about"
                className="block px-4 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </div>

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