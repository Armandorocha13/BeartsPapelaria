import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./button";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-5 py-6">
      <Image src="/logo.svg" alt="Aparactus" width={91} height={24} />
      <Button variant={"ghost"} size={"icon"} className="bg-white">
        <Menu />
      </Button>
    </header>
  );
};

export default Header;
