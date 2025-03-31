import React from "react";
import {motion } from "framer-motion"
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -100}}
                            transition={{duration: 1}}
            className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Projects
              </h1>

              <p className="font-normal text-gray-500 text-xs md:text-base">
                I have showcased some of my most significant and impactful projects as a student.
              </p>
            </motion.div>

            <div className="space-y-24">
              {/* Project 1 - ExamCentral */}
              <div className="flex flex-col md:flex-row md:space-x-6">
                <motion.h1 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -50}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="font-normal text-white bg-neutral-800 rounded-full w-12 h-12 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-0">
                  01
                </motion.h1>

                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 50}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="flex-1"
                >
                  <h1 className="font-normal text-gray-300 text-3xl md:text-4xl mb-3 flex items-center gap-3 text-left">
                    ExamCentral ERP System
                    <div className="flex items-center gap-2">
                      {/* <a href="#" target="_blank" rel="noopener noreferrer" 
                        className="text-xl text-purple-700 hover:text-purple-500 transition-colors">
                        <BsGithub />
                      </a> changes*/}
                      <a href="https://exam.vppcoe.getflytechnologies.com/" target="_blank" rel="noopener noreferrer"
                        className="text-xl text-purple-700 hover:text-purple-500 transition-colors">
                        <BiLinkExternal />
                      </a>
                    </div>
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    An ERP system for exam management is being developed as a company-sponsored major project from <a href="https://getflytechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-500">Getflytechnologies</a>. The system covers exam form submission, record keeping, and result publication. It is currently hosted and additional features are being implemented, with ongoing testing and input from stakeholders to ensure it meets all requirements.
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-2 mt-2 mb-2">
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">React.js</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Node.js</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Express.js</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Html/CSS</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Mysql</p>
                    </div>
                  </div>
                  {/* <div className="flex gap-4 mt-4">
                    <a href="https://github.com/rathodvinesh/ExamCentral-VPPCOE" target="_blank" rel="noopener noreferrer" 
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 hover:bg-neutral-800 transition duration-300">
                      <p className="text-purple-700">View Code</p>
                    </a>
                    <a href="https://examcentral-vppcoe.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 hover:bg-neutral-800 transition duration-300">
                      <p className="text-purple-700">Live Demo</p>
                    </a> 
                  </div> */}
                </motion.div>
              </div>

              {/* Project 2 - Care Taker */}
              <div className="flex flex-col md:flex-row md:space-x-6">
                <motion.h1 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -50}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="font-normal text-white bg-neutral-800 rounded-full w-12 h-12 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-0">
                  02
                </motion.h1>

                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 50}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="flex-1"
                >
                   <h1 className="font-normal text-gray-300 text-3xl md:text-4xl mb-5 flex items-center gap-3 text-left">
                    Care Taker Application
                    <a href="https://github.com/rathodvinesh/Care-Taker" target="_blank" rel="noopener noreferrer" 
                      className="text-xl text-purple-700 hover:text-purple-500 transition-colors">
                      <BsGithub />
                    </a>
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Developed a Kotlin-based mobile app using Android Studio to connect individuals with caretakers, focusing on navigation and accessibility. Integrated Firebase Realtime Database for seamless data synchronization and real-time updates.
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-2 mt-2 mb-2">
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Kotlin</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Firebase</p>
                    </div>
                  </div>
                  {/* <div className="flex gap-4 mt-4">
                    <a href="https://github.com/rathodvinesh/CareTaker-Android-App" target="_blank" rel="noopener noreferrer" 
                      className="px-4 py-2 text-sm font-medium text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition duration-300">
                      <i className="mr-2 fas fa-code"></i>View Code
                    </a>
                  </div> */}
                </motion.div>
              </div>

              {/* Project 3 - Railway Concession */}
              <div className="flex flex-col md:flex-row md:space-x-6">
                <motion.h1 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -50}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="font-normal text-white bg-neutral-800 rounded-full w-12 h-12 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-0">
                  03
                </motion.h1>

                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 50}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="flex-1"
                >
                  <h1 className="font-normal text-gray-300 text-3xl md:text-4xl mb-5 flex items-center gap-3 text-left">
                    VPPCOE Railway Concession Management Software
                    <a href="https://github.com/rathodvinesh/Railway-Concession-VPPCOE" target="_blank" rel="noopener noreferrer" 
                      className="text-xl text-purple-700 hover:text-purple-500 transition-colors">
                      <BsGithub />
                    </a>
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Developed a Kotlin mobile app and website to streamline the college concession process. Integrated both the app and admin-side website with Firebase Realtime Database for seamless data synchronization.
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-2 mt-2 mb-2">
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Kotlin</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Html/CSS</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Javascript</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Firebase</p>
                    </div>
                  </div>
                  {/* <div className="flex gap-4 mt-4">
                    <a href="https://github.com/rathodvinesh/VPPCOE-Railway-Concession" target="_blank" rel="noopener noreferrer" 
                      className="px-4 py-2 text-sm font-medium text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition duration-300">
                      <i className="mr-2 fas fa-code"></i>View Code
                    </a>
                  </div> */}
                </motion.div>
              </div>
              {/* Project 4 - Placement Management System */}
              <div className="flex flex-col md:flex-row md:space-x-6">
                <motion.h1 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -50}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="font-normal text-white bg-neutral-800 rounded-full w-12 h-12 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-0">
                  04
                </motion.h1>

                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 50}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="flex-1"
                >
                  <h1 className="font-normal text-gray-300 text-3xl md:text-4xl mb-5 flex items-center gap-3 text-left">
                    Placement Management System API
                    <a href="https://github.com/rathodvinesh/PMS-java-api" target="_blank" rel="noopener noreferrer" 
                      className="text-xl text-purple-700 hover:text-purple-500 transition-colors">
                      <BsGithub />
                    </a>
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Developed a robust RESTful API using Spring Boot for managing college placement activities. The system handles student profiles, company information, and placement records with secure authentication and efficient data management using Hibernate JPA.
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-2 mt-2 mb-2">
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Java</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Spring Boot</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">MySQL</p>
                    </div>
                    <div className="mr-2 rounded bg-neutral-900 px-2 py-1">
                      <p className="text-purple-700">Hibernate JPA</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
