import Image from "next/image";
import banner from "../public/banner.png";
import BookingItem from "../components/bookingItem";

import { getBarbershops } from "@/data/barbershops";
import BarbershopItem from "@/components/barbershopItem";
import {
  PageContainer,
  PageSectionTitle,
  PageSectionContent,
  PageSectionScroller,
} from "@/components/ui/page";
import Header from "@/components/ui/header";

export default async function Home() {
  const barbershops = await getBarbershops();

  return (
    <>
      <Header />
      <PageContainer>
        <div className="px-4">
          <Image
            src={banner}
            alt="Agende com os melhores com a Aparatus"
            sizes="100vw"
            width={1000}
            height={1000}
          />
        </div>
        <PageSectionContent>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem />
        </PageSectionContent>
        <PageSectionContent>
          <PageSectionTitle> Barbearias</PageSectionTitle>
          <PageSectionScroller>
            {barbershops.map((barbershops) => (
              <BarbershopItem key={barbershops.id} barbershop={barbershops} />
            ))}
          </PageSectionScroller>
        </PageSectionContent>
      </PageContainer>
    </>
  );
}
