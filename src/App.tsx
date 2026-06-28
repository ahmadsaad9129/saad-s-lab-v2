import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Data & Types
import { 
  PROJECTS_DATA, 
  TIMELINE_EVENTS, 
  EXPERIENCES_DATA 
} from './data';
import { Project } from './types';

// Custom Components
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import BeyondDesignSection from './components/BeyondDesignSection';
import ContactSection from './components/ContactSection';
import ProjectsView from './components/ProjectsView';
import JourneyView from './components/JourneyView';
import ResumeView from './components/ResumeView';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState<'home' | 'projects' | 'journey' | 'resume'>('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // To allow navigating directly to a project's case study from home
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Synchronize document/body styling depending on Dark/Light mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0C0C0C';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#FFFFFF';
    }
  }, [isDarkMode]);

  const handleNavigate = (path: 'home' | 'projects' | 'journey' | 'resume') => {
    setCurrentPath(path);
    setSelectedProjectId(null); // Clear selected project when navigating pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProjectId(project.id);
    setCurrentPath('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* 1. Loading Intro Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* 2. Main Content Layout Container */}
      {!isLoading && (
        <div className={`min-h-screen font-sans transition-colors duration-500 overflow-x-hidden relative ${
          isDarkMode ? 'bg-[#0C0C0C] text-white' : 'bg-white text-zinc-900'
        }`}>
          
          {/* Custom Cursor System (only active on desktop) */}
          <Cursor />

          {/* Transparent Glassmorphic Navigation Header */}
          <Navbar 
            currentPath={currentPath} 
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
            onToggleDarkMode={handleToggleDarkMode}
          />

          {/* Dynamic Swapping Routing Views */}
          <AnimatePresence mode="wait">
            
            {/* PATH: RESUME */}
            {currentPath === 'resume' && (
              <motion.div
                key="resume"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <ResumeView onBack={() => handleNavigate('home')} />
              </motion.div>
            )}

            {/* PATH: DEDICATED PROJECTS PAGE */}
            {currentPath === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectsView 
                  projects={PROJECTS_DATA} 
                  isDarkMode={isDarkMode} 
                  selectedProjectId={selectedProjectId}
                  onSelectProject={(proj) => setSelectedProjectId(proj ? proj.id : null)}
                />
              </motion.div>
            )}

            {/* PATH: DEDICATED JOURNEY PAGE */}
            {currentPath === 'journey' && (
              <motion.div
                key="journey"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <JourneyView timelineEvents={TIMELINE_EVENTS} isDarkMode={isDarkMode} />
              </motion.div>
            )}

            {/* PATH: HOME PAGE VIEW */}
            {currentPath === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                {/* 1. Hero Section */}
                <HeroSection isDarkMode={isDarkMode} onNavigate={handleNavigate} />

                {/* 2. About Section */}
                <AboutSection isDarkMode={isDarkMode} />

                {/* 3. Featured Projects Section */}
                <ProjectsSection 
                  projects={PROJECTS_DATA} 
                  onProjectClick={handleProjectClick} 
                  onNavigate={handleNavigate}
                  isDarkMode={isDarkMode}
                />

                {/* 4. Professional Experience Timeline */}
                <ExperienceSection experiences={EXPERIENCES_DATA} isDarkMode={isDarkMode} />

                {/* 5. Education Credentials */}
                <EducationSection isDarkMode={isDarkMode} />

                {/* 6. Beyond Design Section */}
                <BeyondDesignSection isDarkMode={isDarkMode} />

                {/* 7. Contact & Footer Section */}
                <ContactSection onNavigate={handleNavigate} isDarkMode={isDarkMode} />

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      )}
    </>
  );
}
