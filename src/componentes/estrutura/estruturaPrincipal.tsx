import { ReactNode } from 'react';
import { Navbar } from './barraNavegacao';
import { Footer } from './rodape';
import { WelcomeModal } from '../inicio/modalBoasVindas';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <WelcomeModal />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
