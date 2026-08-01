'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { bioData } from '@/data/portfolio-data';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030303]/90 backdrop-blur-md border-b border-[#e4ded7]/15">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Cell 1: Book A Call CTA */}
        <div className="px-6 py-4 border-r border-[#e4ded7]/15 flex items-center">
          <a
            href={bioData.socials.calCom}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#e4ded7] uppercase hover:text-white transition-colors"
          >
            <span>BOOK A CALL</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Cell 2: Brand / Name */}
        <div className="hidden md:flex items-center justify-center px-6 py-4 border-r border-[#e4ded7]/15">
          <a href="#" className="text-xs font-bold tracking-[0.25em] text-[#e4ded7] uppercase hover:opacity-80 transition-opacity">
            {bioData.name} <span className="text-[#a3a3a3] font-normal">| FULLSTACK DEV</span>
          </a>
        </div>

        {/* Cell 3: Desktop Nav Links & Socials */}
        <div className="px-6 py-4 flex items-center justify-end gap-6">
          <div className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-[#a3a3a3]">
            <a href="#work" className="hover:text-[#e4ded7] transition-colors">WORK</a>
            <a href="#skills" className="hover:text-[#e4ded7] transition-colors">SKILLS</a>
            {/* <a href="#experience" className="hover:text-[#e4ded7] transition-colors">EXPERIENCE</a> */}
            <a href="#contact" className="hover:text-[#e4ded7] transition-colors">CONTACT</a>
          </div>

          <div className="hidden md:flex items-center gap-3 border-l border-[#e4ded7]/15 pl-6">
            <a
              href={bioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#e4ded7] transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={bioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#e4ded7] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#e4ded7] p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030303] border-b border-[#e4ded7]/15 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-xs tracking-widest uppercase text-[#e4ded7]">
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#e4ded7]/10">
                WORK
              </a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#e4ded7]/10">
                SKILLS
              </a>
              {/* <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#e4ded7]/10">
                EXPERIENCE
              </a> */}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2">
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

