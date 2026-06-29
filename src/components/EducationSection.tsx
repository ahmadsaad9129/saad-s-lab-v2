import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, CheckCircle2, Bookmark } from 'lucide-react';

interface EducationSectionProps {
  isDarkMode: boolean;
}

export default function EducationSection({ isDarkMode }: EducationSectionProps) {
  const educationData = [
    {
      degree: 'Master of Business Administration (Business Analytics)',
      institution: 'University of Petroleum and Energy Studies (UPES)',
      duration: 'Currently Pursuing',
      status: 'Currently Pursuing',
      focus: ['Business Analytics', 'Product Strategy', 'Data-Driven Decision Making', 'Digital Transformation'],
      badgeColor: 'text-[#00C2FF] bg-[#00C2FF]/10 border-[#00C2FF]/30',
    },
    {
      degree: "Master's Certification in UI/UX Design",
      institution: 'Jamia Millia Islamia',
      duration: 'Completed',
      status: 'Completed',
      focus: ['UX Research', 'User Interface Design', 'Design Thinking', 'Prototyping'],
      badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Integral University',
      duration: 'Completed',
      status: 'Completed',
      focus: ['Software Development', 'Database Management', 'Human Computer Interaction', 'Programming Fundamentals'],
      badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    },
    {
      degree: 'Senior Secondary (Class XII)',
      institution: 'Don Bosco School',
      duration: '2022',
      status: 'Completed',
      focus: ['Science & Mathematics', 'Analytical Skills', 'Academic Excellence'],
      badgeColor: 'text-zinc-400 bg-zinc-400/10 border-zinc-400/30',
    },
    {
      degree: 'Secondary (Class X)',
      institution: 'Don Bosco School',
      duration: '2020',
      status: 'Completed',
      focus: ['Foundational Science', 'Mathematics', 'Foundational Learning'],
      badgeColor: 'text-zinc-400 bg-zinc-400/10 border-zinc-400/30',
    },
  ];

  return (
    <section
      id="education"
      className={`py-24 transition-colors duration-500 relative ${
        isDarkMode ? 'bg-[#0C0C0C]' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-16 max-w-2xl">
          <p className="text-xs font-mono tracking-widest text-brand-accent uppercase">Academic Portfolio</p>
          <h2 className={`text-4xl md:text-5xl font-display font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            Education
          </h2>
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            A continuous journey of learning, growth and building strong design and business foundations.
          </p>
        </div>

        {/* Compact Timeline Grid */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-[0.75px] ${
            isDarkMode ? 'bg-zinc-850' : 'bg-zinc-200'
          }`} />

          <div className="space-y-16 md:space-y-24">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Circular Node marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 shadow-md transition-colors ${
                        isDarkMode
                          ? 'bg-zinc-950 border-zinc-800 text-brand-accent'
                          : 'bg-white border-zinc-200 text-brand-accent'
                      }`}
                    >
                      <GraduationCap size={16} />
                    </motion.div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -2 }}
                      className={`p-6 md:p-8 rounded-[24px] border text-left transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-[#121212]/90 border-zinc-850 hover:border-zinc-700 hover:bg-[#151515] hover:shadow-xl'
                          : 'bg-white border-zinc-200 hover:shadow-lg hover:border-zinc-300'
                      }`}
                    >
                      {/* Badge and Title */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div className="space-y-1 max-w-sm">
                          <h3 className={`text-lg md:text-xl font-display font-bold leading-snug tracking-tight ${
                            isDarkMode ? 'text-white' : 'text-zinc-950'
                          }`}>
                            {edu.degree}
                          </h3>
                        </div>

                        {/* Status badge with appropriate color */}
                        <span className={`border text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full shrink-0 max-w-max self-start ${edu.badgeColor}`}>
                          {edu.status.toUpperCase()}
                        </span>
                      </div>

                      {/* Institution Name & Duration */}
                      <div className="space-y-2 mb-6 border-b border-zinc-100 dark:border-zinc-800/50 pb-4">
                        <p className={`text-sm md:text-base font-medium ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                          {edu.institution}
                        </p>
                        <div className="flex items-center space-x-1.5 text-xs text-zinc-500 font-mono">
                          <Calendar size={12} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      {/* Focus points listed as modern pills - hidden for Class XII and Class X */}
                      {!(edu.degree.includes('Class XII') || edu.degree.includes('Class X')) && (
                        <div className="space-y-2">
                          <p className={`text-[9px] font-mono uppercase tracking-widest ${
                            isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                          }`}>
                            Core Learning Areas
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.focus.map((f, idx) => (
                              <span
                                key={idx}
                                className={`text-[9px] font-mono px-2.5 py-0.5 rounded-full ${
                                  isDarkMode
                                    ? 'bg-zinc-900 border border-zinc-800 text-zinc-400'
                                    : 'bg-zinc-50 border border-zinc-150 text-zinc-600'
                                }`}
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

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
