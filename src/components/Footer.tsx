import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-barbero-graphite py-12 px-4 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contato e Endereço */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-xl font-bold text-primary mb-4">
              Localização & Contato
            </h3>
            
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <div className="font-open-sans text-muted-foreground">
                <p>Rua duque de caxias, 552</p>
                <p>Centro, Dourados - MS</p>
                <p>CEP: 79831060</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="text-primary flex-shrink-0" size={20} />
              <a 
                href="https://wa.me/5567993504221" 
                className="font-open-sans text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                (67) 99350-4221
              </a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-xl font-bold text-primary mb-4">
              Redes Sociais
            </h3>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
            
            <p className="font-open-sans text-sm text-muted-foreground">
              Siga-nos nas redes sociais para ficar por dentro das novidades e promoções exclusivas!
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="font-open-sans text-sm text-muted-foreground">
            © 2024 O Barbero. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};