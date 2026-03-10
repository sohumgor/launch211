import { Card } from "@/components/ui/card";
import logo from "@/assets/launchpoint_logo_full.png";
import chamberLogo from "@/assets/palatine_chamber_logo.png";
const PartnersSection = () => {
  return (
    <section className="py-20 overflow-hidden" style={{ background: 'var(--gradient-section-2)' }}>
        {/* Partnership Card */}
        <div className="mt-6 md:mt-12 max-w-lg mx-auto">
          <Card className="p-5 md:p-10 bg-card border-border/50">
            <p className="text-center text-[10px] md:text-xs text-muted-foreground mb-4 md:mb-6 font-medium uppercase tracking-wider">
              In Partnership With
            </p>
            <div className="flex items-center justify-center gap-5 md:gap-8">
              {/* LaunchPoint Logo + Text */}
              <div className="flex items-center gap-2 md:gap-4">
                <img 
                  src={logo} 
                  alt="LaunchPoint" 
                  className="h-12 md:h-[72px] w-auto object-contain rounded"
                />
              </div>
              {/* Vertical Divider */}
              <div className="w-[2px] h-10 md:h-16 bg-primary/40 rounded-full" />
              {/* Chamber Logo */}
              <div className="flex items-center">
                <img 
                  src={chamberLogo} 
                  alt="Palatine Area Chamber of Commerce" 
                  className="h-12 md:h-[72px] w-auto object-contain rounded"
                />
              </div>
            </div>
          </Card>
        </div>
    </section>
  );
};

export default PartnersSection;