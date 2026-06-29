import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, ExternalLink, Compass, ShieldCheck, Layers, LayoutGrid, CheckCircle, ChevronRight, HelpCircle } from 'lucide-react';

interface ProjectsViewProps {
  projects: Project[];
  isDarkMode: boolean;
  selectedProjectId?: string | null;
  onSelectProject?: (project: Project | null) => void;
}

export default function ProjectsView({ projects, isDarkMode, selectedProjectId, onSelectProject }: ProjectsViewProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'UX/UI' | 'Brand'>('All');
  const [localSelectedProject, setLocalSelectedProject] = useState<Project | null>(null);

  // Sync with external state if provided
  useEffect(() => {
    if (selectedProjectId) {
      const proj = projects.find(p => p.id === selectedProjectId) || null;
      setLocalSelectedProject(proj);
    } else {
      setLocalSelectedProject(null);
    }
  }, [selectedProjectId, projects]);

  const handleSelectProject = (proj: Project | null) => {
    setLocalSelectedProject(proj);
    if (onSelectProject) {
      onSelectProject(proj);
    }
    window.scrollTo(0, 0);
  };

  const filterChips: { label: string; value: typeof activeFilter }[] = [
    { label: 'All Projects', value: 'All' },
    { label: 'UX/UI & Wireframing', value: 'UX/UI' },
    { label: 'Brand & Graphic Design', value: 'Brand' },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'UX/UI') return project.id === 'figma-wireframing' || project.id === 'ui-design-replications' || project.id === 'mobile-app-interface';
    if (activeFilter === 'Brand') return project.id === 'brand-identity' || project.id === 'aquargin-marketing';
    return true;
  });

  // Render high fidelity mockups using styled React components inside the thumbnail area!
  const renderInteractiveMockup = (projectId: string) => {
    switch (projectId) {
      case 'figma-wireframing':
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-500/10 to-brand-accent/30 flex flex-col p-5 relative overflow-hidden select-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px]" />
            <div className="w-full bg-[#0F172A]/95 rounded-xl border border-white/10 shadow-2xl flex-grow flex flex-col overflow-hidden">
              <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between border-b border-white/5 shrink-0">
                <div className="flex space-x-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <div className="bg-slate-950/85 rounded-md px-8 py-0.5 text-[7px] font-mono text-zinc-500">figma.com/file/ahmadsaad-wireframes</div>
                <div className="w-4" />
              </div>
              <div className="p-3 flex-grow grid grid-cols-12 gap-3 text-left">
                <div className="col-span-8 space-y-2">
                  <span className="text-[8px] font-bold text-indigo-400">User Flow Blueprint</span>
                  <div className="bg-slate-800/80 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                    <div>
                      <h5 className="text-[8px] font-bold text-white">01 • Initiate Request</h5>
                      <p className="text-[6px] text-zinc-400">Scan payload metadata & credentials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'ui-design-replications':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#EC4899] to-[#4D062B] flex flex-col p-5 relative overflow-hidden select-none">
            <div className="w-full bg-[#090206] rounded-xl border border-white/5 flex-grow p-3 flex flex-col justify-between text-left shadow-2xl">
              <div className="space-y-2">
                <span className="text-[7px] text-pink-400 font-mono tracking-widest uppercase">Linear × Apple Glass Card</span>
                <div className="bg-pink-950/20 backdrop-blur-md rounded-xl border border-white/10 p-2.5">
                  <p className="text-[8px] font-bold text-white tracking-tight">Synchronous Thread Engine</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'brand-identity':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#8B5CF6] to-[#2E1065] flex flex-col p-5 relative overflow-hidden select-none">
            <div className="absolute inset-0 bg-[#0B0716] border border-white/5 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="text-left shrink-0">
                <p className="text-[7px] font-mono text-purple-400 uppercase tracking-wider">Logo Construction Guide</p>
              </div>
            </div>
          </div>
        );
      case 'aquargin-marketing':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#10B981] to-[#047857] flex flex-col p-5 relative overflow-hidden select-none">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:10px_10px]" />
            <div className="w-full bg-[#05110E] rounded-xl border border-white/10 flex-grow flex flex-col justify-between p-4 shadow-2xl relative overflow-hidden text-left">
              <div className="space-y-2">
                <span className="text-[7px] font-mono text-emerald-400 uppercase tracking-widest">Aquargin Campaign Poster</span>
                <h6 className="text-xs font-display font-bold text-white leading-tight uppercase">Water Intelligence</h6>
              </div>
            </div>
          </div>
        );
      case 'mobile-app-interface':
        return (
          <div className="w-full h-full bg-gradient-to-br from-indigo-500/10 to-brand-accent/30 flex flex-col items-center justify-center p-5 relative overflow-hidden select-none">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:10px_10px]" />
            <div className="w-36 bg-[#080E10] rounded-[24px] border-[3px] border-zinc-800 shadow-2xl flex flex-col overflow-hidden h-full">
              <div className="w-12 h-3 bg-zinc-850 rounded-b-xl mx-auto shrink-0 flex items-center justify-center">
                <div className="w-4 h-0.5 bg-zinc-700 rounded-full" />
              </div>
              <div className="flex-1 p-2 text-left flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[6px] font-mono text-brand-accent uppercase">Saad Labs Mobile v3</span>
                  <div className="bg-[#12141C] p-2 rounded-lg border border-brand-accent/20">
                    <p className="text-[7px] font-bold text-white">Next-Gen Interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleNextProject = () => {
    if (!localSelectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === localSelectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    handleSelectProject(projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!localSelectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === localSelectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    handleSelectProject(projects[prevIndex]);
  };

  return (
    <div className={`min-h-screen pt-28 pb-24 transition-colors duration-500 ${
      isDarkMode ? 'bg-[#0C0C0C]' : 'bg-white'
    }`}>
      <AnimatePresence mode="wait">
        
        {/* VIEW 1: PROJECTS GRID LISTING */}
        {!localSelectedProject ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-6 md:px-12 space-y-16"
          >
            {/* Header section */}
            <div className="text-left space-y-4 max-w-3xl">
              <span className="text-xs font-mono tracking-widest text-brand-accent uppercase">Portfolio Showcase</span>
              <h1 className={`text-4xl md:text-6xl font-display font-black tracking-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}>
                Selected Cases & Challenges
              </h1>
              <p className={`text-sm md:text-base leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                A curated compilation of product wireframes, comprehensive B2B dashboards, and visual identities crafted to turn complex systems into frictionless digital products.
              </p>
            </div>

            {/* Filter chips with projects count */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/10 dark:border-zinc-800/50 pb-6">
              <div className="flex flex-wrap gap-2">
                {filterChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFilter(chip.value)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      activeFilter === chip.value
                        ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/25'
                        : isDarkMode
                          ? 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                          : 'bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Projects counter */}
              <span className="text-xs font-mono text-zinc-500 self-start md:self-auto">
                Showing {filteredProjects.length} of {projects.length} Projects
              </span>
            </div>

            {/* Responsive Project Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  whileHover={{ y: -4 }}
                  onClick={() => handleSelectProject(project)}
                  className={`border rounded-[32px] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                    isDarkMode
                      ? 'bg-[#121212]/90 border-zinc-850 hover:border-zinc-700 hover:bg-[#151515] hover:shadow-xl'
                      : 'bg-white border-zinc-200 hover:border-zinc-350 hover:shadow-lg hover:shadow-zinc-100/55'
                  }`}
                >
                  {/* Thumbnail frame */}
                  <div className="aspect-[1.5] w-full overflow-hidden shrink-0 relative border-b border-zinc-800/10 dark:border-zinc-800/50">
                    <div className="absolute inset-0">
                      {renderInteractiveMockup(project.id)}
                    </div>
                  </div>

                  {/* Card content details */}
                  <div className="p-6 flex-grow flex flex-col justify-between text-left space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-zinc-500">
                        <span className="uppercase font-bold text-brand-accent">{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      
                      <h3 className={`text-xl font-display font-bold leading-tight ${
                        isDarkMode ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className={`text-xs leading-relaxed line-clamp-3 ${
                        isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Tools and Action link */}
                    <div className="space-y-4 pt-3 border-t border-zinc-800/10 dark:border-zinc-800/50">
                      <div className="flex flex-wrap gap-1">
                        {project.tools.slice(0, 3).map((tool, idx) => (
                          <span
                            key={idx}
                            className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                              isDarkMode ? 'bg-zinc-900 text-zinc-400 border border-zinc-800' : 'bg-zinc-100 text-zinc-600'
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-semibold text-brand-accent hover:text-brand-secondary-accent">
                        <span>READ FULL CASE STUDY</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium "More Coming Soon" Area */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20 pt-16 border-t border-zinc-800/10 dark:border-zinc-800/40 max-w-3xl mx-auto text-center space-y-6"
            >
              <h3 className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}>
                More Projects Coming Soon
              </h3>
              
              <p className={`text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
              }`}>
                I'm continuously working on new UI/UX case studies, branding projects, digital experiences, and creative experiments. More work will be added here soon.
              </p>

              <div className="pt-2 flex justify-center">
                <span className={`inline-flex items-center space-x-2 px-5 py-2 rounded-full font-mono text-xs font-bold tracking-wide transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-brand-accent/5 text-brand-accent border border-brand-accent/20' 
                    : 'bg-amber-500/5 text-amber-700 border border-amber-500/20'
                }`}>
                  <span>✨ New Projects Coming Soon</span>
                </span>
              </div>
            </motion.div>

          </motion.div>
        ) : (
          
          /* VIEW 2: COMPREHENSIVE CASE STUDY storytelling PAGE */
          <motion.div
            key="case-study"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-6"
          >
            {/* Upper Floating Case Navigation back bar */}
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-zinc-800/10 dark:border-zinc-800/50">
              <button
                onClick={() => handleSelectProject(null)}
                className={`flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                  isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <ArrowLeft size={16} />
                <span>BACK TO PROJECTS</span>
              </button>

              <div className="flex space-x-2">
                <button
                  onClick={handlePrevProject}
                  className={`p-2 rounded-full border cursor-pointer ${
                    isDarkMode ? 'border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white bg-zinc-900/50' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-600'
                  }`}
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={handleNextProject}
                  className={`p-2 rounded-full border cursor-pointer ${
                    isDarkMode ? 'border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white bg-zinc-900/50' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-600'
                  }`}
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Case Study Header Banner representation */}
            <div className="space-y-6 text-left mb-12">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-accent">
                {localSelectedProject.category} • Case Study
              </span>
              
              <h1 className={`text-3xl md:text-5xl font-display font-black tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-zinc-900'
              }`}>
                {localSelectedProject.title}
              </h1>

              {/* Grid specs overview: Role, Duration, Tools, Date */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border text-left mt-8 bg-zinc-900/5 border-zinc-200 dark:bg-zinc-900/40 dark:border-zinc-850">
                <div className="space-y-1">
                  <p className="text-[9px] font-mono uppercase text-zinc-500">My Role</p>
                  <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>{localSelectedProject.role}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-mono uppercase text-zinc-500">Duration</p>
                  <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>{localSelectedProject.duration}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-mono uppercase text-zinc-500">Date Completed</p>
                  <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-zinc-800'}`}>{localSelectedProject.year}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-mono uppercase text-zinc-500">Workspace</p>
                  <p className="text-xs font-bold text-brand-accent">Ahmad's Lab</p>
                </div>
              </div>
            </div>

            {/* Comprehensive case study contents stack */}
            <div className="space-y-12 text-left">
              
              {/* SECTION 1: INTRODUCTION & CHALLENGE */}
              <div className="space-y-4">
                <h3 className={`text-xl font-display font-bold border-l-2 border-brand-accent pl-3 ${
                  isDarkMode ? 'text-white' : 'text-zinc-900'
                }`}>
                  Project Summary & Challenge
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${
                  isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                  {localSelectedProject.longDescription || localSelectedProject.description}
                </p>
                
                {localSelectedProject.challenge && (
                  <div className={`p-5 rounded-2xl border text-xs leading-relaxed mt-4 ${
                    isDarkMode ? 'bg-[#151515] border-zinc-800 text-zinc-300' : 'bg-red-50/40 border-red-100 text-zinc-750'
                  }`}>
                    <div className="flex items-center space-x-1.5 text-red-500 font-bold mb-2 uppercase font-mono tracking-wider text-[10px]">
                      <HelpCircle size={12} />
                      <span>The Core UX Challenge</span>
                    </div>
                    {localSelectedProject.challenge}
                  </div>
                )}
              </div>

              {/* SECTION 2: STRATEGIC PROJECT GOALS */}
              {localSelectedProject.goals && (
                <div className="space-y-4">
                  <h3 className={`text-xl font-display font-bold border-l-2 border-brand-accent pl-3 ${
                    isDarkMode ? 'text-white' : 'text-zinc-900'
                  }`}>
                    Strategic Goals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {localSelectedProject.goals.map((goal, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border text-xs flex items-start space-x-3 ${
                          isDarkMode ? 'bg-zinc-900/60 border-zinc-850 text-zinc-300' : 'bg-zinc-50 border-zinc-150 text-zinc-600'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 3: HUMAN CENTERED PROCESS STEPS */}
              {localSelectedProject.process && (
                <div className="space-y-4">
                  <h3 className={`text-xl font-display font-bold border-l-2 border-brand-accent pl-3 ${
                    isDarkMode ? 'text-white' : 'text-zinc-900'
                  }`}>
                    Design & Research Process
                  </h3>
                  
                  <div className="space-y-6 mt-4">
                    {localSelectedProject.process.map((p, idx) => (
                      <div key={idx} className="flex gap-4 items-start relative">
                        {/* Number bullet and vertical line */}
                        <div className="flex flex-col items-center shrink-0">
                          <span className="w-7 h-7 rounded-full bg-brand-accent text-white text-[10px] font-mono font-black flex items-center justify-center">
                            {idx + 1}
                          </span>
                          {idx < (localSelectedProject.process?.length || 0) - 1 && (
                            <div className="w-[1.5px] h-20 bg-zinc-800" />
                          )}
                        </div>

                        {/* Content text */}
                        <div className="space-y-1.5">
                          <h4 className={`text-sm md:text-base font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                            {p.step}
                          </h4>
                          <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            {p.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 4: CORE INSIGHTS & LEARNINGS */}
              {localSelectedProject.learnings && (
                <div className="space-y-4 pt-4 border-t border-zinc-850">
                  <h3 className={`text-xl font-display font-bold border-l-2 border-brand-accent pl-3 ${
                    isDarkMode ? 'text-white' : 'text-zinc-900'
                  }`}>
                    Reflections & Key Learnings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    {localSelectedProject.learnings.map((learning, idx) => (
                      <div
                        key={idx}
                        className={`p-5 rounded-2xl border text-xs leading-relaxed ${
                          isDarkMode ? 'bg-[#151515] border-zinc-800 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-600'
                        }`}
                      >
                        <div className="flex items-center space-x-1.5 text-brand-accent font-bold mb-2 font-mono uppercase tracking-wider text-[10px]">
                          <CheckCircle size={12} />
                          <span>Key Insight #{idx + 1}</span>
                        </div>
                        {learning}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 5: TOOLS USED SUMMARY */}
              <div className="space-y-4 pt-4 border-t border-zinc-850">
                <h4 className={`text-xs font-mono uppercase tracking-widest ${
                  isDarkMode ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  Tools & Capabilities Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {localSelectedProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-mono font-medium px-4 py-1.5 rounded-full border ${
                        isDarkMode
                          ? 'bg-zinc-900 border-zinc-800 text-zinc-300'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                  {localSelectedProject.technology?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-medium px-4 py-1.5 rounded-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Files details */}
              {(localSelectedProject.link || localSelectedProject.designFilesLink) && (
                <div className="flex flex-wrap gap-4 pt-6">
                  {localSelectedProject.link && (
                    <a
                      href={localSelectedProject.link}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider flex items-center space-x-2 border transition-all cursor-pointer ${
                        isDarkMode
                          ? 'bg-white text-black border-transparent hover:bg-zinc-100'
                          : 'bg-zinc-900 text-white border-transparent hover:bg-zinc-800'
                      }`}
                    >
                      <span>VIEW LIVE SITE / CASE STUDY</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {localSelectedProject.designFilesLink && (
                    <a
                      href={localSelectedProject.designFilesLink}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider flex items-center space-x-2 border cursor-pointer transition-all ${
                        isDarkMode
                          ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-850'
                          : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                      }`}
                    >
                      <span>BROWSE FIGMA DESIGN FILES</span>
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              )}

            </div>

            {/* Bottom Back Button layout */}
            <div className="mt-16 pt-8 border-t border-zinc-850 flex justify-center">
              <button
                onClick={() => handleSelectProject(null)}
                className={`flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase transition-all py-3 px-6 rounded-full border cursor-pointer ${
                  isDarkMode
                    ? 'border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900'
                    : 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <ArrowLeft size={16} />
                <span>BACK TO PROJECTS GRID</span>
              </button>
            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
