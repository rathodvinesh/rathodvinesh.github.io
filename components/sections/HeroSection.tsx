'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { bioData } from '@/data/portfolio-data';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full border-b border-[#e4ded7]/15">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
        {/* Main Text Content */}
        <div className="lg:col-span-8 p-8 md:p-16 border-r border-[#e4ded7]/15 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] font-mono tracking-widest uppercase border border-[#e4ded7]/20 text-[#a3a3a3]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{bioData.availability}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-widest text-[#e4ded7] leading-none">
              {bioData.name}
            </h1>

            <p className="text-sm md:text-base text-[#a3a3a3] max-w-2xl leading-relaxed font-normal">
              {bioData.valueProp} Focused on interfaces, distributed backend architectures, and AI workflows. Working remotely from {bioData.location}.
            </p>
          </motion.div>

          {/* Quick CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-12 flex flex-wrap items-center gap-6"
          >
            <a
              href={bioData.socials.calCom}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#e4ded7] text-xs font-bold uppercase tracking-widest text-[#030303] bg-[#e4ded7] hover:bg-transparent hover:text-[#e4ded7] transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>SCHEDULE CALL</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#work"
              className="px-6 py-3 border border-[#e4ded7]/20 text-xs font-semibold uppercase tracking-widest text-[#e4ded7] hover:border-[#e4ded7] transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>VIEW PROJECTS</span>
              <ArrowDownRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Hero Visual / Avatar Card */}
        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between bg-[#080808]/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full aspect-[4/5] relative border border-[#e4ded7]/15 overflow-hidden group mb-6"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
              alt={bioData.name}
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 p-3 border border-[#e4ded7]/15 bg-[#030303]/80 backdrop-blur-sm">
              <span className="text-[11px] font-mono tracking-widest text-[#e4ded7] uppercase block">
                {bioData.role}
              </span>
              <span className="text-[10px] text-[#a3a3a3] block font-mono">
                Fullstack & Cloud Architect
              </span>
            </div>
          </motion.div>

          <div className="text-xs text-[#a3a3a3] font-mono space-y-1">
            <p>LOC: {bioData.location}</p>
            <p>ROLE: {bioData.role}</p>
          </div>
        </div>
      </div>

      {/* Grid Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#e4ded7]/15">
        <div className="p-6 border-r border-b md:border-b-0 border-[#e4ded7]/15">
          <span className="text-2xl md:text-3xl font-extrabold text-[#e4ded7] block uppercase tracking-widest">
            {bioData.yearsExperience}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase block mt-1">
            YEARS EXPERIENCE
          </span>
        </div>

        <div className="p-6 border-r border-b md:border-b-0 border-[#e4ded7]/15">
          <span className="text-2xl md:text-3xl font-extrabold text-[#e4ded7] block uppercase tracking-widest">
            {bioData.projectsCompleted}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase block mt-1">
            PROJECTS DELIVERED
          </span>
        </div>

        <div className="p-6 border-r border-[#e4ded7]/15">
          <span className="text-2xl md:text-3xl font-extrabold text-[#e4ded7] block uppercase tracking-widest">
            {bioData.githubStars}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase block mt-1">
            GITHUB STARS
          </span>
        </div>

        <div className="p-6">
          <span className="text-2xl md:text-3xl font-extrabold text-[#e4ded7] block uppercase tracking-widest">
            99.9%
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#a3a3a3] uppercase block mt-1">
            SYSTEM SLA UPTIME
          </span>
        </div>
      </div>
    </section>
  );
}
