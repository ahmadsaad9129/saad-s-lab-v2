import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Code, Sparkles, User, Award, ShieldCheck } from 'lucide-react';

export default function PortraitCanvas() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse tilt variables
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto z-10">
      {/* Dynamic Background Glow Behind Card */}
      <div className="absolute inset-4 bg-gradient-to-tr from-brand-accent/20 to-brand-secondary-accent/20 rounded-[32px] blur-3xl opacity-60 pointer-events-none transition-all duration-500" />

      {/* Tilt Interactive Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full bg-[#101010] border border-brand-border rounded-[32px] overflow-hidden shadow-2xl p-6 flex flex-col justify-between cursor-pointer group"
      >
        {/* Subtle grid accent inside the card */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:24px_24px] rounded-[32px]" />

        {/* Header - Designer Elements */}
        <div className="flex items-center justify-between z-10" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
            <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">SAAD'S LAB • ACTIVE</span>
          </div>
          <Sparkles size={14} className="text-brand-accent animate-spin-slow" />
        </div>

        {/* Artistic Abstract Silhouette Canvas Representation */}
        <div 
          className="relative flex-1 flex flex-col items-center justify-center my-6 z-10"
          style={{ transform: 'translateZ(40px)' }}
        >
          {/* Main Monogram Portal */}
          <div className="relative w-44 h-44 rounded-full flex items-center justify-center overflow-hidden">
            {/* Rotating gradient background ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent via-zinc-900 to-brand-secondary-accent animate-spin-slow opacity-60" />
            
            {/* Core container */}
            <div className="absolute inset-[3px] bg-[#0B0B0B] rounded-full flex flex-col items-center justify-center border border-zinc-900 shadow-inner">
              <span className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-brand-accent tracking-tighter leading-none select-none">
                AS
              </span>
              <span className="text-[8px] font-mono tracking-widest text-brand-secondary-accent mt-2 uppercase">
                Ahmad Saad
              </span>
            </div>

            {/* Micro Orbiting Node */}
            <div className="absolute w-2.5 h-2.5 rounded-full bg-brand-secondary-accent top-6 left-6 animate-pulse" />
          </div>

          {/* Designer Tags floating slightly */}
          <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center space-x-2 text-[9px] font-mono text-zinc-500">
            <span>UX RESEARCH</span>
            <span>•</span>
            <span>UI ARTISTRY</span>
            <span>•</span>
            <span>AR CREATIVE</span>
          </div>
        </div>

        {/* Card Footer - Metadata */}
        <div 
          className="flex flex-col space-y-2 z-10"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="h-[1px] bg-brand-border w-full" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">DESIGNER ID</p>
              <h4 className="text-sm font-semibold text-white font-display mt-0.5">Ahmad Saad</h4>
            </div>
            <div className="bg-[#151515] px-3 py-1.5 rounded-xl border border-brand-border flex items-center space-x-1.5">
              <Code size={12} className="text-brand-accent" />
              <span className="text-[9px] font-mono text-zinc-300">v2.0.26</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
