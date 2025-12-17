"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

/**
 * Componente que exibe um item de agendamento
 * Mostra informações sobre o serviço agendado, barbearia e data/hora
 */
export default function BookingItem() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      {/* Card interno com layout flexível */}
      <div className="card flex h-full w-full cursor-pointer flex-row items-center justify-between p-0">
        {/* Seção esquerda: Informações do agendamento */}
        <div className="flex flex-1 flex-col gap-2 p-4">
          {/* Badge de status do agendamento */}
          <Badge variant="secondary" className="w-fit text-xs font-bold">
            Confirmado
          </Badge>
          {/* Nome do serviço */}
          <p className="font-bold">Cortes de cabelo</p>
          {/* Informações da barbearia com avatar */}
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <p className="text-xs font-bold">Barbearia do ph</p>
          </div>
        </div>

        {/* Seção direita: Data e hora do agendamento */}
        <div className="flex h-full w-[106px] flex-col items-center justify-center border-l py-3">
          <p className="text-xs capitalize">Fevereiro</p>
          <p className="text-2xl font-bold">13</p>
          <p className="text-xs">10:30</p>
        </div>
      </div>
    </div>
  );
}
