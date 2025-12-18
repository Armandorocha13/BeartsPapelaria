import { getBarbershopById } from "@/data/barbershops";
import { notFound } from "next/navigation";
import BarbershopInfo from "@/components/barbershop-info";
import ServiceItem from "@/components/service-item";
import PhoneItem from "@/components/phone-item";
import {
  PageContainer,
  PageSectionContent,
  PageSectionTitle,
} from "@/components/ui/page";

interface BarbershopDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  const { id } = await params;
  const barbershop = await getBarbershopById(id);

  if (!barbershop) {
    return notFound();
  }

  return (
    <div className="bg-white min-h-screen text-black">
      <BarbershopInfo barbershop={barbershop} />

      <PageContainer>
        <PageSectionContent>
          <PageSectionTitle>
             <span className="text-gray-900 font-bold">SOBRE NÓS</span>
          </PageSectionTitle>
          <p className="text-sm text-justify text-gray-900">{barbershop.description}</p>
        </PageSectionContent>

        <PageSectionContent>
          <PageSectionTitle>
            <span className="text-gray-900 font-bold">Serviços</span>
          </PageSectionTitle>
          <div className="flex flex-col gap-3">
            {barbershop.services.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </PageSectionContent>

        <PageSectionContent>
          <PageSectionTitle>
             <span className="text-gray-900 font-bold">Contato</span>
          </PageSectionTitle>
          <div className="flex flex-col gap-4">
            {barbershop.phones.map((phone, index) => (
              <PhoneItem key={index} phone={phone} />
            ))}
          </div>
        </PageSectionContent>
      </PageContainer>
    </div>
  );
};

export default BarbershopDetailsPage;
