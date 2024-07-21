"use client";
import { SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import Image from "next/image";
import Project from "@/section/project/project"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Achievements from "@/section/achievements/achievements";
import Experience from "@/section/experience/experience";

const COLORS_TOP = ["#0D7377", "#323EDD", "#8B5FBF", "#F25F5C"];


export default function Home() {
  const [spotLightColor, setSpotLightColor] = useState(COLORS_TOP[0]);
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

  const backgroundImage = useMotionTemplate`radial-gradient(135% 135% at 50% 0%, #020617 50%, ${color})`;
  // const border = useMotionTemplate`1px solid ${color}`;
  // const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const border=useMotionTemplate`1px solid black`
  const boxShadow=useMotionTemplate`1px solid black`

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative  overflow-hidden bg-gray-950 px-4 py-12 text-gray-200"
    >
      <div className="absolute  inset-0 z-0">
        <Canvas>
          <SpotLight
            position={[-3, 3, 4]}  // Position the light to overlap the text
            penumbra={0.7}
            intensity={0.6}
            angle={0.2}
            color={spotLightColor}  // Set the color of the light
            castShadow
          />
        </Canvas>
      </div>

      <div>

        {/* Main content */}
        <div className="w-full md:mt-24">
          
          <div className="max-w-6xl md:mx-auto ">
            <div className="flex flex-col md:flex-row items-center pt-24 sm:pt-4 ">
              {/* Text section */}
              <div className="flex-1 max-w-3xl order-2 lg:order-1 text-center md:text-left ">
                <h1 className="my-4 text-4xl sm:text-3xl md:text-6xl text-white opacity-75 font-bold leading-tight transition-transform duration-300 hover:scale-105">
                  Bhat Nishanth Ganesh
                </h1>
                <p className="leading-normal text-lg md:text-2xl mb-8 transition-transform duration-300 hover:scale-105">
                  CSE UNDERGRAD | FULL STACK DEVELOPER
                </p>
                <p className="leading-normal text-sm mb-8 transition-transform duration-300 hover:scale-105">
                I am a passionate full stack web developer dedicated to creating innovative web applications that address real-world challenges. Currently, I am a pre-final year Computer Science Engineering student at SCEM, continuously exploring new technologies and methodologies.

                </p>
                <div className="w-full flex gap-4">
                 
                  {/* <motion.button
                    style={{
                      border,
                      boxShadow,
                    }}
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                  >
                    Download my Resume
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                  </motion.button> */}
                  <motion.button
                    style={{
                      border,
                      boxShadow,
                    }}
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                  >
                    Download my Resume
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                  </motion.button>
                  
                </div>
                <div className="flex justify-center md:justify-start mt-8 space-x-4">
                  <motion.a   whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        style={{x:10}} href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
                    <FaGithub className="text-2xl" />
                  </motion.a>
                  <motion.a   whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        style={{x:10}} href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
                    <FaLinkedin className="text-2xl" />
                  </motion.a>
                  <motion.a   whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        style={{x:10}} href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
                    <FaTwitter className="text-2xl" />
                  </motion.a>
                  <motion.a   whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        style={{x:10}} href="https://www.instagram.com/your-username/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
                    <FaInstagram className="text-2xl" />
                  </motion.a>
                </div>
              </div>

              {/* Image section */}
              <div className="flex-shrink-0 order-1 lg:order-2 p-12 sm:p-6 flex justify-center">
                <Image
                  src="/Nishanth.jpg"
                  alt="Nishanth"
                  height={250}
                  width={250}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div >
              <Project/>
              <Achievements/>
              <Experience/>
            </div>
          </div>
        </div>
    
      </div>
    </motion.section>
  );
}
