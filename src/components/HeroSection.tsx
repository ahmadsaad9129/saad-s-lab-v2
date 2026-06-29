import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight, ChevronDown, FileText, Compass, Palette, Sparkles, Award } from 'lucide-react';
// @ts-expect-error - Vite handles static image imports natively at runtime
import heroPortrait from '../assets/images/regenerated_image_1782663349044.jpg';

interface HeroSectionProps {
  isDarkMode: boolean;
  onNavigate: (path: 'home' | 'projects' | 'journey' | 'resume') => void;
  onNameClick?: () => void;
}

const GoogleIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="shrink-0">
    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.41 0-6.19-2.78-6.19-6.19s2.78-6.19 6.19-6.19c1.55 0 2.96.57 4.05 1.51l3.07-3.07c-1.92-1.78-4.46-2.87-7.12-2.87-6.19 0-11.21 5.02-11.21 11.21s5.02 11.21 11.21 11.21c5.84 0 10.74-4.22 11.21-10.05v-4.14H12.24z" />
  </svg>
);

export default function HeroSection({ isDarkMode, onNavigate, onNameClick }: HeroSectionProps) {
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

  // Mouse follow glow transform
  const glowX = useTransform(springX, [-0.5, 0.5], [-100, 100]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-100, 100]);

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

  // Easter egg name click interactions
  const [isRippling, setIsRippling] = useState(false);

  const handleSignatureClick = () => {
    if (isRippling) return;
    setIsRippling(true);
    setTimeout(() => {
      setIsRippling(false);
    }, 600);

    // Wait ~250ms then launch the hidden interaction callback
    setTimeout(() => {
      if (onNameClick) {
        onNameClick();
      }
    }, 250);
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
        {/* Editorial Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center w-full">
          
          {/* RIGHT COLUMN: PORTRAIT VISUAL ANCHOR (Comes first on mobile, second on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center w-full mb-4 lg:mb-0">
            <div className="relative p-4 sm:p-6 w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[350px] md:max-w-[370px] lg:max-w-[410px] xl:max-w-[450px] aspect-[4/5] mx-auto lg:mx-0">
              
              {/* Editorial Technical Corner Ticks for a highly crafted designed aesthetic */}
              {/* Top Left */}
              <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${isDarkMode ? 'border-brand-accent/40' : 'border-brand-accent/35'} pointer-events-none z-30`} />
              {/* Top Right */}
              <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${isDarkMode ? 'border-brand-accent/40' : 'border-brand-accent/35'} pointer-events-none z-30`} />
              {/* Bottom Left */}
              <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${isDarkMode ? 'border-brand-accent/40' : 'border-brand-accent/35'} pointer-events-none z-30`} />
              {/* Bottom Right */}
              <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${isDarkMode ? 'border-brand-accent/40' : 'border-brand-accent/35'} pointer-events-none z-30`} />
              
              {/* Monospace Metadata Accents to ground the studio theme */}
              <div className="absolute top-1.5 left-5 text-[7px] sm:text-[8px] font-mono text-zinc-500/80 tracking-widest pointer-events-none select-none uppercase z-30">
                Identity Anchor // V2.0
              </div>
              <div className="absolute bottom-1.5 right-5 text-[7px] sm:text-[8px] font-mono text-zinc-500/80 tracking-widest pointer-events-none select-none uppercase z-30">
                Saad's Lab Studio
              </div>

              {/* Premium mouse-follow radial glow behind the portrait */}
              <motion.div
                className="absolute w-[350px] h-[350px] rounded-full blur-[90px] bg-brand-accent/20 -z-10 pointer-events-none"
                style={{
                  x: glowX,
                  y: glowY,
                  translateX: '-20%',
                  translateY: '-20%',
                }}
              />

              {/* Subtle float animation wrapping container */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full"
              >
                {/* Parallax Interactive Framer/Linear Inspired Card */}
                <motion.div
                  style={{
                    translateX,
                    translateY,
                  }}
                  initial={{ opacity: 0, scale: 0.94, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.15 }}
                  className={`w-full h-full rounded-[24px] lg:rounded-[32px] p-2 relative transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-zinc-950/90 border border-zinc-850 shadow-[0_20px_50px_rgba(0,0,0,0.85)]' 
                      : 'bg-white border border-zinc-200 shadow-2xl'
                  }`}
                >
                  {/* Micro outer border accent */}
                  <div className={`absolute inset-0 m-2 rounded-[16px] lg:rounded-[24px] border ${
                    isDarkMode ? 'border-brand-accent/25' : 'border-brand-accent/20'
                  } pointer-events-none z-20`} />

                  {/* monospaced design pill */}
                  <div className={`absolute top-4 right-5 z-30 px-2 py-0.5 rounded text-[7px] font-mono font-bold tracking-wider ${
                    isDarkMode ? 'bg-black/80 text-brand-accent border border-brand-accent/25' : 'bg-white/95 text-zinc-800 border border-zinc-250'
                  }`}>
                    [REC.V2]
                  </div>

                  {/* Refined Image Box with center-face framing and luxury zoom on hover */}
                  <div className="w-full h-full overflow-hidden relative rounded-[12px] lg:rounded-[20px]">
                    <img
                      src={imageSrc}
                      onError={handleImageError}
                      alt="Ahmad Saad - Portrait"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.25] scale-[1.18] origin-[center_15%] filter contrast-[1.02] brightness-[0.98]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* LEFT COLUMN: PREMIUM TYPOGRAPHY & IDENTITY (Comes second on mobile, first on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start mt-4 lg:mt-0">
            
            {/* Identity Label */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase mb-2 ${
                isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
              }`}
            >
              SAAD'S LAB • DIGITAL IDENTITY V2.0
            </motion.p>

            {/* Signature Block - draws left-to-right on load, interactive trigger */}
            <motion.div
              initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 }}
              animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2 lg:mb-3"
            >
              <button
                onClick={handleSignatureClick}
                className="group relative font-signature text-3.5xl sm:text-4xl md:text-[38px] lg:text-[44px] xl:text-[48px] text-brand-accent select-none origin-center lg:origin-left cursor-pointer bg-transparent border-none p-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent/30 rounded inline-block"
                title="Secret Interaction"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-[#FCF6BA]">
                  Ahmad Saad
                </span>
                
                {/* Subtle underline line animation */}
                <span className="absolute bottom-1.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#BF953F]/0 via-[#BF953F]/45 to-[#BF953F]/0 transition-all duration-500 ease-out group-hover:w-full" />
                
                {/* Micro glow behind on hover */}
                <span className="absolute inset-0 bg-[#BF953F] opacity-0 blur-md group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none rounded-full" />
                
                {/* Real interactive click ripple element */}
                <AnimatePresence>
                  {isRippling && (
                    <motion.span
                      initial={{ scale: 0.7, opacity: 0.85, filter: 'blur(1px)' }}
                      animate={{ scale: 1.35, opacity: 0, filter: 'blur(8px)' }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 bg-gradient-to-r from-transparent via-[#BF953F]/50 to-transparent pointer-events-none rounded-full"
                    />
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
            
            {/* Massive Heading Title Block - line by line reveal */}
            <h1 className="text-[36px] xs:text-[42px] sm:text-[54px] md:text-[60px] lg:text-[68px] xl:text-[80px] font-display font-black tracking-tight leading-[0.98] lg:leading-[0.92] select-none uppercase mb-5 lg:mb-6">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}
                >
                  UI/UX Designer
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-brand-accent mt-0.5"
                >
                  Digital Creator
                </motion.span>
              </span>
            </h1>

            {/* Premium sub-tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className={`text-[8px] sm:text-[10px] font-mono tracking-[0.18em] uppercase flex items-center flex-wrap gap-x-2 gap-y-1 justify-center lg:justify-start mb-8 lg:mb-10 w-full ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              <span>CREATIVE STRATEGY</span>
              <span className="text-brand-accent font-bold">•</span>
              <span>HUMAN-CENTERED UX</span>
              <span className="text-brand-accent font-bold">•</span>
              <span>VISUAL DESIGN</span>
            </motion.div>

            {/* Seamless Interactive Buttons Group with Micro-interactions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:flex lg:flex-row lg:items-center lg:gap-6 mb-10 lg:mb-14 w-full max-w-[480px] lg:max-w-none"
            >
              <motion.button
                onClick={() => onNavigate('projects')}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                variants={{
                  hover: {
                    scale: 1.03,
                    boxShadow: '0 12px 30px rgba(229, 169, 59, 0.25)',
                  }
                }}
                className={`w-full lg:w-auto px-5 sm:px-8 h-11 md:h-12 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer border ${
                  isDarkMode 
                    ? 'bg-white text-black border-transparent hover:bg-zinc-100' 
                    : 'bg-zinc-900 text-white border-transparent hover:bg-zinc-800'
                }`}
              >
                <span>VIEW PROJECTS</span>
                <motion.div
                  variants={{
                    hover: { x: 4 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight size={12} className="shrink-0" />
                </motion.div>
              </motion.button>

              <motion.button
                onClick={() => onNavigate('resume')}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                variants={{
                  hover: {
                    scale: 1.03,
                    boxShadow: isDarkMode ? '0 12px 30px rgba(255, 255, 255, 0.05)' : '0 12px 30px rgba(0, 0, 0, 0.08)',
                  }
                }}
                className={`w-full lg:w-auto px-5 sm:px-8 h-11 md:h-12 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer border ${
                  isDarkMode
                    ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 text-zinc-650 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300'
                }`}
              >
                <motion.div
                  variants={{
                    hover: { y: -2 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FileText size={12} className="shrink-0" />
                </motion.div>
                <span>DOWNLOAD RESUME</span>
              </motion.button>
            </motion.div>

            {/* Minimal Text-Based Credentials Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full mt-2 lg:mt-4 pb-4 border-t lg:border-t-0 border-zinc-800/10 pt-6 lg:pt-0"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between w-full gap-6 sm:gap-4 md:gap-6 lg:gap-8">
                {/* UI/UX & Graphic Design */}
                <div className="flex-1 flex flex-col text-center lg:text-left items-center lg:items-start">
                  <span className={`text-[15px] sm:text-[17px] md:text-lg lg:text-xl font-display font-bold tracking-tight leading-snug ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    UI/UX & Graphic Design
                  </span>
                  <span className={`text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-[0.18em] uppercase mt-1 leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    User-Centered Design
                  </span>
                </div>

                {/* Divider 1 */}
                <div className={`hidden sm:block w-px h-8 ${isDarkMode ? 'bg-zinc-800/60' : 'bg-zinc-200'}`} />

                {/* Snapchat Lens Creator */}
                <div className="flex-1 flex flex-col text-center lg:text-left items-center lg:items-start">
                  <span className={`text-[15px] sm:text-[17px] md:text-lg lg:text-xl font-display font-bold tracking-tight leading-snug ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    Snapchat Lens
                  </span>
                  <span className={`text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-[0.18em] uppercase mt-1 leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    AR Creator
                  </span>
                </div>

                {/* Divider 2 */}
                <div className={`hidden sm:block w-px h-8 ${isDarkMode ? 'bg-zinc-800/60' : 'bg-zinc-200'}`} />

                {/* Google Certified */}
                <div className="flex-1 flex flex-col text-center lg:text-left items-center lg:items-start">
                  <span className={`text-[15px] sm:text-[17px] md:text-lg lg:text-xl font-display font-bold tracking-tight leading-snug ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    Google Certified
                  </span>
                  <span className={`text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-[0.18em] uppercase mt-1 leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Google Analytics & Digital Marketing
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
