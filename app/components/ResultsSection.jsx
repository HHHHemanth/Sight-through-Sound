"use client"
import { useEffect, useState, useRef } from "react";
import TypingEffect from "@/components/magicui/TypingEffect";
import { Play, Pause } from "lucide-react";
import { InteractiveHoverButton } from "@/components/magicui/interative-hover-button2";
import { MagicCard } from "@/components/magicui/magic-card";
import Image from 'next/image';

const ResultsSection = () => {
  const [kannadaText, setKannadaText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [capturedImagePath, setCapturedImagePath] = useState(""); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const audioRef = useRef(null);

  const LAPTOP_A_BASE_URL = "http://192.168.113.145:5000";

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(`${LAPTOP_A_BASE_URL}/get-results`);
        if (!res.ok) throw new Error("Failed to fetch results");
        const data = await res.json();
        
        console.log(data);

        setImageUrl(data.processed_image || "");
        setAudioUrl(data.audio || "");  // Make sure to update the audio URL here
        setKannadaText(data.kannada_text || "");
        setCapturedImagePath(data.captured_image || ""); 
        setError("");
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Unable to fetch results. Please check the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
    const interval = setInterval(fetchResults, 5000);
    return () => clearInterval(interval);
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
      <h1 className="text-3xl font-bold text-center my-6">Image Processing Results</h1>

      <div className="flex justify-center mb-2 mt-6">
        <InteractiveHoverButton onClick={handleReload}>
          Reload Section
        </InteractiveHoverButton>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 mt-6">Loading results...</p>
      ) : error ? (
        <p className="text-center text-red-600 mt-6">{error}</p>
      ) : (
        <>
          {/* Captured Image Card */}
          <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-6 space-y-4 lg:space-y-0 p-6">
            <MagicCard>
              <div className="flex-1 flex justify-center items-center p-4">
                <div className="w-full h-auto max-w-xs">
                  <h3 className="text-center font-semibold text-lg mb-4">Captured Image</h3>
                  {capturedImagePath ? (
                    <Image
                      src={`${capturedImagePath}?t=${new Date().getTime()}`} // Append timestamp to avoid caching issues
                      alt="Captured"
                      width={300}
                      height={300}
                      className="object-cover rounded-md mb-2"
                    />
                  ) : (
                    <p className="text-center text-gray-500">No captured image available.</p>
                  )}
                </div>
              </div>
            </MagicCard>
          </div>

          {/* Processed Image Card */}
          <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-6 space-y-4 lg:space-y-0 p-6">
            <MagicCard>
              <div className="flex-1 flex justify-center items-center p-4">
                <div className="w-full h-auto max-w-xs">
                  <h3 className="text-center font-semibold text-lg mb-4">Processed Image</h3>
                  {imageUrl ? (
                    <Image
                      src={`${imageUrl}?t=${new Date().getTime()}`} // Fix to show processed image
                      alt="Processed"
                      width={300}
                      height={300}
                      className="object-cover rounded-md"
                    />
                  ) : (
                    <p className="text-center text-gray-500">No image available.</p>
                  )}
                </div>
              </div>
            </MagicCard>
          </div>

          {/* Kannada Text / Scene Description */}
          <div className="mt-20 p-10 rounded-lg mx-4 min-h-[400px]">
            <h2 className="text-2xl font-bold text-center mb-1">ಚಿತ್ರದ ವಿವರಣೆ</h2>
            <h4 className="text-xl font-bold text-center mb-4">(Scene Description)</h4>
            <TypingEffect text={kannadaText} speed={30} />
          </div>

          {/* Audio Feedback */}
          <div className="flex flex-col items-center mt-6 mb-12">
            <h1 className="text-3xl font-bold text-center my-6">Audio Feedback</h1>
            <div className="flex items-center space-x-4 p-4 rounded-lg">
              <button
                onClick={toggleAudio}
                className="p-3 bg-[#F6D46B] text-white rounded-full hover:bg-black transition"
                disabled={!audioUrl}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              {audioUrl ? (
                <audio ref={audioRef} src={audioUrl} />
              ) : (
                <span className="text-sm text-gray-500">No audio available.</span>
              )}
              <span className="text-sm font-medium text-gray-700">
                {isPlaying ? "Playing..." : "Paused"}
              </span>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ResultsSection;
