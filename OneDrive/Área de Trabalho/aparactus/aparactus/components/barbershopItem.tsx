import Image from "next/image";
import { Barbershop } from "@/generated/prisma/client";

interface BarbershopItemProps {
	barbershop: Barbershop;
}


const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {

	return (
		// Container principal do item de barbearia
		<div className="relative min-h-[200px] min-w-[200px] rounded-xl">
			<div className="absolute top-0 left-0 z-10 h-full w-full rounded-lg bg-linear-to-t from-black to-transparent"></div>
			{/* Imagem da barbearia, ocupando todo o espaço do container */}
			<Image 
				src={barbershop.imageUrl} // URL da imagem da barbearia
				alt={barbershop.name}     // Texto alternativo com o nome
				fill                     // Ocupa todo o espaço do container
				className="object-cover rounded-xl"
			/>
			{/* Área inferior com informações detalhadas */}
			<div className="absolute right-0 bottom-0 left-0 z-20 p-4">
				<h3 className="text-white text-lg font-bold">{barbershop.name}</h3>
				<p className="text-white text-xs">{barbershop.address}</p>
			</div>
		</div>
	);
};

// Exporta o componente para uso em outros arquivos
export default BarbershopItem;