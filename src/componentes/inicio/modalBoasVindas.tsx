
import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/componentes/interface/dialog";
import { ButtonColorful } from "@/componentes/interface/button-colorful";
import { ShoppingBag, ShoppingCart, CheckCircle2, MessageSquare, Info, Wallet } from 'lucide-react';

export const WelcomeModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal');
        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenWelcomeModal', 'true');
    };

    const steps = [
        {
            icon: <ShoppingBag className="w-5 h-5 text-pink-500" />,
            title: "1. Escolha seus itens",
            description: "Navegue pelo nosso catálogo e encontre os itens de papelaria perfeitos para você."
        },
        {
            icon: <ShoppingCart className="w-5 h-5 text-pink-500" />,
            title: "2. Adicione ao carrinho",
            description: "Escolha as opções de cada produto e adicione-os ao seu carrinho de compras."
        },
        {
            icon: <CheckCircle2 className="w-5 h-5 text-pink-500" />,
            title: "3. Revise seu pedido",
            description: "Confira todos os itens no carrinho e clique em 'Finalizar Pedido'."
        },
        {
            icon: <MessageSquare className="w-5 h-5 text-pink-500" />,
            title: "4. Finalize no WhatsApp",
            description: "Você será direcionado ao nosso WhatsApp com o resumo do seu pedido para confirmarmos tudo."
        }
    ];

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px] border-none bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />

                <DialogHeader className="pt-6">
                    <DialogTitle className="text-2xl font-heading font-bold text-center text-gray-800">
                        Bem-vinda à <span className="text-pink-500">Bearts Papelaria</span>! ✨
                    </DialogTitle>
                    <DialogDescription className="text-center text-gray-600 pt-2">
                        Preparamos um guia rápido para você realizar seu pedido com facilidade.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="grid gap-4">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-3 rounded-2xl bg-gray-50 hover:bg-pink-50 transition-colors duration-300">
                                <div className="mt-1 bg-white p-2 rounded-xl shadow-sm border border-pink-100">
                                    {step.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">{step.title}</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 flex gap-4 items-start">
                        <div className="mt-1 bg-white p-2 rounded-xl shadow-sm border border-amber-200">
                            <Wallet className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-amber-800 text-sm flex items-center gap-1">
                                Informação de Pagamento
                            </h4>
                            <p className="text-amber-700 text-xs leading-relaxed mt-1">
                                Para darmos início à produção e garantir sua reserva, solicitamos o pagamento de <span className="font-bold underline">50% do valor total do pedido</span> como entrada.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-gray-500 italic text-xs">
                        <Info className="w-4 h-4" />
                        <span>Para mais informações, entre em contato via WhatsApp.</span>
                    </div>
                </div>

                <DialogFooter className="sm:justify-center pb-6">
                    <ButtonColorful
                        onClick={handleClose}
                        className="w-full sm:w-auto px-12 h-12 text-base font-semibold rounded-2xl shadow-lg shadow-pink-200"
                    >
                        Entendi, vamos lá!
                    </ButtonColorful>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
