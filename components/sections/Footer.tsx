'use client';

import React from 'react';
import { bioData } from '@/data/portfolio-data';
import { ArrowUpRight, ArrowUp, Mail, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#030303]">
      {/* Big Contact Banner */}
      <div className="p-8 md:p-20 border-b border-[#e4ded7]/15 flex flex-col items-start justify-between gap-10">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#a3a3a3] uppercase block mb-4">
            // GOT A PROJECT OR VISION?
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-superwide text-[#e4ded7] leading-none mb-6">
            LET'S TALK.
          </h2>
          <p className="text-xs md:text-sm text-[#a3a3a3] font-mono max-w-xl leading-relaxed">
            Have an exciting product, AI workflow, or frontend interface you want to build? Reach out directly via email or schedule a discovery call.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${bioData.socials.email}`}
            className="px-8 py-4 border border-[#e4ded7] bg-[#e4ded7] text-[#030303] text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-[#e4ded7] transition-all duration-300 inline-flex items-center gap-3"
          >
            <Mail size={16} />
            <span>SEND AN EMAIL</span>
          </a>

          <a
            href={bioData.socials.calCom}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#e4ded7]/20 text-[#e4ded7] text-xs font-bold uppercase tracking-widest hover:border-[#e4ded7] transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>BOOK CALENDAR</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Grid Bottom Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Cell 1: Copyright */}
        <div className="p-6 md:p-8 border-b md:border-b-0 border-r border-[#e4ded7]/15 text-xs font-mono text-[#a3a3a3]">
          &copy; {new Date().getFullYear()} {bioData.name}. ALL RIGHTS RESERVED.
        </div>

        {/* Cell 2: Social Links */}
        <div className="p-6 md:p-8 border-b md:border-b-0 border-r border-[#e4ded7]/15 flex items-center justify-start md:justify-center gap-6 text-xs font-mono uppercase tracking-widest text-[#a3a3a3]">
          <a href={bioData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#e4ded7] transition-colors flex items-center gap-1">
            <Github size={14} /> GITHUB
          </a>
          <a href={bioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#e4ded7] transition-colors flex items-center gap-1">
            <Linkedin size={14} /> LINKEDIN
          </a>
          <a href={bioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#e4ded7] transition-colors flex items-center gap-1">
            <Twitter size={14} /> TWITTER
          </a>
        </div>

        {/* Cell 3: Back to top */}
        <div className="p-6 md:p-8 flex items-center justify-end">
          <button
            onClick={scrollToTop}
            className="group text-xs font-mono uppercase tracking-widest text-[#e4ded7] inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

