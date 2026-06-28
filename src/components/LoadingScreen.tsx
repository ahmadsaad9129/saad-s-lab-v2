import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Progress increment timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const remaining = 100 - prev;
        const step = Math.max(1, Math.floor(Math.random() * remaining * 0.4));
        return prev + step;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 400); // Trigger completion after exit transition
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 bg-[#0B0B0B] z-[99999] flex flex-col items-center justify-center noise-bg"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center max-w-sm px-6 text-center">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-2"
            >
              Saad's Lab
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs md:text-sm font-sans text-brand-secondary-accent tracking-widest uppercase mb-8"
            >
              Designing Experiences. Inspiring Connections.
            </motion.p>

            {/* Custom Progress Line Container */}
            <div className="w-48 h-[2px] bg-[#1A1A1A] rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-accent to-brand-secondary-accent rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              />
            </div>

            {/* Percentage Indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-[10px] font-mono text-brand-muted mt-2 tracking-wider"
            >
              LOADING {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
