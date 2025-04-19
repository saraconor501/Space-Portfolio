import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skils from "@/components/main/Skils";

export default function Home() {
  return (
   <main className="h-full w-full">
     <div className="flex flex-col gap-20">
      <Hero />
      <Skils />
      <Encryption />
      <Projects />
     </div>
   </main>
  );
}
