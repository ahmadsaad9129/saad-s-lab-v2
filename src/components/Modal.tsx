import { X, ExternalLink, Calendar, Wrench, Briefcase, Info, Compass, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0BF2] backdrop-blur-xl flex justify-center p-4 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-[#101010] border border-brand-border rounded-[32px] overflow-hidden shadow-2xl flex flex-col h-fit"
      >
        {/* Banner Top */}
        <div className={`h-40 md:h-56 bg-gradient-to-r ${project.imageColor} relative p-8 md:p-12 flex flex-col justify-end overflow-hidden`}>
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          {/* Category Pill */}
          <span className="absolute top-8 left-8 md:left-12 bg-white/10 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20">
            {project.category}
          </span>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 md:right-12 bg-black/30 backdrop-blur-md text-white hover:bg-brand-error p-2.5 rounded-full border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Project Title */}
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight drop-shadow-md">
            {project.title}
          </h2>
        </div>

        {/* Modal Core Content */}
        <div className="p-8 md:p-12 space-y-12">
          {/* Quick Specifications Metadata Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#151515] p-6 rounded-2xl border border-brand-border">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-accent/10 p-2.5 rounded-xl border border-brand-accent/20">
                <Briefcase size={16} className="text-brand-accent" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase">My Role</p>
                <p className="text-sm font-medium text-white">{project.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-brand-secondary-accent/10 p-2.5 rounded-xl border border-brand-secondary-accent/20">
                <Wrench size={16} className="text-brand-secondary-accent" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase">Primary Tool</p>
                <p className="text-sm font-medium text-white">{project.tools[0] || 'Figma'}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-brand-success/10 p-2.5 rounded-xl border border-brand-success/20">
                <Calendar size={16} className="text-brand-success" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase">Timeline</p>
                <p className="text-sm font-medium text-white">{project.duration}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                <Compass size={16} className="text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase">Year</p>
                <p className="text-sm font-medium text-white">{project.year}</p>
              </div>
            </div>
          </div>

          {/* Description & Overview */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-white flex items-center space-x-2">
              <Info size={18} className="text-brand-accent" />
              <span>Project Overview</span>
            </h3>
            <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Core Challenge */}
          {project.challenge && (
            <div className="space-y-4 bg-zinc-900/40 p-6 rounded-2xl border border-brand-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[4px] h-full bg-brand-error" />
              <h3 className="text-base md:text-lg font-display font-semibold text-white flex items-center space-x-2">
                <Shield size={16} className="text-brand-error" />
                <span>The Core Challenge</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {/* Project Goals */}
          {project.goals && project.goals.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-lg font-display font-semibold text-white">UX / Design Goals</h4>
              <ul className="space-y-3">
                {project.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-zinc-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-brand-accent/15 text-brand-accent text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Detailed Step-by-Step Design Process */}
          {project.process && project.process.length > 0 && (
            <div className="space-y-6">
              <h4 className="text-lg font-display font-semibold text-white">Execution & Design Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.process.map((step, idx) => (
                  <div key={idx} className="p-6 bg-[#151515] border border-brand-border rounded-2xl space-y-2 hover:border-brand-accent/30 transition-colors">
                    <p className="text-[10px] font-mono text-brand-accent tracking-widest uppercase">STEP 0{idx + 1}</p>
                    <h5 className="text-sm font-semibold text-white">{step.step}</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Learnings & Reflections */}
          {project.learnings && project.learnings.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-lg font-display font-semibold text-white">Key Takeaways & Reflections</h4>
              <div className="grid grid-cols-1 gap-3">
                {project.learnings.map((learning, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 bg-zinc-950 rounded-xl border border-brand-border">
                    <div className="w-2 h-2 rounded-full bg-brand-success shrink-0" />
                    <p className="text-sm text-zinc-300">{learning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer Button Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-brand-border">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-brand-accent text-white rounded-full text-xs font-semibold tracking-wider hover:bg-brand-accent-hover flex items-center justify-center space-x-2 shadow-lg shadow-[rgba(124,92,255,0.25)] transition-all duration-300 cursor-pointer"
                data-cursor="visit"
              >
                <span>READ DETAILED CASE STUDY</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.designFilesLink && (
              <a
                href={project.designFilesLink}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 border border-brand-border text-zinc-300 rounded-full text-xs font-semibold tracking-wider hover:text-white hover:bg-zinc-800 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                data-cursor="pointer"
              >
                <span>OPEN WORKSPACE / FILES</span>
                <ArrowRight size={14} />
              </a>
            )}

            <button
              onClick={onClose}
              className="w-full sm:w-auto sm:ml-auto px-6 py-3.5 bg-transparent text-zinc-500 hover:text-white text-xs font-semibold tracking-wider flex items-center justify-center transition-colors cursor-pointer"
            >
              CLOSE OVERVIEW
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
