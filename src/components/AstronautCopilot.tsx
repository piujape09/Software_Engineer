import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { Send, X, MessageSquare, Sparkles, Command } from 'lucide-react';
import { resumeData } from '../data/resume';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const AstronautCopilot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Greetings, buddy. I'm your mission copilot. How can I assist you in navigating this sector today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { label: 'About', id: 'hero' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Academics', id: 'academics' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMessages(prev => [...prev, { role: 'bot', text: `Initiating jump to the ${id} sector, buddy. Hang tight as we navigate the cosmic currents.` }]);
    }
  };

  const handleSend = async (textOverride?: string) => {
    const userMessage = textOverride || input.trim();
    if (!userMessage) return;

    if (!textOverride) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const portfolioContext = JSON.stringify(resumeData);
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `You are a friendly yet professional space-themed mission copilot for Pratibha Jape's portfolio. 
          Use this data to provide accurate information: ${portfolioContext}.
          CRITICAL: Address the user as "buddy" in a welcoming, natural way. 
          Tone: Professional, adventurous, and helpful. 
          Keep responses concise and polished.
          Guide the user through About, Skills, Projects, Experience, and Contact when relevant.
          The user says: ${userMessage}` }] }
        ],
      });

      const botText = response.text || "Apologies buddy, I lost signal for a moment. Could you repeat that?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Mission control, we have a problem buddy. I can't reach the brain right now." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 md:w-96 h-[500px] glass-panel flex flex-col overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.3)] border-accent/20"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-accent block">Mission Copilot</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-full">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-accent text-white rounded-tr-none shadow-lg shadow-accent/20' 
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickActions.map(action => (
                <button
                  key={action.id}
                  onClick={() => scrollToSection(action.id)}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-accent/20 hover:border-accent/40 transition-all text-slate-400 hover:text-white"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything, buddy..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent/50 transition-all focus:bg-white/[0.08]"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-accent rounded-lg text-white hover:bg-accent-violet transition-colors disabled:opacity-50 shadow-lg shadow-accent/20"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/40 transition-all" />
        <div className="relative w-16 h-16 glass-panel rounded-full flex items-center justify-center border-white/10 group-hover:border-accent/50 transition-all overflow-hidden shadow-2xl">
          <Sparkles size={24} className="text-accent group-hover:text-white transition-colors" />
        </div>
        
        {/* Notification Badge */}
        {!isOpen && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-0 right-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-[0_0_20px_#6366f1] border-2 border-space-black"
          >
            <Command size={10} className="text-white" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};
