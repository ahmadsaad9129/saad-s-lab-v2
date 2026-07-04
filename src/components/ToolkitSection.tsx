import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, ArrowRight, ExternalLink, X, FolderGit, FileText } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  shortDesc: string;
  useCases: string[];
  logoSvg: React.ReactNode;
  brandColor: string; // luxurious version of brand color (gold-toned or original styled with luxury)
}

interface ToolkitSectionProps {
  isDarkMode: boolean;
  onNavigate: (path: 'home' | 'projects' | 'journey' | 'resume') => void;
}

// Confetti Particle interface for the exploration completion celebration
interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speedY: number;
  speedX: number;
}

export default function ToolkitSection({ isDarkMode, onNavigate }: ToolkitSectionProps) {
  const [discoveredTools, setDiscoveredTools] = useState<string[]>([]);
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [hoveredTool, setHoveredTool] = useState<Tool | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Custom high-fidelity inline SVGs for professional tech logos
  const tools: Tool[] = [
    {
      id: 'figma',
      name: 'Figma',
      shortDesc: 'The leading collaborative interface design tool.',
      useCases: ['Wireframing', 'UI Design', 'Interactive Prototypes', 'Design Systems'],
      brandColor: '#F24E1E',
      logoSvg: (
        <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M19 0C8.5 0 0 8.5 0 19C0 24.3 2.2 29.1 5.7 32.5C2.2 35.9 0 40.7 0 46C0 56.5 8.5 65 19 65C24.3 65 29.1 62.8 32.5 59.3C35.9 62.8 40.7 65 46 65C56.5 65 65 56.5 65 46C65 40.7 62.8 35.9 59.3 32.5C62.8 29.1 65 24.3 65 19C65 8.5 56.5 0 46 0H19Z" fill="none" />
          <path d="M9.5 19C9.5 13.8 13.8 9.5 19 9.5C24.2 9.5 28.5 13.8 28.5 19V28.5H19C13.8 28.5 9.5 24.2 9.5 19Z" fill="#F24E1E" />
          <path d="M9.5 38C9.5 32.8 13.8 28.5 19 28.5H28.5V38C28.5 43.2 24.2 47.5 19 47.5C13.8 47.5 9.5 43.2 9.5 38Z" fill="#A259FF" />
          <path d="M9.5 57C9.5 51.8 13.8 47.5 19 47.5C24.2 47.5 28.5 51.8 28.5 57C28.5 62.2 24.2 66.5 19 66.5C13.8 66.5 9.5 62.2 9.5 57Z" fill="#1ABCFE" />
          <path d="M28.5 28.5C28.5 23.3 32.8 19 38 19C43.2 19 47.5 23.3 47.5 28.5V38H38C32.8 38 28.5 33.7 28.5 28.5Z" fill="#0ACF83" />
          <path d="M28.5 9.5C28.5 4.3 32.8 0 38 0H47.5V19H38C32.8 19 28.5 14.7 28.5 9.5Z" fill="#FF7262" />
        </svg>
      )
    },
    {
      id: 'vscode',
      name: 'VS Code',
      shortDesc: 'Extremely powerful, highly extensible code editor.',
      useCases: ['HTML', 'CSS', 'JavaScript', 'React Development'],
      brandColor: '#007ACC',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M23.984 6.136a.855.855 0 0 0-.327-.584L17.844.757a.877.877 0 0 0-.9-.059.855.855 0 0 0-.462.753v3.74L4.858 1.43a.855.855 0 0 0-.962.11L.252 4.887a.858.858 0 0 0-.013 1.218l4.432 4.417L.242 14.939a.858.858 0 0 0 .013 1.218l3.644 3.347a.855.855 0 0 0 .962.11l11.624-3.763v3.74c0 .324.184.621.478.761.294.14.646.103.905-.095l5.814-4.795c.203-.162.32-.407.32-.667V6.8a.857.857 0 0 0-.317-.664zM16.482 14.28L10.37 9.873l6.113-4.407v8.814zM6.551 15.06l-3.328-3.047 3.328-3.047v6.094z" />
        </svg>
      )
    },
    {
      id: 'canva',
      name: 'Canva',
      shortDesc: 'A versatile graphic design platform for branding and content.',
      useCases: ['Brand Design', 'Marketing Creatives', 'Presentations', 'Social Media Design'],
      brandColor: '#00C4CC',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.29 14.29c-.39.39-1.02.39-1.41 0L8.29 12.7c-.39-.39-.39-1.02 0-1.41l3.59-3.59c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L10.41 12l2.88 2.88c.38.39.38 1.03 0 1.41z" />
        </svg>
      )
    },
    {
      id: 'googleanalytics',
      name: 'Google Analytics',
      shortDesc: 'In-depth behavioral tracking and traffic telemetry metrics.',
      useCases: ['Traffic Analysis', 'User Behaviour', 'Performance Tracking'],
      brandColor: '#E37400',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M19.5 20.25H21v-12h-1.5v12zm-4.5 0h1.5v-15H15v15zm-4.5 0H12v-8.25h-1.5v8.25zm-4.5 0H6v-4.5H4.5v4.5zM22.5 21H1.5V1.5H3V19.5h19.5V21z" />
        </svg>
      )
    },
    {
      id: 'lensstudio',
      name: 'Lens Studio',
      shortDesc: 'Powering advanced desktop and mobile AR face, world, and body tracking.',
      useCases: ['AR Lens Design', 'Interactive Experiences', 'Creative Filters'],
      brandColor: '#FFFC00',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
        </svg>
      )
    },
    {
      id: 'github',
      name: 'GitHub',
      shortDesc: 'A platform for version control, cloud staging, and open collaboration.',
      useCases: ['Version Control', 'Portfolio Hosting', 'Project Management'],
      brandColor: '#181717',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      shortDesc: 'State-of-the-art conversational AI model driving research and content planning.',
      useCases: ['Research', 'UX Writing', 'Brainstorming', 'Content Planning'],
      brandColor: '#10A37F',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M21.74 11.57a3.52 3.52 0 0 0-1.42-2.8A5.15 5.15 0 0 0 19 5.4a5.2 5.2 0 0 0-4.9-3A5.15 5.15 0 0 0 9.8 1.15a5.1 5.1 0 0 0-5.5 2.1A5.2 5.2 0 0 0 1.15 7.1a5.15 5.15 0 0 0 .33 4.3 5.1 5.1 0 0 0 1.42 2.8A5.15 5.15 0 0 0 5 18.6a5.2 5.2 0 0 0 4.9 3 5.15 5.15 0 0 0 4.3 1.25 5.1 5.1 0 0 0 5.5-2.1 5.2 5.2 0 0 0 3.15-3.85 5.15 5.15 0 0 0-.33-4.3zm-6.9 8.23a3.56 3.56 0 0 1-1.74-.46l-4.5-2.6a1.73 1.73 0 0 1-.87-1.5v-5.2a1.71 1.71 0 0 1 .87-1.5l4.5-2.6a3.52 3.52 0 0 1 3.48 0l4.5 2.6a1.73 1.73 0 0 1 .87 1.5v5.2a1.71 1.71 0 0 1-.87 1.5l-4.5 2.6a3.56 3.56 0 0 1-1.74.46z" />
        </svg>
      )
    },
    {
      id: 'react',
      name: 'React',
      shortDesc: 'A powerful component-driven interactive library for modern web software.',
      useCases: ['Interactive UI', 'Reusable Components', 'Animations'],
      brandColor: '#61DAFB',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M22 12c0-1.63-1.66-3.15-4.24-4.2C17.2 7.6 16.63 7.4 16 7.25c-.24-1.28-.62-2.45-1.12-3.41C13.88 1.94 12.56 1 11.5 1c-1.06 0-2.38.94-3.38 2.84-.5.96-.88 2.13-1.12 3.41-.63.15-1.2.35-1.76.55C2.66 8.85 1 10.37 1 12c0 1.63 1.66 3.15 4.24 4.2.56.2 1.13.4 1.76.55.24 1.28.62 2.45 1.12 3.41 1 1.9 2.32 2.84 3.38 2.84 1.06 0 2.38-.94 3.38-2.84.5-.96.88-2.13 1.12-3.41.63-.15 1.2-.35 1.76-.55C21.34 15.15 23 13.63 23 12zm-11.5 2.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      )
    },
    {
      id: 'photoshop',
      name: 'Adobe Photoshop',
      shortDesc: 'The gold standard for raster graphics, mockup layouts, and imagery asset tuning.',
      useCases: ['Image Editing', 'Mockups', 'Visual Assets'],
      brandColor: '#31A8FF',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#001E36" />
          <path d="M6 7.5h3.2c1.4 0 2.3.7 2.3 2s-.9 2-2.3 2H7.7V16.5H6V7.5zm1.7 1.5V10h1.4c.5 0 .8-.2.8-.5V9c0-.3-.3-.5-.8-.5H7.7zM12.5 11.2c.4-.5.9-.8 1.6-.8.8 0 1.3.4 1.5.9l-.9.4c-.1-.3-.3-.5-.6-.5s-.6.3-.6.8v.5c0 .6.3.9.7.9s.5-.2.6-.5l.9.3c-.2.7-.8 1.1-1.6 1.1-1.3 0-1.8-.8-1.8-1.8v-1.4z" fill="#31A8FF" />
        </svg>
      )
    },
    {
      id: 'illustrator',
      name: 'Adobe Illustrator',
      shortDesc: 'A veteran vector-editing standard for scalable artwork and layouts.',
      useCases: ['Logos', 'Vector Graphics', 'Brand Identity'],
      brandColor: '#FF9A00',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#261300" />
          <path d="M5.5 15h1.2l.3-1h1.5l.3 1H10l-2-6H6.5l-1 6zm1.9-2.3l.5-1.5.5 1.5H7.4zM11.5 8h1.5v1.5h-1.5V8zm0 2.5h1.5V15h-1.5v-4.5z" fill="#FF9A00" />
        </svg>
      )
    },
    {
      id: 'notion',
      name: 'Notion',
      shortDesc: 'A unified digital space for tracking tasks, sprint tickets, and logs.',
      useCases: ['Project Planning', 'Documentation', 'Task Management'],
      brandColor: '#000000',
      logoSvg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M4.1 2h15.8c1.1 0 2 .9 2 2v15.8c0 1.1-.9 2-2 2H4.1c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm2.2 4.1v11.8h2.3l4.3-6.9v6.9h2.3V6.1h-2.3L8.6 13V6.1H6.3z" />
        </svg>
      )
    }
  ];

  // Discover a tool on hover (Desktop) or tap (Mobile)
  const discoverTool = (tool: Tool) => {
    if (!discoveredTools.includes(tool.id)) {
      const updated = [...discoveredTools, tool.id];
      setDiscoveredTools(updated);
      
      // If all tools discovered, trigger premium modal & confetti
      if (updated.length === tools.length) {
        setShowCelebration(true);
        triggerConfetti();
      }
    }
  };

  const triggerConfetti = () => {
    const colors = ['#D4AF37', '#FCF6BA', '#FFFFFF', '#3B82F6', '#10B981', '#F59E0B'];
    const initialParticles: ConfettiParticle[] = Array.from({ length: 80 }).map((_, idx) => ({
      id: idx,
      x: Math.random() * 100, // percentage left
      y: -10 - Math.random() * 20, // start above screen
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      speedY: Math.random() * 1.5 + 1.2,
      speedX: (Math.random() - 0.5) * 1.2
    }));
    setConfetti(initialParticles);
  };

  // Animate custom confetti particles
  useEffect(() => {
    if (confetti.length === 0) return;
    const interval = setInterval(() => {
      setConfetti(prev => 
        prev.map(p => ({
          ...p,
          y: p.y + p.speedY,
          x: p.x + p.speedX,
          rotation: p.rotation + 3
        })).filter(p => p.y < 110)
      );
    }, 16);
    return () => clearInterval(interval);
  }, [confetti]);

  // Handle desktop hover and mobile click triggers
  const handleMouseEnterTool = (tool: Tool) => {
    setHoveredTool(tool);
    discoverTool(tool);
  };

  const handleMouseLeaveTool = () => {
    setHoveredTool(null);
  };

  const handleTapTool = (tool: Tool) => {
    setActiveTool(tool);
    discoverTool(tool);
  };

  return (
    <section 
      id="toolkit" 
      ref={sectionRef}
      className={`py-24 relative overflow-hidden transition-colors duration-500 border-t ${
        isDarkMode 
          ? 'bg-[#090909] border-zinc-900' 
          : 'bg-zinc-50 border-zinc-200'
      }`}
    >
      {/* Confetti Rendering */}
      {confetti.map(p => (
        <div 
          key={p.id}
          className="absolute pointer-events-none z-50 rounded-sm"
          style={{
            top: `${p.y}%`,
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            transition: 'transform 0.05s linear'
          }}
        />
      ))}

      {/* Decorative blurred background lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 right-10 w-96 h-96 rounded-full blur-[120px] opacity-[0.07] ${
          isDarkMode ? 'bg-[#D4AF37]' : 'bg-amber-500/10'
        }`} />
        <div className={`absolute bottom-1/4 left-10 w-96 h-96 rounded-full blur-[120px] opacity-[0.05] ${
          isDarkMode ? 'bg-[#D4AF37]' : 'bg-zinc-500/10'
        }`} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-1.5"
          >
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-brand-accent">
              DISCOVERY INTERACTIVE
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-5xl font-display font-black tracking-tight ${
              isDarkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Inside My <span className="text-brand-accent">Toolkit</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={`text-md font-semibold ${isDarkMode ? 'text-zinc-200' : 'text-zinc-850'}`}
          >
            These are the creative tools I use to transform ideas into digital experiences.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-sm font-light leading-relaxed max-w-xl mx-auto ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            Every tool plays a unique role in my design and development workflow. Hover or tap any tool to discover how I use it.
          </motion.p>
        </div>

        {/* Discovery Tracker Progress Indicator */}
        <div className="max-w-md mx-auto mb-16 p-4 rounded-2xl border border-zinc-800/10 dark:border-zinc-800/60 bg-zinc-950/5 dark:bg-zinc-900/30 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-2.5">
            <span className={`text-[10px] font-mono font-bold tracking-wider uppercase ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Toolkit Explorer
            </span>
            <span className="text-[11px] font-mono font-black text-brand-accent bg-brand-accent/5 px-2.5 py-0.5 rounded border border-brand-accent/20">
              {discoveredTools.length} / {tools.length} Discovered
            </span>
          </div>
          <div className="h-1.5 w-full bg-zinc-800/20 dark:bg-zinc-900/60 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-brand-accent to-amber-500"
              initial={{ width: 0 }}
              animate={{ width: `${(discoveredTools.length / tools.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Main Staggered/Floating Cluster & Info Side-Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Staggered Organic Container of Tools (8 Cols) */}
          <div className="lg:col-span-7 flex flex-wrap justify-center gap-5 relative py-6">
            
            {tools.map((tool, idx) => {
              const isDiscovered = discoveredTools.includes(tool.id);
              
              // Organic slow float offsets using mathematical modulo variables
              const floatDuration = 5 + (idx % 3) * 1.2;
              const floatDelay = idx * 0.2;
              
              return (
                <motion.div
                  key={tool.id}
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: floatDuration,
                    delay: floatDelay,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  onMouseEnter={() => handleMouseEnterTool(tool)}
                  onMouseLeave={handleMouseLeaveTool}
                  onClick={() => handleTapTool(tool)}
                  className={`relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-center space-x-3 backdrop-blur-md select-none touch-none ${
                    isDarkMode 
                      ? 'bg-zinc-950/40 border-zinc-800/60 hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] text-white' 
                      : 'bg-white border-zinc-200/80 hover:border-brand-accent/50 hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)] text-zinc-800 shadow-sm'
                  }`}
                  style={{
                    // Slight dimensional offsets to keep it feeling unaligned and organic
                    marginTop: idx % 3 === 1 ? '16px' : idx % 3 === 2 ? '-8px' : '0px',
                    minWidth: '130px',
                  }}
                >
                  {/* Subtle success check indicator on discovered tools */}
                  {isDiscovered && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1.5 -right-1.5 bg-brand-accent text-black p-0.5 rounded-full z-10"
                    >
                      <Check size={8} strokeWidth={4} />
                    </motion.div>
                  )}

                  <div 
                    className="p-1 rounded transition-colors" 
                    style={{ color: tool.brandColor }}
                  >
                    {tool.logoSvg}
                  </div>
                  
                  <span className="text-xs font-mono font-bold tracking-wide">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}

          </div>

          {/* Elegant Display Card Column (5 Cols) */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              
              {/* If an item is hovered or clicked, show details */}
              {(hoveredTool || activeTool) ? (
                <motion.div
                  key={(hoveredTool || activeTool)!.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`p-6 md:p-8 rounded-3xl border ${
                    isDarkMode 
                      ? 'bg-zinc-950/60 border-zinc-800 backdrop-blur-md shadow-2xl shadow-black/40' 
                      : 'bg-white border-zinc-200 shadow-xl'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="p-3.5 rounded-2xl"
                        style={{ 
                          backgroundColor: `${(hoveredTool || activeTool)!.brandColor}12`,
                          color: (hoveredTool || activeTool)!.brandColor 
                        }}
                      >
                        {(hoveredTool || activeTool)!.logoSvg}
                      </div>
                      <div>
                        <h3 className={`text-lg md:text-xl font-display font-black tracking-tight ${
                          isDarkMode ? 'text-white' : 'text-zinc-900'
                        }`}>
                          {(hoveredTool || activeTool)!.name}
                        </h3>
                        <span className="text-[10px] font-mono tracking-wider text-brand-accent uppercase font-semibold">
                          PROFESSIONAL STACK
                        </span>
                      </div>
                    </div>

                    {/* Mobile Tap-To-Close Button */}
                    {activeTool && (
                      <button 
                        onClick={() => setActiveTool(null)}
                        className={`p-2 rounded-full border transition-colors ${
                          isDarkMode 
                            ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white' 
                            : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  <p className={`text-xs md:text-sm font-light leading-relaxed mb-6 ${
                    isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                  }`}>
                    {(hoveredTool || activeTool)!.shortDesc}
                  </p>

                  <div className="space-y-3">
                    <h4 className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                      isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                    }`}>
                      How I Use It:
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(hoveredTool || activeTool)!.useCases.map((useCase, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center space-x-2.5 p-2 rounded-xl border text-[11px] font-medium ${
                            isDarkMode 
                              ? 'bg-zinc-900/30 border-zinc-800/60 text-zinc-300' 
                              : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 bg-brand-accent rounded-full flex-shrink-0" />
                          <span className="truncate">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              ) : (
                // Passive Guide State Card
                <motion.div
                  key="passive-guide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`p-8 rounded-3xl border border-dashed text-center flex flex-col items-center justify-center py-16 ${
                    isDarkMode ? 'border-zinc-800 text-zinc-500' : 'border-zinc-300 text-zinc-400'
                  }`}
                >
                  <Sparkles className="text-brand-accent w-8 h-8 animate-pulse mb-4" />
                  <h4 className={`text-sm font-display font-bold tracking-tight mb-1.5 ${
                    isDarkMode ? 'text-zinc-400' : 'text-zinc-700'
                  }`}>
                    Interactive Details Dock
                  </h4>
                  <p className="text-xs font-light max-w-xs leading-relaxed">
                    Hover over or tap any floating software logo on the left to review its short description and structural use-cases in my workflows.
                  </p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Completion Modal Celebration */}
      <AnimatePresence>
        {showCelebration && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-md w-full bg-zinc-950 border border-brand-accent/30 p-8 rounded-3xl text-center relative shadow-2xl"
              style={{
                boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.1)'
              }}
            >
              {/* Premium Glow Seal */}
              <div className="mx-auto w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mb-6">
                <Sparkles size={30} className="text-brand-accent animate-pulse" />
              </div>

              <h3 className="text-2xl font-display font-black tracking-tight text-white mb-2">
                Toolkit Fully Explored
              </h3>
              
              <div className="h-[2px] w-12 bg-brand-accent mx-auto mb-5" />

              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-1.5">
                You've explored the complete toolkit behind my work.
              </p>
              
              <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                Every project on this portfolio is built using these technologies and creative tools. Let's build something amazing together!
              </p>

              {/* Special Badge Indicator */}
              <div className="bg-brand-accent/5 border border-brand-accent/10 p-4 rounded-2xl mb-8 flex items-center space-x-3.5 text-left">
                <div className="bg-[#EAB308]/10 border border-[#EAB308]/20 p-2 rounded-lg">
                  <Check className="text-[#EAB308] w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono font-bold tracking-wider text-[#EAB308] uppercase">
                    100% Verification Achieved
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-light mt-0.5 leading-normal">
                    You've successfully completed the toolkit audit.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setShowCelebration(false);
                    onNavigate('projects');
                  }}
                  className="w-full bg-brand-accent hover:bg-brand-accent-hover text-black py-3 rounded-full text-xs font-bold tracking-wider hover:shadow-lg hover:shadow-brand-accent/20 transition-all cursor-pointer"
                >
                  VIEW PROJECTS
                </button>
                
                <button
                  onClick={() => {
                    setShowCelebration(false);
                    onNavigate('resume');
                  }}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 py-3 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer"
                >
                  DOWNLOAD RÉSUMÉ
                </button>
                
                <button
                  onClick={() => setShowCelebration(false)}
                  className="w-full text-zinc-400 hover:text-white py-1.5 text-xs font-mono tracking-widest transition-all cursor-pointer"
                >
                  CONTINUE EXPLORING
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
