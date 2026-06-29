import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Linkedin, FileText, X, ArrowRight, Lock } from 'lucide-react';

interface EasterEggProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: 'home' | 'projects' | 'journey' | 'resume') => void;
  isDarkMode: boolean;
}

// Custom, extremely high-performance canvas confetti
function SubtleConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Premium gold and pure/warm white palette
    const colors = [
      '#BF953F', // Classic Gold
      '#FCF6BA', // Pale Champagne Gold
      '#B38728', // Deep Rich Gold
      '#FBF5E6', // Warm White
      '#FFFFFF', // Pure White
    ];

    interface Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }

    // Low particle count for a highly sophisticated, premium look
    const particlesCount = 40;
    const particles: Particle[] = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * -100 - 20, // Start above the canvas
        size: Math.random() * 4 + 3.5, // 3.5px to 7.5px
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 1.8 - 0.9, // Gentle horizontal drift
        speedY: Math.random() * 1.6 + 1.0, // Slow luxurious descent
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 1.4 - 0.7,
        opacity: Math.random() * 0.35 + 0.65,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let activeParticles = 0;

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        // Elegant variation of tiny squares and circles
        if (p.size > 5) {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        if (p.y < height) {
          activeParticles++;
        }
      });

      if (activeParticles > 0) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
}

