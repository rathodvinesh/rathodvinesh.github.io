'use client';

import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Sparkles, Binary } from 'lucide-react';

interface AnimatedDevIconProps {
  type?: 'terminal' | 'code' | 'cpu' | 'sparkles' | 'binary';
  size?: number;
  className?: string;
}

export const AnimatedDevIcon = ({
  type = 'code',
  size = 28,
  className = '',
}: AnimatedDevIconProps) => {
  const getIcon = () => {
    switch (type) {
      case 'terminal':
        return <Terminal size={size} className="text-cyan-400" />;
      case 'cpu':
        return <Cpu size={size} className="text-purple-400" />;
      case 'sparkles':
        return <Sparkles size={size} className="text-amber-400" />;
      case 'binary':
        return <Binary size={size} className="text-emerald-400" />;
      case 'code':
      default:
        return <Code2 size={size} className="text-blue-400" />;
    }
  };

  return (
    <motion.div
      className={`inline-flex items-center justify-center p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 shadow-lg backdrop-blur-md ${className}`}
      animate={{
        scale: [1, 1.08, 1],
        boxShadow: [
          '0 0 10px rgba(59, 130, 246, 0.2)',
          '0 0 25px rgba(147, 51, 234, 0.4)',
          '0 0 10px rgba(59, 130, 246, 0.2)',
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        animate={{ rotate: type === 'cpu' ? [0, 90, 180, 270, 360] : 0 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        {getIcon()}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedDevIcon;
