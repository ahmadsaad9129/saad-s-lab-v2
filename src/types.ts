export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription?: string;
  role: string;
  tools: string[];
  duration: string;
  status?: string;
  technology?: string[];
  challenge?: string;
  goals?: string[];
  process?: {
    step: string;
    description: string;
  }[];
  learnings?: string[];
  link?: string;
  designFilesLink?: string;
  imageColor: string; // Gradient color representing the project
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: 'Palette' | 'GraduationCap' | 'Trophy' | 'Briefcase' | 'Mic' | 'BarChart' | 'Laptop';
  badge?: string;
  isFeatured?: boolean;
  status?: 'Completed' | 'Ongoing' | 'Current';
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  status?: string;
  icon?: string;
}

export interface ToolCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
}
