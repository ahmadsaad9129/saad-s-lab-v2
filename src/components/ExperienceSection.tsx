import React from 'react';
import { motion } from 'motion/react';
import { Experience } from '../types';
import { Briefcase, Calendar, Laptop, Trophy, Mic, CheckCircle2, Circle } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: Experience[];
  isDarkMode: boolean;
}

export default function ExperienceSection({ experiences, isDarkMode }: ExperienceSectionProps) {
  
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase size={16} className="text-emerald-400" />;
      case 'Laptop':
        return <Laptop size={16} className="text-[#00C2FF]" />;
      case 'Trophy':
        return <Trophy size={16} className="text-amber-400" />;
      case 'Mic':
        return <Mic size={16} className="text-indigo-400" />;
      default:
        return <Briefcase size={16} className="text-brand-accent" />;
    }
  };

  return (
    <section
      id="experience"
      className={`py-24 transition-colors duration-500 relative overflow-hidden ${
        isDarkMode ? 'bg-[#0C0C0C]' : 'bg-zinc-100/50'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-16 max-w-2xl">
          <p className="text-xs font-mono tracking-widest text-brand-accent uppercase">Career Milestones</p>
          <h2 className={`text-4xl md:text-5xl font-display font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            Professional Experience
          </h2>
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            A journey of continuous learning, collaboration and creating meaningful digital experiences that drive growth.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Vertical timeline connector line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-[0.75px] ${
            isDarkMode ? 'bg-zinc-800' : 'bg-zinc-200'
          }`} />

          {/* Experience items loop */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline central node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors ${
                        isDarkMode 
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-300 group-hover:border-brand-accent' 
                          : 'bg-white border-zinc-200 text-zinc-700'
                      }`}
                    >
                      {getIcon(exp.icon)}
                    </motion.div>
                  </div>

                  {/* Spacer column representing the empty timeline half */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card content block (positioned on the opposite side) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -3 }}
                      className={`p-6 md:p-8 rounded-[28px] border text-left transition-all duration-300 relative ${
                        isDarkMode
                          ? 'bg-[#121212]/90 border-zinc-850 hover:border-zinc-700 hover:bg-[#151515] hover:shadow-xl'
                          : 'bg-white border-zinc-200 hover:shadow-lg'
                      }`}
                    >
                      {/* Top Header Row with Status Badges */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div className="space-y-1">
                          <span className={`text-[10px] font-mono tracking-wider uppercase font-semibold ${
                            isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                          }`}>
                            {exp.company}
                          </span>
                          <h3 className={`text-lg md:text-xl font-display font-bold leading-tight ${
                            isDarkMode ? 'text-white' : 'text-zinc-900'
                          }`}>
                            {exp.role}
                          </h3>
                        </div>

                        {/* Custom Badges based on internship status */}
                        {exp.company.includes('Aquargin') ? (
                          <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center space-x-1.5">
                            <CheckCircle2 size={10} />
                            <span>COMPLETED</span>
                          </span>
                        ) : exp.duration.includes('Ongoing') ? (
                          <span className="bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full animate-pulse">
                            ACTIVE
                          </span>
                        ) : (
                          <span className="bg-zinc-500/10 border border-zinc-500/20 text-zinc-400 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full">
                            {exp.duration}
                          </span>
                        )}
                      </div>

                      {/* Timeline Duration */}
                      <div className="flex items-center space-x-1.5 text-xs text-zinc-400 font-mono mb-4">
                        <Calendar size={12} className="text-zinc-500" />
                        <span>{exp.duration}</span>
                      </div>

                      {/* Main Job Description Text */}
                      <p className={`text-xs md:text-sm leading-relaxed mb-6 ${
                        isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                      }`}>
                        {exp.description}
                      </p>

                      {/* Responsibilities Styled Tags */}
                      <div className="space-y-2">
                        <p className={`text-[10px] font-mono uppercase tracking-widest ${
                          isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>
                          Key Responsibilities
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`text-[9px] font-mono font-medium px-2.5 py-1 rounded-full border transition-colors ${
                                isDarkMode
                                  ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                                  : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-zinc-900'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
