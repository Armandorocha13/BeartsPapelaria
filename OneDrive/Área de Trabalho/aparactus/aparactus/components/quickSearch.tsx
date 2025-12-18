"use client";

// Importações dos pacotes e componentes necessários
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { PageSectionScroller } from "./ui/page";
// Ícones que representam cada serviço
import { Scissors, Sparkles, User, Eye, Footprints, Waves } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

// Componente principal de busca rápida
const QuickSearch = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  // Função que lida com o envio do formulário de busca
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne recarregamento da página
    if (!searchValue.trim()) return; // Evita busca vazia
    router.push(
      `/barbershops?search=${encodeURIComponent(searchValue.trim())}`,
    );
  };

  return (
    <>
      {/* Formulário de busca */}
      <form onSubmit={handleSearch} className="flex items-center gap-2 px-5">
        <Input
          className="border-gray-200 rounded-full placeholder:text-muted-foreground bg-white text-black"
          placeholder="Pesquisar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          type="submit"
          className="h-10 w-10 rounded-full bg-[#386d42] hover:bg-[#386d42]/90 shrink-0"
        >
          <SearchIcon
            className="text-white font-bold"
            strokeWidth={3}
          />
        </Button>
      </form>
      {/* Lista de serviços rápidos para pesquisa */}
      <PageSectionScroller>
        <div className="flex gap-3 px-5">
            {/* Link para serviço "Cabelo" */}
            <Link
            href="/barbershops?search=cabelo"
            className="flex shrink-0 items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2"
            >
            <Scissors
                className="size-4 text-black"
                strokeWidth={3}
            />
            <span className="text-sm font-bold text-black tracking-tight">Cabelo</span>
            </Link>

            {/* Link para serviço "Barba" */}
            <Link
            href="/barbershops?search=barba"
            className="flex shrink-0 items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2"
            >
            <User className="size-4 text-black" strokeWidth={3} />
            <span className="text-sm font-bold text-black tracking-tight">Barba</span>
            </Link>

            {/* Link para serviço "Acabamento" */}
            <Link
            href="/barbershops?search=acabamento"
            className="flex shrink-0 items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2"
            >
            <Sparkles
                className="size-4 text-black"
                strokeWidth={3}
            />
            <span className="text-sm font-bold text-black tracking-tight">Acabamento</span>
            </Link>

            {/* Link para serviço "Sobrancelha" */}
            <Link
            href="/barbershops?search=sobrancelha"
            className="flex shrink-0 items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2"
            >
            <Eye className="size-4 text-black" strokeWidth={3} />
            <span className="text-sm font-bold text-black tracking-tight">Sobrancelha</span>
            </Link>

            {/* Link para serviço "Pézinho" */}
            <Link
            href="/barbershops?search=pézinho"
            className="flex shrink-0 items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2"
            >
            <Footprints
                className="size-4 text-black"
                strokeWidth={3}
            />
            <span className="text-sm font-bold text-black tracking-tight">Pézinho</span>
            </Link>

            {/* Link para serviço "Progressiva" */}
            <Link
            href="/barbershops?search=progressiva"
            className="flex shrink-0 items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2"
            >
            <Waves className="size-4 text-black" strokeWidth={3} />
            <span className="text-sm font-bold text-black tracking-tight">Progressiva</span>
            </Link>
        </div>
      </PageSectionScroller>
    </>
  );
};

export default QuickSearch;