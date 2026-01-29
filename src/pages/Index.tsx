import React, { useEffect } from "react"; 
import { Header } from "@/components/Header";
import { PromoCard } from "@/components/PromoCard";
import { Footer } from "@/components/Footer";
import { FinalYearHighlight } from "@/components/FinalYearHighlight";
import { CutCarousel } from "@/components/CutCarousel";

// Imagens do carrossel (ajuste a quantidade conforme você tiver)
import corte1 from "@/assets/cortes/1.jpeg";
import corte2 from "@/assets/cortes/2.jpeg";
import corte3 from "@/assets/cortes/3.jpeg";
import corte4 from "@/assets/cortes/4.jpeg";
import corte5 from "@/assets/cortes/5.jpeg";
import corte6 from "@/assets/cortes/6.jpeg";
import corte7 from "@/assets/cortes/7.jpeg";
import corte8 from "@/assets/cortes/8.jpeg";
import corte9 from "@/assets/cortes/9.jpeg";
import corte10 from "@/assets/cortes/10.jpeg";
import corte11 from "@/assets/cortes/11.jpeg";
import corte12 from "@/assets/cortes/12.jpeg";
import corte13 from "@/assets/cortes/13.jpeg";
import corte14 from "@/assets/cortes/14.jpeg";
import corte15 from "@/assets/cortes/15.jpeg";

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
          <span className="bg-teal-500 text-white px-1 rounded">ganhe 25%</span> de desconto!
        </>
      ),
      description: (
        <>
          Venha conhecer a O Barbero e aproveite seu corte de{" "}
          <span className="bg-teal-500 text-white px-1 rounded">R$40</span> por apenas{" "}
          <span className="bg-teal-500 text-white px-1 rounded">R$30</span>.
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
          <span className="bg-teal-500 text-white px-1 rounded">próximo</span> à nossa barbearia, você tem{" "}
          <span className="bg-teal-500 text-white px-1 rounded">desconto</span> especial!
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
          Indique um <span className="bg-teal-500 text-white px-1 rounded">amigo</span> e{" "}
          <span className="bg-teal-500 text-white px-1 rounded">ganhe 12%</span> de desconto em cada corte!
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
    { tipo: "Corte Social", preco: "R$ 40" },
    { tipo: "Corte e Barba", preco: "R$ 70" },
    { tipo: "Barba", preco: "R$ 35" },
    { tipo: "Sobrancelha", preco: "R$ 10" },
  ];

  const planos = [
    {
      nome: "Plano Basico",
      preco: "R$ 69,90/mês",
      beneficios: ["Corte ou Barba ilimitado durante o mês"],
      whatsappLink: makeWhatsAppLink(
        WHATSAPP_NUMERO,
        "Tenho interesse no Plano Basico (R$69,90/mês)."
      ),
    },
    {
      nome: "Plano Ouro",
      preco: "R$ 139,90/mês",
      beneficios: ["Corte e barba ilimitados durante o mês"],
      whatsappLink: makeWhatsAppLink(
        WHATSAPP_NUMERO,
        "Tenho interesse no Plano Ouro (R$139,90/mês)."
      ),
    },
  ];

  useEffect(() => {
    console.log("DEBUG promoCards:", promoCards);
    console.log("DEBUG corteValues:", corteValues);
    console.log("DEBUG planos:", planos);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text pt-36">
      <Header />

      {/* Planos de Assinatura - MOVEI PARA O TOPO */}
      <section id="assinatura" className="scroll-mt-24 py-12 px-4 bg-brand-bg text-brand-text">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-extrabold text-teal-400 mb-3 tracking-tight leading-tight drop-shadow-lg">
            Assine seu plano e tenha corte ilimitado o mês inteiro
          </h2>
          <p className="font-open-sans text-lg text-brand-muted">
            Cuidar do visual ficou fácil — escolha o plano que mais combina com você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {planos.map((plano, idx) => {
            const isPopular = plano.nome === "Plano Ouro";
            return (
              <div
                key={idx}
                className={`relative p-6 rounded-xl shadow-lg flex flex-col justify-between hover:scale-105 transition-transform
                  ${
                    isPopular
                      ? "bg-brand-surface text-brand-text border-2 border-teal-500"
                      : "bg-brand-surface text-brand-text border border-teal-500/20"
                  }
                `}
              >
                {isPopular && (
                  <div className="absolute top-3 right-3 bg-teal-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md uppercase">
                    ⭐ Mais Popular
                  </div>
                )}

                <div>
                  <h3 className="font-montserrat text-2xl font-extrabold mb-2">
                    {plano.nome}
                  </h3>

                  <p className="font-open-sans text-lg font-semibold mb-3 text-teal-400">
                    {plano.preco}
                  </p>

                  <ul className="font-open-sans text-sm space-y-1 mb-4">
                    {plano.beneficios.map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={plano.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-2 px-4 rounded-lg w-full font-bold transition-colors
                    ${
                      isPopular
                        ? "bg-teal-500 text-white hover:bg-teal-400"
                        : "bg-brand-bg text-teal-400 border border-teal-500/40 hover:bg-brand-surface"
                    }
                  `}
                >
                  Quero esse plano 💈
                </a>
              </div>
            );
          })}
        </div>

        {/* ✅ Carrossel de cortes (abaixo dos planos) */}
        <div className="max-w-6xl mx-auto mt-10">
          <CutCarousel
            intervalMs={3500}
            images={[
              { src: corte1, alt: "Corte 1" },
              { src: corte2, alt: "Corte 2" },
              { src: corte3, alt: "Corte 3" },
              { src: corte4, alt: "Corte 4" },
              { src: corte5, alt: "Corte 5" },
              { src: corte7, alt: "Corte 7" },
              { src: corte8, alt: "Corte 8" },
              { src: corte9, alt: "Corte 9" },
              { src: corte10, alt: "Corte 10" },
              { src: corte11, alt: "Corte 11" },
              { src: corte12, alt: "Corte 12" },
              { src: corte13, alt: "Corte 13" },
              { src: corte14, alt: "Corte 14" },
              { src: corte15, alt: "Corte 15" },

            ]}
          />
        </div>
      </section>

      {/* Promoções */}
      <main id="promocoes" className="scroll-mt-24 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-brand-text mb-2">
              Promoções Especiais
            </h2>
            <p className="font-open-sans text-lg text-brand-muted max-w-2xl mx-auto">
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
      <section id="valores" className="scroll-mt-24 py-12 px-4 bg-brand-light border-t border-border">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-brand-dark mb-2">
            Valores dos Cortes
          </h2>
          <p className="font-open-sans text-lg text-brand-dark">
            Confira nossos serviços e preços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {corteValues.map((corte, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-lg bg-brand-surface text-center hover:scale-105 transition-transform"
            >
              <h3 className="font-montserrat text-lg font-bold text-brand-text mb-2">
                {corte.tipo}
              </h3>
              <p className="font-open-sans text-xl font-semibold text-brand-text">
                {corte.preco}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 📍 Localização */}
      <section id="localizacao" className="scroll-mt-24 py-12 px-4 bg-brand-light border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Cola na O Barbero 💈
          </h2>
          <p className="font-open-sans text-lg text-brand-dark mb-6">
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
        <svg viewBox="0 0 16 16" width="30" height="30" fill="white">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default Index;
