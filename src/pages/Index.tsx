import { Header } from "@/components/Header";
import { PromoCard } from "@/components/PromoCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  const promoCards = [
  {
    title: (
      <>
        Primeira visita? <span className="bg-yellow-400 text-black px-1 rounded">Ganhe 25%</span> de desconto!
      </>
    ),
    description: "Venha conhecer a O Barbero e aproveite seu corte de R$40 por apenas R$30.",
    buttonText: "Resgatar agora",
    variant: "first" as const,
  },
  {
    title: (
      <>
        Se você trabalha <span className="bg-yellow-400 text-black px-1 rounded">próximo</span> à nossa barbearia,
        você tem <span className="bg-yellow-400 text-black px-1 rounded">desconto</span> especial!
      </>
    ),
    description: "Apresente seu crachá ou informe seu local de trabalho e pague apenas R$30.",
    buttonText: "Aproveitar",
    variant: "work" as const,
  },
  {
    title: (
      <>
        Indique um <span className="bg-yellow-400 text-black px-1 rounded">amigo</span> e{" "}
        <span className="bg-yellow-400 text-black px-1 rounded">ganhe 12%</span> de desconto em cada corte!
      </>
    ),
    description: "Indique um amigo e ambos pagam apenas R$35 no corte de R$40.",
    buttonText: "Indicar amigo",
    variant: "friend" as const,
  },
];

  const corteValues = [
    { tipo: "Corte Degradê", preco: "R$40" },
    { tipo: "Corte Social", preco: "R$35" },
    { tipo: "Corte e Barba", preco: "R$70" },
    { tipo: "Sobrancelha", preco: "R$10" },
  ];

  const planos = [
    { nome: "Plano Corte", preco: "R$120/mês", beneficios: ["Corte ilimitado durante o mês"] },
    { nome: "Plano Corte + Sobrancelha", preco: "R$150/mês", beneficios: ["Corte e sobrancelha ilimitados durante o mês"] },
    { nome: "Plano Corte + Barba", preco: "R$200/mês", beneficios: ["Corte e barba ilimitados durante o mês"] },
    { nome: "Plano Completo", preco: "R$220/mês", beneficios: ["Corte, barba e sobrancelha ilimitados durante o mês"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Promoções */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {promoCards.map((card, index) => (
              <div
                key={index}
                className="animate-fade-in w-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <PromoCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Valores dos Cortes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-4">
            Valores dos Cortes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {corteValues.map((corte, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="font-montserrat text-xl font-bold mb-2">{corte.tipo}</h3>
              <p className="font-open-sans text-lg text-muted-foreground">{corte.preco}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Planos de Assinatura */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Planos de Assinatura
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal e tenha acesso a cortes ilimitados durante o mês.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {planos.map((plano, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md flex flex-col justify-between">
              <h3 className="font-montserrat text-2xl font-bold mb-2">{plano.nome}</h3>
              <p className="font-open-sans text-lg text-muted-foreground mb-4">{plano.preco}</p>
              <ul className="font-open-sans text-base mb-4 space-y-1">
                {plano.beneficios.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              <button className="bg-barbero text-white py-2 px-4 rounded-lg w-full font-bold hover:bg-barberoAccent transition">
                Assinar
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
