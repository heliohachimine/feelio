import { useEffect, useState } from "react";

export default function TypingText({ text, speed = 50, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(interval);
        if (onComplete) onComplete(); // Chama callback
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <span>{displayedText}</span>;
}
