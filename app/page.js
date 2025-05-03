import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ResultsSection from "./components/ResultsSection";
export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col bg-[#F6D46B]">
      <Navbar />
      <HeroSection/>
      <ResultsSection />
    </main>
  );
}
