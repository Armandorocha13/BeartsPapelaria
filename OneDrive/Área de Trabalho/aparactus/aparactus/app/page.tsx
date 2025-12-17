import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col gap-4">
      <Button variant="destructive">Teste</Button>
      <Input type="text" placeholder="Teste"/>
    </div>
  );

}
