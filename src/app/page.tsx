import Link from "next/link";
import Rectangle from "@/components/Rectangle";

export default function Home() {
  return (
  <main className="min h-screen flex flex-col items-center justify-center gap-4">


      
    <p className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
      Hello world
    </p>

    <Rectangle color="green" />

    <div className="h-14 w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>

    <div className="h-14 w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>

    <div className="flex justify-center items-center gap-16">
      <Link href="/page2" className="text-blue-500 hover:underline">Page 2 </Link>
      <Link href="/page3" className="text-blue-500 hover:underline">Chess-like board </Link>
    </div>

  </main>
  
);
}