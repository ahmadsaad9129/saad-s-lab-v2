import React from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Briefcase, Sparkles, Palette } from 'lucide-react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

export default function AboutSection({ isDarkMode }: AboutSectionProps) {
  const cards = [
    {
      icon: <MapPin size={18} className="text-brand-accent" />,
      title: "New Delhi, India",
      subtitle: "Location"
    },
    {
      icon: <GraduationCap size={18} className="text-indigo-400" />,
      title: "Bachelor of Computer Applications",
      subtitle: "Integral University"
    },
    {
      icon: <GraduationCap size={18} className="text-amber-500" />,
      title: "Master of Business Administration (Business Analytics)",
      subtitle: "University of Petroleum and Energy Studies (UPES)",
      badge: "Currently Pursuing"
    },
    {
      icon: <Palette size={18} className="text-purple-400" />,
      title: "Master's Certification in UI/UX Design",
      subtitle: "Jamia Millia Islamia"
    },
    {
      icon: <Briefcase size={18} className="text-emerald-400" />,
      title: "UI/UX Designer • Graphic Designer • Digital Creator",
      subtitle: "Professional Roles"
    },
    {
      icon: <Sparkles size={18} className="text-yellow-400" />,
      title: "Snapchat Lens Creator",
      subtitle: "Augmented Reality"
    }
  ];

  return (
    <section
      id="about"
      className={`py-24 relative w-full overflow-hidden transition-colors duration-500 border-b ${
        isDarkMode ? 'bg-[#0C0C0C]' : 'bg-zinc-100/30'
      } ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading with Luxury Border Accent */}
        <div className="mb-16 border-b pb-8 text-left transition-colors duration-500 border-zinc-200 dark:border-zinc-850">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-brand-accent uppercase"
          >
            A Closer Look
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`text-4xl md:text-5xl font-display font-black tracking-tight mt-1 uppercase ${
              isDarkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Core Layout Grid: Asymmetric Luxury Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: THE NARRATIVE STORY & PHILOSOPHY (col-span-7) */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 text-left">
            
            <div className="space-y-6">
              <h3 className={`text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight tracking-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-950'
              }`}>
                Designing with intention, solving with empathy.
              </h3>
              
              <div className={`space-y-6 leading-relaxed text-sm md:text-base ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-650'
              }`}>
                <p className={`font-semibold text-base md:text-lg tracking-tight ${
                  isDarkMode ? 'text-zinc-200' : 'text-zinc-800'
                }`}>
                  I don't believe in simply making interfaces pretty. I believe in solving real, tangible user problems. Every project I create starts with understanding people before designing interfaces — looking closely at cognitive models, emotional states, and physical environments.
                </p>
                <p>
                  By marrying my foundations in computer applications with rigorous human-centered UX design training, I bridge the crucial gap between engineering realities and creative visions. I turn complex logic, tables, and workflows into simple, conversational, and premium digital products that people genuinely enjoy using.
                </p>
                <p>
                  Whether wireframing comprehensive logic flows in Figma or constructing cohesive corporate visual languages, I maintain a relentless dedication to layout precision, contrast accessibility, and dynamic interface transitions.
                </p>
              </div>
            </div>

            {/* Design Philosophy Quote Card */}
            <div className={`p-6 md:p-8 rounded-[28px] border relative overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-br from-zinc-950 to-zinc-900 border-zinc-850 shadow-inner' 
                : 'bg-gradient-to-br from-white to-zinc-50 border-zinc-200 shadow-sm'
            }`}>
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="relative z-10 space-y-3">
                <p className={`text-xs font-mono uppercase tracking-widest ${
                  isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  My Philosophy
                </p>
                <blockquote className={`text-xl md:text-2xl font-display font-medium leading-relaxed italic ${
                  isDarkMode ? 'text-zinc-100' : 'text-zinc-800'
                }`}>
                  "I don't just design interfaces. I design experiences people remember."
                </blockquote>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: QUICK CREDENTIALS CARDS (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 text-left w-full">
            <div className="space-y-4">
              <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${
                isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                Quick Credentials
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {cards.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className={`flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 h-full ${
                      isDarkMode
                        ? 'bg-[#121212] border-zinc-850 hover:bg-[#161616] hover:border-zinc-800'
                        : 'bg-white border-zinc-200 hover:shadow-lg hover:border-zinc-350'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-xl shrink-0 ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                          {item.icon}
                        </div>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-brand-accent/15 text-brand-accent font-bold uppercase tracking-wider">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <h5 className={`text-sm md:text-base font-bold leading-snug tracking-tight ${
                          isDarkMode ? 'text-zinc-100' : 'text-zinc-850'
                        }`}>
                          {item.title}
                        </h5>
                        <p className={`text-xs ${
                          isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
