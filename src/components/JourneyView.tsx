import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TimelineEvent, Experience, Certification } from '../types';
import { 
  Palette, GraduationCap, Trophy, Briefcase, Mic, BarChart, Laptop, 
  Sparkles, Calendar, CheckCircle2, Star, Users, ArrowUpRight, Award, Flame, FlameKindling
} from 'lucide-react';

interface JourneyViewProps {
  timelineEvents: TimelineEvent[];
  isDarkMode: boolean;
}

export default function JourneyView({ timelineEvents, isDarkMode }: JourneyViewProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Google' | 'Academic' | 'Experience' | 'Hackathons'>('All');

  const getEventIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette size={16} className="text-purple-400" />;
      case 'GraduationCap':
        return <GraduationCap size={16} className="text-emerald-400" />;
      case 'Trophy':
        return <Trophy size={16} className="text-amber-500" />;
      case 'Briefcase':
        return <Briefcase size={16} className="text-[#00C2FF]" />;
      case 'Mic':
        return <Mic size={16} className="text-indigo-400" />;
      case 'BarChart':
        return <BarChart size={16} className="text-pink-400" />;
      case 'Laptop':
        return <Laptop size={16} className="text-sky-400" />;
      default:
        return <Star size={16} className="text-brand-accent" />;
    }
  };

  const filteredEvents = timelineEvents.filter(event => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Google') return event.title.toLowerCase().includes('google') || event.title.toLowerCase().includes('gdsc');
    if (activeTab === 'Academic') return event.icon === 'GraduationCap' || event.icon === 'BarChart';
    if (activeTab === 'Experience') return event.icon === 'Briefcase' || event.icon === 'Laptop';
    if (activeTab === 'Hackathons') return event.icon === 'Trophy' || event.icon === 'Mic';
    return true;
  });

  const tabChips: { label: string; value: typeof activeTab }[] = [
    { label: 'All Growth Milestones', value: 'All' },
    { label: 'Google Community Events', value: 'Google' },
    { label: 'Academia & Business Strategy', value: 'Academic' },
    { label: 'Professional Work Experience', value: 'Experience' },
    { label: 'Hackathons & Speaking', value: 'Hackathons' },
  ];

  return (
    <div className={`min-h-screen pt-28 pb-24 transition-colors duration-500 ${
      isDarkMode ? 'bg-[#0C0C0C]' : 'bg-white'
    }`}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header Section */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-xs font-mono tracking-widest text-brand-accent uppercase">My Growth Ledger</span>
          <h1 className={`text-4xl md:text-6xl font-display font-black tracking-tight leading-none ${
            isDarkMode ? 'text-white' : 'text-zinc-900'
          }`}>
            Journey & Foundations
          </h1>
          <p className={`text-sm md:text-base leading-relaxed ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Academic milestones, hackathons, guest speaking engagements, Google Developer activities, and freelance design work mapped chronologically from 2020 to Present.
          </p>
        </div>

        {/* Spotlights Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Spotlight 1: SIH Hackathon & Leadership Story */}
          <div className={`p-6 md:p-8 rounded-[32px] border relative overflow-hidden flex flex-col justify-between space-y-6 ${
            isDarkMode ? 'bg-[#121212]/95 border-zinc-850' : 'bg-zinc-50 border-zinc-200 shadow-sm'
          }`}>
            <div className="space-y-3 relative z-10">
              <span className="bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[8px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                Hackathon Spotlight
              </span>
              <h3 className={`text-xl font-display font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Smart India Hackathon</h3>
              <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                As Visual Design Lead, I turned complex technology problem-statements into clean, empathetic user flows. Directed branding structures, designed mockups on Figma, and polished slides for jury pitches, leading the team straight to the National Finals.
              </p>
            </div>
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-zinc-500 border-t border-zinc-800/20 dark:border-zinc-800/40 pt-4">
              <Award size={12} className="text-amber-500" />
              <span>National Finals Competitor • SIH 2024</span>
            </div>
          </div>

          {/* Spotlight 2: UI/UX Workshop Story */}
          <div className={`p-6 md:p-8 rounded-[32px] border relative overflow-hidden flex flex-col justify-between space-y-6 ${
            isDarkMode ? 'bg-[#121212]/95 border-zinc-850' : 'bg-zinc-50 border-zinc-200 shadow-sm'
          }`}>
            <div className="space-y-3 relative z-10">
              <span className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[8px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                Speaker & Workshop Spotlight
              </span>
              <h3 className={`text-xl font-display font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>UI/UX Design Workshop</h3>
              <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Invited by Integral University's Computer Applications department to deliver a specialized seminar introducing students to user experience thinking, standard research models, visual layout mechanics, and design tools.
              </p>
            </div>
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-zinc-500 border-t border-zinc-800/20 dark:border-zinc-800/40 pt-4">
              <Mic size={12} className="text-indigo-400" />
              <span>Conducted Guest Seminar • 120+ Students</span>
            </div>
          </div>

        </div>

        {/* Interactive Quick tabs divider */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/10 dark:border-zinc-800/50 pb-6">
          <div className="flex flex-wrap gap-2">
            {tabChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(chip.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === chip.value
                    ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/25'
                    : isDarkMode
                      ? 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                      : 'bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-350'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-zinc-500 self-start md:self-auto">
            Showing {filteredEvents.length} Milestones
          </span>
        </div>

        {/* Chronological Vertical Timeline */}
        <div className="relative text-left">
          
          {/* Connector timeline line */}
          <div className={`absolute left-4 md:left-1/2 top-4 bottom-4 w-[1.5px] -translate-x-[0.75px] ${
            isDarkMode ? 'bg-zinc-850' : 'bg-zinc-200'
          }`} />

          <div className="space-y-12 relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={event.year + '-' + event.title}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    
                    {/* Circle timeline Node */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 shadow-lg ${
                        isDarkMode
                          ? 'bg-zinc-950 border-zinc-800'
                          : 'bg-white border-zinc-200'
                      }`}>
                        {getEventIcon(event.icon)}
                      </div>
                    </div>

                    {/* Left Spacer */}
                    <div className="hidden md:block w-1/2" />

                    {/* Timeline Content Block */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div className={`p-6 rounded-[24px] border transition-all duration-300 relative ${
                        isDarkMode
                          ? 'bg-[#121212]/90 border-zinc-850 hover:border-zinc-700 hover:bg-[#151515]'
                          : 'bg-white border-zinc-200 hover:shadow-md'
                      }`}>
                        
                        {/* Header duration / status row */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-bold text-brand-accent tracking-wide">
                            {event.year}
                          </span>

                          {event.status === 'Current' ? (
                            <span className="bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase animate-pulse">
                              ACTIVE
                            </span>
                          ) : event.status === 'Completed' ? (
                            <span className="bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                              COMPLETED
                            </span>
                          ) : event.badge ? (
                            <span className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-[8px] font-mono font-semibold px-2 py-0.5 rounded-full uppercase">
                              {event.badge}
                            </span>
                          ) : null}
                        </div>

                        {/* Title & Sub */}
                        <div className="space-y-0.5 mb-3">
                          <h4 className={`text-base md:text-lg font-display font-bold leading-tight ${
                            isDarkMode ? 'text-white' : 'text-zinc-900'
                          }`}>
                            {event.title}
                          </h4>
                          {event.subtitle && (
                            <p className="text-xs text-zinc-400 font-semibold">{event.subtitle}</p>
                          )}
                        </div>

                        {/* Body description */}
                        <p className={`text-xs md:text-sm leading-relaxed ${
                          isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                        }`}>
                          {event.description}
                        </p>

                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
