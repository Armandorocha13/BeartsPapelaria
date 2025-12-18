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
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <Input
          className="border-border rounded-full text-gray-800 placeholder:text-gray-500"
          placeholder="Pesquisar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button type="submit" className="h-10 w-10 rounded-full border-2 border-black">
          <SearchIcon className="text-gray-700 font-bold" strokeWidth={3} />
        </Button>
      </form>
      {/* Lista de serviços rápidos para pesquisa */}
      <PageSectionScroller>
        {/* Link para serviço "Cabelo" */}
        <Link
          href="/barbershops?search=cabelo"
          className="border-black border-2 bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
        >
          <Scissors className="size-4 text-gray-700 font-bold" strokeWidth={3} />
          <span className="text-sm font-thin text-gray-800">Cabelo</span>
        </Link>

        {/* Link para serviço "Barba" */}
        <Link
          href="/barbershops?search=barba"
          className="border-black border-2 bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
        >
          <User className="size-4 text-gray-700 font-bold" strokeWidth={3} />
          <span className="text-sm font-thin text-gray-800">Barba</span>
        </Link>

        {/* Link para serviço "Acabamento" */}
        <Link
          href="/barbershops?search=acabamento"
          className="border-black border-2 bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
        >
          <Sparkles className="size-4 text-gray-700 font-bold" strokeWidth={3} />
          <span className="text-sm font-thin text-gray-800">Acabamento</span>
        </Link>

        {/* Link para serviço "Sobrancelha" */}
        <Link
          href="/barbershops?search=sobrancelha"
          className="border-black border-2 bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
        >
          <Eye className="size-4 text-gray-700 font-bold" strokeWidth={3} />
          <span className="text-sm font-thin text-gray-800">Sobrancelha</span>
        </Link>

        {/* Link para serviço "Pézinho" */}
        <Link
          href="/barbershops?search=pézinho"
          className="border-black border-2 bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
        >
          <Footprints className="size-4 text-gray-700 font-bold" strokeWidth={3} />
          <span className="text-sm font-thin text-gray-800">Pézinho</span>
        </Link>

        {/* Link para serviço "Progressiva" */}
        <Link
          href="/barbershops?search=progressiva"
          className="border-black border-2 bg-card-background flex shrink-0 items-center justify-center gap-3 rounded-3xl px-4 py-2"
        >
          <Waves className="size-4 text-gray-700 font-bold" strokeWidth={3} />
          <span className="text-sm font-thin text-gray-800">Progressiva</span>
        </Link>
      </PageSectionScroller>
    </>
  );
};

export default QuickSearch;
