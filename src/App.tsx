import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { AstronautCopilot } from './components/AstronautCopilot';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { resumeData } from './data/resume';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <Splash key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <AnimatedBackground />
            
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
              <div className="glass-panel px-4 py-2 pointer-events-auto flex items-center gap-3 cosmic-glow">
                <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-white font-bold text-[10px] shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                  PJ
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-200">
                  Portfolio
                </span>
              </div>
              
              <div className="glass-panel px-4 py-2 pointer-events-auto flex gap-4 cosmic-glow">
                <a href="#experience" className="text-[10px] font-bold tracking-widest uppercase text-slate-300 hover:text-accent-cyan transition-colors">Experience</a>
                <a href="#projects" className="text-[10px] font-bold tracking-widest uppercase text-slate-300 hover:text-accent-cyan transition-colors">Projects</a>
                <a href="#academics" className="text-[10px] font-bold tracking-widest uppercase text-slate-300 hover:text-accent-cyan transition-colors">Academics</a>
                <a href="#contact" className="text-[10px] font-bold tracking-widest uppercase text-slate-300 hover:text-accent-cyan transition-colors">Contact</a>
              </div>
            </nav>

            <Hero />
            <Experience />
            <Projects />
            <div id="academics">
              <Education />
            </div>
            <Achievements />
            <Skills />
            <AstronautCopilot />

            <footer id="contact" className="section-compact relative z-10 border-t border-white/[0.08]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 text-luminous">Contact</h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {resumeData.basics.summary}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 glass-panel flex items-center justify-center text-slate-300 group-hover:border-accent-cyan/50 transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</p>
                      <p className="text-sm font-medium text-slate-100">{resumeData.basics.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 glass-panel flex items-center justify-center text-slate-300 group-hover:border-accent-cyan/50 transition-all">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Location</p>
                      <p className="text-sm font-medium text-slate-100 mb-4">{resumeData.basics.location}</p>
                      <div className="flex gap-6">
                        <a href={resumeData.basics.links[0].url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-cyan transition-all hover:scale-110 drop-shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                          <Github className="w-7 h-7" />
                        </a>
                        <a href={resumeData.basics.links[1].url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-cyan transition-all hover:scale-110 drop-shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                          <Linkedin className="w-7 h-7" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/[0.08] flex justify-between items-center">
                <p className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                  © 2026 {resumeData.basics.name}
                </p>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
