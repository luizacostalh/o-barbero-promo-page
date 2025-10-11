import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { PromoCard } from "@/components/PromoCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  const WHATSAPP_NUMERO = "5567993504221";

  const makeWhatsAppLink = (phone: string, message: string) => {
    const digits = phone.replace(/\D/g, "");
    return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  };

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
          <span className="bg-yellow-400 text-black px-1 rounded">R$40</span> por apenas{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">R$30</span>.
        </>
      ),
      buttonText: "Aproveitar",
      variant: "first" as const,
      whatsappLink: makeWhatsAppLink(
        WHATSAPP_NUMERO,
        "Olá! Vim pelo site e quero aproveitar a promoção de primeira visita (ganhe 25%)."
      ),
    },
    {
      title: (
        <>
          Se você trabalha{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">próximo</span> à nossa barbearia, você tem{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">desconto</span> especial!
        </>
      ),
      description: "Apresente seu crachá ou informe seu local de trabalho e pague apenas R$30.",
      buttonText: "Aproveitar",
      variant: "work" as const,
      whatsappLink: makeWhatsAppLink(
        WHATSAPP_NUMERO,
        "Olá! Trabalho próximo e quero aproveitar o desconto especial para trabalhadores."
      ),
    },
    {
      title: (
        <>
          Indique um <span className="bg-yellow-400 text-black px-1 rounded">amigo</span> e{" "}
          <span className="bg-yellow-400 text-black px-1 rounded">ganhe 12%</span> de desconto em cada corte!
        </>
      ),
      description: "Indique um amigo e ambos pagam apenas R$35 no corte de R$40.",
      buttonText: "Ganhar Desconto",
      variant: "friend" as const,
      whatsappLink: makeWhatsAppLink(
        WHATSAPP_NUMERO,
        "Olá! Quero indicar um amigo para aproveitar a promoção de indicação."
      ),
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
    { 
      nome: "Plano Corte", 
      preco: "R$ 120/mês", 
      beneficios: ["Corte ilimitado durante o mês"], 
      whatsappLink: makeWhatsAppLink(
        WHATSAPP_NUMERO,
        "Tenho interesse no Plano Corte (R$120/mês)."
      ),
    },
    { 
      nome: "Plano Corte + Sobrancelha", 
      preco: "R$ 150/mês", 
      beneficios: ["Corte e sobrancelha ilimitados durante o mês"], 
      whatsappLink: makeWhatsAppLink(
        WHATSAPP_NUMERO,
        "Tenho interesse no Plano Corte + Sobrancelha (R$150/mês)."
      ),
    },
    { 
      nome: "Plano Corte + Barba", 
      preco: "R$ 200/mês", 
      beneficios: ["Corte e barba ilimitados durante o mês"], 
      whatsappLink: makeWhatsAppLink(
        WHATSAPP_NUMERO,
        "Tenho interesse no Plano Corte + Barba (R$200/mês)."
      ),
    },
    { 
      nome: "Plano Completo", 
      preco: "R$ 220/mês", 
      beneficios: ["Corte, barba e sobrancelha ilimitados durante o mês"], 
      whatsappLink: makeWhatsAppLink(
        WHATSAPP_NUMERO,
        "Tenho interesse no Plano Completo (R$220/mês)."
      ),
    },
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
              <PromoCard key={index} {...card} />
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
              <a 
                href={plano.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-yellow-400 text-black py-2 px-4 rounded-lg w-full font-bold hover:bg-yellow-500 transition-colors"
              >
                Assinar
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 📍 Localização */}
      <section className="py-12 px-4 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-black mb-4">
            Cola na O Barbero 💈
          </h2>
          <p className="font-open-sans text-lg text-gray-600 mb-6">
             Estamos pertinho do Shopping Avenida Center, Venha nos visitar!
          </p>
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.3729272784326!2d-54.80056172576981!3d-22.225925013891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489a98366d4275b%3A0x79d20b9198b5a591!2zTyDwnZWt8J2WhvCdlpfwnZaH8J2WivCdlpfwnZaUIEJhcmJlYXJpYQ!5e0!3m2!1spt-BR!2sbr!4v1760193621607!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Botão Fixo do WhatsApp */}
      <a 
        href={makeWhatsAppLink(
          WHATSAPP_NUMERO,
          "Olá, estou procurando uma barbearia de qualidade e gostaria de saber sobre horários disponíveis. Obrigado!"
        )} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg 
          viewBox="0 0 16 16"
          width="30" 
          height="30"
          fill="white"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default Index;
