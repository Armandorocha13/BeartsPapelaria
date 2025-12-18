import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetTrigger } from "./sheet";
import SidebarSheet from "@/components/sidebar-sheet";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-5 py-6">
      <Image src="/Logo.svg" alt="Aparactus" width={91} height={24} />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"} className="bg-white">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SidebarSheet />
      </Sheet>
    </header>
  );
};

export default Header;
