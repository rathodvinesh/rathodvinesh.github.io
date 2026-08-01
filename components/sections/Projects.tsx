'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sampleProjects, Project } from '@/data/portfolio-data';
import { ExternalLink, Github, ArrowUpRight, X } from 'lucide-react';

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI / Machine Learning', 'Fullstack', 'Cloud & Backend', 'Frontend'];

  const filteredProjects = sampleProjects.filter((project) => {
    return selectedCategory === 'All' || project.category === selectedCategory;
  });

  return (
    <section id="work" className="w-full border-b border-[#e4ded7]/15">
      {/* Header Panel */}
      <div className="p-8 md:p-16 border-b border-[#e4ded7]/15 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#a3a3a3] uppercase block mb-3">
            // SELECTED PROJECTS & WORKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-widest text-[#e4ded7]">
            FEATURED SYSTEMS
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                selectedCategory === category
                  ? 'bg-[#e4ded7] text-[#030303] border-[#e4ded7] font-bold'
                  : 'bg-transparent text-[#a3a3a3] border-[#e4ded7]/20 hover:border-[#e4ded7]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`p-8 md:p-12 border-b border-[#e4ded7]/15 flex flex-col justify-between group hover:bg-[#080808] transition-colors duration-300 ${
                idx % 2 === 0 ? 'md:border-r border-[#e4ded7]/15' : ''
              }`}
            >
              <div>
                {/* Image Showcase */}
                <div className="relative h-64 w-full border border-[#e4ded7]/15 overflow-hidden mb-8 bg-[#030303]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-mono tracking-widest text-[#e4ded7] uppercase bg-[#030303]/90 border border-[#e4ded7]/20">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 text-[10px] font-mono tracking-widest text-emerald-400 uppercase bg-[#030303]/90 border border-emerald-500/30">
                    {project.metrics}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#e4ded7] mb-3 group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-[#a3a3a3] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono border border-[#e4ded7]/15 text-[#a3a3a3] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-[#e4ded7]/15">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono uppercase tracking-widest text-[#e4ded7] hover:underline"
                >
                  [ DETAILS ]
                </button>
                <div className="flex items-center gap-4">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a3a3a3] hover:text-[#e4ded7] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#e4ded7] hover:opacity-80 transition-opacity"
                  >
                    <span>LIVE</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#030303] border border-[#e4ded7]/20 p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 text-[#a3a3a3] hover:text-[#e4ded7]"
              >
                <X size={20} />
              </button>

              <span className="text-[10px] font-mono text-[#a3a3a3] uppercase tracking-widest block mb-2">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-extrabold uppercase tracking-widest text-[#e4ded7] mb-4">
                {activeModalProject.title}
              </h3>
              <p className="text-xs md:text-sm text-[#a3a3a3] leading-relaxed mb-6 font-mono">
                {activeModalProject.description}
              </p>

              <div className="p-4 border border-emerald-500/20 bg-emerald-950/20 mb-6 text-xs font-mono text-emerald-400">
                STAT: {activeModalProject.metrics}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {activeModalProject.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[10px] font-mono border border-[#e4ded7]/20 text-[#e4ded7]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={activeModalProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#e4ded7] bg-[#e4ded7] text-[#030303] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
                >
                  <span>VISIT DEMO</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={activeModalProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#e4ded7]/20 text-[#e4ded7] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:border-[#e4ded7]"
                >
                  <span>GITHUB</span>
                  <Github size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

