import { Header } from "@/components/Header";
import { PromoCard } from "@/components/PromoCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  const promoCards = [
    {
      title: "Primeira visita? Ganhe R$10 de desconto!",
      description: "Venha conhecer a O Barbero e aproveite seu corte de R$40 por apenas R$30.",
      buttonText: "Resgatar agora",
      variant: "first" as const,
    },
    {
      title: "Trabalha por aqui? Seu corte sai R$10 mais barato!",
      description: "Apresente seu crachá ou informe seu local de trabalho e pague apenas R$30.",
      buttonText: "Aproveitar",
      variant: "work" as const,
    },
    {
      title: "Traga um amigo e economize R$5 cada!",
      description: "Indique um amigo e ambos pagam apenas R$35 no corte de R$40.",
      buttonText: "Indicar amigo",
      variant: "friend" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-4">
              Promoções Especiais
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Aproveite nossas ofertas exclusivas e venha cuidar do seu visual com a qualidade que você merece.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {promoCards.map((card, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <PromoCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
