"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    title: "Won 1st place in Gamers street",
    description: "Awarded for the best prototype 3d puzzle created for blind kids.",
    date: "July 2022",
    icon: <FaTrophy className="text-2xl" />,
  },
  {
    title: "Won 3rd place in SOSC DEVHOST",
    description: "We built upskills a education management system aimed at bla bla.. .",
    date: "June 2024",
    icon: <FaCertificate className="text-2xl" />,
  },
  {
    title: "Top 11 in Smart Nitte Hackathon 2023",
    description: "We created a cosmos, a workforce management system with a streamlined onboarding process and an advanced efficiency tracking system.",
    date: "April 2024",
    icon: <FaCertificate className="text-2xl" />,
  },
  {
    title: "Top 8 in IIT Hackathon 2024",
    description: "We created a cosmos, a workforce management system with a streamlined onboarding process and an advanced efficiency tracking system.",
    date: "April 2024",
    icon: <FaCertificate className="text-2xl" />,
  },
  {
    title: "Top 6 in Canara college Hackathon 2024",
    description: "We created a cosmos, a workforce management system with a streamlined onboarding process and an advanced efficiency tracking system.",
    date: "April 2024",
    icon: <FaCertificate className="text-2xl" />,
  },
  // Add more achievements here
];

export default function Achievements() {
  return (
    <motion.section className="px-4 py-12  text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Achievements</h1>
        <hr />
        <div className="space-y-6" style={{marginTop:'1rem'}}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className=" p-6 rounded-lg shadow-lg flex items-center space-x-4" style={{margin:'1rem'}}
            >
              <div className="text-blue-500">{achievement.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold">{achievement.title}</h2>
                <p className="text-gray-400">{achievement.description}</p>
                <p className="text-gray-500 mt-2">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
