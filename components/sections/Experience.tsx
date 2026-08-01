'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiencesData } from '@/data/portfolio-data';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full border-b border-[#e4ded7]/15">
      {/* Section Header */}
      <div className="p-8 md:p-16 border-b border-[#e4ded7]/15 bg-[#050505]">
        <span className="text-xs font-mono tracking-widest text-[#a3a3a3] uppercase block mb-3">
          // CAREER & POSITIONS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-widest text-[#e4ded7]">
          EXPERIENCE
        </h2>
      </div>

      {/* Grid Timeline List */}
      <div className="divide-y divide-[#e4ded7]/15">
        {experiencesData.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:bg-[#080808] transition-colors"
          >
            {/* Period & Role */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono text-[#a3a3a3] uppercase tracking-widest block">
                {exp.period}
              </span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#e4ded7]">
                {exp.role}
              </h3>
              <p className="text-xs font-mono text-[#e4ded7]/70 uppercase">
                @{exp.company} — {exp.location}
              </p>
            </div>

            {/* Achievements & Highlights */}
            <div className="lg:col-span-8 space-y-4">
              <ul className="space-y-3">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="text-xs md:text-sm text-[#a3a3a3] font-normal leading-relaxed flex items-start gap-3">
                    <span className="text-[#e4ded7] font-mono select-none">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e4ded7]/10">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[10px] font-mono border border-[#e4ded7]/15 text-[#e4ded7] uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

