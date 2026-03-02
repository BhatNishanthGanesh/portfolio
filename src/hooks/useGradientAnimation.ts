import { useState, useEffect } from "react";
import { useMotionValue,animate } from "framer-motion";

const COLORS_TOP = ["#0D7377", "#323EDD", "#8B5FBF", "#F25F5C"];

export function useGradientAnimation() {
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    const animation = animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => animation.stop();
  }, [color]);
  return color;
}
