import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button, buttonVariants } from '@/componentes/interface/button';
import { cn } from '@/bibliotecas/utilitarios';
import { MenuToggleIcon } from '@/componentes/interface/menu-toggle-icon';
import { useScroll } from '@/componentes/interface/use-scroll';
import { useCart } from '@/contexto/contextoCarrinho';
import logoBee from '@/ativos/logo-bee.png';

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Dia das Mães', path: '/dia-das-maes' },
  { name: 'Catálogo', path: '/catalogo' },
  { name: 'Sobre', path: '/sobre' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const scrolled = useScroll(10);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full border-b border-transparent transition-all duration-300 md:duration-500 ease-out',
        {
          'bg-card/95 supports-[backdrop-filter]:bg-card/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:rounded-2xl md:shadow-card':
            scrolled && !open,
          'bg-card': open,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-16 w-full items-center justify-between px-4 transition-all duration-300 ease-out',
          {
            'md:h-14 md:px-6': scrolled,
          },
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/50 flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
            <img src={logoBee} alt="Bearts Papelaria" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-heading font-bold text-lg text-primary hidden sm:inline-block">
            Bearts <span style={{ color: '#f472b6' }}>Papelaria</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'rounded-xl font-medium px-4',
                location.pathname === link.path ? 'text-primary bg-primary/5' : 'text-foreground hover:text-primary'
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="h-6 w-[1px] bg-border mx-2" />

          <Link to="/carrinho" className="relative group">
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-2 hover:border-primary transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 text-primary-foreground text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-button animate-scale-in"
                  style={{ background: 'var(--accent-pink)' }}
                >
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Link to="/carrinho" className="relative">
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 text-primary-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                  style={{ background: 'var(--accent-pink)' }}
                >
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => setOpen(!open)}
            className="rounded-xl"
          >
            <MenuToggleIcon open={open} className="size-6 text-foreground" duration={300} />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-[64px] z-50 bg-card/95 backdrop-blur-xl flex flex-col md:hidden transition-all duration-300 ease-in-out',
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
        )}
      >
        <div
          className={cn(
            'flex flex-col gap-y-4 p-6 transition-all duration-300 ease-out',
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center px-4 py-4 rounded-2xl text-lg font-semibold transition-all',
                location.pathname === link.path
                  ? 'bg-primary text-primary-foreground shadow-button'
                  : 'hover:bg-accent text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/carrinho"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-4 rounded-2xl bg-secondary/50 text-foreground font-semibold"
          >
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5" />
              Subtotal do Carrinho
            </div>
            {totalItems > 0 && (
              <span className="bg-accent-pink px-3 py-1 rounded-full text-white text-xs font-bold">
                {totalItems} itens
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
