"use client";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { SiCodechef, SiGeeksforgeeks,SiLeetcode } from "react-icons/si";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from "next/image";
import Project from "@/section/project/project";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Achievements from "@/section/achievements/achievements";
import Experience from "@/section/experience/experience";
import SkeletonLoader from "./loading";
import StarsCanvas from "@/components/StarsCanvas"
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useGradientAnimation } from "@/hooks/useGradientAnimation";


const TEXTS = ["FULL STACK DEVELOPER", "CPP PROGRAMMER"];

export default function Home() {
  const [contentLoaded, setcontentLoaded] = useState(false);

  const displayText=useTypingEffect(TEXTS,100);
  const color=useGradientAnimation();
  const backgroundImage = useMotionTemplate`radial-gradient(135% 135% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative  overflow-hidden px-4 py-12 text-gray-200"
    >
      <div className="absolute inset-0 z-0">
       <StarsCanvas />
      </div>

      <div>
        <div className="w-full md:mt-24">
          <div className="max-w-5xl  md:mx-auto ">
            <div className="flex flex-col md:flex-row  items-center pt-24 sm:pt-4 ">
              <div className="flex-1 max-w-3xl  p-4  order-2 lg:order-1 text-center md:text-left ">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="my-4 text-3xl md:text-6xl  text-white opacity-75 font-bold leading-tight transition-transform duration-300 "
                >
                  Bhat Nishanth Ganesh
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="leading-normal text-sm md:text-2xl mb-8 transition-transform duration-300"
                >
                  CLOUD ENGINEER |
                  <motion.span
                    key={displayText}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-clip-text text-sm md:text-2xl font-bold text-transparent ml-2 bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
                  >
                    {displayText}
                  </motion.span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="leading-normal text-sm mb-8 text-justify transition-transform duration-300 "
                >
                  I am currently working as a Cloud Engineer at LTM, with a strong focus on building scalable and performance-driven software systems. I enjoy developing full-stack applications and solving real-world problems using modern technologies. With a solid foundation in Data Structures and Algorithms and proficiency in C++, I strive to write clean, efficient, and maintainable code.
                </motion.p>

                <div className="w-full relative flex gap-4 justify-center md:justify-start">
                  {contentLoaded ? (
                    <motion.a
                      href="/BNG_LATEST_RESUME.pdf"
                      download="BNG_LATEST_RESUME.pdf"
                      whileHover={{ scale: 1.0 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded hover:opacity-90 transition-opacity items-center px-2 py-1 bg-indigo-500 w-fit shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                    >
                      Download My Resume
                      <FiDownload className="ml-2" />
                    </motion.a> 
                  ) : (
                    <SkeletonLoader className="w-44 h-12" />
                  )}
                </div>
                <motion.div className="relative flex justify-center md:justify-start mt-8 space-x-4">
                  {contentLoaded ? (
                    <>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        href="https://github.com/BhatNishanthGanesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <FaGithub className="text-2xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        href="https://www.linkedin.com/in/nishanth-bhat-80853a228/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <FaLinkedin className="text-2xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        href="https://x.com/Nishant81025211"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <FaTwitter className="text-2xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        href="https://www.instagram.com/nishanthbhat_19/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <FaInstagram className="text-2xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        href="https://www.codechef.com/users/nishanth_15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <SiCodechef className="text-2xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        href="https://www.geeksforgeeks.org/user/nishanthbhat18/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <SiGeeksforgeeks className="text-2xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        href="https://leetcode.com/u/Nishanth15012003/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        <SiLeetcode className="text-2xl" />
                      </motion.a>
                    </>
                  ) : (
                    <>
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                      <SkeletonLoader className="w-12 h-12" />
                    </>
                  )}
                </motion.div>
              </div>

              <div className="flex-shrink-0  order-1 lg:order-2 p-12  sm:p-6 flex justify-center">
                <div className="relative  ">
                  {!contentLoaded && (
                    <SkeletonLoader className="w-44 h-44 md:h-64 md:w-64" />
                  )}
                  <Image
                    src="/Nishanth.jpg"
                    alt="Profile"
                    width={250}
                    height={250}
                    className={`rounded-lg shadow-lg ${
                      contentLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setcontentLoaded(true)}
                  />
                </div>
              </div>
            </div>

            <div>
              <Project />
            </div>
            <Achievements />
            <Experience />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
