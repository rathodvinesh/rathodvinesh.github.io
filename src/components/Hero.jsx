// import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import { BackgroundLines } from "../components/ui/background-lines";
import VRImage from "../assets/VRImage3.jpg"
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
          src={VRImage} alt="Image" /> 

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
            href="mailto:rathodvinesh27@gmail.com?subject=Job%20Opportunity%20for%20You&body=Hi%20Vinesh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'm%20impressed%20with%20your%20skills%20and%20projects.%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0AJob%20Details%3A%0A-------------------%0ACompany%3A%0APosition%3A%0ALocation%3A%0AJob%20Type%3A%20(Full-time%2FPart-time%2FContract)%0A%0ARequired%20Skills%3A%0A-------------------%0A-%20%0A-%20%0A-%20%0A%0AProject%20Details%20(if%20any)%3A%0A-------------------%0A%0A%0AI%20would%20love%20to%20schedule%20a%20call%20to%20discuss%20this%20opportunity%20in%20detail.%20Please%20let%20me%20know%20your%20availability.%0A%0ABest%20regards%2C%0AName%3A%0ADesignation%3A%0AContact%3A"
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
