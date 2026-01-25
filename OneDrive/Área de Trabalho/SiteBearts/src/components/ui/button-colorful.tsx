import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    asChild?: boolean;
}

export function ButtonColorful({
    className,
    label,
    children,
    asChild,
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            asChild={asChild}
            className={cn(
                "btn-colorful h-10 px-6 rounded-2xl",
                "text-white font-bold",
                className
            )}
            {...props}
        >
            {asChild ? (
                children
            ) : (
                <div className="flex items-center justify-center gap-2">
                    <span>{label || children}</span>
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            )}
        </Button>
    );
}
