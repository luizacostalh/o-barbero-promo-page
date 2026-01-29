// PromoCard.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PromoCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  whatsappLink: string;
}

export const PromoCard = ({
  title,
  description,
  buttonText,
  whatsappLink,
}: PromoCardProps) => {
  const buttonClasses =
    "w-full py-3 px-4 rounded-lg font-bold transition-colors duration-300 text-lg mt-auto block text-center bg-teal-500 text-white hover:bg-teal-400";

  return (
    <Card className="bg-brand-surface border border-teal-500/30 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-2 group min-h-[320px] flex flex-col justify-between w-full">
      <CardHeader className="pb-4">
        <CardTitle className="font-['Bebas Neue'] text-lg md:text-xl font-bold text-brand-text group-hover:text-teal-400 transition-colors duration-300 break-words">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 flex flex-col flex-1 justify-between">
        <p className="font-open-sans text-sm md:text-base text-brand-muted leading-relaxed break-words">
          {description}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {buttonText}
        </a>
      </CardContent>
    </Card>
  );
};
