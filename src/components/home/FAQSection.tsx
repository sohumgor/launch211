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
      question: "Who is eligible to participate in Launch 211?",
      answer: "Launch 211 is open to students from D211 (Palatine High School, Fremd High School, Conant High School, Hoffman Estates High School, Schaumburg High School), D214 (Buffalo Grove High School, Hersey High School, Prospect High School, Wheeling High School, Rolling Meadows High School, Elk Grove High School), Lake Zurich High School (CUSD95), Barrington High School (CUSD220), and Stevenson High School (D125). If your school is not listed but you're interested in participating, please contact us at launch211team@gmail.com."
  },
  {
      question: "How do I register for Launch 211?",
      answer: "Students cannot register directly. Registration is handled through your school's business department head or designated Launch 211 sponsor. Contact them to register individually or as a team for competitions, or to attend the Career & Mentorship Panel."
  },
  {
    question: "Can I participate in multiple competitions?",
    answer: "Due to scheduling, most competitions run concurrently. Participants can compete in one main competition and attend the Career & Mentorship Panel. Check the schedule for exact timings."
  },
  {
      question: "Can I attend just the Career & Mentorship Panel without competing?",
      answer: "Yes! If you'd like to attend only the Career & Mentorship Panel without competing, speak with your business department head or Launch 211 sponsor about this option. They can register you for panel attendance only."
  },
  {
    question: "What should I bring to the event?",
    answer: "Bring a valid student ID, any materials needed for your competition (laptop, presentation materials, etc.), and enthusiasm! Detailed requirements for each competition will be sent to registered participants."
  },
  {
      question: "How will transportation work?",
      answer: "Transportation will be provided for all participants. Students will travel by bus from their school to Palatine High School, accompanied by their school's designated Launch 211 sponsor(s). Buses will arrive at Palatine High School at 7:30 AM. Your school's Launch 211 sponsor will communicate specific departure times from your school closer to the event date."
  },
  {
    question: "Will lunch be provided?",
    answer: "Yes! Lunch will be served between 11:00 AM and 1:00 PM. Participants can stop by at any time during that window."
  },
  {
    question: "What prizes are awarded?",
    answer: "Top 3 finishers in each competition will receive prizes in the form of gift cards, as well as medals to recognize their achievements."
  },
  {
    question: "Is there a registration fee?",
    answer: "Launch 211 is free to attend thanks to our generous sponsors. However, registration is required to manage capacity and ensure the best experience for all participants."
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