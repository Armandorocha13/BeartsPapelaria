"use client";

import { Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface PhoneItemProps {
  phone: string;
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <Smartphone className="text-black" />
        <p className="text-sm text-black">{phone}</p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="rounded-full bg-green-900 font-bold text-white"
        onClick={handleCopyPhone}
      >
        {copied ? "Copiado!" : "Copiar"}
      </Button>
    </div>
  );
};

export default PhoneItem;
