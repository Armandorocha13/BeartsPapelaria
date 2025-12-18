import { BarbershopService } from "@/generated/prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
  service: BarbershopService;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card className="rounded-2xl bg-white border-gray-100 shadow-sm">
      <CardContent className="p-3 w-full">
        <div className="flex gap-4 items-center w-full">
          <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
            <Image
              src={service.imageUrl}
              fill
              style={{ objectFit: "cover" }}
              alt={service.name}
              className="rounded-xl"
            />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold text-black">{service.name}</h2>
            <p className="text-sm text-gray-500">{service.description}</p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-primary text-sm font-bold">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(service.priceInCents) / 100)}
              </p>
              <Button className="bg-[#386d42] hover:bg-[#386d42]/90 text-white rounded-xl">
                Reservar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;