import { Header } from "@/components/Header";
import { PromoCard } from "@/components/PromoCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  const promoCards = [
    {
      title: (
        <>Primeira visita? <span className="bg-yellow-400 text-black px-1 rounded">ganhe 25%</span> de desconto!</>
      ),
      description: "Venha conhecer a O Barbero e aproveite seu corte de R$40 por apenas R$30.",
      buttonText: "Resgatar agora",
      variant: "first" as const,
    },
    {
      title: (
        <>Se você trabalha <span className="bg-yellow-400 text-black px-1 rounded">próximo</span> à nossa barbearia, você tem <span className="bg-yellow-400 text-black px-1 rounded">desconto</span> especial!</>
      ),
      description: "Apresente seu crachá ou informe seu local de trabalho e pague apenas R$30.",
      buttonText: "Aproveitar",
      variant: "work" as const,
    },
    {
      title: (
        <>Indique um <span className="bg-yellow-400 text-black px-1 rounded">amigo</span> e <span className="bg-yellow-400 text-black px-1 rounded">ganhe 12%</span> de desconto em cada corte!</>
      ),
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
