import React from "react";
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";
import VRLogo from "../assets/VRlogo.png"

const Navbr = () => {
  return (
    <>
      <div className="ontainer max-w-screen-xl mx-auto px-4 py-10 md:py-16">
        <nav className="flex items-center justify-between mb-2">
          <img src={VRLogo} alt="Logo" className="w-12 h-auto"/>

          {/* <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
            Get my CV
          </button> */}

        <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-900 px-6 py-1 text-sm font-semibold  text-white backdrop-blur-3xl">
            {/* <a href="src\assets\resumeTNS.pdf" target="_blank">
            
            </a> */}
            Download CV
          </span>
        </button>

        </nav>
      </div>
    </>
  );
};

export default Navbr;



