import { Spinner } from "@/components/ui/spinner";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth");
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex items-center gap-4">
        <Spinner className="size-8 text-green-400"/>
      </div>
    </div>
  );
}
