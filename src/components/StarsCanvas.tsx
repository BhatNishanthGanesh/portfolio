"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function MovingStars() {
  const starsRef = useRef<any>();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (starsRef.current) {
      starsRef.current.rotation.x = elapsedTime * 0.01;
      starsRef.current.rotation.y = elapsedTime * 0.01;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={50}
      count={5000}
      factor={4}
      fade
    />
  );
}

export default function StarsCanvas() {
  return (
    <Canvas>
      <MovingStars />
    </Canvas>
  );
}