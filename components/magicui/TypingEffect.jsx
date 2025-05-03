// components/TypingEffect.jsx
"use client";
import { useEffect, useState } from "react";

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-lg text-justify font-medium justify-center font-sans text-black leading-relaxed whitespace-pre-wrap">
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypingEffect;
