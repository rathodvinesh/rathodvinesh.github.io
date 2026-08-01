'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedDevIcon from '@/components/ui/animated-dev-icon';
import { bioData, sampleProjects, frontendSkills, backendSkills } from '@/data/portfolio-data';
import { Terminal as TerminalIcon, CornerDownLeft, Circle } from 'lucide-react';

interface CommandHistory {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalSection = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-blue-400 font-bold">Vinesh Rathod CLI Shell v2.0</p>
          <p className="text-xs text-slate-400">Type <span className="text-amber-300 font-bold">help</span> to view available interactive commands.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-slate-200 font-semibold mb-1">Available Shell Commands:</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">bio</span> - Display developer bio & experience background</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">projects</span> - List top software projects</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">skills</span> - Print technical stack & core competencies</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">contact</span> - Output direct contact links & email</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">clear</span> - Clear terminal screen</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">sudo</span> - Execute admin superuser mode</p>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="text-slate-300 text-xs leading-relaxed space-y-1">
            <p className="text-blue-400 font-bold">{bioData.name} - {bioData.role}</p>
            <p>{bioData.about}</p>
            <p className="text-[#a3a3a3]">Location: {bioData.location}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-blue-400 font-semibold">Featured Projects:</p>
            {sampleProjects.map((p) => (
              <div key={p.id} className="border-l-2 border-blue-500 pl-3">
                <p className="text-white font-bold">{p.title} <span className="text-slate-400 font-normal">({p.category})</span></p>
                <p className="text-slate-400">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-purple-400 font-bold">Frontend: </span>
              <span className="text-slate-300 font-mono">{frontendSkills.join(', ')}</span>
            </div>
            <div>
              <span className="text-blue-400 font-bold">Backend: </span>
              <span className="text-slate-300 font-mono">{backendSkills.join(', ')}</span>
            </div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1">
            <p className="text-emerald-400 font-bold">Connect with Vinesh:</p>
            <p>Email: <a href={`mailto:${bioData.socials.email}`} className="text-blue-400 underline">{bioData.socials.email}</a></p>
            <p>GitHub: <a href={bioData.socials.github} target="_blank" className="text-blue-400 underline">{bioData.socials.github}</a></p>
            <p>LinkedIn: <a href={bioData.socials.linkedin} target="_blank" className="text-blue-400 underline">{bioData.socials.linkedin}</a></p>
          </div>
        );
        break;

      case 'sudo':
        output = (
          <div className="text-xs text-rose-400 font-mono">
            Permission denied: Accessing production matrix server requires SSH certificate key. Try `contact` instead!
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="text-xs text-rose-400">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-amber-300">help</span> for command list.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-24 relative bg-slate-950/80">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AnimatedDevIcon type="terminal" size={24} />
            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
              Interactive CLI Shell
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-3">
            Developer <span className="text-gradient">Terminal</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Type commands below to query my portfolio directly in your browser.
          </p>
        </div>

        {/* Terminal Window Widget */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono">
          {/* Header Bar */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Circle size={12} className="text-red-500 fill-red-500" />
              <Circle size={12} className="text-amber-500 fill-amber-500" />
              <Circle size={12} className="text-emerald-500 fill-emerald-500" />
              <span className="ml-2 text-xs text-slate-400 font-semibold">
                vinesh@portfolio-cli: ~ (zsh)
              </span>
            </div>
            <TerminalIcon size={16} className="text-slate-500" />
          </div>

          {/* Body */}
          <div className="p-6 h-80 overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-blue-400 font-bold">vinesh@dev:~$</span>
                  <span className="text-amber-300 font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-slate-800">{item.output}</div>
              </div>
            ))}

            {/* Active Prompt Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
              <span className="text-blue-400 font-bold text-sm">vinesh@dev:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help', 'skills', 'projects', 'contact'..."
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 focus:outline-none"
              />
              <button type="submit" className="text-slate-500 hover:text-blue-400">
                <CornerDownLeft size={16} />
              </button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
