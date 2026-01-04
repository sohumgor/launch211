import { Calendar, MapPin } from "lucide-react";

const DateLocationBar = () => {
  return (
    <section className="py-6 md:py-8 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-8 text-foreground">
          <div className="flex items-center gap-2 md:gap-3">
            <Calendar size={20} className="md:w-7 md:h-7" />
            <div>
              <div className="text-xs md:text-sm opacity-90">Date</div>
              <div className="text-sm md:text-xl font-bold">March 7, 2025</div>
            </div>
          </div>
          <div className="w-px h-10 md:h-12 bg-border" />
          <div className="flex items-center gap-2 md:gap-3">
            <MapPin size={20} className="md:w-7 md:h-7" />
            <div>
              <div className="text-xs md:text-sm opacity-90">Location</div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1111+N+Rohlwing+Rd,+Palatine,+IL+60074"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-xl font-bold hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
              >
                Palatine High School
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DateLocationBar;