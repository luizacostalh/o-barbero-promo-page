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

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % safeImages.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

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
        className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-brand-surface shadow-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {safeImages.map((img, i) => (
            <div
              key={i}
              className="min-w-full flex items-center justify-center bg-brand-bg aspect-[4/3] md:aspect-[16/9]"
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

        {/* Botão voltar */}
        {safeImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Indicadores */}
        {safeImages.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 transition-all rounded-full ${
                  i === index
                    ? "w-6 bg-teal-400"
                    : "w-2 bg-white/40 hover:bg-white/60"
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
