// import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import { BackgroundLines } from "../components/ui/background-lines";
import { motion } from "motion/react"


const Hero = () => {
  const [text] = useTypewriter({
    words: [' Full Stack Developer', 'n Android Developer'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 1000,
  });

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
          <motion.img 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
          }}
          className="rounded-full w-48 h-48 object-cover mt-0"
          src="src/assets/VRImage3.jpg" alt="Image" /> 

          </div>

          <motion.h1 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
          className="font-medium text-gray-100 text-lg md:text-2xl uppercase mb-8">
            Vinesh Rathod
          </motion.h1>

                    
          
          <h2 className="font-normal text-gray-300 text-4xl md:text-7xl leading-none mb-8">
            A<span>{text}</span>
            <Cursor cursorColor='red' />
          </h2>

          <motion.p 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1}}
          className="font-normal text-gray-600 text-md md:text-xl mb-16">
            I love creating software that makes life easier for people.
          </motion.p>

          <a
            href="#"
            className="border-2 border-neutral-400 px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-900 text-gray-50 text-sm rounded-lg hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
