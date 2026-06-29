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
      className="min-h-[82vh] md:min-h-screen flex flex-col justify-center pt-20 pb-8 md:pt-24 md:pb-12 relative w-full overflow-hidden transition-colors duration-500"
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center w-full">
          
          {/* LEFT COLUMN: CONTENT (Logo, Hero Label, Name, Main Heading, Description, Buttons) */}
          <div className="md:col-span-7 flex flex-col justify-center text-left space-y-4 md:space-y-5 lg:space-y-6">
            
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

            {/* 3. Name & 4. Main Heading */}
            <div className="space-y-1.5 md:space-y-2 relative">
              {/* Elegant Cursive Signature in Gold */}
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-signature text-3xl sm:text-4xl md:text-5xl text-brand-accent select-none origin-left pl-1"
              >
                Ahmad Saad
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight leading-[0.95] select-none uppercase">
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

            {/* 5. Description Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`text-sm sm:text-base leading-relaxed max-w-[480px] font-sans ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              I design intuitive digital experiences that blend creativity, strategy and usability. From user research to polished interfaces, I build products people genuinely enjoy using.
            </motion.p>

            {/* 6. Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-row flex-wrap gap-3 pt-1"
            >
              <button
                onClick={() => onNavigate('projects')}
                className={`px-6 sm:px-8 h-11 rounded-full text-[11px] font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-brand-accent/15 border hover:-translate-y-0.5 active:translate-y-0 shrink-0 ${
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
                className={`px-6 sm:px-8 h-11 rounded-full text-[11px] font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer border hover:-translate-y-0.5 active:translate-y-0 shrink-0 ${
                  isDarkMode
                    ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-650 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300'
                }`}
              >
                <FileText size={12} />
                <span>DOWNLOAD RESUME</span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN / BOTTOM COLUMN: PROFILE IMAGE (Naturally ordered after content on Mobile) */}
          <div className="md:col-span-5 flex items-center justify-center relative md:-mt-4 w-full">
            {/* Soft Premium Radial Glow Backdrop */}
            <div 
              className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] lg:w-[380px] lg:h-[380px] rounded-full blur-3xl opacity-60 pointer-events-none -z-10"
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
              className={`w-full max-w-[200px] sm:max-w-[240px] md:max-w-[220px] lg:max-w-[310px] aspect-[4/5] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-2xl relative border group transition-all duration-300 ${
                isDarkMode ? 'border-zinc-850 bg-zinc-950/40' : 'border-zinc-200 bg-white'
              }`}
            >
              {/* Image Container with micro Zoom effect */}
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={imageSrc}
                  onError={handleImageError}
                  alt="Ahmad Saad - Portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] filter contrast-[1.01] brightness-[0.99]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Minimal borders */}
              <div className="absolute inset-0 rounded-[24px] lg:rounded-[32px] border border-white/5 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
