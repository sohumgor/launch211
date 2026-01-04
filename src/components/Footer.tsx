import { Link } from "react-router-dom";
import { Mail, MapPin, Calendar } from "lucide-react";

const Footer = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => {
  return (
    <footer className={`bg-secondary/50 border-t border-border mt-20 ${className}`} style={style}>
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* About */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="text-base md:text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Launch 211
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              A premier business competition and workshop event for high school students in District 211 and beyond.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 md:space-y-4">
            <h4 className="text-sm md:text-base font-semibold">Contact</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={14} className="md:w-4 md:h-4" />
                <a 
                  href="mailto:launch211team@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  launch211team@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="md:w-4 md:h-4" />
                <span>Palatine, Illinois</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-border text-center text-xs md:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Launch 211. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;