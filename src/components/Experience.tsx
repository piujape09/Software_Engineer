import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Briefcase, MapPin, Calendar } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-compact relative z-10">
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 text-luminous">Experience</h2>
        <div className="w-12 h-1 bg-accent" />
      </div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5
              }
            }}
            viewport={{ once: true }}
            className="glass-panel p-6 cosmic-glow-hover group border-white/5 hover:border-accent/30 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-cyan transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">{exp.role}</h3>
                <p className="text-accent text-sm font-semibold tracking-wide drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-300 font-medium">{exp.dates}</p>
                <p className="text-xs text-slate-500">{exp.location}</p>
              </div>
            </div>
            
            <ul className="space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-slate-300 leading-relaxed flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0 shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
