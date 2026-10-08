import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button, buttonVariants } from '@/componentes/interface/button';
import { cn } from '@/bibliotecas/utilitarios';
import { MenuToggleIcon } from '@/componentes/interface/menu-toggle-icon';
import { useScroll } from '@/componentes/interface/use-scroll';
import { useCart } from '@/contexto/contextoCarrinho';

const navLinks = [
  { name: 'Início', path: '/' },
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
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform border border-red-200 shrink-0">
            <img src="/images/WhatsApp Image 2026-08-25 at 18.18.05 (1).jpeg" alt="Bearts Papelaria" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-script font-bold text-xl sm:text-2xl text-[#D42637] drop-shadow-sm tracking-wide">
              Bearts
            </span>
            <span className="font-heading font-semibold text-[9px] sm:text-[10px] text-[#2D6A4F] uppercase tracking-[0.18em] sm:tracking-[0.2em]">
              Papelaria
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'rounded-xl font-semibold px-4 py-2 text-sm transition-all duration-300 flex items-center gap-1.5',
                  isActive
                    ? 'bg-[#D42637] text-white shadow-md shadow-red-200 font-bold'
                    : 'text-[#4A2E2E] hover:text-[#D42637] hover:bg-red-50/80'
                )}
              >
                <span>{link.name}</span>
                {isActive && <span className="text-xs">🎄</span>}
              </Link>
            );
          })}

          <div className="h-6 w-[1px] bg-red-100 mx-2" />

          <Link to="/carrinho" className="relative group">
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-2 border-red-200/80 hover:border-[#D42637] hover:bg-red-50/50 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 text-[#D42637] group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1.5 -right-1.5 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-scale-in bg-[#D42637]"
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
              className="rounded-xl border-red-200 hover:border-[#D42637]"
            >
              <ShoppingCart className="w-5 h-5 text-[#D42637]" />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full bg-[#D42637]"
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
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-semibold transition-all',
                  isActive
                    ? 'bg-gradient-to-r from-[#D42637] to-[#E11D48] text-white shadow-md'
                    : 'hover:bg-red-50 text-[#4A2E2E]'
                )}
              >
                <span>{link.name}</span>
                {isActive && <span>🎄</span>}
              </Link>
            );
          })}

          <Link
            to="/carrinho"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-5 py-4 rounded-2xl bg-red-50/80 border border-red-100 text-[#D42637] font-semibold"
          >
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-[#D42637]" />
              <span>Subtotal do Carrinho</span>
            </div>
            {totalItems > 0 && (
              <span className="bg-[#D42637] px-3 py-1 rounded-full text-white text-xs font-bold">
                {totalItems} {totalItems === 1 ? 'item' : 'itens'}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
