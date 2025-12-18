"use client";

// Importações de dados e componentes
import { Barbershop } from "@/generated/prisma/client";
import { ChevronLeft, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// Interface para as props do componente
interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  // Função para voltar para a página anterior
  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="relative z-10">
      {/* Banner da Barbearia */}
      <div className="h-[250px] w-full relative">
        <Button
          onClick={handleBackClick}
          size="icon"
          className="z-50 absolute top-4 left-4 rounded-full bg-white text-black hover:bg-white/90"
        >
          <ChevronLeft />
        </Button>

        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          style={{
            objectFit: "cover",
          }}
          className="opacity-75"
        />
      </div>

      {/* Informações da Barbearia (Card sobreposto) */}
      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary bg-white text-black rounded-t-3xl -mt-8 relative z-50">
         <div className="flex items-center gap-3">
            {/* Avatar da Barbearia */}
            <Avatar className="h-12 w-12 border-2 border-white">
                <AvatarImage src={barbershop.imageUrl} />
                <AvatarFallback className="font-bold text-black">{barbershop.name[0]}</AvatarFallback>
            </Avatar>
            
            {/* Nome e Endereço */}
            <div className="flex flex-col">
                <h1 className="text-xl font-bold text-black">{barbershop.name}</h1>
                <div className="flex items-center gap-1">
                    <MapPin className="text-primary fill-primary" size={14} />
                    <p className="text-sm text-gray-500">{barbershop.address}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
