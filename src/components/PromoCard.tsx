import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PromoCardProps {
  title: string;
  description: string;
  buttonText: string;
  variant?: "first" | "work" | "friend";
}

export const PromoCard = ({ title, description, buttonText, variant = "first" }: PromoCardProps) => {
  const getButtonVariant = () => {
    switch (variant) {
      case "first":
        return "barbero";
      case "work":
        return "barberoAccent";
      case "friend":
        return "barberoOutline";
      default:
        return "barbero";
    }
  };

  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-gold transition-all duration-300 hover:-translate-y-2 group min-h-[300px] flex flex-col justify-between">
      <CardHeader className="pb-4">
        <CardTitle className="font-montserrat text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 flex flex-col flex-1 justify-between">
        <p className="font-open-sans text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button 
          variant={getButtonVariant()}
          size="lg"
          className="w-full mt-auto"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};
