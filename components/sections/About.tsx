'use client';

import { motion } from 'framer-motion';
import AnimatedDevIcon from '@/components/ui/animated-dev-icon';
import { bioData } from '@/data/portfolio-data';
import { Code, Cpu, ShieldCheck, Zap, Award, GitBranch } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: bioData.yearsExperience, icon: Zap },
    { label: 'Projects Completed', value: bioData.projectsCompleted, icon: Code },
    { label: 'GitHub Stars', value: bioData.githubStars, icon: GitBranch },
  ];

  const corePrinciples = [
    {
      title: 'Clean & Scalable Code',
      description: 'Writing maintainable TypeScript with clear architecture patterns and unit testing.',
      icon: Code,
    },
    {
      title: 'Performance & UX',
      description: 'Optimizing web vitals, asset delivery, smooth CSS micro-interactions, and sub-second loads.',
      icon: Zap,
    },
    {
      title: 'Reliable Cloud Infrastructure',
      description: 'Deploying dockerized applications with automated CI/CD pipelines and monitoring.',
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <AnimatedDevIcon type="code" size={24} />
              <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
                Engineering Bio & Overview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Architecting Digital Products with <span className="text-gradient">Precision</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {bioData.about}
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex flex-col items-center justify-center text-center min-w-[160px]"
                >
                  <Icon className="text-blue-400 mb-2" size={24} />
                  <span className="text-3xl font-extrabold text-white mb-1 font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corePrinciples.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-3.5 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
