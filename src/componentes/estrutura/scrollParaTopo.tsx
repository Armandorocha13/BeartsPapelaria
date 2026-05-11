import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    // Reset mais agressivo para garantir o topo em qualquer troca de rota
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Força a ida imediata sem animação
    });
    
    // Fallback para elementos de documento que possam estar prendendo o scroll
    document.documentElement.scrollTo({ top: 0, behavior: "instant" });
    document.body.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, search]); // Reage tanto a mudança de página quanto filtros (?categoria=...)

  return null;
};
