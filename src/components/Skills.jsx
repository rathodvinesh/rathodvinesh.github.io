import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { tooltip } from "../components/ui/tooltip";

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
    <>
      {/* <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-900 rounded-md mb-4">
                <i data-feather="activity"></i>
              </div>

              <h4 className="font-medium text-gray-300 text-lg mb-4">
                High experience
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed do eiusmod tempor
                <br /> incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <i data-feather="codesandbox"></i>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Useful sandboxes
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed do eiusmod tempor
                <br /> incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <i data-feather="coffee"></i>
              </div>

              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Success side projects
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit, sed do eiusmod tempor
                <br /> incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <div className="pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className=" text-center font-medium text-gray-700 text-3xl md:text-4xl mb-8 mt-12"
        >
          Skills
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <tooltip message="I am tooltip 🚀">
            <motion.div
              variants={iconsVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiReactjsLine className="text-7xl text-cyan-200 " />
            </motion.div>
          </tooltip>

          <motion.div
            variants={iconsVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiJavaLine className="text-7xl text-red-500 " />
          </motion.div>
          <motion.div
            variants={iconsVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiJavascriptLine className="text-7xl text-yellow-300 " />
          </motion.div>
          <motion.div
            variants={iconsVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandKotlin className="text-7xl text-violet-400 " />
          </motion.div>
          <motion.div
            variants={iconsVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiFirebase className="text-7xl text-orange-400 " />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
