"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import TypingEffect from "@/components/magicui/TypingEffect";
import { Play, Pause } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interative-hover-button2";
import { MagicCard } from "@/components/magicui/magic-card";

const ResultsSection = () => {
  const capturedImagePath = "/images/cap.jpg";
  const processedImagePath = "/images/res.jpg";

  const [kannadaText, setKannadaText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchText = async () => {
      const res = await fetch("/kanres.txt");
      const text = await res.text();
      setKannadaText(text);
    };
    fetchText();

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("scroll") === "results") {
      const section = document.getElementById("results");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReload = () => {
    window.location.href = `${window.location.pathname}?scroll=results`;
  };

  return (
    <section className="relative bg-white" id="results">


      <Image
              src="/images/s3b.png"
              alt="Decorative Small"
              width={200}
              height={200}
              className="absolute bottom-0 right-0 block sm:hidden pointer-events-none"
            />
      
            {/* For medium screens */}
            <Image
              src="/images/s3b.png"
              alt="Decorative Medium"
              width={250}
              height={250}
              className="absolute bottom-0 right-0  hidden sm:block md:hidden pointer-events-none"
            />
      
            {/* For large screens and above */}
            <Image
              src="/images/s3b.png"
              alt="Decorative Large"
              width={300}
              height={300}
              className="absolute bottom-0 right-0 md:right-0 hidden md:block pointer-events-none"
            />


      <h1 className="text-3xl font-bold text-center my-6">Image Processing Results</h1>

      {/* Reload Button */}
      <div className="flex justify-center mb-2 mt-6">
        <InteractiveHoverButton onClick={handleReload}>
          Reload Section
        </InteractiveHoverButton>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-6 space-y-4 lg:space-y-0 p-6">
        {/* Captured Image */}
        <MagicCard>
          <div className="flex-1 flex justify-center items-center p-4">
            <div className="w-full h-auto max-w-xs">
              <h3 className="text-center font-semibold text-lg mb-4">Captured Image</h3>
              <Image
                src={capturedImagePath}
                alt="Captured"
                width={300}
                height={300}
                className="object-cover rounded-md mb-2"
              />
            </div>
          </div>
        </MagicCard>

        {/* Processed Image */}
        <MagicCard>
          <div className="flex-1 flex justify-center items-center p-4">
            <div className="w-full h-auto max-w-xs">
              <h3 className="text-center font-semibold text-lg mb-4">Processed Image</h3>
              <Image
                src={processedImagePath}
                alt="Processed"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </MagicCard>
      </div>

      {/* Kannada Output Section */}
      <div className="mt-20 p-10 rounded-lg mx-4 min-h-[400px]">
        <h2 className="text-2xl font-bold text-center mb-1">ಚಿತ್ರದ ವಿವರಣೆ</h2>
        <h4 className="text-xl font-bold text-center mb-4">(Scene Description)</h4>
        <TypingEffect text={kannadaText} speed={30} />
      </div>

      {/* Audio Player Section */}
      <div className="flex flex-col items-center mt-6 mb-12">
        <h1 className="text-3xl font-bold text-center my-6">Audio Feedback</h1>
        <div className="flex items-center space-x-4 p-4 rounded-lg">
          <button
            onClick={toggleAudio}
            className="p-3 bg-[#F6D46B] text-white rounded-full hover:bg-black transition"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <audio ref={audioRef} src="/audio/audres.mp3" />
          <span className="text-sm font-medium text-gray-700">
            {isPlaying ? "Playing..." : "Paused"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
