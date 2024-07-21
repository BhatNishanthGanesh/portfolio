"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Experience() {
  return (
    <motion.section className="px-4 py-12 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <hr />
        <div className="relative space-y-6" style={{marginTop:'1rem'}}>
          <ol className="absolute left-6 w-1 border-l-2 border-gray-500 h-full"></ol>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative flex items-start space-x-4 p-6 rounded-lg"
            >
              <div className="absolute -left-4 top-0 flex items-center justify-center h-10 w-10 bg-gray-800 rounded-full border-2 border-gray-500" style={{marginLeft:'0.3rem'}}>
                <Image 
                  src={experience.icon} 
                  alt={`${experience.company} logo`} 
                  height={40} 
                  width={40} 
                  className="rounded-lg" 
                />
              </div>
              <div style={{ marginLeft: '4rem', marginBottom: '2rem' }}>
                <p className="text-gray-500">{experience.duration}</p>
                <h2 className="text-2xl font-semibold">{experience.title}</h2>
                <p className="text-gray-400">{experience.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
