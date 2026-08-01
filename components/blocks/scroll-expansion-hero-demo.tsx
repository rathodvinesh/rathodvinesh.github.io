'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import AnimatedDevIcon from '@/components/ui/animated-dev-icon';
import { softwareDevMedia } from '@/data/software-engineering-media';
import { ArrowDown, Code2, Terminal as TerminalIcon } from 'lucide-react';

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = softwareDevMedia[mediaType];

  return (
    <div className='max-w-4xl mx-auto backdrop-blur-xl bg-slate-900/60 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl'>
      <div className="flex items-center gap-4 mb-6">
        <AnimatedDevIcon type={mediaType === 'video' ? 'terminal' : 'code'} size={32} />
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Developer Portfolio Showcase
          </h3>
          <h2 className='text-3xl md:text-4xl font-bold text-white tracking-tight'>
            About My Work & Vision
          </h2>
        </div>
      </div>

      <p className='text-lg md:text-xl text-slate-300 leading-relaxed mb-6'>
        {currentMedia.about.overview}
      </p>

      <p className='text-base md:text-lg text-slate-400 leading-relaxed mb-8'>
        {currentMedia.about.conclusion}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-105"
        >
          <Code2 size={20} />
          View Live Projects
        </a>
        <a
          href="#terminal"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition-all duration-200 hover:scale-105"
        >
          <TerminalIcon size={20} />
          Open Interactive CLI
        </a>
      </div>
    </div>
  );
};

export const SoftwareDeveloperScrollHero = () => {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('video');
  const currentMedia = softwareDevMedia[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mediaType]);

  return (
    <div className='min-h-screen relative'>
      {/* Mode Switcher Buttons */}
      <div className='fixed top-6 right-6 z-50 flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-xl'>
        <button
          onClick={() => setMediaType('video')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            mediaType === 'video'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <TerminalIcon size={16} />
          IDE Video Mode
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            mediaType === 'image'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Code2 size={16} />
          Workspace Image Mode
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export default SoftwareDeveloperScrollHero;
