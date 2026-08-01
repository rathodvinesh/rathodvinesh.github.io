'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '@/data/portfolio-data';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="w-full border-b border-[#e4ded7]/15">
      {/* Header */}
      <div className="p-8 md:p-16 border-b border-[#e4ded7]/15 bg-[#050505]">
        <span className="text-xs font-mono tracking-widest text-[#a3a3a3] uppercase block mb-3">
          // CLIENT REVIEWS & ENDORSEMENTS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-widest text-[#e4ded7]">
          TESTIMONIALS
        </h2>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {testimonialsData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-8 md:p-12 border-b md:border-b-0 border-[#e4ded7]/15 flex flex-col justify-between hover:bg-[#080808] transition-colors ${
              idx < testimonialsData.length - 1 ? 'md:border-r border-[#e4ded7]/15' : ''
            }`}
          >
            <div>
              <Quote size={24} className="text-[#e4ded7]/40 mb-6" />
              <p className="text-xs md:text-sm text-[#a3a3a3] leading-relaxed font-mono mb-8 italic">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-6 border-t border-[#e4ded7]/10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#e4ded7]">
                {item.author}
              </h4>
              <span className="text-[10px] font-mono text-[#a3a3a3] uppercase block">
                {item.role} @ {item.company}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
