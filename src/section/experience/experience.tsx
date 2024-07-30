import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SkeletonLoader from "@/app/loading"; // Adjust the path if necessary

const experiences = [
  {
    title: "Student Intern",
    company: "PaceWisdom",
    duration: "July 2024 - Present",
    icon: "/pace.jpg",
  },
  {
    title: "Web Dev",
    company: "Challengers",
    duration: "Jan 2022 - Present",
    icon: "/challenger.png",
  },
  {
    title: "Freelancer",
    company: "Uptown Reservations",
    duration: "Mar 2024 - Apr 2024",
    icon: "/uptown.png",
  },
  {
    title: "Freelancer",
    company: "Parika Coastal Village",
    duration: "Mar 2024 - Apr 2024",
    icon: "/parika2.png",
  },
  {
    title: "Student Intern",
    company: "Tetherfi",
    duration: "Nov 2023 - Dec 2023",
    icon: "/tetherfi_logo.jpg",
  },
  // Add more experience entries here
];

const Experience = () => {
  return (
    <motion.section className="px-4 text-gray-200" id="experience">
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <hr className="border-gray-200" />
        <div className="relative space-y-6 mt-3">
          <ol className="absolute left-12 transform -translate-x-1/2 w-1 border-l-2 border-cyan-400 h-full"></ol>
          {experiences.map((experience, index) => {
            const [imageLoaded, setImageLoaded] = useState(false);
            const [isLoading, setIsLoading] = useState(true);
            useEffect(() => {
              const timer = setTimeout(() => {
                setIsLoading(false);
              }, 1000); // Simulating loading time
          
              return () => clearTimeout(timer);
            }, []);
            return (
              <motion.div
                key={index}
                className="relative flex items-start space-x-4 pl-6 rounded-lg"
                // initial={{ opacity: 0, x: -20 }}
                // animate={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full relative">
                  {!imageLoaded && (
                    <SkeletonLoader className="absolute inset-0 w-full h-full rounded-full" />
                  )}
                  <Image
                    src={experience.icon}
                    alt={`${experience.company} logo`}
                    width={40}
                    height={40}
                    className="rounded-lg"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(true)}
                  />
                </div>
                <div className="flex-1">
                  {isLoading ? (
                    <div>
                      <SkeletonLoader className="w-1/4 h-6 mb-2" />
                      <SkeletonLoader className="w-1/2 h-8 mb-2" />
                      <SkeletonLoader className="w-3/4 h-6" />
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-400">{experience.duration}</p>
                      <h2 className="text-2xl font-semibold">{experience.title}</h2>
                      <p className="text-gray-400">{experience.company}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
