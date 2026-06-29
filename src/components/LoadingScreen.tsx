import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Elegant steady progress spanning ~1.2 seconds
    const duration = 1200; // ms
    const intervalTime = 30; // ms
    const step = 100 / (duration / intervalTime);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(100, prev + step + (Math.random() * 2));
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 500); // Wait for fade transition
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 bg-[#060606] z-[99999] flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle gold grid texture background */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#BF953F_1px,transparent_1px),linear-gradient(to_bottom,#BF953F_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
          
          <div className="flex flex-col items-center max-w-sm px-6 text-center z-10 space-y-8">
            
            {/* Elegant Golden Monogram Circle Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              {/* Spinning/shining gold background ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 rounded-full border border-dashed border-[#BF953F]/30 absolute"
              />
              
              {/* Pulse gold aura */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-16 h-16 rounded-full border border-[#BF953F]/20 absolute bg-[#BF953F]/5 blur-sm"
              />

              {/* Central Gold S Monogram */}
              <div className="w-16 h-16 rounded-full border border-[#BF953F]/50 flex items-center justify-center bg-[#0C0C0C] relative shadow-lg shadow-[#BF953F]/10">
                <span className="text-2xl font-display font-black tracking-tighter bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-transparent bg-clip-text">
                  S
                </span>
              </div>
            </motion.div>

            {/* Title & "Crafting Experiences..." message */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl font-display font-bold tracking-widest text-white uppercase"
              >
                SAAD'S LAB
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xs font-mono text-[#FCF6BA] tracking-widest"
              >
                Crafting Experiences...
              </motion.p>
            </div>

            {/* Gold Progress Bar */}
            <div className="w-40 h-[2px] bg-zinc-900 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-full shadow-md shadow-[#BF953F]/40"
                style={{ width: `${progress}%` }}
                transition={{ type: 'spring', stiffness: 100, damping: 18 }}
              />
            </div>

            {/* Percentage Marker */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase"
            >
              {Math.floor(progress)}%
            </motion.span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
