import barberoLogo from "@/assets/barbero-logo.png";

export const Header = () => {
  return (
    <header className="bg-gradient-dark py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <img 
            src={barberoLogo} 
            alt="O Barbero Logo" 
            className="h-24 w-auto mx-auto mb-4 filter drop-shadow-lg"
          />
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-foreground mb-2">
            O Barbero
          </h1>
        </div>
        <p className="font-open-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Cortes modernos, barba impecável e cuidado que você merece.
        </p>
      </div>
    </header>
  );
};