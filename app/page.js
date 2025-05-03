import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col bg-[#F6D46B]">
      <Navbar />
      <HeroSection/>
    </main>
  );
}
