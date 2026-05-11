import { Toaster } from "@/componentes/interface/toaster";
import { Toaster as Sonner } from "@/componentes/interface/sonner";
import { TooltipProvider } from "@/componentes/interface/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./paginas/inicio";
import Catalogo from "./paginas/catalogo";
import Sobre from "./paginas/sobre";
import Carrinho from "./paginas/carrinho";
import NotFound from "./paginas/naoEncontrado";

import { CartProvider } from "./contexto/contextoCarrinho";
import { ScrollToTop } from "./componentes/estrutura/scrollParaTopo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
