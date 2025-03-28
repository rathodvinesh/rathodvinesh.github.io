import React from "react";
import {motion } from "framer-motion"

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
              <div className="flex space-x-6">
                <motion.h1 
                                              whileInView={{opacity: 1, x: 0}}
                                              initial={{opacity: 0, x: -100}}
                                              transition={{duration: 1}}
                className="font-normal text-gray-700 text-3xl md:text-4xl">
                  01
                </motion.h1>

                {/* <span className="w-28 h-0.5 bg-gray-300 mt-5"></span> */}

                <motion.div
                                              whileInView={{opacity: 1, x: 0}}
                                              initial={{opacity: 0, x: 100}}
                                              transition={{duration: 1}}
                >
                  <h1 className="font-normal text-gray-300 text-3xl md:text-4xl mb-3">
                      ExamCentral ERP System
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    An ERP system for exam management is being developed, covering exam form submission, record keeping, and result publication. It is currently hosted and additional features are being implemented, with ongoing testing and <br/>input from stakeholders to ensure it meets all requirements.
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-2 mt-2 mb-2">
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">React.js</p>
                      </div>
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Node.js</p>
                      </div>
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Express.js</p>
                      </div>
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Html/CSS</p>
                      </div>
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Mysql</p>
                      </div>
                    </div>
                </motion.div>
              </div>

              <div className="flex space-x-6">
                <motion.h1 
                                              whileInView={{opacity: 1, x: 0}}
                                              initial={{opacity: 0, x: -100}}
                                              transition={{duration: 1}}
                className="font-normal text-gray-700 text-3xl md:text-4xl">
                  02
                </motion.h1>

                {/* <span className="w-28 h-0.5 bg-gray-300 mt-5"></span> */}

                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                >
                  <h1 className="font-normal text-gray-300 text-3xl md:text-4xl mb-5">
                  Care Taker Application
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Developed a Kotlin-based mobile app using Android Studio to connect individuals with caretakers, focusing on navigation and accessibility. Integrated Firebase Realtime Database for seamless data synchronization and real-time updates.
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-2 mt-2 mb-2">
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Kotlin</p>
                      </div>
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Firebase</p>
                      </div>
                    </div>
                </motion.div>
              </div>

              <div className="flex space-x-6">
                <motion.h1 
                                              whileInView={{opacity: 1, x: 0}}
                                              initial={{opacity: 0, x: -100}}
                                              transition={{duration: 1}}
                className="font-normal text-gray-700 text-3xl md:text-4xl">
                  03
                </motion.h1>

                {/* <span className="w-28 h-0.5 bg-gray-300 mt-5"></span> */}

                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                >
                  <h1 className="font-normal text-gray-300 text-3xl md:text-4xl mb-5">
                  VPPCOE Railway Concession Management Software
                  </h1>

                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    Developed a Kotlin mobile app and website to streamline the college concession process.Integrated both the app and admin-side website with Firebase Realtime Database for seamless data synchronization.
                  </p>
                                    <div className="flex flex-wrap items-center justify-start gap-2 mt-2 mb-2">
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Kotlin</p>
                      </div>
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Html/CSS</p>
                      </div>
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Javascript</p>
                      </div>
                      <div className=" mr-2 rounded bg-neutral-900 px-2 py-1">
                        <p className="text-purple-700">Firebase</p>
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
