import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import SkeletonLoader from '@/app/loading'; 
import Image from 'next/image';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const projectNames = [
    {
      projName: "Upskills",
      Image: "/upskills.png",
      projDesc: "A platform showcasing the latest technologies booming in the current market.",
      GithubLink: "https://github.com/BhatNishanthGanesh/devhost-frontend",
      DemoLink: "https://upskill-frontend-eight.vercel.app/",
      buttons: [
        "NextJs",
        "Typescript",
        "TailwindCSS",
        "WebScrapping",
        "MicrosoftAzure",
        "MongoDB"
      ],
      day: "June 2024"
    },
    {
      projName: "Settlement Tracker",
      Image: "/settle.png",
      projDesc: "Manage debts, credits, and daily expenses with a built-in Expense Tracker for monitoring spending and maintaining budgets.",
      GithubLink: "https://github.com/BhatNishanthGanesh/SettlementTracker",
      DemoLink: "https://nimble-kitten-31c037.netlify.app",
      buttons: [
        "NextJs",
        "Typescript",
        "TailwindCSS",
        "Prisma",
        "MongoDB"
      ],
      day: "January 2024"
    },
    {
      projName: "Aerophilia Website",
      Image: "/aero.png",
      projDesc: "Website for registration and maintaining data for a national-level technical event.",
      GithubLink: "https://github.com/Aerophilia/Aerophilia2023",
      DemoLink: "https://aerophilia-2k23.netlify.app/",
      buttons: [
        "ReactJs",
        "Javascript",
        "Bootstrap",
        "Firebase",
        "stripe",
        "express"
      ],
      day: "November 2023"
    },
    {
      projName: "Foodie Website",
      Image: "/foodie.png",
      projDesc: "A platform showcasing the popular foods around the local and giving customers the option to know the recipe as well as download it.",
      GithubLink: "https://github.com/BhatNishanthGanesh/MAKE-A-TON-CITTC",
      DemoLink: "https://make-a-ton-cittc-bo5q.vercel.app/",
      buttons: [
        "ReactJs",
        "Javascript",
        "Bootstrap",
        "MongoDB"
      ],
      day: "October 2023"
    },
    {
      projName: "Library Management",
      Image: "/library.png",
      projDesc: "A platform showing various books and giving the functionalities of adding, searching, updating and deleting the book.",
      GithubLink: "https://github.com/BhatNishanthGanesh/Library_Management_Sip",
      DemoLink: "https://library-management-sip.vercel.app/",
      buttons: [
        "ReactJs",
        "Javascript",
        "Bootstrap",
        "MongoDB"
      ],
      day: "October 2023"
    },
  ];

  const shouldShowMoreButton = projectNames.length > 3;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section className="flex flex-col text-gray-200 p-4">
      <div id='projects'>
        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">Projects</h1>
        <hr className="mb-6" />
        <div className="flex flex-col gap-6">
          <AnimatePresence>
            {isLoading ? (
              Array(3).fill(0).map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg shadow-lg mb-5 flex flex-col sm:flex-row"
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: 20 }}
                  // transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                    <SkeletonLoader className="w-64 h-64 rounded-lg" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex flex-col sm:flex-row justify-between mb-4">
                      <SkeletonLoader className="w-1/2 h-8 rounded" />
                      <SkeletonLoader className="w-1/4 h-6 rounded" />
                    </div>
                    <SkeletonLoader className="w-full h-24 rounded mb-4" />
                    <div className="flex items-center mt-2 space-x-3 mb-4">
                      <SkeletonLoader className="w-24 h-8 rounded" />
                      <SkeletonLoader className="w-24 h-8 rounded" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {Array(3).fill(0).map((_, idx) => (
                        <SkeletonLoader key={idx} className="w-24 h-8 rounded" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              projectNames.slice(0, showMore ? projectNames.length : 3).map((project, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg shadow-lg mb-5 flex flex-col sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 frame-3d mb-4 sm:mb-0 sm:mr-4">
                    <Image
                      src={project.Image}
                      alt='Project Image'
                      width={400}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className='flex flex-col sm:flex-row justify-between mb-4'>
                      <h2 className="text-xl sm:text-2xl font-semibold">{project.projName}</h2>
                      <h1 className="text-sm text-white mt-1">{project.day}</h1>
                    </div>
                    <p className="text-gray-400 mb-2">{project.projDesc}</p>
                    <div className="flex items-center mt-2 space-x-3 mb-4 ">
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        style={{x:10}}
                        href={project.GithubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-200 hover:text-white transition-colors"
                      >
                        <FaGithub className="text-xl mr-1" />
                        <span className="text-sm cursor-pointer">Code</span>
                      </motion.a>
                      {project.DemoLink && (
                        <motion.a
                          whileHover={{ scale: 1.015 }}
                          whileTap={{ scale: 0.985 }}
                          style={{x:10}}
                          href={project.DemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-200 hover:text-white transition-colors"
                        >
                          <FaExternalLinkAlt className="text-xl mr-1" />
                          <span className="text-sm cursor-pointer">Demo</span>
                        </motion.a>
                      )}
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {project.buttons.map((buttonLabel, buttonIndex) => (
                        <Badge key={buttonIndex} variant="dark">{buttonLabel}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
          {shouldShowMoreButton && (
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setShowMore(!showMore)}
                className="relative min-h-[50px] w-40 overflow-hidden border border-purple-500 hover:text-purple-500 shadow-2xl transition-all rounded-lg bg-transparent text-white hover:bg-purple-500"
              >
                <span className="absolute top-0 left-0 right-0 bottom-0 text-white flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
                  {showMore ? 'View Less' : 'View More'}
                </span>
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
