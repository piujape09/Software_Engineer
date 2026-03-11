import React from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, Users, Zap } from 'lucide-react';
import { resumeData } from '../data/resume';

const iconMap = {
  Award: Trophy,
  Metric: TrendingUp,
  Leadership: Users,
  Win: Zap
};

export const Achievements: React.FC = () => {
  return (
    <section className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 text-luminous uppercase">Co-curricular</h2>
        <p className="text-slate-500 font-mono text-[10px] tracking-[0.4em] uppercase">Impact & Recognition</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resumeData.achievements.map((ach, idx) => {
          const Icon = iconMap[ach.type] || Zap;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-10 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon className="w-24 h-24 text-accent" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                  <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-black text-white mb-4 leading-tight tracking-tight">
                  {ach.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed font-light text-sm">
                  {ach.context}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
