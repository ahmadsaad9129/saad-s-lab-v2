import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPath: 'home' | 'projects' | 'journey' | 'resume';
  onNavigate: (path: 'home' | 'projects' | 'journey' | 'resume') => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onLogoClick?: () => void;
}

export default function Navbar({ currentPath, onNavigate, isDarkMode, onToggleDarkMode, onLogoClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string, isSection: boolean) => {
    setMobileMenuOpen(false);
    
    if (isSection) {
      if (currentPath !== 'home') {
        onNavigate('home');
        // Wait for page transition, then scroll smoothly
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (onLogoClick) {
      onLogoClick();
    }
    onNavigate('home');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? isDarkMode 
              ? 'bg-[#0B0B0BC0] backdrop-blur-md border-b border-white/[0.05] py-2.5 shadow-lg shadow-[rgba(0,0,0,0.25)]'
              : 'bg-white/80 backdrop-blur-md border-b border-black/[0.05] py-2.5 shadow-md shadow-[rgba(0,0,0,0.05)]'
            : 'bg-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <motion.button
            onClick={handleLogoClick}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="flex items-center space-x-2 font-display font-bold text-xl md:text-2xl tracking-tight cursor-pointer group"
          >
            <span className={`transition-colors duration-300 ${isDarkMode ? 'text-white group-hover:text-[#FCF6BA]' : 'text-zinc-900 group-hover:text-brand-accent'}`}>Saad's</span>
            <span className="text-brand-accent group-hover:text-brand-secondary-accent transition-colors duration-300">Lab</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Primary Page & Section Links */}
            <div className="flex items-center space-x-6">
              
              {/* About (Section Link) */}
              <button
                onClick={() => handleLinkClick('about', true)}
                className={`relative py-1 text-sm tracking-wider font-semibold cursor-pointer transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                  currentPath === 'home' 
                    ? 'text-brand-accent'
                    : isDarkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <span>About</span>
                {currentPath === 'home' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent rounded-full"
                  />
                )}
              </button>

              {/* Projects (Dedicated Page Link) */}
              <button
                onClick={() => onNavigate('projects')}
                className={`relative py-1 text-sm tracking-wider font-semibold cursor-pointer transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                  currentPath === 'projects'
                    ? 'text-brand-accent font-bold'
                    : isDarkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <span>Projects</span>
                {currentPath === 'projects' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent rounded-full"
                  />
                )}
              </button>

              {/* Journey (Dedicated Page Link) */}
              <button
                onClick={() => onNavigate('journey')}
                className={`relative py-1 text-sm tracking-wider font-semibold cursor-pointer transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                  currentPath === 'journey'
                    ? 'text-brand-accent font-bold'
                    : isDarkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <span>Journey</span>
                {currentPath === 'journey' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent rounded-full"
                  />
                )}
              </button>

              {/* Resume (Dedicated Page Link) */}
              <button
                onClick={() => onNavigate('resume')}
                className={`relative py-1 text-sm tracking-wider font-semibold cursor-pointer transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                  currentPath === 'resume'
                    ? 'text-brand-accent font-bold'
                    : isDarkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <span>Résumé</span>
                {currentPath === 'resume' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent rounded-full"
                  />
                )}
              </button>

              {/* Contact (Section Link) */}
              <button
                onClick={() => handleLinkClick('contact', true)}
                className={`relative py-1 text-sm tracking-wider font-semibold cursor-pointer transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                  isDarkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <span>Contact</span>
              </button>

            </div>

            {/* Actions: Theme Toggle & Mini Resume download link */}
            <div className="flex items-center space-x-4 border-l pl-6 border-zinc-800/10 dark:border-zinc-800/60">
              
              {/* Dark / Light Toggle */}
              <button
                onClick={onToggleDarkMode}
                className={`p-2.5 rounded-full cursor-pointer transition-all border ${
                  isDarkMode 
                    ? 'border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-700' 
                    : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 shadow-sm'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Main Call to Action Button */}
              {currentPath !== 'resume' ? (
                <button
                  onClick={() => onNavigate('resume')}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer border ${
                    isDarkMode
                      ? 'bg-zinc-950 border-zinc-800 text-white hover:bg-brand-accent hover:border-brand-accent hover:shadow-lg hover:shadow-brand-accent/25'
                      : 'bg-zinc-900 border-transparent text-white hover:bg-brand-accent hover:shadow-lg hover:shadow-brand-accent/25'
                  }`}
                >
                  <FileText size={13} />
                  <span>RÉSUMÉ</span>
                </button>
              ) : (
                <a
                  href="/resume/Ahmad_Saad_Resume.pdf"
                  download="Ahmad_Saad_Resume.pdf"
                  className="flex items-center space-x-2 bg-brand-accent border-transparent text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-brand-accent-hover hover:shadow-lg hover:shadow-brand-accent/25 transition-all cursor-pointer"
                >
                  <span>PDF FILE</span>
                  <ArrowUpRight size={13} />
                </a>
              )}

            </div>

          </div>

          {/* Mobile Actions: theme toggle + menu trigger */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Theme toggle in mobile */}
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-full cursor-pointer border transition-colors ${
                isDarkMode 
                  ? 'border-zinc-800 bg-zinc-900/30 text-zinc-400' 
                  : 'border-zinc-200 bg-zinc-50 text-zinc-600'
              }`}
            >
              {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full cursor-pointer border transition-colors ${
                isDarkMode 
                  ? 'border-zinc-800 bg-zinc-900/30 text-white' 
                  : 'border-zinc-200 bg-zinc-50 text-zinc-900'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Slide Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-x-0 top-0 pt-24 pb-8 z-40 lg:hidden flex flex-col space-y-6 px-8 shadow-2xl border-b ${
              isDarkMode 
                ? 'bg-[#0B0B0BEB] backdrop-blur-xl border-zinc-900' 
                : 'bg-white/FA backdrop-blur-xl border-zinc-200'
            }`}
          >
            <div className="flex flex-col space-y-4 text-left">
              
              {/* About link in mobile */}
              <button
                onClick={() => handleLinkClick('about', true)}
                className={`py-2 text-lg font-display font-bold tracking-wide transition-all text-left ${
                  isDarkMode ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'
                }`}
              >
                About
              </button>

              {/* Projects link in mobile */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('projects');
                }}
                className={`py-2 text-lg font-display font-bold tracking-wide transition-all text-left ${
                  currentPath === 'projects'
                    ? 'text-brand-accent'
                    : isDarkMode ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'
                }`}
              >
                Projects
              </button>

              {/* Journey link in mobile */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('journey');
                }}
                className={`py-2 text-lg font-display font-bold tracking-wide transition-all text-left ${
                  currentPath === 'journey'
                    ? 'text-brand-accent'
                    : isDarkMode ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'
                }`}
              >
                Journey
              </button>

              {/* Resume link in mobile */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('resume');
                }}
                className={`py-2 text-lg font-display font-bold tracking-wide transition-all text-left ${
                  currentPath === 'resume'
                    ? 'text-brand-accent'
                    : isDarkMode ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'
                }`}
              >
                Résumé
              </button>

              {/* Contact link in mobile */}
              <button
                onClick={() => handleLinkClick('contact', true)}
                className={`py-2 text-lg font-display font-bold tracking-wide transition-all text-left ${
                  isDarkMode ? 'text-zinc-200 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'
                }`}
              >
                Contact
              </button>

            </div>

            <div className={`h-[1px] w-full ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`} />

            {/* Mobile primary CTA */}
            {currentPath !== 'resume' ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('resume');
                }}
                className="flex items-center justify-center space-x-2 bg-brand-accent text-white py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-brand-accent-hover transition-all cursor-pointer"
              >
                <FileText size={16} />
                <span>VIEW FULL RÉSUMÉ</span>
              </button>
            ) : (
              <a
                href="/resume/Ahmad_Saad_Resume.pdf"
                download="Ahmad_Saad_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-brand-accent text-white py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-brand-accent-hover transition-all cursor-pointer"
              >
                <span>DOWNLOAD PDF</span>
                <ArrowUpRight size={16} />
              </a>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
