import { Heart, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoBee from '@/ativos/logo-bee.png';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden bg-white/50 flex items-center justify-center shadow-button">
                <img src={logoBee} alt="Bearts Papelaria" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary">
                Bearts <span style={{ color: '#e11d48' }}>Papelaria</span>
              </h3>
            </div>
            <p className="text-muted-foreground">
              Transformando seus momentos em memórias com materiais de qualidade e muito carinho.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">
              Links Rápidos
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/catalogo" className="text-muted-foreground hover:text-primary transition-colors">
                Catálogo
              </Link>
              <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com/bearts.papelaria" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                @bearts.papelaria
              </a>
              <a href="https://wa.me/5521971690013" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                (21) 97169-0013
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            Feito por AeroCode - 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
