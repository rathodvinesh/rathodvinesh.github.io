'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { bioData, frontendSkills, backendSkills, spotifyPlaylist } from '@/data/portfolio-data';
import { Music, Gamepad2, Code2, Cpu, ExternalLink } from 'lucide-react';

export const SkillsSection = () => {
  return (
    <section id="skills" className="w-full border-b border-[#e4ded7]/15">
      {/* Wide Typography Banner */}
      <div className="p-8 md:p-16 border-b border-[#e4ded7]/15 bg-[#050505]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono tracking-widest text-[#a3a3a3] uppercase mb-4"
        >
          // PHILOSOPHY & CAPABILITIES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-widest text-[#e4ded7] leading-tight"
        >
          {bioData.tagline}
        </motion.h2>
      </div>

      {/* Bento Grid layout for Skills & Personal Items */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Panel 1: Frontend Tech Stack */}
        <div className="lg:col-span-4 p-8 md:p-12 border-r border-b lg:border-b-0 border-[#e4ded7]/15">
          <div className="flex items-center gap-3 mb-6">
            <Code2 size={20} className="text-[#e4ded7]" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#e4ded7]">
              FRONTEND STACK
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 text-xs font-mono border border-[#e4ded7]/20 bg-[#080808] text-[#e4ded7] uppercase tracking-wider hover:border-[#e4ded7]/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Panel 2: Backend & Infrastructure */}
        <div className="lg:col-span-4 p-8 md:p-12 border-r border-b lg:border-b-0 border-[#e4ded7]/15">
          <div className="flex items-center gap-3 mb-6">
            <Cpu size={20} className="text-[#e4ded7]" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#e4ded7]">
              BACKEND & CLOUD
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 text-xs font-mono border border-[#e4ded7]/20 bg-[#080808] text-[#e4ded7] uppercase tracking-wider hover:border-[#e4ded7]/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Panel 3: Personal Interests & Spotify Playlist */}
        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 size={20} className="text-[#e4ded7]" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#e4ded7]">
                PERSONAL & INTERESTS
              </h3>
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#a3a3a3] mb-8">
              {bioData.gamingHobbies.map((hobby) => (
                <li key={hobby} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#e4ded7]/60 rounded-full" />
                  <span>{hobby}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Spotify Track Showcase */}
          <div className="p-4 border border-[#e4ded7]/20 bg-[#080808]">
            <div className="flex items-center justify-between mb-3 border-b border-[#e4ded7]/10 pb-2">
              <div className="flex items-center gap-2">
                <Music size={14} className="text-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[#e4ded7] uppercase">
                  ON REPEAT (SPOTIFY)
                </span>
              </div>
            </div>
            <div className="space-y-2">
              {spotifyPlaylist.slice(0, 2).map((track) => (
                <a
                  key={track.title}
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs text-[#a3a3a3] hover:text-[#e4ded7] transition-colors"
                >
                  <span className="truncate font-mono">{track.title} — <span className="text-[10px]">{track.artist}</span></span>
                  <ExternalLink size={12} className="shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

