import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight, ChevronDown, FileText, Compass } from 'lucide-react';
// @ts-expect-error - Vite handles static image imports natively at runtime
import heroPortrait from '../assets/images/regenerated_image_1782663349044.jpg';

interface HeroSectionProps {
  isDarkMode: boolean;
  onNavigate: (path: 'home' | 'projects' | 'journey' | 'resume') => void;
}

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
      className="min-h-[90vh] lg:min-h-screen flex flex-col justify-center pt-24 pb-12 md:pt-28 md:pb-16 relative w-full overflow-hidden transition-colors duration-500"
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-center w-full">
          
          {/* LEFT COLUMN: CONTENT (Logo, Hero Label, Mobile Portrait, Name, Main Heading, Description, Buttons, Trust Bar) */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            
            {/* Logo and Digital Identity group */}
            <div className="space-y-2 mb-6">
              {/* 1. Brand Logo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center space-x-2"
              >
                <span className="text-xs font-mono font-bold tracking-widest text-brand-accent">S•L</span>
                <span className={`h-3 w-[1px] ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
                <span className={`text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Saad's Lab</span>
              </motion.div>

              {/* 2. Hero Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center space-x-2"
              >
                <span className={`h-[1px] w-6 ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
                <span className={`text-[10px] font-mono tracking-widest uppercase ${
                  isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  Digital Identity v2.0
                </span>
              </motion.div>
            </div>

            {/* MOBILE ONLY: PORTRAIT (appears right after labels and before name) */}
            <div className="block md:hidden my-6 w-full max-w-[210px] sm:max-w-[240px]">
              <div className="relative">
                {/* Soft Premium Radial Glow Backdrop */}
                <div 
                  className="absolute inset-0 rounded-full blur-2xl opacity-50 pointer-events-none -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(124,92,255,0.2) 0%, rgba(0,0,0,0) 70%)'
                  }}
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`aspect-[4/5] rounded-[24px] p-2 relative transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-zinc-950 border border-zinc-850 shadow-[0_15px_40px_rgba(0,0,0,0.7)]' 
                      : 'bg-white border border-zinc-200 shadow-xl'
                  }`}
                >
                  {/* Thin gold border frame */}
                  <div className={`absolute inset-0 m-1.5 rounded-[18px] border ${
                    isDarkMode ? 'border-brand-accent/25' : 'border-brand-accent/20'
                  } pointer-events-none z-20`} />
                  
                  {/* Image Container with crop */}
                  <div className="w-full h-full overflow-hidden relative rounded-[14px]">
                    <img
                      src={imageSrc}
                      onError={handleImageError}
                      alt="Ahmad Saad - Portrait"
                      className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Name & Main Heading */}
            <div className="space-y-2 mb-4 relative">
              {/* Elegant Cursive Signature in Gold */}
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-signature text-3xl sm:text-4xl md:text-[38px] lg:text-[44px] text-brand-accent select-none origin-left pl-1"
              >
                Ahmad Saad
              </motion.div>
              
              <h1 className="text-[32px] sm:text-[40px] md:text-[38px] lg:text-[52px] xl:text-[64px] font-display font-black tracking-tight leading-[0.95] select-none uppercase">
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
              
              {/* Editorial Subheading */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className={`text-[10px] sm:text-xs font-mono tracking-wider uppercase font-bold ${
                  isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                Creative Strategy <span className="mx-1.5 text-brand-accent">•</span> Human-Centered UX <span className="mx-1.5 text-brand-accent">•</span> Visual Design
              </motion.p>
            </div>

            {/* Description Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`text-sm sm:text-[15px] md:text-base leading-relaxed max-w-[480px] md:max-w-[500px] mb-6 font-sans ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              I design intuitive digital experiences that blend creativity, strategy and usability. From user research to polished interfaces, I build products people genuinely enjoy using.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-row items-center gap-[18px] mb-8"
            >
              <button
                onClick={() => onNavigate('projects')}
                className={`px-6 sm:px-8 h-11 md:h-12 rounded-full text-[11px] md:text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-brand-accent/15 border hover:-translate-y-0.5 active:translate-y-0 shrink-0 ${
                  isDarkMode 
                    ? 'bg-white text-black border-transparent hover:bg-zinc-100' 
                    : 'bg-zinc-900 text-white border-transparent hover:bg-zinc-800'
                }`}
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight size={12} />
              </button>

              <button
                onClick={() => onNavigate('resume')}
                className={`px-6 sm:px-8 h-11 md:h-12 rounded-full text-[11px] md:text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer border hover:-translate-y-0.5 active:translate-y-0 shrink-0 ${
                  isDarkMode
                    ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-650 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300'
                }`}
              >
                <FileText size={12} />
                <span>DOWNLOAD RESUME</span>
              </button>
            </motion.div>

            {/* Premium Trust Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`py-4 border-y ${
                isDarkMode 
                  ? 'border-zinc-900 text-zinc-400' 
                  : 'border-zinc-200 text-zinc-650'
              } w-full`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-4 md:gap-x-2 items-center justify-between w-full">
                {/* Item 1 */}
                <div className="text-left flex flex-col justify-center">
                  <span className={`text-base md:text-lg font-display font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    30+
                  </span>
                  <span className={`text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Projects
                  </span>
                </div>
                
                {/* Item 2 */}
                <div className={`text-left flex flex-col justify-center pl-4 border-l ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
                  <span className={`text-base md:text-lg font-display font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    4+
                  </span>
                  <span className={`text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Years Exp.
                  </span>
                </div>

                {/* Item 3 */}
                <div className={`text-left flex flex-col justify-center border-l ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'} border-l-0 sm:border-l pl-0 sm:pl-4`}>
                  <span className={`text-base md:text-lg font-display font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    UI/UX
                  </span>
                  <span className={`text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    & Graphic Design
                  </span>
                </div>

                {/* Item 4 */}
                <div className={`text-left flex flex-col justify-center border-l ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'} sm:border-l-0 md:border-l sm:pl-0 md:pl-4 pl-4`}>
                  <span className={`text-base md:text-lg font-display font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    Snapchat
                  </span>
                  <span className={`text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Lens Creator
                  </span>
                </div>

                {/* Item 5 */}
                <div className={`text-left flex flex-col justify-center pl-4 border-l ${isDarkMode ? 'border-zinc-900' : 'border-zinc-200'} sm:border-l`}>
                  <span className={`text-base md:text-lg font-display font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    Google
                  </span>
                  <span className={`text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Certified
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* DESKTOP/TABLET RIGHT COLUMN: PROFILE IMAGE (hidden on mobile, perfectly integrated on md+) */}
          <div className="hidden md:flex md:col-span-5 items-center justify-center relative w-full md:justify-end">
            {/* Soft Premium Radial Glow Backdrop */}
            <div 
              className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] lg:w-[420px] lg:h-[420px] rounded-full blur-3xl opacity-60 pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(124,92,255,0.18) 0%, rgba(0,0,0,0) 70%)'
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
              className={`w-full max-w-[240px] sm:max-w-[280px] md:max-w-[260px] lg:max-w-[350px] xl:max-w-[370px] aspect-[4/5] rounded-[24px] lg:rounded-[32px] p-2 relative transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-zinc-950 border border-zinc-850 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
                  : 'bg-white border border-zinc-200 shadow-xl'
              }`}
            >
              {/* Thin gold border frame */}
              <div className={`absolute inset-0 m-1.5 rounded-[20px] lg:rounded-[28px] border ${
                isDarkMode ? 'border-brand-accent/30' : 'border-brand-accent/25'
              } pointer-events-none z-20`} />
              
              {/* Image Container with micro Zoom effect */}
              <div className="w-full h-full overflow-hidden relative rounded-[16px] lg:rounded-[24px] group">
                <img
                  src={imageSrc}
                  onError={handleImageError}
                  alt="Ahmad Saad - Portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.04] filter contrast-[1.02] brightness-[0.98]"
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
