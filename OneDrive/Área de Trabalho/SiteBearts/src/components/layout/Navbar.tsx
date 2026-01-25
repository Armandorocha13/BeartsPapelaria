import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

import logoBee from '@/assets/logo-bee.png';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Catálogo', path: '/catalogo' },
  { name: 'Sobre', path: '/sobre' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-15 h-15 rounded-2xl overflow-hidden bg-white/50 flex items-center justify-center shadow-button group-hover:scale-105 transition-transform">
              <img src={logoBee} alt="Bearts Papelaria" className="w-12 h-12 object-contain" />
            </div>
            <span className="font-heading font-bold text-xl text-primary">
              Bearts <span style={{ color: '#E697b4' }}>Papelaria</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${location.pathname === link.path
                  ? 'text-primary'
                  : 'text-foreground'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-2xl relative"
              asChild
            >
              <Link to="/carrinho">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span
                    className="absolute -top-2 -right-2 text-primary-foreground text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-background"
                    style={{ background: 'var(--accent-pink)' }}
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-2xl hover:bg-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-2xl font-medium transition-colors ${location.pathname === link.path
                    ? 'bg-accent text-primary'
                    : 'hover:bg-accent'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="outline"
                  className="w-full rounded-2xl gap-2 relative"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/carrinho">
                    <ShoppingCart className="w-5 h-5" />
                    Carrinho
                    {totalItems > 0 && (
                      <span
                        className="ml-2 text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: 'var(--accent-pink)' }}
                      >
                        {totalItems}
                      </span>
                    )}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
