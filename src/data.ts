import { Project, TimelineEvent, Experience, ToolCategory, Certification } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'figma-wireframing',
    title: 'Figma Wireframing Project',
    category: 'UX/UI Wireframing & Flow Design',
    year: '2025',
    description: 'A professional-grade collection of complex user flows, detailed wireframe blueprints, and cognitive layouts mapped inside Figma.',
    longDescription: 'This project showcases my absolute mastery over UX wireframing and user journey mappings. It details how I translate high-level business logic, complex database schemas, and operator actions into intuitive, visual layout maps that front-end developers can instantly build from.',
    role: 'Lead UX Designer',
    tools: ['Figma', 'Wireframing', 'User Flows', 'Information Architecture', 'Cognitive Mapping'],
    duration: 'Ongoing',
    technology: ['Interactive Figma Components', 'User Flow Maps', 'UX Blueprints'],
    challenge: 'Translating rich B2B and consumer logic pipelines into static and interactive wireframes that remain clear to both engineers and business stakeholders.',
    goals: [
      'Architect intuitive linear and branching user flow diagrams to guide interface creation.',
      'Construct a highly organized atomic wireframing library in Figma.',
      'Maximize accessibility and clarity using high-contrast typography and standard spacing grids.'
    ],
    process: [
      { step: 'Information Gathering & Mapping', description: 'Mapped out logical paths, branching conditions, and error boundaries for multi-tier user profiles.' },
      { step: 'Lo-Fi Layout Blueprints', description: 'Developed layout wireframes focused strictly on typography, reading paths, and click targets, ignoring branding colors.' },
      { step: 'Interactive Flow Testing', description: 'Connected screens with complex triggers in Figma to validate usability and map developer handoff notes.' }
    ],
    learnings: [
      'Clarity in spacing and absolute alignment is the single most important detail when communicating layout structures.',
      'Separating layout design from graphic styles allows stakeholders to focus completely on usability and logic.'
    ],
    link: 'https://app.notion.com/p/Wireframes-UX-Flow-Projects-Ahmad-Saad-21b28e79644b805598d8c06d9687fcff',
    designFilesLink: 'https://app.notion.com/p/Wireframes-UX-Flow-Projects-Ahmad-Saad-21b28e79644b805598d8c06d9687fcff',
    imageColor: 'from-amber-500/10 to-brand-accent/30'
  },
  {
    id: 'ui-design-replications',
    title: 'UI Design Replication',
    category: 'High-Fidelity UI Adaptations',
    year: '2024–2026',
    description: 'A master collection of precise, high-fidelity recreations of world-class interfaces from Apple, Stripe, and Linear to master typographic scales and digital depth.',
    longDescription: 'This practice lab serves as my technical arena where I reverse-engineer and replicate interface designs from digital product leaders. This continuous exercise allows me to internalize precise typographic alignments, micro-grid spacings, border-radius ratios, and complex layered transparency effects in Figma.',
    role: 'UI Practice & Precision Designer',
    tools: ['Figma Expert', 'Auto-Layout Master', 'Typography Systems', 'Design Tokens'],
    duration: 'Continuous',
    technology: ['WCAG Contrast Standards', 'Figma Variables', 'Responsive Grids'],
    challenge: 'Perfecting minute digital depth details like 1px translucent borders, double drop-shadow offsets, and letter-spacing calculations across platforms.',
    goals: [
      'Recreate 15+ industry-leading landing pages and dashboards with 100% pixel-perfect fidelity.',
      'Explore advanced dark/light transitions, hover feedback modes, and complex glassmorphic filters.',
      'Develop custom components utilizing Figma’s advanced Auto-Layout 4.0 structures.'
    ],
    process: [
      { step: 'Overlay Measurement Audit', description: 'Analyzed target interfaces using overlays to capture exact font sizes, padding ratios, and border-radius rules.' },
      { step: 'Pixel-by-Pixel Redesign', description: 'Constructed the entire page completely from scratch in Figma, manually aligning every shape and vector component.' },
      { step: 'Responsive Breakpoint Scaling', description: 'Adapted layouts dynamically to fit desktop, tablet, and mobile screens without breaking visual harmony.' }
    ],
    learnings: [
      'Premium UI is defined entirely by consistency in minor details: precise contrast ratios, intentional tracking, and balanced margins.',
      'Replicating master designs drastically elevates visual judgment and design output speed.'
    ],
    link: 'https://app.notion.com/p/UI-Design-Replicates-Ahmad-Saad-21a28e79644b808cba0af43c6b3a6a95',
    designFilesLink: 'https://app.notion.com/p/UI-Design-Replicates-Ahmad-Saad-21a28e79644b808cba0af43c6b3a6a95',
    imageColor: 'from-[#EC4899] to-[#BE185D]'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Package',
    category: 'Cohesive Visual Language Guides',
    year: '2023–2026',
    description: 'Curated corporate branding books, minimalist vector marks, corporate color palettes, and print/digital collateral built for modern ventures.',
    longDescription: 'This comprehensive showcase highlights my corporate identity design capabilities. It features custom, grid-constructed vector logos, visual branding guides, typography guidelines, and scalable asset libraries built for startups, events, and independent creators.',
    role: 'Lead Brand Identity Designer',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'Vector Graphics', 'Branding Strategy'],
    duration: 'Ongoing',
    technology: ['Golden Ratio Grids', 'Vector Asset Management', 'Visual Guidelines Book'],
    challenge: 'Ensuring that a brand identity operates consistently, recognizably, and legibly across extremely small digital screens as well as physical print formats.',
    goals: [
      'Generate memorable, timeless logo marks based on strict geometric rules.',
      'Produce comprehensive branding guidelines detailing typographic styling, margins, and dark/light modes.',
      'Build fully reusable social media and visual assets templates for cohesive public presence.'
    ],
    process: [
      { step: 'Client Strategy Sessions', description: 'Collaborated with founders to discover their brand’s core values, target audience profile, and aesthetic vectors.' },
      { step: 'Vector Drafting & Gridding', description: 'Sketched dozens of layouts, then mapped selected logo vectors over golden-ratio grids in Illustrator.' },
      { step: 'Brand Book Assembly', description: 'Assembled detailed PDF brand guidelines containing exact hex codes, fonts, and sizing ratios.' }
    ],
    learnings: [
      'A great logo is highly versatile: it should work beautifully when scaled down to a tiny favicon or up to a massive billboard.',
      'Cohesive brand books are invaluable to engineering teams, preventing digital interface fragmentation.'
    ],
    link: 'https://drive.google.com/drive/folders/16AgvFDtbUH0hW0PzTxXvFjGd3M4Wbd4D',
    designFilesLink: 'https://drive.google.com/drive/folders/16AgvFDtbUH0hW0PzTxXvFjGd3M4Wbd4D',
    imageColor: 'from-[#8B5CF6] to-[#6D28D9]'
  },
  {
    id: 'aquargin-marketing',
    title: 'Aquargin Marketing Posters',
    category: 'Digital & Print Marketing Design',
    year: '2025',
    description: 'A curated professional showcase of high-impact marketing materials, social creatives, and visual campaign posters designed for Aquargin Pvt. Ltd.',
    longDescription: 'During my internship at Aquargin, I crafted and deployed a complete marketing design overhaul. This project includes high-engagement social media graphics, print posters, and corporate event presentation materials that convey environmental responsibility and tech-forward water intelligence.',
    role: 'Graphic Designer & Social Media Intern',
    tools: ['Adobe Photoshop', 'Canva', 'Social Strategy', 'Brand System Execution', 'Marketing Collateral'],
    duration: '6 Months',
    technology: ['Posters & Print Materials', 'Social Media Templates', 'Visual Systems'],
    challenge: 'Communicating complex environmental and chemical monitoring concepts in visual formats that remain engaging, human, and modern.',
    goals: [
      'Design professional print and digital posters for water monitoring campaigns.',
      'Unify Aquargin’s social media graphics under a consistent green and blue palette.',
      'Elevate conversion rates and visual credibility of marketing presentations.'
    ],
    process: [
      { step: 'Content Mapping & Hierarchy', description: 'Analyzed chemical data and campaign texts to prioritize visual entry points for viewers.' },
      { step: 'Layout Drafting & Typography', description: 'Chose highly legible font combinations and structured spacious margins in Photoshop.' },
      { step: 'Campaign Rollout', description: 'Created a modular template system allowing quick creation of consistent social media assets.' }
    ],
    learnings: [
      'Visual hierarchy is essential in graphic design: the most important message must catch the viewer’s eye within the first fraction of a second.',
      'Consistent design themes across multiple platforms build profound user trust.'
    ],
    link: 'https://drive.google.com/drive/folders/1gRAXP58VnH9Eidc8wUcUY-IA_KCZm8sG',
    designFilesLink: 'https://drive.google.com/drive/folders/1gRAXP58VnH9Eidc8wUcUY-IA_KCZm8sG',
    imageColor: 'from-[#10B981] to-[#047857]'
  },
  {
    id: 'mobile-app-interface',
    title: 'Mobile App Interface',
    category: 'Product & Interactive Mobile UX',
    year: 'Upcoming',
    description: 'A premium, highly expected mobile product design utilizing intuitive gesture-based actions, elegant glassmorphic depths, and modern bento systems.',
    longDescription: 'Currently in the wireframing and prototyping phase, this mobile interface focuses on streamlining personal productivity and goal organization. It features a stunning tactile bento grid layout and smooth card transition physics.',
    role: 'Lead UI/UX Designer',
    tools: ['Figma', 'Mobile Interface Design', 'Micro-Animations', 'User-Centered Flows'],
    duration: 'Upcoming',
    status: 'Coming Soon',
    technology: ['Advanced Interactive Physics', 'Tactile Bento Layouts', 'Glassmorphism'],
    challenge: 'Designing high-density data and metric widgets that remain fully accessible, tap-friendly, and lightweight on smaller mobile dimensions.',
    goals: [
      'Incorporate card-based gestural physics for seamless left/right thumb navigations.',
      'Build a cohesive, eye-friendly light & dark responsive design system.',
      'Ensure absolute reading clarity with WCAG-compliant contrasts.'
    ],
    process: [
      { step: 'Competitive Analysis', description: 'Reviewed top productivity applications to identify flow drop-off points and layout frustrations.' },
      { step: 'Paper Sketching & Core Flows', description: 'Drafted 15+ screen gestures, focusing on natural hand sweeps and comfortable single-handed tap zones.' },
      { step: 'Advanced Interactive Models', description: 'Prototyping dynamic state transitions and scroll offsets to deliver tactile interface feedback.' }
    ],
    learnings: [
      'Mobile UX requires extreme minimalism: keep only the essential tasks and data visible to prevent cognitive overload.',
      'Micro-feedback cues are crucial in replacing physical tactile sensations on glass screens.'
    ],
    link: '',
    designFilesLink: '',
    imageColor: 'from-amber-500/10 to-brand-accent/30'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2020',
    title: 'Started My Creative Journey',
    description: 'Began exploring digital graphic design, learning design principles, layout fundamentals, branding, and social media creative workflows.',
    icon: 'Palette'
  },
  {
    year: '2022',
    title: 'Bachelor of Computer Applications',
    subtitle: 'Integral University',
    description: 'Began official academic studies in technology. Discovered the intersection of programming and layout design, learning HTML, CSS, and structural web principles.',
    icon: 'GraduationCap'
  },
  {
    year: '2024',
    title: 'Visual Design Lead',
    subtitle: 'Team Vision Squad (Smart India Hackathon)',
    description: 'Responsible for leading presentation materials, branding directions, and user flows in one of India’s largest nationwide hackathons.',
    icon: 'Trophy',
    badge: 'Leadership'
  },
  {
    year: 'March 2025',
    title: 'UX Designer & Social Media Intern',
    subtitle: 'Aquargin Pvt. Ltd.',
    description: 'Handled user interfaces, corporate marketing materials, and digital product overhauls. Collaborated directly with developers and product managers.',
    icon: 'Briefcase',
    badge: 'Completed',
    status: 'Completed'
  },
  {
    year: 'September 2025',
    title: "Completed Master's Certification",
    subtitle: 'UX/UI Design (Jamia Millia Islamia University)',
    description: 'Completed an advanced certification course focused on UX Design Thinking, User Research, Prototyping, and Evaluative Usability Testing.',
    icon: 'GraduationCap',
    badge: 'Completed',
    status: 'Completed'
  },
  {
    year: '2025',
    title: 'Conducted UI/UX Design Workshop',
    subtitle: 'Integral University',
    description: 'Invited as a guest speaker to introduce university students to UX Design, modern product methodologies, and design careers. Led hands-on wireframing challenges.',
    icon: 'Mic',
    badge: 'Featured Milestone',
    isFeatured: true
  },
  {
    year: '2025',
    title: 'Started MBA in Business Analytics',
    subtitle: 'University of Petroleum and Energy Studies (UPES)',
    description: 'Enrolled in an MBA program to specialize in product data analytics, business model metrics, and data-driven product strategy.',
    icon: 'BarChart'
  },
  {
    year: 'December 2025',
    title: 'UI/UX Designer Intern',
    subtitle: 'CodeAlpha',
    description: 'Completed a specialized internship designing high-fidelity dashboards, usability flows, and visual web interfaces for active review.',
    icon: 'Laptop',
    badge: 'Completed',
    status: 'Completed'
  },
  {
    year: 'Present',
    title: 'Freelance Graphic & UX Designer',
    description: 'Partnering with startups and global businesses to create user-centered websites, distinct brand styles, and responsive visual interfaces.',
    icon: 'Briefcase',
    badge: 'Active',
    status: 'Current'
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    role: 'Freelance Graphic & UX Designer',
    company: 'Self Employed',
    duration: 'Ongoing',
    description: 'Helping startups, businesses and creators build meaningful digital experiences through UX design, branding and visual identity.',
    tags: ['UX/UI Design', 'Brand Identity', 'Logo Design', 'Design Systems', 'Social Media Creatives'],
    status: 'Current',
    icon: 'Briefcase'
  },
  {
    role: 'UI/UX Designer Intern',
    company: 'CodeAlpha',
    duration: 'December 2025',
    description: 'Worked on real-world UI/UX projects while improving user research, wireframing, prototyping and interface design skills.',
    tags: ['Wireframing', 'User Research', 'Prototyping', 'UI Design'],
    status: 'Completed',
    icon: 'Laptop'
  },
  {
    role: 'UX Designer & Social Media Intern',
    company: 'Aquargin Pvt. Ltd.',
    duration: 'March 2025 — September 2025',
    description: 'Designed user experiences, marketing creatives and digital assets while collaborating with cross-functional teams.',
    tags: ['Dashboard UX', 'Marketing Creatives', 'Social Media Design', 'Product Branding'],
    status: 'Completed',
    icon: 'Briefcase'
  },
  {
    role: 'Visual Design Lead',
    company: 'Team Vision Squad (Smart India Hackathon 2024)',
    duration: '2024',
    description: 'Led the visual design strategy, branding and presentation for the Smart India Hackathon project.',
    tags: ['Visual Identity', 'Presentation Design', 'UI Support', 'Team Collaboration'],
    status: 'Completed',
    icon: 'Trophy'
  },
  {
    role: 'Event Organizer & Host',
    company: 'Integral University',
    duration: '2022 — 2025',
    description: 'Organized and hosted multiple university events while strengthening communication, leadership and public speaking skills.',
    tags: ['Event Management', 'Public Speaking', 'Team Leadership'],
    status: 'Completed',
    icon: 'Mic'
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    title: 'UX Design',
    skills: [
      'User Research',
      'Wireframing',
      'Information Architecture',
      'User Flow Mapping',
      'Prototyping',
      'Usability Testing',
      'Design Systems',
      'Interaction Design'
    ]
  },
  {
    title: 'UI Design',
    skills: [
      'Figma Master',
      'Auto Layout',
      'Nested Components',
      'Design Variables',
      'Responsive Grids',
      'Visual Hierarchy',
      'Typography Selection',
      'Contrast Accessibility'
    ]
  },
  {
    title: 'Graphic Design',
    skills: [
      'Adobe Photoshop',
      'Canva',
      'Brand Identity',
      'Geometric Logo Design',
      'Social Media Assets',
      'Poster & Banner Design',
      'Marketing Creatives'
    ]
  },
  {
    title: 'Development',
    skills: [
      'HTML5',
      'CSS3 & Flexbox',
      'Tailwind CSS v4',
      'React',
      'TypeScript',
      'Git Version Control',
      'GitHub',
      'Vite & Netlify'
    ]
  },
  {
    title: 'Emerging Tech',
    skills: [
      'Snapchat Lens Studio',
      'Spatial AR Design',
      'AI-Assisted Design',
      'No-Code Platforms',
      'Framer Motion',
      'Prompt Design',
      'Business Analytics'
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      'Leadership',
      'Clear Communication',
      'Public Speaking',
      'Team Collaboration',
      'Strategic Presentation',
      'Creative Problem Solving',
      'Critical Thinking'
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Master's Certification Program in UX/UI Design",
    issuer: 'Jamia Millia Islamia University',
    year: '2025'
  },
  {
    title: 'UI/UX for Beginners',
    issuer: 'Great Learning Academy',
    year: '2024'
  },
  {
    title: 'Google Analytics for Beginners',
    issuer: 'Google',
    year: '2023'
  },
  {
    title: 'Advanced Google Analytics',
    issuer: 'Google',
    year: '2024'
  },
  {
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    year: '2023'
  },
  {
    title: 'Android Mobile Application Development',
    issuer: 'Integral University',
    year: '2023'
  }
];

export const GOOGLE_EVENTS = [
  { title: 'Google I/O Attendee', year: '2021–2026', description: 'Participated in annual Google developer keynotes, studying spatial interfaces, Material You styling updates, and web standards.' },
  { title: 'Google DevFest', year: '2025', description: 'Engaged with local developers, exploring design handoffs, generative AI interfaces, and frontend standards.' },
  { title: 'GDSC WOW (Design Track)', year: '2022', description: 'Explored design workflows, user journey mappings, and accessibility foundations with community speakers.' },
  { title: 'Google Cloud Community Days', year: '2021', description: 'Analyzed cloud system dashboards and clean data visualizers to understand spatial layouts.' }
];
