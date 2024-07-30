"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { Badge } from "@/components/ui/badge";
import SkeletonLoader from "@/app/loading";


const achievements = [
  {
    title: "Won 3rd place in SOSC DEVHOST",
    description: "Upskills is a platform that helps educational institutions stay updated with current market trends. It provides insights by gathering alumni feedback and scraping LinkedIn for the latest subjects, ensuring curricula are aligned with industry needs.",
    date: "June 2024",
    icon: <GiDiamondTrophy className="text-5xl" />,
    members: ["babith", "kaushik", "anudeep k k"]
  },
  {
    title: "Top 6 in Canara college Hackathon",
    description: "We created a dashboard for a doctor to monitor the diseases that the pregnant women may get by getting the hyperparameters and providing recommendations.",
    date: "April 2024",
    icon: <TbCertificate className="text-5xl" />,
    members: ["babith", "shayaan", "anudeep k k"]
  },
  {
    title: "Top 8 in IIT Hackathon",
    description: "We created a webpage that scrapes different eCommerce websites and provides the user with the product at the minimum cost.",
    date: "April 2024",
    icon: <TbCertificate className="text-5xl" />,
    members: ["tejas gk", "chethan", "anudeep k k"]
  },
  {
    title: "Top 11 in Smart Nitte Hackathon",
    description: "We created Cosmos, a workforce management system with a streamlined onboarding process and an advanced efficiency tracking system.",
    date: "April 2024",
    icon: <TbCertificate className="text-5xl" />,
    members: ["tejas nayak", "srajan kumar"]
  },
  {
    title: "Won 1st place in Gamers street",
    description: "Awarded for the best prototype 3D puzzle created for blind kids.",
    date: "July 2022",
    icon: <GiDiamondTrophy className="text-5xl" />,
    members: ["joel rixon dsouza", "anvith rao k", "amrutha", "anjali", "deeksha"]
  }
];

export default function Achievements() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate a loading delay with progress update
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10; // Increase progress
        }
        clearInterval(timer);
        setIsLoading(false);
        return 100;
      });
    }, 100); // Adjust interval as needed

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section className="px-4 py-12 text-gray-200" id="achievements">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Achievements</h1>
        <hr />
        {isLoading ? (
          <div className="flex items-start space-x-4 mt-6">
           
            <div className="w-full">
              {Array(5).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="p-4 w-full rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4"
                >
                  <div className="text-yellow-500 flex-shrink-0">
                    <SkeletonLoader className="w-10 h-10 rounded-full" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <SkeletonLoader className="w-3/4 h-6 rounded" />
                    <SkeletonLoader className="w-full h-20 rounded" />
                    <div className="flex flex-wrap gap-2">
                      {Array(3).fill(0).map((_, idx) => (
                        <SkeletonLoader key={idx} className="w-24 h-8 rounded" />
                      ))}
                    </div>
                    <SkeletonLoader className="w-1/2 h-4 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 mt-6">
          
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-4 w-full rounded-lg shadow-lg  bg-slate-900/30 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4"
              >
                <div className="text-yellow-500 flex-shrink-0">{achievement.icon}</div>
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl sm:text-2xl font-semibold">{achievement.title}</h2>
                  <p className="text-gray-400 mt-2 text-justify max-w-2xl">{achievement.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {achievement.members.map((member, buttonIndex) => (
                      <Badge key={buttonIndex} variant="dark" className="px-2 py-1 cursor-pointer">{member}</Badge>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">{achievement.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
