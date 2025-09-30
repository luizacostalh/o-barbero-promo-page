import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PromoCardProps {
  title: React.ReactNode;       // Agora aceita JSX para destaques
  description: React.ReactNode; // Agora aceita JSX para destaques
  buttonText: string;
  variant?: "first" | "work" | "friend";
}

export const PromoCard = ({
  title,
  description,
  buttonText,
  variant = "first",
}: PromoCardProps) => {
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
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-gold transition-all duration-300 hover:-translate-y-2 group min-h-[320px] flex flex-col justify-between w-full">
      <CardHeader className="pb-4">
        <CardTitle className="font-montserrat text-xl md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 break-words">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 flex flex-col flex-1 justify-between">
        <p className="font-open-sans text-muted-foreground leading-relaxed break-words">
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