export default function EasterEgg({ isOpen, onClose, onNavigate, isDarkMode }: EasterEggProps) {
  const [phase, setPhase] = useState<'pre-animation' | 'modal' | 'idle'>('idle');

  useEffect(() => {
    if (isOpen) {
      setPhase('pre-animation');
      
      // Strict body scroll prevention
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        setPhase('modal');
      }, 950); // 800ms of reading + ~150ms buffer

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      setPhase('idle');
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    setPhase('idle');
    document.body.style.overflow = '';
    onClose();
  };

  const handleNavigateTo = (path: 'home' | 'projects' | 'journey' | 'resume') => {
    handleClose();
    setTimeout(() => {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="easter-egg-overlay" className="fixed inset-0 z-[99999] flex items-center justify-center select-none">
          
          {/* BACKGROUND OVERLAY (Slightly dimmed with premium backdrop blur) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-black/65 backdrop-blur-md"
            onClick={phase === 'modal' ? handleClose : undefined}
          />

          {/* PHASE 1: PRE-ANIMATION / ACCESS GRANTED STATUS */}
          {phase === 'pre-animation' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="z-50 flex flex-col items-center justify-center space-y-4"
            >
              <div className="flex items-center space-x-2.5">
                <Lock size={15} className="text-[#BF953F] animate-pulse" />
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                  className="overflow-hidden whitespace-nowrap text-xs font-mono text-[#FCF6BA] tracking-[0.25em] uppercase font-semibold text-shadow-gold"
                >
                  Access Granted...
                </motion.span>
              </div>
              <div className="w-16 h-[1.5px] bg-zinc-800 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#BF953F] to-transparent"
                />
              </div>
            </motion.div>
          )}

          {/* PHASE 2: GLASSMORPHISM MODAL */}
          {phase === 'modal' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              className={`relative z-50 w-full max-w-[480px] mx-4 p-8 md:p-10 rounded-[28px] border overflow-hidden flex flex-col justify-between shadow-2xl ${
                isDarkMode 
                  ? 'bg-zinc-950/75 border-[#BF953F]/35 shadow-[0_25px_60px_-15px_rgba(229,169,59,0.15)] text-white' 
                  : 'bg-zinc-900/90 border-[#BF953F]/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] text-white'
              } backdrop-blur-xl`}
              style={{
                background: 'linear-gradient(135deg, rgba(12,12,12,0.85) 0%, rgba(6,6,6,0.92) 100%)'
              }}
            >
              {/* Premium Background Confetti */}
              <SubtleConfetti />

              {/* Decorative Subtle Gold Corner Highlights */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#BF953F]/40 pointer-events-none rounded-tl-[24px]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#BF953F]/40 pointer-events-none rounded-tr-[24px]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#BF953F]/40 pointer-events-none rounded-bl-[24px]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#BF953F]/40 pointer-events-none rounded-br-[24px]" />

              {/* Close Button on Top-Right */}
              <motion.button
                onClick={handleClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white transition-colors cursor-pointer z-20 p-1"
                aria-label="Close modal"
              >
                <X size={16} />
              </motion.button>

              <div className="relative z-10 space-y-6">
                
                {/* Header Icon & Title */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-12 h-12 rounded-full border border-[#BF953F]/40 flex items-center justify-center bg-[#121212] shadow-md shadow-[#BF953F]/10"
                  >
                    <Sparkles size={18} className="text-[#FCF6BA]" />
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-transparent bg-clip-text text-center">
                    You found the hidden interaction.
                  </h3>
                </div>

                {/* Narrative Message */}
                <div className="space-y-3.5 text-center px-2">
                  <p className="text-xs md:text-sm font-light text-zinc-300 leading-relaxed font-sans">
                    Thanks for taking the time to explore my portfolio.
                  </p>
                  <p className="text-xs md:text-sm font-light text-zinc-300 leading-relaxed font-sans">
                    I believe great user experiences are built through curiosity, thoughtful details, and meaningful interactions — and you just discovered one of them.
                  </p>
                  <p className="text-xs md:text-sm font-light text-zinc-300 leading-relaxed font-sans">
                    I hope you enjoy exploring the rest of my work.
                  </p>
                  <div className="pt-3">
                    <p className="text-xs font-signature text-[#FCF6BA] text-md tracking-wider">
                      — Ahmad Saad
                    </p>
                  </div>
                </div>

                {/* Interactive CTAs Stack */}
                <div className="space-y-3 pt-4">
                  
                  {/* Download Resume Button */}
                  <motion.button
                    onClick={() => handleNavigateTo('resume')}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    variants={{
                      hover: {
                        scale: 1.025,
                        boxShadow: '0 8px 24px rgba(229, 169, 59, 0.2)',
                      }
                    }}
                    className="w-full h-11 rounded-full text-[10px] md:text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-zinc-950 transition-all duration-300 cursor-pointer border border-transparent"
                  >
                    <FileText size={13} />
                    <span>DOWNLOAD RÉSUMÉ</span>
                  </motion.button>

                  {/* LinkedIn Connect Button */}
                  <motion.a
                    href="https://linkedin.com/in/ahmadsaad9129"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    variants={{
                      hover: {
                        scale: 1.025,
                        borderColor: '#FCF6BA',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)'
                      }
                    }}
                    className="w-full h-11 rounded-full text-[10px] md:text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 border border-zinc-700/80 bg-zinc-900/30 text-zinc-300 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <Linkedin size={13} className="text-[#0A66C2]" />
                    <span>CONNECT ON LINKEDIN</span>
                  </motion.a>

                  {/* View Projects Button */}
                  <motion.button
                    onClick={() => handleNavigateTo('projects')}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    variants={{
                      hover: {
                        scale: 1.025,
                        borderColor: '#BF953F',
                        backgroundColor: 'rgba(229, 169, 59, 0.04)'
                      }
                    }}
                    className="w-full h-11 rounded-full text-[10px] md:text-xs font-semibold tracking-wider flex items-center justify-center space-x-2 border border-zinc-850 bg-transparent text-zinc-400 hover:text-zinc-200 transition-all duration-300 cursor-pointer"
                  >
                    <span>VIEW MY PROJECTS</span>
                    <ArrowRight size={13} />
                  </motion.button>

                </div>

                {/* Minimalist Close Footer Link */}
                <div className="text-center pt-2">
                  <button
                    onClick={handleClose}
                    className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest cursor-pointer"
                  >
                    [ Close / Dismiss ]
                  </button>
                </div>

              </div>

            </motion.div>
          )}

        </div>
      )}
    </AnimatePresence>
  );
}
