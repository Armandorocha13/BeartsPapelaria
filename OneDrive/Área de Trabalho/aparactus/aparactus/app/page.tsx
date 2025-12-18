// Importação de imagens e componentes necessários
import Image from "next/image";
import banner from "../public/banner.png";
import BookingItem from "../components/bookingItem";

import { getBarbershops, getPopularBarbershops } from "@/data/barbershops";
import BarbershopItem from "@/components/barbershopItem";
import {
  PageContainer,
  PageSectionTitle,
  PageSectionContent,
  PageSectionScroller,
} from "@/components/ui/page";
import Header from "@/components/ui/header";
import QuickSearch from "@/components/quickSearch";

// Função principal da página inicial
export default async function Home() {
  // Busca lista de todas as barbearias e das mais populares do banco de dados
  const barbershops = await getBarbershops();
  const popularBarbershops = await getPopularBarbershops();

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Cabeçalho */}
      <Header />
      
      <PageContainer>
        {/* Banner grande no topo da página */}
        
        <QuickSearch/>
        <div className="px-4">
          <Image
            src={banner}
            alt="Agende com os melhores com a Aparatus"
            sizes="100vw"
            width={1000}
            height={1000}
          />
        </div>

        {/* Seção de agendamentos */}
        <PageSectionContent>
          <PageSectionTitle>
             <span className="text-gray-900 font-bold">Agendamentos</span>
          </PageSectionTitle>
          {/* Componente que lista/agrega os agendamentos */}
          <BookingItem />
        </PageSectionContent>

        {/* Seção listando todas as barbearias */}
        <PageSectionContent>
          <PageSectionTitle>
            <span className="text-gray-900 font-bold">Barbearias</span>
          </PageSectionTitle>
          <PageSectionScroller>
            {/* Renderiza um item para cada barbearia */}
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSectionContent>

        {/* Seção listando as barbearias populares */}
        <PageSectionContent>
          <PageSectionTitle>
             <span className="text-gray-900 font-bold">Barbearias populares</span>
          </PageSectionTitle>
          <PageSectionScroller>
            {/* Renderiza um item para cada barbearia popular */}
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSectionContent>
      </PageContainer>
    </div>
  );
}