import { useEffect, useState } from "react";

export function useTypingEffect(texts: string[], speed = 100) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAdding) {
        if (charIndex < texts[currentIndex].length) {
          setDisplayText((prev) => prev + texts[currentIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsAdding(false);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsAdding(true);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [charIndex, isAdding, currentIndex, texts, speed]);

  return displayText;
}