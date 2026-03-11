import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="w-24 h-24 border-2 border-accent rounded-2xl flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.3)]">
          <motion.div 
            className="absolute inset-0 bg-accent/20"
            animate={{ 
              y: [100, 0, 100],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <span className="text-4xl font-black text-accent tracking-tighter drop-shadow-[0_0_15px_rgba(99,102,241,0.8)]">PJ</span>
        </div>
      </motion.div>

      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(255,255,255,0.1)]">
        <motion.div
          className="absolute inset-y-0 left-0 bg-accent shadow-[0_0_20px_#6366f1]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.span 
        className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Initializing Core... {progress}%
      </motion.span>
    </motion.div>
  );
};
