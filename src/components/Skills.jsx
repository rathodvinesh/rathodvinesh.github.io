import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { SiFirebase, SiHibernate } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className="pb-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center font-medium text-gray-700 text-3xl md:text-4xl mb-8 mt-12"
      >
        Skills
      </motion.h1>
      <div className="container mx-auto px-4">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <div className="w-[calc(33%-1rem)] sm:w-[calc(25%-1rem)] lg:w-auto flex justify-center">
            <motion.div
              variants={iconsVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 cursor-pointer"
              data-tooltip-id="skill-tooltip"
              data-tooltip-content="Java - Core Programming Language"
              onClick={() => window.open('https://docs.oracle.com/en/java/', '_blank')}
            >
              <RiJavaLine className="text-5xl md:text-7xl text-red-500" />
            </motion.div>
          </div>

          <div className="w-[calc(33%-1rem)] sm:w-[calc(25%-1rem)] lg:w-auto">
            <motion.div
              variants={iconsVariants(2.7)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 cursor-pointer"
              data-tooltip-id="skill-tooltip"
              data-tooltip-content="Spring Boot - Java Framework"
              onClick={() => window.open('https://docs.spring.io/spring-boot/docs/current/reference/html/', '_blank')}
            >
              <SiSpringboot className="text-5xl md:text-7xl text-green-500" />
            </motion.div>
          </div>

          <div className="w-[calc(33%-1rem)] sm:w-[calc(25%-1rem)] lg:w-auto">
            <motion.div
              variants={iconsVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 cursor-pointer"
              data-tooltip-id="skill-tooltip"
              data-tooltip-content="React - Frontend Framework"
              onClick={() => window.open('https://react.dev/', '_blank')}
            >
              <RiReactjsLine className="text-5xl md:text-7xl text-cyan-200" />
            </motion.div>
          </div>

          <div className="w-[calc(33%-1rem)] sm:w-[calc(25%-1rem)] lg:w-auto">
            <motion.div
              variants={iconsVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 cursor-pointer"
              data-tooltip-id="skill-tooltip"
              data-tooltip-content="JavaScript - Programming Language"
              onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')}
            >
              <RiJavascriptLine className="text-5xl md:text-7xl text-yellow-300" />
            </motion.div>
          </div>

          <div className="w-[calc(33%-1rem)] sm:w-[calc(25%-1rem)] lg:w-auto">
            <motion.div
              variants={iconsVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 cursor-pointer"
              data-tooltip-id="skill-tooltip"
              data-tooltip-content="Kotlin - Modern Android Development"
              onClick={() => window.open('https://kotlinlang.org/docs/', '_blank')}
            >
              <TbBrandKotlin className="text-5xl md:text-7xl text-violet-400" />
            </motion.div>
          </div>

          <div className="w-[calc(33%-1rem)] sm:w-[calc(25%-1rem)] lg:w-auto">
            <motion.div
              variants={iconsVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 cursor-pointer"
              data-tooltip-id="skill-tooltip"
              data-tooltip-content="Firebase - Backend as a Service"
              onClick={() => window.open('https://firebase.google.com/docs', '_blank')}
            >
              <SiFirebase className="text-5xl md:text-7xl text-orange-400" />
            </motion.div>
          </div>

          <div className="w-[calc(33%-1rem)] sm:w-[calc(25%-1rem)] lg:w-auto">
            <motion.div
              variants={iconsVariants(2.3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-3 md:p-4 cursor-pointer"
              data-tooltip-id="skill-tooltip"
              data-tooltip-content="MySQL - Database Management"
              onClick={() => window.open('https://dev.mysql.com/doc/', '_blank')}
            >
              <SiMysql className="text-5xl md:text-7xl text-blue-500" />
            </motion.div>
          </div>
          </div>
        </motion.div>
      </div>
      <Tooltip id="skill-tooltip" />
    </div>
  );
};

export default Skills;
