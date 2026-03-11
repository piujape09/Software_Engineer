import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Star } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Education: React.FC = () => {
  return (
    <section className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 text-luminous">EDUCATION</h2>
            <div className="w-20 h-1 bg-accent" />
          </div>

          <div className="space-y-8">
            {resumeData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#6366f1]" />
                <span className="text-xs font-mono text-accent mb-2 block tracking-widest">{edu.dates}</span>
                <h3 className="text-lg font-bold mb-1 text-white">{edu.school}</h3>
                <p className="text-slate-400 mb-2 font-light">{edu.degree}</p>
                <div className="inline-block px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Score: {edu.grade}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 text-luminous">CERTIFICATIONS</h2>
            <div className="w-20 h-1 bg-accent" />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {resumeData.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-panel p-4 rounded-xl flex items-center gap-4 group hover:border-accent/30 transition-all"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{cert}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 glass-panel rounded-2xl border-accent/20">
            <div className="flex items-center gap-4 mb-4">
              <Star className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-white">Leadership</h3>
            </div>
            <p className="text-slate-400 leading-relaxed italic font-light">
              "{resumeData.extra.leadership}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
