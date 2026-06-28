import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'view' | 'open' | 'visit' | 'explore'>('default');
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
      const hoverAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      
      if (hoverAttr) {
        setHoverState(hoverAttr as any);
      } else {
        // Fallback for general buttons and links
        const isClickable = target.closest('a, button, [role="button"], input[type="submit"], select, input, textarea');
        if (isClickable) {
          setHoverState('pointer');
        } else {
          setHoverState('default');
        }
      }
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
      width: 10,
      height: 10,
      backgroundColor: '#7C5CFF',
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(124, 92, 255, 0.15)',
      border: '1px solid #7C5CFF',
    },
    view: {
      width: 72,
      height: 72,
      backgroundColor: '#7C5CFF',
      text: 'View',
    },
    open: {
      width: 72,
      height: 72,
      backgroundColor: '#00C2FF',
      text: 'Open',
    },
    visit: {
      width: 72,
      height: 72,
      backgroundColor: '#7C5CFF',
      text: 'Visit',
    },
    explore: {
      width: 72,
      height: 72,
      backgroundColor: '#00D26A',
      text: 'Explore',
    },
  };

  const currentVariant = variants[hoverState] || variants.default;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-xs font-mono font-bold text-white uppercase select-none tracking-wider"
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
        border: (currentVariant as any).border || 'none',
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.6 }}
    >
      {'text' in currentVariant && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="text-[10px]"
        >
          {(currentVariant as any).text}
        </motion.span>
      )}
    </motion.div>
  );
}
