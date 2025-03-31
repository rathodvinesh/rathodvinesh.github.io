import React from "react";
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";
import VRLogo from "../assets/VRlogo.png"
import Resume from "../assets/Vinesh_Rathod_Resume.pdf"

const Navbr = () => {
  return (
    <>
      <div className="ontainer max-w-screen-xl mx-auto px-4 py-10 md:py-16">
        <nav className="flex items-center justify-between mb-2">
          <img src={VRLogo} alt="Logo" className="w-12 h-auto"/>

          <a 
            href={Resume} 
            download="Vinesh_Rathod_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border-2 border-neutral-400 px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-900 text-gray-50 text-sm rounded-lg hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Download CV
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbr;



