import React, { useEffect, useMemo, useState } from "react";

type CutCarouselProps = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
};

export const CutCarousel: React.FC<CutCarouselProps> = ({
  images,
  intervalMs = 3500,
}) => {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeImages.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [safeImages.length, intervalMs]);

  if (!safeImages.length) return null;

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-brand-surface shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {safeImages.map((img, i) => (
            <div key={i} className="min-w-full">
              {/* Frame com proporção + fundo, sem cortar */}
              <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-brand-bg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain"
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {safeImages.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-teal-400 w-6" : "bg-white/40"
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
