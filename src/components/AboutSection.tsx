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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: THE NARRATIVE STORY & PHILOSOPHY (col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4">
              <h3 className={`text-2xl md:text-3xl font-display font-bold leading-tight tracking-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-950'
              }`}>
                Designing with intention, solving with empathy.
              </h3>
            </div>

            <div className={`space-y-4 leading-relaxed text-sm md:text-base ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-650'
            }`}>
              <p>
                I don't just design interfaces — I map out intuitive structures that align user needs with business goals. By combining deep human-centered research with strategic execution, I ensure that every digital pixel and user transition is completely intentional and feels natural.
              </p>
              <p>
                My design approach focuses on clarity, pixel-perfect layout alignment, and eliminating friction. From early low-fidelity wireframing to high-contrast accessible visual design, I construct thoughtful products that elevate brand identities and create memorable experiences.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: QUICK CREDENTIALS CARDS (col-span-5) */}
          <div className="lg:col-span-5 space-y-4 text-left w-full">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold pl-1 ${
              isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Quick Credentials
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 items-stretch">
              {cards.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className={`flex flex-col justify-between p-4.5 rounded-2xl border transition-all duration-300 h-full min-h-[110px] w-full ${
                    isDarkMode
                      ? 'bg-[#121212] border-zinc-850 hover:bg-[#161616] hover:border-zinc-800'
                      : 'bg-white border-zinc-200 hover:shadow-lg hover:border-zinc-350'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-xl shrink-0 ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="space-y-0.5 mt-2">
                    <h5 className={`text-xs sm:text-sm md:text-base font-bold leading-snug tracking-tight ${
                      isDarkMode ? 'text-zinc-100' : 'text-zinc-850'
                    }`}>
                      {item.title}
                    </h5>
                    <p className={`text-[10px] font-mono uppercase tracking-wider ${
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
