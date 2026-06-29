import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, ArrowUpRight, Download, ArrowRight, Heart } from 'lucide-react';

interface ContactSectionProps {
  onNavigate: (path: 'home' | 'projects' | 'journey' | 'resume') => void;
  isDarkMode: boolean;
}

export default function ContactSection({ onNavigate, isDarkMode }: ContactSectionProps) {
  
  const contactCards = [
    {
      platform: 'Email',
      value: 'ahmadsaad9129@gmail.com',
      icon: <Mail size={18} className="text-[#EA4335]" />,
      link: 'mailto:ahmadsaad9129@gmail.com',
    },
    {
      platform: 'LinkedIn',
      value: 'linkedin.com/in/ahmadsaad9129',
      icon: <Linkedin size={18} className="text-[#0A66C2]" />,
      link: 'https://linkedin.com/in/ahmadsaad9129',
    },
    {
      platform: 'Instagram',
      value: '@ahmadsaad9129',
      icon: <Instagram size={18} className="text-[#E1306C]" />,
      link: 'https://instagram.com/ahmadsaad9129',
    },
  ];

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className={`pt-24 pb-12 transition-colors duration-500 relative overflow-hidden border-t ${
        isDarkMode ? 'bg-[#0A0A0A] border-zinc-900' : 'bg-zinc-50 border-zinc-200'
      }`}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-20">
        
        {/* Core Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CONTENT & LARGE CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 md:space-y-8 text-left"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-brand-accent uppercase">Let's Connect</span>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}>
                Let's Build Something Amazing Together.
              </h2>
            </div>

            <p className={`text-sm md:text-base leading-relaxed ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-650'
            }`}>
              Whether it's a product, a startup, a freelance project or simply a conversation about design — I'm always open to meaningful collaborations. Let's make something remarkable.
            </p>

            {/* Main Action buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:ahmadsaad9129@gmail.com"
                className={`px-8 py-4 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center space-x-2.5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-brand-accent/20 border ${
                  isDarkMode 
                    ? 'bg-white text-black border-transparent hover:bg-zinc-100' 
                    : 'bg-zinc-900 text-white border-transparent hover:bg-zinc-800'
                }`}
              >
                <span>LET'S WORK TOGETHER</span>
                <Mail size={14} />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onNavigate('resume');
                  window.scrollTo(0, 0);
                }}
                className={`px-8 py-4 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center space-x-2.5 transition-all duration-300 cursor-pointer border ${
                  isDarkMode
                    ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300'
                }`}
              >
                <Download size={14} />
                <span>DOWNLOAD RESUME</span>
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT: BEAUTIFUL CLICKABLE CONTACT CARDS */}
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full"
          >
            {contactCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                target="_blank"
                referrerPolicy="no-referrer"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
                }}
                whileHover={{ y: -3 }}
                className={`p-6 rounded-2xl border text-left flex flex-col justify-between h-36 transition-all duration-300 cursor-pointer relative group ${
                  isDarkMode
                    ? 'bg-[#121212]/90 border-zinc-850 hover:border-zinc-700 hover:bg-[#151515] hover:shadow-xl'
                    : 'bg-white border-zinc-200 hover:shadow-md hover:border-zinc-300'
                }`}
              >
                {/* Platform header */}
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl shrink-0 ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                    {card.icon}
                  </div>
                  
                  {/* Arrow up right */}
                  <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Info values */}
                <div className="space-y-0.5">
                  <p className={`text-[10px] font-mono tracking-wider uppercase ${
                    isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    {card.platform}
                  </p>
                  <p className={`text-xs md:text-sm font-semibold truncate ${
                    isDarkMode ? 'text-zinc-200 group-hover:text-white' : 'text-zinc-800 group-hover:text-zinc-900'
                  }`}>
                    {card.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* EXTRA: THANKS VISITING MESSAGE (Gently scrolling) */}
        <div className="pt-8 border-t border-zinc-800/20 dark:border-zinc-800/60 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-lg md:text-xl font-display font-medium tracking-wide ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Thanks for visiting. See you again soon.
          </motion.div>
        </div>

        {/* MINIMAL FOOTER LAYOUT */}
        <footer className="pt-8 flex flex-col md:flex-row md:items-start justify-between gap-8 text-left">
          
          {/* Logo & Tagline */}
          <div className="space-y-3 max-w-sm">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white font-display font-bold text-xl md:text-2xl tracking-tight cursor-pointer"
            >
              <span className={isDarkMode ? 'text-white' : 'text-zinc-900'}>Saad's</span>
              <span className="text-brand-accent">Lab</span>
            </button>
            <p className={`text-xs md:text-sm ${
              isDarkMode ? 'text-zinc-500' : 'text-zinc-500'
            }`}>
              Designing meaningful digital experiences. Let's innovate.
            </p>
            <p className="text-[10px] font-mono text-zinc-500">
              Designed & Developed by Ahmad Saad.
            </p>
          </div>

          {/* Footer Quick Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Navigation</p>
              <div className="flex flex-col space-y-2 text-xs">
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className={`text-left transition-colors cursor-pointer ${
                    isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  About
                </button>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className={`text-left transition-colors cursor-pointer ${
                    isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => onNavigate('journey')} 
                  className={`text-left transition-colors cursor-pointer ${
                    isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Journey
                </button>
                <button 
                  onClick={() => onNavigate('resume')} 
                  className={`text-left transition-colors cursor-pointer ${
                    isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Resume
                </button>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className={`text-left transition-colors cursor-pointer ${
                    isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Socials</p>
              <div className="flex flex-col space-y-2 text-xs">
                <a href="https://linkedin.com/in/ahmadsaad9129" target="_blank" referrerPolicy="no-referrer" className="text-zinc-400 hover:text-white transition-colors cursor-pointer">LinkedIn</a>
                <a href="https://instagram.com/ahmadsaad9129" target="_blank" referrerPolicy="no-referrer" className="text-zinc-400 hover:text-white transition-colors cursor-pointer">Instagram</a>
                <a href="mailto:ahmadsaad9129@gmail.com" className="text-zinc-400 hover:text-white transition-colors cursor-pointer">Email</a>
              </div>
            </div>
          </div>
        </footer>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-8 border-t border-zinc-800/10 dark:border-zinc-800/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span>© 2026 Ahmad Saad. All Rights Reserved.</span>
          <span className="flex items-center space-x-1 font-mono text-[10px]">
            <span>Made with passion, curiosity, and countless iterations</span>
            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
          </span>
        </div>

      </div>
    </section>
  );
}
