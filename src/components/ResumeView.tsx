import { useState } from 'react';
import { ZoomIn, ZoomOut, Download, ArrowLeft, Printer, ShieldAlert, BadgeCheck, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface ResumeViewProps {
  onBack: () => void;
}

export default function ResumeView({ onBack }: ResumeViewProps) {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(1.3, prev + 0.1));
  const handleZoomOut = () => setZoom((prev) => Math.max(0.85, prev - 0.1));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="resume-container" className="pt-24 min-h-screen bg-[#0B0B0B] text-white px-6 md:px-12 pb-24 noise-bg">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navigation & Toolbar Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-brand-border pb-6">
          <div className="space-y-1">
            <button
              onClick={onBack}
              className="group flex items-center space-x-2 text-zinc-400 hover:text-white text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </button>
            <h1 className="text-3xl font-display font-bold tracking-tight">Professional Résumé</h1>
            <p className="text-xs text-zinc-500 font-mono tracking-wider">AHMAD SAAD • GENERAL SANS TYPOGRAPHY</p>
          </div>

          {/* Quick interactive utility toolbars */}
          <div className="flex items-center gap-3 self-stretch md:self-auto justify-end">
            <div className="flex items-center bg-zinc-900 border border-brand-border rounded-full p-1">
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.85}
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors disabled:opacity-30 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-xs font-mono px-2 text-zinc-300 min-w-[48px] text-center select-none">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 1.3}
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors disabled:opacity-30 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-3 bg-zinc-900 border border-brand-border text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-full transition-colors cursor-pointer"
              title="Print Document"
            >
              <Printer size={16} />
            </button>

            <a
              href="/Ahmad_Saad_Resume.pdf"
              download
              className="flex items-center space-x-2 bg-brand-accent text-white px-5 py-3 rounded-full text-xs font-semibold tracking-wider hover:bg-brand-accent-hover hover:shadow-lg hover:shadow-[rgba(124,92,255,0.25)] transition-all cursor-pointer"
              data-cursor="pointer"
            >
              <Download size={14} />
              <span className="hidden sm:inline">DOWNLOAD PDF</span>
            </a>
          </div>
        </div>

        {/* ATS-friendly and Last-Updated specifications line */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center space-x-1.5 bg-zinc-900 border border-brand-border text-zinc-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider">
            <BadgeCheck size={12} className="text-brand-success" />
            <span>ATS FRIENDLY FORMAT</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-zinc-900 border border-brand-border text-zinc-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider">
            <FileText size={12} className="text-brand-secondary-accent" />
            <span>PDF VERSION 2.4</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-zinc-900 border border-brand-border text-zinc-400 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider">
            <ShieldAlert size={12} className="text-amber-500" />
            <span>VERIFIABLE EDUCATION CREDENTIALS</span>
          </span>
        </div>

        {/* Immersive high fidelity Digital Résumé Document Grid */}
        <div className="overflow-x-auto pb-6 pt-2 select-text">
          <motion.div
            style={{ scale: zoom, originX: 0.5, originY: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="w-full min-w-[760px] max-w-[850px] mx-auto bg-white text-zinc-900 shadow-2xl rounded-3xl overflow-hidden border border-zinc-200 p-12 md:p-16 space-y-10"
          >
            {/* Document Header */}
            <div className="flex justify-between items-start border-b-2 border-zinc-900 pb-8">
              <div>
                <h2 className="text-4xl font-display font-bold text-zinc-950 tracking-tight leading-none">Ahmad Saad</h2>
                <p className="text-sm font-semibold text-brand-accent mt-1 tracking-widest uppercase">Designing Experiences. Inspiring Connections.</p>
                <p className="text-xs text-zinc-500 mt-2">UX & Digital Product Designer • Creative Brand Identity Specialist</p>
              </div>
              <div className="text-right text-xs font-mono text-zinc-600 space-y-1">
                <p className="font-bold text-zinc-800">New Delhi, India</p>
                <p>ahmadsaad9129@gmail.com</p>
                <p>linkedin.com/in/ahmadsaad9129</p>
              </div>
            </div>

            {/* Resume Body Core Split */}
            <div className="grid grid-cols-12 gap-10">
              
              {/* Left Column - Core Experience & Projects */}
              <div className="col-span-8 space-y-8">
                
                {/* Professional Experience Section */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-zinc-950 tracking-wider uppercase border-b border-zinc-200 pb-2 flex items-center space-x-2">
                    <Briefcase size={16} className="text-brand-accent" />
                    <span>PROFESSIONAL EXPERIENCE</span>
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Job 1 */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-start font-display">
                        <h4 className="text-sm font-bold text-zinc-950">Freelance Graphic & UX Designer</h4>
                        <span className="text-xs font-mono font-medium text-zinc-500">2023 – Present</span>
                      </div>
                      <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider">Independent Practice</p>
                      <ul className="list-disc pl-4 text-xs text-zinc-600 space-y-1 leading-relaxed mt-1.5">
                        <li>Designing user-centered digital products, brand identity books, interfaces, and visual assets for local and international clients.</li>
                        <li>Delivering responsive web layouts in Figma, following WCAG contrast ratios and robust modular layouts.</li>
                        <li>Continuously researching emerging interactive systems, spatial computing filters, and advanced design tokens.</li>
                      </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-start font-display">
                        <h4 className="text-sm font-bold text-zinc-950">UI/UX Designer Intern</h4>
                        <span className="text-xs font-mono font-medium text-zinc-500">Dec 2025</span>
                      </div>
                      <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider">CodeAlpha</p>
                      <ul className="list-disc pl-4 text-xs text-zinc-600 space-y-1 leading-relaxed mt-1.5">
                        <li>Collaborated on designing complex information boards, dashboard data layouts, and detailed user journey wireframes.</li>
                        <li>Prototyped multi-screen workflows in Figma, increasing user task success through clean visual hierarchy.</li>
                        <li>Conducted usability checks and integrated stakeholder feedback under quick iteration cycles.</li>
                      </ul>
                    </div>

                    {/* Job 3 */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-start font-display">
                        <h4 className="text-sm font-bold text-zinc-950">UX Designer & Social Media Intern</h4>
                        <span className="text-xs font-mono font-medium text-zinc-500">Mar 2025 – Sept 2025</span>
                      </div>
                      <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider">Aquargin Pvt. Ltd.</p>
                      <ul className="list-disc pl-4 text-xs text-zinc-600 space-y-1 leading-relaxed mt-1.5">
                        <li>Crafted clean mobile and desktop user interfaces, greatly improving digital brand equity and aesthetic alignment.</li>
                        <li>Created high-sentiment corporate visual guidelines, unifying typography and spacing rules for public-facing assets.</li>
                        <li>Integrated with front-end teams to support asset handoffs and verify faithful HTML/CSS translation of designs.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Projects Section */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-zinc-950 tracking-wider uppercase border-b border-zinc-200 pb-2 flex items-center space-x-2">
                    <Award size={16} className="text-brand-accent" />
                    <span>NOTABLE PROJECTS</span>
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <h4 className="font-bold text-zinc-900">Food Waste Management System (UX Case Study)</h4>
                      <p className="text-zinc-600 leading-relaxed mt-1">
                        Designed an interactive logistics platform connecting food donors with nonprofit organizations, streamlining excess pickup submissions from 9 steps down to a frictionless 3-step action.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Interactive Snapchat Lenses (AR Experience)</h4>
                      <p className="text-zinc-600 leading-relaxed mt-1">
                        Engineered custom augmented reality lenses inside Snapchat Lens Studio using coordinate mapping, shader textures, and lightweight scripting to produce highly engaging spatial games.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column - Education & Core Skillset */}
              <div className="col-span-4 space-y-8 border-l border-zinc-200 pl-8">
                
                {/* Academic Credentials Section */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-zinc-950 tracking-wider uppercase border-b border-zinc-200 pb-2 flex items-center space-x-1.5">
                    <GraduationCap size={16} className="text-brand-accent" />
                    <span>EDUCATION</span>
                  </h3>
                  
                  <div className="space-y-4 text-xs">
                    <div className="space-y-1">
                      <p className="font-bold text-zinc-950 tracking-tight">MBA in Business Analytics</p>
                      <p className="text-zinc-600 font-medium">University of Petroleum and Energy Studies (UPES)</p>
                      <p className="font-mono text-[10px] text-zinc-400">2025 – Present</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-bold text-zinc-950 tracking-tight">Master's Certification (UX/UI)</p>
                      <p className="text-zinc-600 font-medium">Jamia Millia Islamia University</p>
                      <p className="font-mono text-[10px] text-zinc-400">Completed 2025</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-bold text-zinc-950 tracking-tight">Bachelor of Computer Applications</p>
                      <p className="text-zinc-600 font-medium">Integral University</p>
                      <p className="font-mono text-[10px] text-zinc-400">2022 – 2025</p>
                    </div>
                  </div>
                </div>

                {/* Key Technical Skillset & Tools */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-zinc-950 tracking-wider uppercase border-b border-zinc-200 pb-2 flex items-center space-x-1.5">
                    <FileText size={16} className="text-brand-accent" />
                    <span>DESIGN TOOLKIT</span>
                  </h3>
                  
                  <div className="space-y-3.5 text-xs">
                    <div>
                      <p className="font-bold text-zinc-900 tracking-wide uppercase text-[10px]">Design</p>
                      <p className="text-zinc-500 leading-relaxed mt-0.5">UI Design, UX Design, Wireframing, Prototyping, Design Systems</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 tracking-wide uppercase text-[10px]">AI</p>
                      <p className="text-zinc-500 leading-relaxed mt-0.5">Prompt Engineering, AI Workflow Design, AI-Assisted Design, AI Research</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 tracking-wide uppercase text-[10px]">Branding</p>
                      <p className="text-zinc-500 leading-relaxed mt-0.5">Brand Identity, Logo Design, Visual Branding</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 tracking-wide uppercase text-[10px]">Growth</p>
                      <p className="text-zinc-500 leading-relaxed mt-0.5">Content Strategy, Lead Generation, Client Outreach, Digital Marketing</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 tracking-wide uppercase text-[10px]">Tools</p>
                      <p className="text-zinc-500 leading-relaxed mt-0.5">Figma, Canva, ChatGPT, Claude, Lovable, Cursor, GitHub, Netlify</p>
                    </div>
                  </div>
                </div>

                {/* Notable Honors & Roles */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-zinc-950 tracking-wider uppercase border-b border-zinc-200 pb-2 flex items-center space-x-1.5">
                    <Award size={16} className="text-brand-accent" />
                    <span>HONORS & ROLES</span>
                  </h3>
                  
                  <div className="space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-zinc-900">Visual Design Lead</p>
                      <p className="text-zinc-500">Smart India Hackathon • 2024</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Guest Workshop Speaker</p>
                      <p className="text-zinc-500">Integral University • 2025</p>
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Stage Host & Organizer</p>
                      <p className="text-zinc-500">Integral University • 2022 – 2025</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Document Footer Verification */}
            <div className="border-t border-zinc-200 pt-6 text-center text-[10px] font-mono text-zinc-400">
              I hereby certify that all information presented above is absolute, true, and authentic to my professional journey.
            </div>
          </motion.div>
        </div>

        {/* Bottom Connect Call-To-Action */}
        <div className="text-center pt-10 space-y-4 border-t border-brand-border">
          <p className="text-zinc-400 font-display text-lg">Interested in collaborating or reviewing physical print copies?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onBack}
              className="px-6 py-3 bg-zinc-900 border border-brand-border text-zinc-200 hover:text-white rounded-full text-xs font-semibold tracking-wider transition-colors cursor-pointer"
            >
              Back to Portfolio
            </button>
            <a
              href="mailto:ahmadsaad9129@gmail.com"
              className="px-6 py-3 bg-brand-accent text-white hover:bg-brand-accent-hover rounded-full text-xs font-semibold tracking-wider hover:shadow-lg hover:shadow-[rgba(124,92,255,0.25)] transition-all cursor-pointer"
            >
              Start Conversation
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
