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
      className={`min-h-screen flex flex-col justify-between pt-28 pb-12 relative w-full overflow-hidden transition-colors duration-500`}
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* MOBILE ONLY: IMAGE FIRST */}
          <div className="block lg:hidden w-full max-w-md mx-auto relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className={`relative rounded-3xl overflow-hidden shadow-2xl border ${
                isDarkMode ? 'border-zinc-800' : 'border-zinc-200'
              } aspect-[4/5]`}
            >
              <img
                src={imageSrc}
                onError={handleImageError}
                alt="Ahmad Saad - UI/UX Designer"
                className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* LEFT SIDE: CONTENT */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left space-y-6 md:space-y-8">
            
            {/* Minimal Premium Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-2"
            >
              <span className={`h-[1px] w-8 ${isDarkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
              <span className={`text-[11px] font-mono tracking-widest uppercase ${
                isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                Saad's Lab • Digital Identity v2.0
              </span>
            </motion.div>

            {/* Main Name Heading with reveal animation */}
            <div className="space-y-3 relative">
              {/* Elegant Cursive Signature in Gold */}
              <motion.div
                initial={{ opacity: 0, y: 12, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-signature text-5xl md:text-6xl text-brand-accent select-none origin-left pl-1"
              >
                Ahmad Saad
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[0.95] select-none uppercase">
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}
                >
                  UI/UX Designer
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-brand-accent mt-1"
                >
                  Digital Creator
                </motion.span>
              </h1>
              
              {/* Editorial Subheading */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-xs md:text-sm font-mono tracking-wider uppercase font-bold ${
                  isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                Creative Strategy <span className="mx-1.5 text-brand-accent">•</span> Human-Centered UX <span className="mx-1.5 text-brand-accent">•</span> Visual Design
              </motion.p>
            </div>

            {/* Description Body */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`text-base md:text-lg leading-relaxed max-w-[580px] font-sans ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              I design intuitive digital experiences that blend creativity, strategy and usability. From user research to polished interfaces, I build products people genuinely enjoy using.
            </motion.p>

            {/* Elegant CTAs with magnetic style spring hover */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              {/* Primary: View Projects */}
              <button
                onClick={() => onNavigate('projects')}
                className={`px-8 py-4 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center space-x-2.5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-brand-accent/20 border ${
                  isDarkMode 
                    ? 'bg-white text-black border-transparent hover:bg-zinc-100' 
                    : 'bg-zinc-900 text-white border-transparent hover:bg-zinc-800'
                }`}
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight size={14} />
              </button>

              {/* Secondary: Resume Page Link */}
              <button
                onClick={() => onNavigate('resume')}
                className={`px-8 py-4 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center space-x-2.5 transition-all duration-300 cursor-pointer border ${
                  isDarkMode
                    ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300'
                }`}
              >
                <FileText size={14} />
                <span>DOWNLOAD RESUME</span>
              </button>
            </motion.div>

          </div>

          {/* DESKTOP ONLY: RIGHT SIDE FLOAT PORTRAIT */}
          <div className="hidden lg:col-span-4 lg:flex items-center justify-center relative">
            <motion.div
              style={{
                translateX,
                translateY,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 25 }}
              className={`w-full max-w-[340px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl relative border group ${
                isDarkMode ? 'border-zinc-800 bg-zinc-950/40' : 'border-zinc-200 bg-white'
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
              <div className="absolute inset-0 rounded-[36px] border border-white/5 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* FOOTER OF HERO: SCROLL TO EXPLORE INDICATOR */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-center lg:justify-start items-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`flex items-center space-x-3 cursor-pointer py-2 px-4 rounded-full border transition-all duration-300 hover:opacity-100 ${
            isDarkMode 
              ? 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/20' 
              : 'border-zinc-200 hover:border-zinc-300 bg-zinc-50'
          }`}
        >
          {/* Scroll Wheel representation */}
          <div className="w-4 h-7 rounded-full border-2 border-current flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 rounded-full bg-brand-accent"
            />
          </div>
          <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Scroll to Explore
          </span>
        </motion.div>
      </div>

    </section>
  );
}
