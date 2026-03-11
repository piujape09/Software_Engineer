import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-accent/80 border border-accent/30 px-4 py-2 rounded-full bg-accent/5">
            Mission Protocol: Active
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white leading-[0.85] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          {resumeData.basics.name}
        </h1>
        
        <h2 className="text-xl md:text-3xl font-light text-slate-400 mb-10 uppercase tracking-[0.15em]">
          {resumeData.basics.title}
        </h2>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-light italic">
          "{resumeData.basics.summary}"
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glow px-10 py-4 text-lg min-w-[200px]"
          >
            View Experience
          </button>
          
          <a 
            href="/resume.pdf" 
            download="Resume.pdf"
            className="px-10 py-4 border border-white/10 text-slate-300 font-medium rounded-lg hover:bg-white/5 transition-all hover:border-white/30 flex items-center gap-3 min-w-[200px] justify-center"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/50 to-transparent" />
      </motion.div>
    </section>
  );
};
