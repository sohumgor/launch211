import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PDFDownloadButtonProps {
  title: string;
  description: string;
}

const PDFDownloadButton = ({ title, description }: PDFDownloadButtonProps) => {
  return (
    <Card className="p-3 md:p-6 bg-primary/5 border-primary/20">
      <div className="flex items-center justify-between gap-2 md:gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm md:text-lg mb-0.5 md:mb-1">{title}</h3>
          <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
        </div>
        <Button asChild className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 whitespace-nowrap shrink-0">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default PDFDownloadButton;
