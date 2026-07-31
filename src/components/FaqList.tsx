import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/content/site";

const FaqList = () => (
  <Accordion type="single" collapsible className="faq-list">
    {faqs.map((faq, index) => (
      <AccordionItem key={faq.question} value={`faq-${index}`} className="faq-item">
        <AccordionTrigger className="faq-trigger">{faq.question}</AccordionTrigger>
        <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqList;
