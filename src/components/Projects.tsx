import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-compact relative z-10">
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 text-luminous">Projects</h2>
        <div className="w-12 h-1 bg-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.7
              }
            }}
            viewport={{ once: true }}
            className="glass-panel p-6 cosmic-glow-hover flex flex-col group border-white/5 hover:border-accent-cyan/30 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          >
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-[10px] font-bold text-accent-cyan/90 uppercase tracking-widest px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-2 mb-6 flex-grow">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-slate-300 leading-relaxed flex gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-cyan/40 shrink-0" />
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
