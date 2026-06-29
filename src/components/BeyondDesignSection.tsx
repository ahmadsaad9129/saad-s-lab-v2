import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Users, Mic2, Cpu, Trophy, ArrowRight, ShieldCheck, Gamepad2 } from 'lucide-react';

interface BeyondDesignSectionProps {
  isDarkMode: boolean;
}

export default function BeyondDesignSection({ isDarkMode }: BeyondDesignSectionProps) {
  return (
    <section
      id="beyond"
      className={`py-24 transition-colors duration-500 ${
        isDarkMode ? 'bg-[#0C0C0C]' : 'bg-zinc-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-2 mb-16 max-w-2xl"
        >
          <p className="text-xs font-mono tracking-widest text-brand-accent uppercase">Life & Passion</p>
          <h2 className={`text-4xl md:text-5xl font-display font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            Beyond Design
          </h2>
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Design is only one part of my journey. I actively learn, contribute, build communities and explore emerging technologies.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* CARD 1: Google Journey (Oversized 7 col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`lg:col-span-7 p-8 rounded-[32px] border text-left flex flex-col justify-between space-y-8 relative overflow-hidden transition-all duration-300 ${
              isDarkMode
                ? 'bg-[#121212] border-zinc-850 hover:border-zinc-700 hover:bg-[#151515] hover:shadow-2xl hover:shadow-black/50'
                : 'bg-white border-zinc-200 hover:border-zinc-350 hover:shadow-xl'
            }`}
          >
            {/* Minimal google background dot grid decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500">COMMUNITY ENGAGEMENT</span>
                <span className="text-[10px] font-mono text-indigo-400 font-bold">2021–2026</span>
              </div>

              <div className="flex items-center space-x-3">
                {/* Google inspired clean colored dots */}
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                </div>
                <h3 className={`text-xl md:text-2xl font-display font-bold ${
                  isDarkMode ? 'text-white' : 'text-zinc-900'
                }`}>
                  Google Developer Journey
                </h3>
              </div>

              <p className={`text-xs md:text-sm leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Actively participated in Google's developer and design communities to stay updated with modern technologies, UX trends, and product thinking. Collaborated with global designers and engineers.
              </p>
            </div>

            {/* List of sub achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/10 dark:border-zinc-800/60">
              <div className="space-y-1">
                <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Google I/O Attendee</p>
                <p className="text-[10px] text-zinc-500 font-mono">2021–2026 • Annual Keynotes</p>
              </div>
              <div className="space-y-1">
                <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Google DevFest 2025</p>
                <p className="text-[10px] text-zinc-500 font-mono">Interactive Design & AI Tracks</p>
              </div>
              <div className="space-y-1">
                <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Google Cloud Community Days</p>
                <p className="text-[10px] text-zinc-500 font-mono">UI Data-density Systems</p>
              </div>
              <div className="space-y-1">
                <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>GDSC WOW – Design Track</p>
                <p className="text-[10px] text-zinc-500 font-mono">Mobile-First Foundations</p>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Workshop Speaker (5 col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`lg:col-span-5 p-8 md:p-10 rounded-[32px] border text-left flex flex-col justify-between transition-all duration-300 ${
              isDarkMode
                ? 'bg-[#121212] border-zinc-850 hover:border-zinc-700 hover:bg-[#151515] hover:shadow-2xl'
                : 'bg-white border-zinc-200 hover:border-zinc-350 hover:shadow-xl'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400`}>
                  <Mic2 size={16} />
                </div>
                <span className="text-[10px] font-mono text-indigo-400 font-bold tracking-wider">FEATURED TALK</span>
              </div>

              <h3 className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}>
                Workshop Speaker
              </h3>

              <p className={`text-sm md:text-base leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Invited by **Integral University** to conduct an interactive UI/UX Design Workshop. Introduced university students to Design Thinking, UX Process workflows, Wireframing challenges, and visual product design careers.
              </p>
            </div>
          </motion.div>

          {/* CARD 3: Smart India Hackathon (4 col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`lg:col-span-4 p-8 md:p-10 rounded-[32px] border text-left flex flex-col transition-all duration-300 ${
              isDarkMode
                ? 'bg-[#121212] border-zinc-850 hover:border-zinc-700 hover:bg-[#151515] hover:shadow-2xl'
                : 'bg-white border-zinc-200 hover:border-zinc-350 hover:shadow-xl'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500`}>
                  <Trophy size={16} />
                </div>
                <span className="text-[10px] font-mono text-amber-500 font-bold tracking-wider">SIH 2024</span>
              </div>

              <h3 className={`text-xl md:text-2xl font-display font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}>
                Smart India Hackathon
              </h3>

              <p className={`text-xs md:text-sm leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Served as the **Visual Design Lead** for Team Vision Squad. Led the user flows, branding identity, pitch presentation designs, and high-fidelity clickable mockups under extreme time limits.
              </p>
            </div>
          </motion.div>

          {/* CARD 4: Snapchat AR Creator (4 col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            onClick={() => {
              window.open("https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1f999682177742f79d3a4198f102acbc&metadata=01", "_blank", "noopener,noreferrer");
            }}
            className={`lg:col-span-4 p-8 rounded-[32px] border text-left flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer group ${
              isDarkMode
                ? 'bg-[#121212] border-zinc-850 hover:border-yellow-500/30 hover:bg-[#151515] hover:shadow-2xl'
                : 'bg-white border-zinc-200 hover:border-yellow-500/30 hover:shadow-xl'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-500`}>
                  <Cpu size={16} />
                </div>
                <span className="text-[10px] font-mono text-yellow-500 font-bold">Snap Creator</span>
              </div>

              <h3 className={`text-xl font-display font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white group-hover:text-yellow-400' : 'text-zinc-900 group-hover:text-yellow-600'
              }`}>
                Snap AR Creator ↗
              </h3>

              <p className={`text-xs leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Designing interactive, gamified lenses and AR filters inside Snapchat Lens Studio. Blending code, coordinate meshes, and visual assets to explore immersive spatial computing.
              </p>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 text-xs font-mono font-bold px-4 py-2 rounded-full transition-all duration-300 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 group-hover:bg-yellow-500 group-hover:text-black group-hover:border-yellow-500">
                <span>Try on Snapchat</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-mono text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <span>Interactive 3D Coordinates</span>
            </div>
          </motion.div>

          {/* CARD 5: Community & Leadership (4 col card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`lg:col-span-4 p-8 rounded-[32px] border text-left flex flex-col justify-between space-y-6 transition-all duration-300 ${
              isDarkMode
                ? 'bg-[#121212] border-zinc-850 hover:border-zinc-700 hover:bg-[#151515] hover:shadow-2xl'
                : 'bg-white border-zinc-200 hover:border-zinc-350 hover:shadow-xl'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400`}>
                  <Users size={16} />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">Leadership</span>
              </div>

              <h3 className={`text-xl font-display font-bold ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}>
                Community & Host
              </h3>

              <p className={`text-xs leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Organized and hosted multiple university events while strengthening communication, public speaking, teamwork, conflict resolution, and leadership skills in diverse teams.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-mono text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Public Speaker & Organizer</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
