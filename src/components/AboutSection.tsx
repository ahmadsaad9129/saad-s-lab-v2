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
          
          {/* LEFT COLUMN: THE NARRATIVE STORY, PHILOSOPHY & CORE STRENGTHS (col-span-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            
            {/* Quote Section (Intact) */}
            <div className="space-y-4">
              <h3 className={`text-2xl md:text-3xl font-display font-bold leading-tight tracking-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-950'
              }`}>
                Designing with intention, solving with empathy.
              </h3>
            </div>

            {/* Design Philosophy */}
            <div className="space-y-4">
              <h4 className={`text-xs font-mono uppercase tracking-widest font-bold ${
                isDarkMode ? 'text-brand-accent/90' : 'text-brand-accent'
              }`}>
                Design Philosophy
              </h4>
              <div className="space-y-4">
                {[
                  {
                    title: "User-Centered Design",
                    description: "Creating intuitive interfaces backed by research and usability."
                  },
                  {
                    title: "AI-Assisted Workflow",
                    description: "Using AI tools to improve design efficiency and creative workflows."
                  },
                  {
                    title: "Product & Brand Thinking",
                    description: "Designing experiences that balance user needs, business goals and strong visual identity."
                  }
                ].map((philo, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5 group">
                    <div className="mt-1.5 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_#BF953F]" />
                    </div>
                    <div>
                      <h5 className={`text-sm font-semibold tracking-tight ${
                        isDarkMode ? 'text-zinc-100' : 'text-zinc-900'
                      }`}>
                        {philo.title}
                      </h5>
                      <p className={`text-xs md:text-sm mt-0.5 leading-relaxed font-light ${
                        isDarkMode ? 'text-zinc-400' : 'text-zinc-650'
                      }`}>
                        {philo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-3 pt-2">
              <h4 className={`text-xs font-mono uppercase tracking-widest font-bold ${
                isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                Services
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "UI/UX Design",
                  "Product Thinking",
                  "Brand Identity",
                  "AI Workflow Design",
                  "Prompt Engineering",
                  "Creative Strategy"
                ].map((service, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.03, y: -1 }}
                    className={`text-[10px] md:text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-zinc-950/40 border-zinc-850/80 hover:border-brand-accent/40 text-zinc-300 hover:text-[#FCF6BA] hover:bg-brand-accent/[0.02]'
                        : 'bg-white border-zinc-200 hover:border-brand-accent/50 text-zinc-700 hover:text-zinc-900 hover:bg-brand-accent/[0.01]'
                    } cursor-default`}
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: QUICK CREDENTIALS CARDS (col-span-5) */}
          <div className="lg:col-span-5 space-y-4 text-left w-full">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold pl-1 ${
              isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              Quick Credentials
            </h4>
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 items-stretch"
            >
              {cards.map((item, index) => {
                const isSnapchat = item.title === "Snapchat Lens Creator";
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 16 } }
                    }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    onClick={() => {
                      if (isSnapchat) {
                        window.open("https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1f999682177742f79d3a4198f102acbc&metadata=01", "_blank", "noopener,noreferrer");
                      }
                    }}
                    className={`flex flex-col justify-between p-4.5 rounded-2xl border transition-all duration-300 h-full min-h-[110px] w-full cursor-pointer shadow-sm hover:shadow-brand-accent/5 ${
                      isDarkMode
                        ? 'bg-[#121212] border-zinc-850 hover:bg-[#161616] hover:border-zinc-800'
                        : 'bg-white border-zinc-200 hover:shadow-lg hover:border-zinc-350'
                    } ${isSnapchat ? 'hover:border-yellow-500/40' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-xl shrink-0 ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                        {item.icon}
                      </div>
                      {isSnapchat && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/15">
                          Open Lens ↗
                        </span>
                      )}
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
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
