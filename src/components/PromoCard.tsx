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
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-gold transition-all duration-300 hover:-translate-y-2 group">
      <CardHeader className="pb-4">
        <CardTitle className="font-montserrat text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="font-open-sans text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button 
          variant={getButtonVariant()}
          size="lg"
          className="w-full"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

// ------------------------------
// Uso com os 3 cards ajustados
// ------------------------------
export const PromoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <PromoCard
        title="Primeira visita? ganhe 25% de desconto!"
        description="Aproveite seu primeiro corte com desconto especial e descubra o cuidado que você merece."
        buttonText="Aproveitar Oferta"
        variant="first"
      />

      <PromoCard
        title="Se você trabalha próximo a nossa barbearia, você tem desconto especial!"
        description="Mostre seu crachá ou comprove o endereço e receba um desconto exclusivo para colaboradores da região."
        buttonText="Resgatar Desconto"
        variant="work"
      />

      <PromoCard
        title="Indique um amigo e ganhe 12% de desconto em cada corte!"
        description="Traga seu amigo para conhecer a barbearia e aproveite descontos em todos os cortes."
        buttonText="Indicar Amigo"
        variant="friend"
      />

    </div>
  );
};
