import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight, ChevronDown, FileText, Compass, Palette, Sparkles, Award } from 'lucide-react';
// @ts-expect-error - Vite handles static image imports natively at runtime
import heroPortrait from '../assets/images/regenerated_image_1782663349044.jpg';

interface HeroSectionProps {
  isDarkMode: boolean;
  onNavigate: (path: 'home' | 'projects' | 'journey' | 'resume') => void;
}

const GoogleIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="shrink-0">
    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.41 0-6.19-2.78-6.19-6.19s2.78-6.19 6.19-6.19c1.55 0 2.96.57 4.05 1.51l3.07-3.07c-1.92-1.78-4.46-2.87-7.12-2.87-6.19 0-11.21 5.02-11.21 11.21s5.02 11.21 11.21 11.21c5.84 0 10.74-4.22 11.21-10.05v-4.14H12.24z" />
  </svg>
);

export default function HeroSection({ isDarkMode, onNavigate }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageSrc, setImageSrc] = useState(heroPortrait);
  const [imageAttempt, setImageAttempt] = useState(0); // 0 = local asset, 1 = /input_file_0.png, 2 = /input_file_1.png

  const handleImageError = () => {
    if (imageAttempt === 0) {
      setImageAttempt(1);
      setImageSrc('/input_file_0.png');
    } else if (imageAttempt === 1) {
      setImageAttempt(2);
      setImageSrc('/input_file_1.png');
    }
  };
  
  // Parallax / mouse float variables for the image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  
  // Subtle translation range: -15px to 15px
  const translateX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates: -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen flex flex-col justify-center pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-28 lg:pb-16 relative w-full overflow-hidden transition-colors duration-500"
    >
      {/* Dynamic Background subtle gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-35 transition-colors duration-500 ${
          isDarkMode ? 'bg-emerald-600/10' : 'bg-emerald-600/4'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-25 transition-colors duration-500 ${
          isDarkMode ? 'bg-amber-600/10' : 'bg-amber-600/4'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 xl:gap-24 items-center w-full">
          
          {/* LEFT COLUMN: CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* MOBILE & TABLET ONLY: PORTRAIT (appears right after navbar/top space, before signature) */}
            <div className="block lg:hidden mb-10 w-[78%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto">
              <div className="relative">
                {/* Soft Premium Radial Glow Backdrop */}
                <div 
                  className="absolute inset-0 rounded-full blur-2xl opacity-40 pointer-events-none -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(124,92,255,0.15) 0%, rgba(0,0,0,0) 70%)'
                  }}
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`aspect-[4/5] rounded-[24px] p-2 relative transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-zinc-950 border border-zinc-850 shadow-[0_12px_35px_rgba(0,0,0,0.65)]' 
                      : 'bg-white border border-zinc-200 shadow-xl'
                  }`}
                >
                  {/* Thin gold border frame */}
                  <div className={`absolute inset-0 m-1.5 rounded-[18px] border ${
                    isDarkMode ? 'border-brand-accent/25' : 'border-brand-accent/20'
                  } pointer-events-none z-20`} />
                  
                  {/* Image Container with crop focused on the face */}
                  <div className="w-full h-full overflow-hidden relative rounded-[14px]">
                    <img
                      src={imageSrc}
                      onError={handleImageError}
                      alt="Ahmad Saad - Portrait"
                      className="w-full h-full object-cover scale-[1.18] origin-[center_15%] filter contrast-[1.02] brightness-[0.98]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* SAAD'S LAB • DIGITAL IDENTITY V2.0 */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`text-[10px] font-mono tracking-[0.25em] uppercase mb-3 ${
                isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
              }`}
            >
              SAAD'S LAB • DIGITAL IDENTITY V2.0
            </motion.p>

            {/* Name Signature Block */}
            <motion.div
              initial={{ opacity: 0, y: 10, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-signature text-3.5xl sm:text-4xl md:text-[38px] lg:text-[44px] xl:text-[48px] text-brand-accent select-none origin-left pl-1 mb-3 lg:mb-4"
            >
              Ahmad Saad
            </motion.div>
            
            {/* Main Heading Titles */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[38px] lg:text-[52px] xl:text-[64px] font-display font-black tracking-tight leading-[0.95] select-none uppercase mb-5 lg:mb-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}
              >
                UI/UX Designer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-brand-accent mt-0.5"
              >
                Digital Creator
              </motion.span>
            </h1>

            {/* Sub-tagline: CREATIVE STRATEGY • HUMAN-CENTERED UX • VISUAL DESIGN */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={`text-[9px] sm:text-[11px] font-mono tracking-[0.18em] uppercase flex items-center flex-wrap gap-x-2 gap-y-1 mb-8 lg:mb-10 ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              <span>CREATIVE STRATEGY</span>
              <span className="text-brand-accent font-bold">•</span>
              <span>HUMAN-CENTERED UX</span>
              <span className="text-brand-accent font-bold">•</span>
              <span>VISUAL DESIGN</span>
            </motion.div>

            {/* Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-row lg:items-center lg:gap-6 mb-8 lg:mb-12 w-full"
            >
              <button
                onClick={() => onNavigate('projects')}
                className={`w-full lg:w-auto px-5 sm:px-8 h-11 md:h-12 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-brand-accent/15 border hover:-translate-y-0.5 active:translate-y-0 ${
                  isDarkMode 
                    ? 'bg-white text-black border-transparent hover:bg-zinc-100' 
                    : 'bg-zinc-900 text-white border-transparent hover:bg-zinc-800'
                }`}
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight size={12} className="shrink-0" />
              </button>

              <button
                onClick={() => onNavigate('resume')}
                className={`w-full lg:w-auto px-5 sm:px-8 h-11 md:h-12 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer border hover:-translate-y-0.5 active:translate-y-0 ${
                  isDarkMode
                    ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-650 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300'
                }`}
              >
                <FileText size={12} className="shrink-0" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </motion.div>

            {/* Redesigned Premium Trust Cards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
                
                {/* Card 1: UI/UX & Graphic Design */}
                <div className={`flex items-center space-x-3.5 p-4 lg:p-6 rounded-xl border transition-all duration-300 h-full min-h-[58px] lg:min-h-[72px] ${
                  isDarkMode 
                    ? 'bg-zinc-950/40 border-zinc-900 text-zinc-300 hover:border-brand-accent/20 hover:bg-zinc-900/10' 
                    : 'bg-white border-zinc-200 text-zinc-700 shadow-sm hover:border-brand-accent/20 hover:shadow'
                }`}>
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-zinc-900 text-brand-accent' : 'bg-zinc-100 text-brand-accent'} shrink-0`}>
                    <Palette size={14} />
                  </div>
                  <div className="text-left">
                    <p className={`text-[11px] font-bold tracking-tight ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      UI/UX & Graphic
                    </p>
                    <p className={`text-[8px] font-mono uppercase tracking-wider ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Creative Design
                    </p>
                  </div>
                </div>

                {/* Card 2: Snapchat Lens Creator */}
                <div className={`flex items-center space-x-3.5 p-4 lg:p-6 rounded-xl border transition-all duration-300 h-full min-h-[58px] lg:min-h-[72px] ${
                  isDarkMode 
                    ? 'bg-zinc-950/40 border-zinc-900 text-zinc-300 hover:border-brand-accent/20 hover:bg-zinc-900/10' 
                    : 'bg-white border-zinc-200 text-zinc-700 shadow-sm hover:border-brand-accent/20 hover:shadow'
                }`}>
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-zinc-900 text-brand-accent' : 'bg-zinc-100 text-brand-accent'} shrink-0`}>
                    <Sparkles size={14} />
                  </div>
                  <div className="text-left">
                    <p className={`text-[11px] font-bold tracking-tight ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      Snapchat Lens
                    </p>
                    <p className={`text-[8px] font-mono uppercase tracking-wider ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      AR Creator
                    </p>
                  </div>
                </div>

                {/* Card 3: Google Certified */}
                <div className={`flex items-center space-x-3.5 p-4 lg:p-6 rounded-xl border transition-all duration-300 h-full min-h-[58px] lg:min-h-[72px] ${
                  isDarkMode 
                    ? 'bg-zinc-950/40 border-zinc-900 text-zinc-300 hover:border-brand-accent/20 hover:bg-zinc-900/10' 
                    : 'bg-white border-zinc-200 text-zinc-700 shadow-sm hover:border-brand-accent/20 hover:shadow'
                }`}>
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-zinc-900 text-brand-accent' : 'bg-zinc-100 text-brand-accent'} shrink-0`}>
                    <GoogleIcon size={14} />
                  </div>
                  <div className="text-left flex flex-col justify-center">
                    <p className={`text-[11px] font-bold tracking-tight ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      Google Certified
                    </p>
                    <p className={`text-[8px] font-mono uppercase tracking-wider opacity-0 select-none`}>
                      UX Practitioner
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* DESKTOP RIGHT COLUMN: PROFILE IMAGE (hidden on mobile/tablet, perfectly integrated on lg+) */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative w-full lg:justify-end">
            {/* Soft Premium Radial Glow Backdrop */}
            <div 
              className="absolute w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[380px] lg:h-[380px] rounded-full blur-3xl opacity-50 pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(124,92,255,0.15) 0%, rgba(0,0,0,0) 70%)'
              }}
            />
            
            <motion.div
              style={{
                translateX,
                translateY,
              }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 90, damping: 22, delay: 0.15 }}
              className={`w-full max-w-[210px] sm:max-w-[250px] md:max-w-[230px] lg:max-w-[310px] xl:max-w-[330px] aspect-[4/5] rounded-[24px] lg:rounded-[28px] p-1.5 relative transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-zinc-950 border border-zinc-850 shadow-[0_15px_40px_rgba(0,0,0,0.7)]' 
                  : 'bg-white border border-zinc-200 shadow-xl'
              }`}
            >
              {/* Thin gold border frame */}
              <div className={`absolute inset-0 m-1.5 rounded-[18px] lg:rounded-[22px] border ${
                isDarkMode ? 'border-brand-accent/30' : 'border-brand-accent/25'
              } pointer-events-none z-20`} />
              
              {/* Image Container with micro Zoom effect */}
              <div className="w-full h-full overflow-hidden relative rounded-[14px] lg:rounded-[18px] group">
                <img
                  src={imageSrc}
                  onError={handleImageError}
                  alt="Ahmad Saad - Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.22] scale-[1.15] origin-[center_15%] filter contrast-[1.02] brightness-[0.98]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
