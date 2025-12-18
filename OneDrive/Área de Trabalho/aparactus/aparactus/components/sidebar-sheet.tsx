"use client";

// Importações de componentes UI e ícones
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Calendar, Home, LogIn, LogOut, Scissors, Sparkles, User, Eye, Footprints, Waves } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const SidebarSheet = () => {
    // Estado hardcoded para fins de demonstração (usuário logado)
    const isLoggedIn = true; 

    return (
        <SheetContent className="overflow-y-auto bg-white">
            <SheetHeader>
                <SheetTitle className="text-left font-bold text-lg text-black">Menu</SheetTitle>
            </SheetHeader>

            {/* Seção de Perfil do Usuário */}
            <div className="flex items-center gap-3 border-b border-gray-100 py-5">
                {isLoggedIn ? (
                    <div className="flex items-center gap-3">
                         <Avatar className="h-12 w-12 border border-gray-200">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-black">Rodrigo</p>
                            <p className="text-xs text-gray-500">rodrigo@email.com</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-between w-full gap-2">
                        <h2 className="font-bold text-black">Olá, faça seu login!</h2>
                         <Button size="icon" variant="secondary">
                            <LogIn size={20} />
                        </Button>
                    </div>
                )}
            </div>

            {/* Seção de Navegação Principal */}
            <div className="flex flex-col gap-2 py-5 border-b border-gray-100">
                <SheetClose asChild>
                    <Button className="justify-start gap-3 text-black font-normal" variant="ghost" asChild>
                        <Link href="/">
                            <Home size={18} />
                            Início
                        </Link>
                    </Button>
                </SheetClose>
                <SheetClose asChild>
                    <Button className="justify-start gap-3 text-black font-normal" variant="ghost" asChild>
                        <Link href="/bookings">
                            <Calendar size={18} />
                            Agendamentos
                        </Link>
                    </Button>
                </SheetClose>
            </div>

             {/* Seção de Categorias de Serviços */}
             <div className="flex flex-col gap-2 py-5 border-b border-gray-100">
                <SheetClose asChild>
                    <Button className="justify-start gap-3 text-black font-normal" variant="ghost" asChild>
                        <Link href="/barbershops?search=cabelo">
                            <Scissors size={18} />
                            Cabelo
                        </Link>
                    </Button>
                </SheetClose>
                <SheetClose asChild>
                    <Button className="justify-start gap-3 text-black font-normal" variant="ghost" asChild>
                         <Link href="/barbershops?search=barba">
                            <User size={18} />
                            Barba
                        </Link>
                    </Button>
                </SheetClose>
                <SheetClose asChild>
                     <Button className="justify-start gap-3 text-black font-normal" variant="ghost" asChild>
                         <Link href="/barbershops?search=acabamento">
                            <Sparkles size={18} />
                            Acabamento
                        </Link>
                    </Button>
                </SheetClose>
                <SheetClose asChild>
                     <Button className="justify-start gap-3 text-black font-normal" variant="ghost" asChild>
                         <Link href="/barbershops?search=sobrancelha">
                            <Eye size={18} />
                            Sobrancelha
                        </Link>
                    </Button>
                </SheetClose>
                <SheetClose asChild>
                    <Button className="justify-start gap-3 text-black font-normal" variant="ghost" asChild>
                         <Link href="/barbershops?search=pézinho">
                            <Footprints size={18} />
                            Pézinho
                        </Link>
                    </Button>
                </SheetClose>
                <SheetClose asChild>
                     <Button className="justify-start gap-3 text-black font-normal" variant="ghost" asChild>
                         <Link href="/barbershops?search=progressiva">
                            <Waves size={18} />
                            Progressiva
                        </Link>
                    </Button>
                </SheetClose>
            </div>

            {/* Seção de Logout (Apenas se logado) */}
            {isLoggedIn && (
                <div className="flex flex-col gap-2 py-5">
                     <Button className="justify-start gap-3 text-black font-normal" variant="ghost">
                        <LogOut size={18} />
                        Sair da conta
                    </Button>
                </div>
            )}
        </SheetContent>
    )
}

export default SidebarSheet;
