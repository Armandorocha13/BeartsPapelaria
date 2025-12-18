import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

const search = () => {
  return (
    <div className="flex items-center gap-2">
      <input className="border-border rounded-full" placeholder="Pesquisar" />
      <Button className="text-green-800">
        <SearchIcon />
      </Button>
    </div>
  );
};
