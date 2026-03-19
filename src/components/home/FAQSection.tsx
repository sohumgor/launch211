import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can participate in LaunchPoint?",
      answer: "LaunchPoint is open to all high school students in the community, with a focus on District 211. You do not need to be a member of any specific club, enrolled in an incubator program, or have prior competition experience. If you're a high school student with a business idea, you're welcome to compete.",
    },
    {
      question: "How do I register?",
      answer: "Registration will be available through our website once finalized. Teams register together with member names, school affiliation, and an adult supervisor contact. Registration will close 7 days before the event, and spots are capped based on judging capacity.",
    },
    {
      question: "What is the team size?",
      answer: "Teams consist of 2–5 students. Each team develops and presents one original business concept (product or service) to a panel of judges.",
    },
    {
      question: "How does the competition work?",
      answer: "Each team delivers a 7 minute venture pitch followed by 3 minutes of Q&A from a panel of business professionals. Judges use a standardized, investor-style scoring rubric. Presentations run in 20-minute blocks across 2–4 simultaneous breakout rooms.",
    },
    {
      question: "What are the prizes?",
      answer: "1st Place: $1,000 · 2nd Place: $500 · 3rd Place: $250. Awards are structured as checks or scholarship-style funding intended to directly advance your business venture — not just general prize money. Winning teams also receive post-event opportunities including mentorship and office hours.",
    },
    {
      question: "Is there a registration fee?",
      answer: "LaunchPoint is free to attend thanks to our sponsors and our partnership with the Palatine Area Chamber of Commerce. Registration is required to manage capacity.",
    },
    {
      question: "Where is the event held?",
      answer: "TBD: The 2026 LaunchPoint Venture Pitch Summit will be held at Harper College or Palatine High School in Palatine, IL on April 25, 2026. The venue features an amphitheater for opening/awards and breakout rooms for judging sessions.",
    },
    {
      question: "What happens after the competition?",
      answer: "Beyond prizes, top-performing teams will receive post-event opportunities including office hours with local business owners and investors, structured feedback sessions, connections to Chamber member mentors, and potential early-stage advisory support. The goal is venture continuation — not just a one-day event.",
    },
    { 
      question: "Will lunch be provided?",
      answer: "Yes! A full catered lunch program will be offered to all participants from 11:30 AM - 12:30 PM.",
    }
  ];

  return (
    <section className="py-20" style={{ background: 'var(--gradient-section-3)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Have a question? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion - Centered and Extended */}
        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pt-8 border-t border-border">
          <h3 className="text-2xl md:text-3xl font-bold">Still have questions?</h3>
          <p className="text-lg text-muted-foreground">Contact us and we'll get back to you promptly.</p>
          <a 
            href="mailto:launch211team@gmail.com"
            className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold text-primary hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
            launch211team@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

