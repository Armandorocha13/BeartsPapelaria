// Importações de dados e utilitários
import { getBarbershopById } from "@/data/barbershops";
import { notFound } from "next/navigation";

// Importações de componentes de UI e layout
import BarbershopInfo from "@/components/barbershop-info";
import ServiceItem from "@/components/service-item";
import PhoneItem from "@/components/phone-item";
import Footer from "@/components/footer";
import {
  PageContainer,
  PageSectionContent,
  PageSectionTitle,
} from "@/components/ui/page";

// Interface para as propriedades da página
interface BarbershopDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Função principal da página de detalhes da barbearia
const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  // Recupera o ID da URL
  const { id } = await params;
  
  // Busca os dados da barbearia no banco de dados
  const barbershop = await getBarbershopById(id);

  // Se não encontrar a barbearia, retorna 404
  if (!barbershop) {
    return notFound();
  }

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Componente de informações principais (Banner e Detalhes) */}
      <BarbershopInfo barbershop={barbershop} />

      <PageContainer>
        {/* Seção Sobre Nós */}
        <PageSectionContent>
          <PageSectionTitle>
             <span className="text-gray-900 font-bold">SOBRE NÓS</span>
          </PageSectionTitle>
          <p className="text-sm text-justify text-gray-900">{barbershop.description}</p>
        </PageSectionContent>

        {/* Seção de Serviços */}
        <PageSectionContent>
          <PageSectionTitle>
            <span className="text-gray-900 font-bold">Serviços</span>
          </PageSectionTitle>
          <div className="flex flex-col gap-3">
            {/* Mapeia e renderiza cada serviço disponível */}
            {barbershop.services.map((service) => (
              <ServiceItem key={service.id} service={service} barbershop={barbershop} />
            ))}
          </div>
        </PageSectionContent>

        {/* Seção de Contato */}
        <PageSectionContent>
          <PageSectionTitle>
             <span className="text-gray-900 font-bold">Contato</span>
          </PageSectionTitle>
          <div className="flex flex-col gap-4">
            {/* Mapeia e renderiza cada telefone disponível */}
            {barbershop.phones.map((phone, index) => (
              <PhoneItem key={index} phone={phone} />
            ))}
          </div>
        </PageSectionContent>
      </PageContainer>
      
      {/* Rodapé da página */}
      {/* <Footer /> removido para evitar duplicação com o layout global */}
    </div>
  );
};

export default BarbershopDetailsPage;