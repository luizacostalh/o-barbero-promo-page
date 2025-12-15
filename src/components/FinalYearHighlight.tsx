// FinalYearHighlight.tsx
import React from "react";

interface FinalYearHighlightProps {
  whatsappLink: string;
}

export const FinalYearHighlight = ({ whatsappLink }: FinalYearHighlightProps) => {
  return (
    <>
      {/* 🎄 FAIXA PREMIUM — PROGRAMAÇÃO FINAL DE ANO */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-zinc-900 to-black border-y border-yellow-500/40">
        <div className="max-w-5xl mx-auto text-center">

          <div className="flex justify-center gap-3 mb-5 flex-wrap">
            <span className="px-4 py-1 rounded-full border border-yellow-500/60 text-yellow-400 text-sm tracking-widest">
              🎄 NATAL
            </span>
            <span className="px-4 py-1 rounded-full border border-white/30 text-white text-sm tracking-widest">
              🎆 ANO NOVO
            </span>
          </div>

          <h2 className="font-['Bebas Neue'] text-4xl md:text-5xl text-white mb-10">
            Funcionamento Especial de Final de Ano
          </h2>

          <div className="max-w-xl mx-auto space-y-4 text-left text-gray-300 font-open-sans">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>📅 23 e 24/12</span>
              <strong className="text-white">Atendimento normal</strong>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>❌ 25/12</span>
              <strong className="text-white">Fechado</strong>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>
                📅 30 e 31/12
                
              </span>
              <strong className="text-white">Atendimento normal</strong>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>⏸️ 01/01 a 04/01</span>
              <strong className="text-white">Fechado</strong>
            </div>

            <div className="flex justify-between">
              <span>▶️ Retorno</span>
              <strong className="text-yellow-400">05/01</strong>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            📌 Trabalhamos por ordem de chegada. Os últimos dias do ano costumam lotar.
          </p>

        </div>
      </section>

      {/* 🔘 FAIXA CTA — DESTAQUE TOTAL */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="font-['Bebas Neue'] text-4xl md:text-5xl mb-4 tracking-wide">
            Venha fechar o ano com o visual em dia
          </h2>

          <p className="font-open-sans text-lg mb-10 max-w-2xl mx-auto">
            Feche o ano bem, do jeito certo.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-14 py-4 rounded-full bg-black text-yellow-400 font-bold tracking-widest
                       hover:bg-zinc-900 transition-all shadow-xl"
          >
            CHAMAR NO WHATSAPP

          </a>
<div className="mt-10 block px-8 py-4 rounded-xl bg-black/10 backdrop-blur-sm">
  <p className="font-open-sans text-base md:text-lg text-black font-medium text-center">
    🎄 A O Barbero deseja a todos um Feliz Natal e um Ano Novo repleto de conquistas!
  </p>
</div>




        </div>
      </section>
    </>
  );
};
