import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';

export const Skills: React.FC = () => {
  return (
    <section className="section-compact relative z-10">
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 text-luminous">Skills</h2>
        <div className="w-12 h-1 bg-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              y: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.3
              }
            }}
            viewport={{ once: true }}
            className="glass-panel p-5 cosmic-glow-hover border-white/5 hover:border-accent-cyan/30 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          >
            <h3 className="text-xs font-bold text-accent-cyan uppercase tracking-[0.2em] mb-4 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/[0.05] border border-white/[0.1] rounded text-sm text-slate-200 hover:border-accent-cyan/50 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-default font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
