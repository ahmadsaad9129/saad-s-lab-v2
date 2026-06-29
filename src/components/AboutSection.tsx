import React from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Briefcase, Sparkles, Palette } from 'lucide-react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

export default function AboutSection({ isDarkMode }: AboutSectionProps) {
  const cards: { icon: React.ReactNode; title: string; subtitle: string; badge?: string }[] = [
    {
      icon: <MapPin size={18} className="text-brand-accent" />,
      title: "New Delhi, India",
      subtitle: "Location"
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
      className={`pt-12 pb-18 relative w-full overflow-hidden transition-colors duration-500 border-b ${
        isDarkMode ? 'bg-[#0C0C0C]' : 'bg-zinc-100/30'
      } ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading with Luxury Border Accent */}
        <div className="mb-10 border-b pb-6 text-left transition-colors duration-500 border-zinc-200 dark:border-zinc-850">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: THE NARRATIVE STORY & PHILOSOPHY (col-span-7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-4">
              <h3 className={`text-2xl md:text-3xl font-display font-bold leading-tight tracking-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-950'
              }`}>
                Designing with intention, solving with empathy.
              </h3>
            </div>

            {/* Design Philosophy (3 short bullet points) */}
            <div className="space-y-3">
              <h4 className={`text-xs font-mono uppercase tracking-widest font-bold ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Design Philosophy
              </h4>
              <div className={`space-y-3 text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-650'}`}>
                <div className="flex gap-2.5 items-start">
                  <span className="text-brand-accent mt-1.5 shrink-0 select-none text-xs">◆</span>
                  <p>
                    <strong className={isDarkMode ? 'text-zinc-200' : 'text-zinc-900'}>Human-Centered UX:</strong> Solving complex problems by mapping visual designs directly to native human cognitive behavior.
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="text-brand-accent mt-1.5 shrink-0 select-none text-xs">◆</span>
                  <p>
                    <strong className={isDarkMode ? 'text-zinc-200' : 'text-zinc-900'}>Strategic Execution:</strong> Aligning deep user research and intuitive wireframes with long-term business goals.
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="text-brand-accent mt-1.5 shrink-0 select-none text-xs">◆</span>
                  <p>
                    <strong className={isDarkMode ? 'text-zinc-200' : 'text-zinc-900'}>Precision & Craft:</strong> Maintaining high standards for pixel-perfect layout alignment, contrast accessibility, and subtle animations.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Strengths */}
            <div className="space-y-3">
              <h4 className={`text-xs font-mono uppercase tracking-widest font-bold ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Core Strengths
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {['User Research', 'Wireframing', 'Prototyping', 'UI Design', 'Design Systems'].map((strength, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono border font-semibold tracking-wide ${
                      isDarkMode 
                        ? 'bg-[#121212]/50 border-zinc-850 text-zinc-350' 
                        : 'bg-white border-zinc-250 text-zinc-700 shadow-sm'
                    }`}
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Believe: Quote card */}
            <div className={`p-5 md:p-6 rounded-[22px] border relative overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-br from-zinc-950 to-zinc-900 border-zinc-850 shadow-inner' 
                : 'bg-gradient-to-br from-white to-zinc-50 border-zinc-200 shadow-sm'
            }`}>
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="relative z-10 space-y-2">
                <p className={`text-xs font-mono uppercase tracking-widest font-bold ${
                  isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  What I Believe
                </p>
                <blockquote className={`text-base md:text-lg font-display font-medium leading-relaxed italic ${
                  isDarkMode ? 'text-zinc-100' : 'text-zinc-800'
                }`}>
                  "Exceptional design isn't about decorating interfaces — it's about eliminating friction to make the complex feel completely natural."
                </blockquote>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: QUICK CREDENTIALS CARDS (col-span-5) */}
          <div className="lg:col-span-5 space-y-4 text-left w-full">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold pl-1 ${
              isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Quick Credentials
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 items-stretch">
              {cards.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className={`flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 h-full min-h-[128px] w-full ${
                    isDarkMode
                      ? 'bg-[#121212] border-zinc-850 hover:bg-[#161616] hover:border-zinc-800'
                      : 'bg-white border-zinc-200 hover:shadow-lg hover:border-zinc-350'
                  }`}
                >
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
                  <div className="space-y-1">
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
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
