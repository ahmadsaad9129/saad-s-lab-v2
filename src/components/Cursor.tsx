import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'link' | 'view'>('default');
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the device is a touch device or mobile
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // 1. Explicit data-cursor attribute check
      const hoverAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (hoverAttr === 'view' || hoverAttr === 'open') {
        setHoverState('view');
        return;
      }

      // 2. Project Card Hover check
      const isProjectCard = target.closest('.group') && (target.closest('[id="work"]') || target.closest('.project-card') || target.closest('[key]') && target.closest('.grid'));
      if (isProjectCard) {
        setHoverState('view');
        return;
      }

      // 3. Navbar and standard page Links (Cursor shrinks)
      const isNavbarLink = target.closest('#navbar button') && !target.closest('.bg-zinc-950') && !target.closest('.bg-zinc-900');
      const isLink = target.closest('a') || isNavbarLink || target.closest('.nav-link') || target.tagName === 'A';
      if (isLink) {
        setHoverState('link');
        return;
      }

      // 4. Buttons & Interactive controls (Cursor expands)
      const isClickable = target.closest('button') || target.closest('[role="button"]') || target.closest('input') || target.closest('textarea') || target.closest('select');
      if (isClickable) {
        setHoverState('pointer');
        return;
      }

      setHoverState('default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const variants = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: '#E5A93B',
      border: 'none',
      text: null,
    },
    pointer: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(229, 169, 59, 0.08)',
      border: '1px solid #E5A93B',
      text: null,
    },
    link: {
      width: 4,
      height: 4,
      backgroundColor: '#E5A93B',
      border: 'none',
      text: null,
    },
    view: {
      width: 70,
      height: 70,
      backgroundColor: '#E5A93B',
      border: 'none',
      text: 'View',
    },
  };

  const currentVariant = variants[hoverState] || variants.default;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-[10px] font-mono font-black text-zinc-950 uppercase select-none tracking-widest"
      style={{
        x: position.x,
        y: position.y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: currentVariant.width,
        height: currentVariant.height,
        backgroundColor: currentVariant.backgroundColor,
        border: currentVariant.border,
      }}
      transition={{ type: 'spring', stiffness: 450, damping: 30, mass: 0.5 }}
    >
      {currentVariant.text && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {currentVariant.text}
        </motion.span>
      )}
    </motion.div>
  );
}
