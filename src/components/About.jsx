import React from "react";
import {motion } from "framer-motion"

const About = () => {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <motion.h1 
                  whileInView={{opacity: 1, y: 0}}
                  initial={{opacity: 0, y: -100}}
                  transition={{duration: 1}}
            className="font-medium text-gray-300 text-3xl sm:text-6xl md:text-6xl lg:text-6xl mb-8 md:mb-16 lg:mb-24">
            Your skills are best shown through results, not numbers
            </motion.h1>

            <motion.p 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className="font-light text-gray-300 text-base sm: md:text-sm lg:text-base"
            >
                With a background in computer engineering, I specialize in creating efficient, user-friendly solutions. <br/>I have experience with <b>React.js</b> for frontend, <b>Kotlin</b> for Android apps, and <b>Firebase</b> for data synchronization, <br/>along with a strong foundation in <b>Java</b>.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
