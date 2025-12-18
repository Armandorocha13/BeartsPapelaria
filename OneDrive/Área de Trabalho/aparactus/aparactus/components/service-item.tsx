"use client";

// Importações de tipos e bibliotecas externas
import { Barbershop, BarbershopService } from "@/generated/prisma/client";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

// Importações de componentes de UI
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Calendar } from "./ui/calendar";

// Interface das props do componente
interface ServiceItemProps {
  service: BarbershopService;
  barbershop: Barbershop;
}

const ServiceItem = ({ service, barbershop }: ServiceItemProps) => {
  // Estados para controle de data e horário selecionados
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);

  // Gera a lista de horários disponíveis (09:00 às 17:00 com intervalo de 30min)
  const timeList = useMemo(() => {
    const times = [];
    let currentHour = 9;
    let currentMinute = 0;

    while (currentHour < 17 || (currentHour === 17 && currentMinute === 0)) {
        const formattedHour = String(currentHour).padStart(2, "0");
        const formattedMinute = String(currentMinute).padStart(2, "0");
        times.push(`${formattedHour}:${formattedMinute}`);

        if (currentMinute === 30) {
            currentHour++;
            currentMinute = 0;
        } else {
            currentMinute = 30;
        }
    }
    return times;
  }, []);

  // Efeito para limpar o horário selecionado quando a data muda
  useEffect(() => {
    setTime(undefined);
  }, [date]);

  // Handlers para seleção de data e hora
  const handleDateSelect = (selectedDate: Date | undefined) => {
      setDate(selectedDate);
  }

  const handleTimeSelect = (selectedTime: string) => {
      setTime(selectedTime);
  }

  return (
    <Card className="rounded-2xl bg-white border-gray-100 shadow-sm">
      <CardContent className="p-3 w-full">
        <div className="flex gap-4 items-center w-full">
          {/* Imagem do Serviço */}
          <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
            <Image
              src={service.imageUrl}
              fill
              style={{ objectFit: "cover" }}
              alt={service.name}
              className="rounded-xl"
            />
          </div>

          {/* Detalhes do Serviço */}
          <div className="flex flex-col w-full">
            <h2 className="font-bold text-black">{service.name}</h2>
            <p className="text-sm text-gray-500">{service.description}</p>

            {/* Preço e Botão de Reservar */}
            <div className="flex items-center justify-between mt-3">
              <p className="text-primary text-sm font-bold">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(service.priceInCents) / 100)}
              </p>
              
              {/* Sheet de Reserva */}
              <Sheet>
                  <SheetTrigger asChild>
                    <Button className="bg-[#386d42] hover:bg-[#386d42]/90 text-white rounded-xl">
                        Reservar
                    </Button>
                  </SheetTrigger>
                  
                  <SheetContent className="px-0 overflow-y-auto bg-white">
                      <SheetHeader className="px-5 text-left pb-6 border-b border-solid border-gray-100">
                          <SheetTitle className="text-black">Fazer Reserva</SheetTitle>
                      </SheetHeader>
                      
                      {/* Calendário */}
                      <div className="py-6 border-none">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={handleDateSelect}
                            locale={ptBR}
                            className="mt-6"
                            classNames={{
                                day_selected: "bg-[#386d42] text-white hover:bg-[#386d42] hover:text-white focus:bg-[#386d42] focus:text-white rounded-full",
                                head_cell: "text-black font-medium",
                                caption_label: "text-black font-bold text-lg",
                                nav_button: "border-none text-[#386d42] opacity-100 hover:opacity-80",
                                day: "text-black hover:bg-[#386d42]/10 rounded-full h-12 w-12 p-0 font-normal",
                                day_today: "text-[#386d42] font-bold rounded-full bg-transparent",
                                cell: "h-12 w-12 text-center text-sm p-0 relative",
                                day_outside: "text-black/20",
                            }}
                            styles={{
                                head_cell: { width: "100%", textTransform: "capitalize" },
                                cell: { width: "100%" },
                                button: { width: "100%" },
                                nav_button_previous: { width: "32px", height: "32px" },
                                nav_button_next: { width: "32px", height: "32px" },
                                caption: { textTransform: "capitalize" }
                            }}
                          />
                      </div>
                      
                      {/* Seleção de Horário */}
                      {date && (
                         <div className="flex gap-3 overflow-x-auto py-6 px-5 border-b border-solid border-gray-100">
                            {timeList.map((t) => (
                                <Button 
                                    key={t} 
                                    variant={time === t ? "default" : "outline"} 
                                    className={`rounded-full shrink-0 border-none shadow-none ${time === t ? "bg-[#386d42] text-white hover:bg-[#386d42]/90" : "text-black bg-transparent hover:bg-transparent"}`}
                                    onClick={() => handleTimeSelect(t)}
                                >
                                    {t}
                                </Button>
                            ))}
                         </div>
                      )}

                      {/* Card de Resumo do Agendamento */}
                      {date && time && (
                          <div className="py-6 px-5">
                              <Card className="bg-white rounded-2xl shadow-none border border-gray-100">
                                  <CardContent className="p-4 gap-3 flex flex-col">
                                      <div className="flex justify-between items-center">
                                          <h2 className="font-bold text-black">{service.name}</h2>
                                          <h3 className="font-bold text-sm text-black">
                                              {Intl.NumberFormat("pt-BR", {
                                                  style: "currency",
                                                  currency: "BRL",
                                              }).format(Number(service.priceInCents) / 100)}
                                          </h3>
                                      </div>

                                      <div className="flex justify-between items-center">
                                          <h3 className="text-black text-sm">Data</h3>
                                          <h4 className="text-sm text-black">
                                              {format(date, "dd 'de' MMMM", {
                                                  locale: ptBR,
                                              })}
                                          </h4>
                                      </div>

                                      <div className="flex justify-between items-center">
                                          <h3 className="text-black text-sm">Horário</h3>
                                          <h4 className="text-sm text-black">{time}</h4>
                                      </div>

                                      <div className="flex justify-between items-center">
                                          <h3 className="text-black text-sm">Barbearia</h3>
                                          <h4 className="text-sm text-black">{barbershop.name}</h4>
                                      </div>
                                  </CardContent>
                              </Card>
                          </div>
                      )}

                      {/* Botão de Confirmação */}
                      <SheetFooter className="px-5 p-5">
                          <SheetClose asChild>
                              <Button 
                                  disabled={!date || !time} 
                                  className={`w-full text-white rounded-full font-bold ${!date || !time ? "bg-gray-400" : "bg-[#386d42] hover:bg-[#386d42]/90"}`}
                                >
                                  Confirmar
                              </Button>
                          </SheetClose>
                      </SheetFooter>
                  </SheetContent>
              </Sheet>

            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;