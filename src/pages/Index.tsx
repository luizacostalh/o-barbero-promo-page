import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { PromoCard } from "@/components/PromoCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  const promoCards = [
    {
      title: (
        <>
          Primeira visita?{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">ganhe 25%</span> de desconto!
        </>
      ),
      description: (
        <>
          Venha conhecer a O Barbero e aproveite seu corte de{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">R$ 40</span> por apenas{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">R$ 30</span>.
        </>
      ),
      buttonText: "aproveitar",
    },
    {
      title: (
        <>
          Se você trabalha{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">próximo</span> à nossa barbearia, você tem{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">desconto</span> especial!
        </>
      ),
      description: "Apresente seu crachá ou informe seu local de trabalho e pague apenas R$ 30.",
      buttonText: "Aproveitar",
    },
    {
      title: (
        <>
          Indique um <span className="bg-yellow-400 text-black px-1 rounded">amigo</span> e{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">ganhe 12%</span> de desconto em cada corte!
        </>
      ),
      description: "Indique um amigo e ambos pagam apenas R$ 35 no corte de R$ 40.",
      buttonText: "Indicar amigo",
    },
  ];

  const corteValues = [
    { tipo: "Corte Degradê", preco: "R$ 40" },
    { tipo: "Corte Social", preco: "R$ 35" },
    { tipo: "Corte e Barba", preco: "R$ 70" },
    { tipo: "Barba", preco: "R$ 35" },
    { tipo: "Sobrancelha", preco: "R$ 10" },
  ];

  const planos = [
    { nome: "Plano Corte", preco: "R$ 120/mês", beneficios: ["Corte ilimitado durante o mês"] },
    { nome: "Plano Corte + Sobrancelha", preco: "R$ 150/mês", beneficios: ["Corte e sobrancelha ilimitados durante o mês"] },
    { nome: "Plano Corte + Barba", preco: "R$ 200/mês", beneficios: ["Corte e barba ilimitados durante o mês"] },
    { nome: "Plano Completo", preco: "R$ 220/mês", beneficios: ["Corte, barba e sobrancelha ilimitados durante o mês"] },
  ];

  useEffect(() => {
    console.log("DEBUG promoCards:", promoCards);
    console.log("DEBUG corteValues:", corteValues);
    console.log("DEBUG planos:", planos);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Promoções */}
      <main className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-2">
              Promoções Especiais
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Aproveite nossas ofertas exclusivas e venha cuidar do seu visual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promoCards.map((card, index) => (
              <div key={index} className="w-full">
                <PromoCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Valores dos Cortes */}
<section className="py-12 px-4 bg-white border-t border-border">
  <div className="max-w-6xl mx-auto text-center mb-8">
    <h2 className="font-montserrat text-3xl md:text-4xl font-bold !text-black mb-2">
      Valores dos Cortes
    </h2>
    <p className="font-open-sans text-lg text-gray-600">
      Confira nossos serviços e preços.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {corteValues.map((corte, idx) => (
      <div
        key={idx}
        className="p-6 rounded-xl shadow-lg bg-black text-center hover:scale-105 transition-transform"
      >
        <h3 className="font-montserrat text-lg font-bold text-white mb-2">
          {corte.tipo}
        </h3>
        <p className="font-open-sans text-xl font-semibold text-white">
          {corte.preco}
        </p>
      </div>
    ))}
  </div>
</section>

{/* Planos de Assinatura */}
<section className="py-12 px-4 bg-muted text-foreground border-t border-border">
  <div className="max-w-6xl mx-auto text-center mb-8">
    <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-2">
      Nossos Planos de Assinatura
    </h2>
    <p className="font-open-sans text-lg text-muted-foreground">
      Escolha o plano ideal e tenha acesso a cortes ilimitados durante o mês.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
    {planos.map((plano, idx) => (
      <div
        key={idx}
        className="p-6 rounded-xl shadow-lg !bg-black flex flex-col justify-between hover:scale-105 transition-transform"
      >
        <div>
          <h3 className="font-montserrat text-xl font-bold text-white mb-2">
            {plano.nome}
          </h3>
          <p className="font-open-sans text-lg font-semibold text-primary mb-3">
            {plano.preco}
          </p>
          <ul className="font-open-sans text-sm text-gray-300 space-y-1 mb-4">
            {plano.beneficios.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
        </div>
        <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg w-full font-bold hover:bg-yellow-500 transition-colors">
  Assinar
</button>
      </div>
    ))}
  </div>
</section>
{/* Botão Fixo do WhatsApp */}
      <a 
        href="https://wa.me/SEUNUMERO?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* Ícone Simples do WhatsApp (SVG) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="feather feather-message-circle"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 13.9 13.9 0 0 1-2.9 3.8 11.16 11.16 0 0 1-3.8 2.9 8.38 8.38 0 0 1-3.8.9c-4.6 0-8.38-3.78-8.38-8.38s3.78-8.38 8.38-8.38 8.38 3.78 8.38 8.38z" />
          <path d="M12 18l-1.4-1.4c-1.2 1-2.8 1.4-4.2 1.4-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.4-.4 3-1.4 4.2L12 18z" />
        </svg>
      </a>


      <Footer />
    </div>
  );
};

export default Index;
