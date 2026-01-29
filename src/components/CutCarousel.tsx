import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CutCarouselProps = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
};

export const CutCarousel: React.FC<CutCarouselProps> = ({
  images,
  intervalMs = 4000,
}) => {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % safeImages.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);

  useEffect(() => {
    if (safeImages.length <= 1 || paused) return;
    const id = window.setInterval(nextSlide, intervalMs);
    return () => window.clearInterval(id);
  }, [safeImages.length, intervalMs, paused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prevSlide();
    else if (delta < -50) nextSlide();
    touchStartX.current = null;
  };

  if (!safeImages.length) return null;

  return (
    <div className="w-full">
      <div
        className="group relative overflow-hidden rounded-2xl border border-teal-500/25 bg-brand-surface shadow-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* brilho sutil */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-teal-500/10" />

        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {safeImages.map((img, i) => (
            <div
              key={i}
              className="min-w-full flex items-center justify-center bg-brand-bg aspect-[4/3] md:aspect-[3/2] max-h-[420px]"

            >
              <img
                src={img.src}
                alt={img.alt}
                className="max-h-full max-w-full object-contain"
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Overlay gradiente (deixa menos “sem graça”) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

        {/* Contador (1/10) */}
        {safeImages.length > 1 && (
          <div className="absolute top-3 right-3 rounded-full bg-black/45 px-3 py-1 text-xs text-white/90 backdrop-blur">
            {index + 1}/{safeImages.length}
          </div>
        )}

        {/* Botões (aparecem no hover no desktop) */}
        {safeImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Voltar"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur
                         opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity
                         hover:bg-black/65"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Avançar"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white backdrop-blur
                         opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity
                         hover:bg-black/65"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Indicadores mais “chiques” */}
        {safeImages.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-10 bg-teal-400"
                    : "w-3 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <p className="mt-3 text-center text-sm text-brand-muted font-open-sans">
        Alguns cortes feitos na O Barbero ✂️
      </p>
    </div>
  );
};
