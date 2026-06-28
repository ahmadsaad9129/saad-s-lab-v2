import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowRight, ExternalLink, Calendar, Compass, Layers, CheckCircle } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  onNavigate: (path: 'home' | 'projects' | 'journey' | 'resume') => void;
  isDarkMode: boolean;
}

export default function ProjectsSection({ projects, onProjectClick, onNavigate, isDarkMode }: ProjectsSectionProps) {
  
  // Render high fidelity mockups using styled React components inside the thumbnail area!
  const renderInteractiveMockup = (projectId: string) => {
    switch (projectId) {
      case 'figma-wireframing':
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-500/10 to-brand-accent/30 flex flex-col p-5 relative overflow-hidden select-none">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px]" />
            
            {/* Miniature Browser Mockup */}
            <div className="w-full bg-[#0F172A]/95 rounded-xl border border-white/10 shadow-2xl flex-1 flex flex-col overflow-hidden">
              {/* Browser Header bar */}
              <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-white/5 shrink-0">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="bg-slate-950/80 rounded-md px-10 py-0.5 text-[8px] font-mono text-zinc-500">figma.com/file/ahmadsaad-wireframes</div>
                <div className="w-6" />
              </div>
              
              {/* Browser Body Workspace */}
              <div className="p-3 flex-1 grid grid-cols-12 gap-3 text-left">
                {/* Timeline left col */}
                <div className="col-span-8 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-indigo-400">User Flow Blueprint</span>
                    <span className="text-[8px] font-mono text-zinc-500">3-Step Action</span>
                  </div>
                  
                  {/* Card 1 */}
                  <div className="bg-slate-800/80 p-2.5 rounded-lg border border-white/5 flex items-center justify-between shadow-sm">
                    <div>
                      <h5 className="text-[9px] font-bold text-white">01 • Initiate Request</h5>
                      <p className="text-[7px] text-zinc-400">Scan payload metadata & credentials</p>
                    </div>
                    <span className="text-[7px] bg-indigo-500/20 text-indigo-300 font-mono px-1.5 py-0.5 rounded-md">Step 1</span>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-slate-800/80 p-2.5 rounded-lg border border-white/5 flex items-center justify-between shadow-sm">
                    <div>
                      <h5 className="text-[9px] font-bold text-white">02 • Verify Security Tokens</h5>
                      <p className="text-[7px] text-zinc-400">Awaiting validation handshake</p>
                    </div>
                    <span className="text-[7px] bg-emerald-500/20 text-emerald-300 font-mono px-1.5 py-0.5 rounded-md">Step 2</span>
                  </div>
                </div>

                {/* Collaborative users side panel */}
                <div className="col-span-4 bg-slate-900/60 rounded-lg p-2 border border-white/5 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <p className="text-[7px] font-mono uppercase text-zinc-400 tracking-wider">Parameters</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[7px] text-zinc-300">
                        <span>Variables</span>
                        <span className="font-bold text-white">Active</span>
                      </div>
                      <div className="flex justify-between text-[7px] text-zinc-300">
                        <span>Grid</span>
                        <span className="font-bold text-white">8px</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 border-t border-white/5 pt-1.5">
                    <div className="w-4 h-4 rounded-full bg-indigo-500 text-[6px] flex items-center justify-center font-bold text-white ring-1 ring-white/20">AS</div>
                    <span className="text-[6px] text-zinc-400 font-mono">UX Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live User Cursor overlay */}
            <div className="absolute bottom-10 right-20 flex items-center space-x-1 bg-indigo-500/90 text-white px-2 py-1 rounded-full shadow-lg border border-indigo-400">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span className="text-[7px] font-mono font-bold tracking-wider uppercase">Ahmad Saad Designing</span>
            </div>
          </div>
        );
      case 'ui-design-replications':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#EC4899] to-[#4D062B] flex flex-col p-5 relative overflow-hidden select-none">
            {/* Apple styled component replicas */}
            <div className="w-full bg-[#090206] rounded-xl border border-white/5 flex-1 p-3.5 flex flex-col justify-between text-left shadow-2xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-pink-400 font-mono tracking-widest uppercase">Linear × Apple Glass Card</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                </div>
                
                {/* Clean dark card replicate */}
                <div className="bg-pink-950/20 backdrop-blur-md rounded-xl border border-white/10 p-3 relative overflow-hidden space-y-1.5 shadow-xl">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-pink-500/10 rounded-full blur-lg" />
                  <p className="text-[6px] font-mono text-zinc-500 uppercase">SYSTEM DIAGNOSTICS</p>
                  <h6 className="text-[10px] font-bold text-white tracking-tight">Synchronous Thread Engine</h6>
                  <p className="text-[7px] text-zinc-400">1px precise margins with subtle inner shadows.</p>
                </div>
              </div>

              {/* Spacing alignment grids */}
              <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[6px] font-mono text-zinc-500">
                <span>GRID: 8px MODULAR</span>
                <span>CONTRAST: 14.5:1 (PASS)</span>
              </div>
            </div>
          </div>
        );
      case 'brand-identity':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#8B5CF6] to-[#2E1065] flex flex-col p-5 relative overflow-hidden select-none">
            {/* Golden ratio grid brand mark showcase */}
            <div className="absolute inset-0 bg-[#0B0716] border border-white/5 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="text-left shrink-0">
                <p className="text-[8px] font-mono text-purple-400 uppercase tracking-wider">Logo Construction Guide</p>
                <p className="text-[6px] text-zinc-500">Golden Ratio circles and tangent lines grid</p>
              </div>

              {/* Logo geometric mark */}
              <div className="relative flex-grow flex items-center justify-center">
                {/* Golden ratio concentric circles */}
                <div className="absolute w-24 h-24 rounded-full border border-purple-500/10" />
                <div className="absolute w-16 h-16 rounded-full border border-purple-500/15" />
                <div className="absolute w-10 h-10 rounded-full border border-purple-500/20" />
                
                {/* Tangent line diagonals */}
                <div className="absolute w-28 h-[1px] bg-purple-500/10 rotate-45" />
                <div className="absolute w-28 h-[1px] bg-purple-500/10 -rotate-45" />

                {/* Main Brand Mark Logo: Interlocked custom vector shape */}
                <div className="relative z-10 w-14 h-14 bg-purple-600 rounded-[14px] flex items-center justify-center border border-purple-400/30 shadow-lg shadow-purple-500/25">
                  <span className="text-white text-2xl font-display font-black tracking-tight leading-none">S</span>
                </div>
              </div>

              {/* Mark details */}
              <div className="flex justify-between text-[6px] font-mono text-zinc-400 text-left border-t border-white/5 pt-2">
                <span>MARK STYLE: GEOMETRIC MONOGRAM</span>
                <span>SCALE: SCALABLE VECTOR SVG</span>
              </div>
            </div>
          </div>
        );
      case 'aquargin-marketing':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#10B981] to-[#047857] flex flex-col p-5 relative overflow-hidden select-none">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:10px_10px]" />
            
            {/* Poster Frame Mockup */}
            <div className="w-full bg-[#05110E] rounded-xl border border-white/10 flex-grow flex flex-col justify-between p-4 shadow-2xl relative overflow-hidden text-left">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-mono text-emerald-400 uppercase tracking-widest">Aquargin Campaign Poster</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h6 className="text-sm font-display font-black text-white leading-tight uppercase">Water Intelligence</h6>
                <p className="text-[7px] text-zinc-400 leading-relaxed max-w-[180px]">Crafted green campaign assets, unifying ecological monitoring with clean minimalist typography and crisp vector lines.</p>
              </div>

              <div className="flex justify-between text-[6px] font-mono text-zinc-500 border-t border-white/5 pt-2">
                <span>DPI: 300 VECTOR PRINT</span>
                <span>CLIENT: AQUARGIN PVT. LTD.</span>
              </div>
            </div>
          </div>
        );
      case 'mobile-app-interface':
        return (
          <div className="w-full h-full bg-gradient-to-br from-indigo-500/10 to-brand-accent/30 flex flex-col items-center justify-center p-5 relative overflow-hidden select-none">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:10px_10px]" />
            
            {/* Phone Frame Mockup */}
            <div className="w-44 bg-[#080E10] rounded-[30px] border-[4px] border-zinc-800 shadow-2xl flex flex-col overflow-hidden h-full">
              {/* Phone ear speaker notch */}
              <div className="w-16 h-3.5 bg-zinc-850 rounded-b-xl mx-auto shrink-0 flex items-center justify-center">
                <div className="w-6 h-0.5 bg-zinc-700 rounded-full" />
              </div>
              
              {/* Phone App Body */}
              <div className="flex-1 p-2.5 text-left flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-mono text-brand-accent uppercase">Saad Labs Mobile v3</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  </div>
                  
                  {/* Coming soon widget */}
                  <div className="bg-[#12141C] p-2 rounded-lg border border-brand-accent/20 space-y-1">
                    <p className="text-[5px] font-mono text-zinc-500">COMING SOON</p>
                    <h6 className="text-[8px] font-bold text-white">Next-Gen Interface</h6>
                    <p className="text-[6px] text-brand-accent">✓ Gesture-based Navigation</p>
                    <p className="text-[5px] text-zinc-400">Tactile bento modular screens</p>
                  </div>
                </div>

                {/* Coming Soon indicator */}
                <div className="bg-brand-accent p-1.5 rounded-xl text-center shadow-lg border border-brand-accent/30">
                  <span className="text-[7px] font-bold text-white tracking-widest uppercase">COMING SOON</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="work"
      className={`py-24 transition-colors duration-500 ${
        isDarkMode ? 'bg-[#0C0C0C]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="space-y-2 text-left max-w-2xl">
            <p className="text-xs font-mono tracking-widest text-brand-accent uppercase">Selected Works</p>
            <h2 className={`text-4xl md:text-5xl font-display font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-zinc-900'
            }`}>
              Featured Projects
            </h2>
            <p className={`text-sm leading-relaxed ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              A selection of projects that reflect my approach to solving real-world problems through design and continuous experimentation.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('projects');
              window.scrollTo(0, 0);
            }}
            className={`group inline-flex items-center space-x-2 text-sm font-semibold tracking-wide shrink-0 transition-colors py-2.5 px-5 rounded-full border ${
              isDarkMode 
                ? 'text-brand-accent hover:text-white border-zinc-800 hover:border-zinc-700 bg-zinc-900/10' 
                : 'text-zinc-900 hover:text-brand-accent border-zinc-200 hover:border-zinc-300 bg-zinc-50'
            }`}
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Bento Grid inspired Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {projects.slice(0, 6).map((project, index) => {
            // Determine bento size based on grid rules (mix of large & medium cards)
            // Card 0 & 1 take 7 and 5 columns respectively
            // Card 2 & 3 take 5 and 7 columns
            // Card 4 & 5 take 6 and 6 columns
            let gridColClass = 'lg:col-span-6';
            if (index === 0) gridColClass = 'lg:col-span-7';
            else if (index === 1) gridColClass = 'lg:col-span-5';
            else if (index === 2) gridColClass = 'lg:col-span-5';
            else if (index === 3) gridColClass = 'lg:col-span-7';
            else if (index === 4) gridColClass = 'lg:col-span-6';
            else if (index === 5) gridColClass = 'lg:col-span-6';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Math.min(0.2, index * 0.05) }}
                className={`${gridColClass} group flex flex-col justify-between border rounded-[32px] overflow-hidden transition-all duration-300 relative ${
                  isDarkMode
                    ? 'bg-[#121212] border-zinc-850 hover:border-zinc-700 hover:bg-[#151515] hover:shadow-2xl hover:shadow-black/60'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50'
                }`}
              >
                
                {/* Visual Project Thumbnail Frame (Interactive illustrations instead of flat screenshots) */}
                <div className="aspect-[16/10] w-full overflow-hidden shrink-0 border-b relative">
                  <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03] w-full h-full border-b ${
                    isDarkMode ? 'border-zinc-900' : 'border-zinc-100'
                  }`}>
                    {renderInteractiveMockup(project.id)}
                  </div>
                  
                  {/* Subtle hover gradient indicator */}
                  <div className="absolute inset-0 bg-black/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Content Info Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6 text-left">
                  <div className="space-y-3">
                    
                    {/* Upper Category, Duration & Year row */}
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-zinc-500">
                      <span className="uppercase font-bold text-brand-accent">{project.category}</span>
                      <div className="flex items-center space-x-2">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-display font-bold tracking-tight leading-tight transition-colors ${
                      isDarkMode ? 'text-white group-hover:text-brand-accent' : 'text-zinc-900 group-hover:text-brand-accent'
                    }`}>
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className={`text-xs md:text-sm leading-relaxed line-clamp-2 ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {project.description}
                    </p>

                  </div>

                  {/* Tech stack / Tools pills and detailed buttons on Card Footer */}
                  <div className="space-y-4 pt-2 border-t border-transparent group-hover:border-zinc-800/10 dark:group-hover:border-zinc-800/60 transition-colors duration-300">
                    
                    {/* Hover tools summary */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 4).map((tool, idx) => (
                        <span
                          key={idx}
                          className={`text-[9px] font-mono px-2.5 py-1 rounded-full border transition-all duration-300 ${
                            isDarkMode
                              ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400 group-hover:text-zinc-200'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-600 group-hover:text-zinc-800'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className={`text-[9px] font-mono px-2 py-1 text-zinc-500`}>
                          +{project.tools.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Button Trigger overlay */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => onProjectClick(project)}
                        className="text-xs font-semibold tracking-wider flex items-center space-x-1.5 text-brand-accent hover:text-brand-secondary-accent cursor-pointer transition-colors"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight size={14} />
                      </button>
                      
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`p-2 rounded-full border cursor-pointer transition-all ${
                            isDarkMode
                              ? 'border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900'
                              : 'border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                          }`}
                        >
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic section Bottom CTA button */}
        <div className="mt-16 flex justify-center">
          <motion.button
            whileHover={{ y: -3 }}
            onClick={() => {
              onNavigate('projects');
              window.scrollTo(0, 0);
            }}
            className={`px-10 py-4.5 rounded-full text-xs font-semibold tracking-widest uppercase border flex items-center space-x-3 cursor-pointer shadow-lg transition-all ${
              isDarkMode
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-850 hover:shadow-zinc-900/10'
                : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:bg-white hover:shadow-zinc-100/10'
            }`}
          >
            <span>Explore All Work</span>
            <ArrowRight size={14} className="text-brand-accent" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
