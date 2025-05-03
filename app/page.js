import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ResultsSection from "./components/ResultsSection";
import Footer from "./components/FooterSection";
import AboutSection from "./components/AboutSection";
export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col bg-[#F6D46B]">
      <Navbar />
      <HeroSection/>
      <AboutSection />
      <ResultsSection />
      <Footer />
    </main>
  );
}
