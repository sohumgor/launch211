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
      answer:
        "LaunchPoint is open to all District 211 high school students. No prior competition experience, business coursework, or club membership is required—students of all experience levels are encouraged to participate.",
    },
    {
      question: "How do I register?",
      answer:
        "Registration will open online through the LaunchPoint website. Students will simply complete the registration form and select their competition and workshop preferences. No advisor or teacher approval is required.",
    },
    {
      question: "What competitions are offered?",
      answer:
        "LaunchPoint features two competitive events: Venture Pitch, where students present an original business concept they prepare in advance, and Business Roleplay, where students analyze a confidential business scenario on-site before presenting their solution to judges.",
    },
    {
      question: "How does judging work?",
      answer:
        "Venture Pitch teams deliver a 7-minute presentation followed by 3 minutes of questions from judges. Business Roleplay participants receive a confidential scenario, have 20 minutes to prepare, then deliver a 7-minute presentation followed by 3 minutes of Q&A. Both competitions are evaluated by business professionals using standardized judging rubrics.",
    },
    {
      question: "What are the awards?",
      answer:
        "LaunchPoint features over $2,000 in scholarship-style awards recognizing outstanding performance across both competitions. Top-performing students may also receive opportunities for mentorship, networking, office hours with professionals, and continued engagement with the local business community.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "A small registration fee is expected to help cover conference expenses. The final fee is still being finalized but is anticipated to be approximately $15 per participant.",
    },
    {
      question: "Where and when is the conference?",
      answer:
        "The 2026 LaunchPoint Fall Conference will be held on Saturday, October 17, 2026, from 8:00 AM to 2:15 PM at Palatine High School (1111 N. Rohlwing Road, Palatine, IL).",
    },
    {
      question: "Will lunch be provided?",
      answer:
        "Yes. A catered lunch will be provided for all registered participants during the conference.",
    },
    {
      question: "Do I need business experience to compete?",
      answer:
        "Not at all. LaunchPoint is designed for students with a wide range of experience levels. Whether you're exploring business for the first time or already involved in entrepreneurship, finance, marketing, or business clubs, the conference provides an opportunity to learn, compete, and receive feedback from professionals.",
    },
  ];

  return (
    <section
      className="py-20"
      style={{ background: "var(--gradient-section-3)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a question? We've got answers.
          </p>
        </div>

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

        <div className="text-center space-y-4 max-w-2xl mx-auto pt-8 border-t border-border">
          <h3 className="text-2xl md:text-3xl font-bold">
            Still have questions?
          </h3>

          <p className="text-lg text-muted-foreground">
            Contact us and we'll get back to you promptly.
          </p>

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