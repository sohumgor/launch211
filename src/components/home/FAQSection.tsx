import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    {
      question: "Who can participate in Launch 211?",
      answer: "Launch 211 is open to all high school students in District 211 and surrounding areas. Students can participate individually or in teams, depending on the competition.",
    },
    {
      question: "How do I register for the event?",
      answer: "Registration is available through our Registration page. Simply click the Registration button in the navigation menu and follow the instructions. Early registration is recommended as spots are limited.",
    },
    {
      question: "Can I participate in multiple competitions?",
      answer: "Due to scheduling, most competitions run concurrently. However, you can participate in workshops and one main competition. Check the schedule for exact timings.",
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring a valid student ID, any materials needed for your competition (laptop, presentation materials, etc.), and enthusiasm! Detailed requirements for each competition will be sent to registered participants.",
    },
    {
      question: "Are there participation certificates?",
      answer: "Yes! All participants will receive certificates of participation. Winners will receive special recognition certificates along with their prizes.",
    },
    {
      question: "Is there a registration fee?",
      answer: "Launch 211 is free to attend thanks to our generous sponsors. However, registration is required to manage capacity and ensure the best experience for all participants.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Have a question? We've got answers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* FAQ Accordion */}
          <div className="space-y-4">
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

          {/* Contact Form */}
          <Card className="p-6 bg-card border-border">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                <p className="text-muted-foreground">
                  Send us a message and we'll get back to you promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="What would you like to know?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
