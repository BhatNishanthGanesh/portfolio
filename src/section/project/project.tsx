import Image from 'next/image';
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const projectNames = [
    {
        projName: "Upskills",
        Image:"/upskills.png",
        projDesc: "A platform showcasing the latest technologies booming in the current market.",
        GithubLink: "https://github.com/your-username/your-repo",
        DemoLink: "https://upskill-frontend-eight.vercel.app/",
        buttons: [
          "NextJs",
          "Typescript",
          "TailwindCSS",
          "WebScrapping",
          "MicrosoftAzure",
          "MongoDB"
        ],
         day:"June 2024"
      },
    {
      projName: "Settlement Tracker",
      Image:"/settle.png",
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
      day:"January 2024"
    },
    {
      projName: "Foodie Website",
      Image:"/foodie.png",
      projDesc: "A platform showcasing the popular foods around the local and giving customers the option to know the reciepe as well as download it.",
      GithubLink: "https://github.com/BhatNishanthGanesh/MAKE-A-TON-CITTC",
      DemoLink: "make-a-ton-cittc-bo5q.vercel.app/",
      buttons: [
        "ReactJs",
        "Javascript",
        "Bootstrap",
        "MongoDB"
      ],
      day:"November 2023"
    },
    // Add more projects with different data if needed
  ];

  const shouldShowMoreButton = projectNames.length > 3;

  return (
    <motion.section className="min-h-screen flex flex-col text-gray-200">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold " style={{marginBottom:'0.4rem'}}>Projects</h1>
        <hr className="mb-8" />
        <div className="flex flex-wrap flex-col -mx-4">
          {projectNames.slice(0, showMore ? projectNames.length : 3).map((project, index) => (
            <div key={index}>
              <div className="bg-gray-800 rounded-lg shadow-lg flex  flex-col md:flex-row lg:flex-row">
                <div className=" flex-shrink-0" style={{margin:"2rem"}}>
                  <Image
                    src={project.Image}
                    alt='Project Image'
                    width={400}
                    height={400}
                    className="rounded-lg  object-cover"
                    
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-center">
                    <div className='flex justify-between'>
                    <h2 className="text-2xl font-semibold mb-2">{project.projName}</h2>
                    <h1 className="text-sm text-white" style={{marginTop:"0.5rem"}}>{project.day}</h1>

                    </div>
                    <p className="text-gray-400" style={{marginTop:"0.5rem"}}>{project.projDesc}</p>
                    <div className="flex items-center mt-2 space-x-3 mb-4" style={{marginTop:"0.5rem"}}>
                      <motion.a
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        style={{x:10}}
                        href={project.GithubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-200 hover:text-white transition-colors"
                      >
                        <FaGithub className="text-xl ml-2" /> {/* GitHub icon */}
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
                          <FaExternalLinkAlt className="text-xl" />
                          <span className="text-sm cursor-pointer">Demo</span>
                        </motion.a>
                      )}
                    </div>
                    <div className='flex mb-2 flex-wrap gap-4'style={{marginTop:"0.1rem",flexWrap:"wrap"}}>
                      {project.buttons.map((buttonLabel, buttonIndex) => (
                        <button key={buttonIndex} className="border border-gray-600 hover:bg-gray-600 font-medium rounded-lg text-sm px-4">
                          {buttonLabel}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
           
          ))}
          {shouldShowMoreButton && (
            <div className=" text-left mt-8">
                <motion.button 
                 whileHover={{ scale: 1.015 }}
                 whileTap={{ scale: 0.985 }}
                 style={{x:10,marginTop:'1rem'}}
                 onClick={() => setShowMore(!showMore)}
                className="group   relative min-h-[50px] w-40 overflow-hidden border border-purple-500  hover:text-purple-500 shadow-2xl transition-all before:absolute rounded-lg before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 text-white hover:before:h-full hover:after:h-full">
      <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
      <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white"> {showMore ? 'View Less' : 'View More'}</span>
    </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
