
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
            icon: <ShoppingBag className="w-4 h-4 text-red-500" />,
            title: "1. Escolha seus itens",
            description: "Navegue pelo nosso catálogo e encontre os itens de papelaria perfeitos para você."
        },
        {
            icon: <ShoppingCart className="w-4 h-4 text-red-500" />,
            title: "2. Adicione ao carrinho",
            description: "Escolha as opções de cada produto e adicione-os ao seu carrinho de compras."
        },
        {
            icon: <CheckCircle2 className="w-4 h-4 text-red-500" />,
            title: "3. Revise seu pedido",
            description: "Confira todos os itens no carrinho e clique em 'Finalizar Pedido'."
        },
        {
            icon: <MessageSquare className="w-4 h-4 text-red-500" />,
            title: "4. Finalize no WhatsApp",
            description: "Você será direcionado ao nosso WhatsApp com o resumo do seu pedido para confirmarmos tudo."
        }
    ];

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="w-[94vw] sm:max-w-[500px] max-h-[92vh] overflow-y-auto border-none bg-white rounded-[1.5rem] shadow-2xl custom-scrollbar p-0">
                <div className="sticky top-0 left-0 w-full h-1 bg-gradient-to-r from-red-300 via-purple-300 to-blue-300 shrink-0 z-10" />
                <div className="p-4 sm:p-8">

                <DialogHeader className="pt-1 sm:pt-4">
                    <DialogTitle className="text-lg sm:text-2xl font-heading font-bold text-center text-gray-800 leading-tight">
                        Bem-vindo à <span className="text-red-500">Bearts Papelaria</span>! ✨
                    </DialogTitle>
                    <DialogDescription className="text-center text-gray-500 pt-1 text-[11px] sm:text-sm leading-tight">
                        Guia rápido para seu pedido com facilidade.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-3 py-3">
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 mt-1">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center p-2 rounded-xl bg-gray-50/50 border border-gray-100/30">
                                <div className="shrink-0 bg-white p-1.5 rounded-lg shadow-sm border border-red-100">
                                    {step.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-gray-800 text-[11px] sm:text-sm leading-tight">{step.title}</h4>
                                    <p className="hidden sm:block text-gray-500 text-xs mt-0.5">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-100/50 flex gap-2.5 items-start">
                        <div className="shrink-0 bg-white p-1.5 rounded-lg shadow-sm border border-amber-200">
                            <Wallet className="w-3.5 h-3.5 text-amber-500" />
                        </div>
                        <div>
                            <h4 className="font-bold text-amber-800 text-[11px] sm:text-sm">
                                Pagamento
                            </h4>
                            <p className="text-amber-700 text-[10px] sm:text-xs leading-tight mt-0.5">
                                Entrada de <span className="font-bold underline">50% do valor</span> para iniciar a produção.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-gray-500 italic text-[10px]">
                        <Info className="w-3 h-3" />
                        <span>Dúvidas? Entre em contato via WhatsApp.</span>
                    </div>
                </div>

                <DialogFooter className="mt-1">
                    <ButtonColorful
                        onClick={handleClose}
                        className="w-full h-10 text-[13px] font-bold rounded-xl shadow-md active:scale-[0.97] transition-all"
                    >
                        Entendi, vamos lá!
                    </ButtonColorful>
                </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
};
