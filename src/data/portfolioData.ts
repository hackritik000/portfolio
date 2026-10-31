export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  platform?: string;
  category: 'all' | 'fullstack' | 'mobile' | 'web';
  tags: string[];
  description: string;
  highlights: string[];
  featured?: boolean;
  links?: {
    demo?: string;
    github?: string;
    live?: string;
    website?: string;
    playstore?: string;
    appstore?: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  teamSize?: string;
  summary: string;
  highlights: string[];
  skills: string[];
  current?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  field?: string;
  current?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: { name: string; level?: 'Expert' | 'Advanced' | 'Proficient'; tag?: string }[];
}

export const portfolioData = {
  personal: {
    name: 'Ritik Parihar',
    handle: 'hackritik000',
    title: 'Full-Stack & Cross-Platform Application Developer',
    roleTagline: 'Engineering type-safe web & mobile applications, scalable APIs, and high-performance user experiences.',
    location: 'Jodhpur, Rajasthan, India',
    email: 'hackritik000@gmail.com',
    phone: '+91 8955721549',
    whatsapp: 'https://wa.me/918955721549',
    github: 'https://github.com/hackritik000',
    linkedin: 'https://linkedin.com/in/ritik-parihar',
    resumeUrl: '/Ritik_s_Resume.pdf',
    status: 'Available for full-stack, mobile & lead engineering opportunities',
    experienceYears: '3+',
    stats: [
      { label: 'Years Experience', value: '3+' },
      { label: 'Engineered Platforms', value: '15+' },
      { label: 'Engineering Teams Led', value: '3' },
      { label: 'PageSpeed Score', value: '95+' }
    ],
    bio: [
      'Full-stack and cross-platform Application Developer with 3+ years of experience building production-grade web and mobile applications using TypeScript, React, React Native, Next.js, Expo, and Express.',
      'Track record of designing end-to-end type-safe architectures, managing databases and Docker-based monorepos, and leading engineering teams across healthcare, e-commerce, and SaaS/business platforms with a focus on clean architecture and developer experience.'
    ]
  },

  skillsCategories: [
    {
      title: 'Languages',
      description: 'Foundational programming languages with strong type systems',
      icon: 'Code2',
      skills: [
        { name: 'TypeScript', level: 'Expert', tag: 'Primary' },
        { name: 'JavaScript (ES6+)', level: 'Expert', tag: 'Core' },
        { name: 'SQL', level: 'Advanced' },
        { name: 'HTML5 / CSS3', level: 'Expert' },
        { name: 'PHP', level: 'Proficient' }
      ]
    },
    {
      title: 'Frameworks & Runtimes',
      description: 'Full-stack application frameworks and execution runtimes',
      icon: 'Layers',
      skills: [
        { name: 'Next.js', level: 'Expert', tag: 'Fullstack' },
        { name: 'React Native & Expo', level: 'Expert', tag: 'Mobile' },
        { name: 'Express.js', level: 'Advanced', tag: 'Backend' },
        { name: 'Astro', level: 'Advanced', tag: 'Web' },
        { name: 'Bun & Node.js', level: 'Advanced', tag: 'Runtime' },
        { name: 'Solid.js', level: 'Proficient' },
        { name: 'Laravel', level: 'Proficient' }
      ]
    },
    {
      title: 'Libraries & Frontend UI',
      description: 'UI state management, component architecture, and styling systems',
      icon: 'Layout',
      skills: [
        { name: 'React 18 / 19', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert', tag: 'Styling' },
        { name: 'TanStack Query', level: 'Advanced' },
        { name: 'TanStack Table', level: 'Advanced' },
        { name: 'TanStack Router', level: 'Advanced' },
        { name: 'ShadCN UI & Preline', level: 'Expert' },
        { name: 'Chart.js', level: 'Proficient' },
        { name: 'Livewire', level: 'Proficient' }
      ]
    },
    {
      title: 'Database & ORM',
      description: 'Relational data modeling, query optimization, and migrations',
      icon: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', tag: 'SQL' },
        { name: 'MySQL', level: 'Advanced', tag: 'SQL' },
        { name: 'Prisma ORM', level: 'Expert', tag: 'Type-Safe' },
        { name: 'Drizzle ORM', level: 'Expert', tag: 'Type-Safe' },
        { name: 'SQLite / LibSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Proficient' }
      ]
    },
    {
      title: 'APIs, Protocols & Search',
      description: 'High-performance communication layer and distributed search',
      icon: 'Network',
      skills: [
        { name: 'tRPC', level: 'Expert', tag: 'End-to-End' },
        { name: 'RESTful APIs', level: 'Expert' },
        { name: 'WebSockets', level: 'Advanced', tag: 'Realtime' },
        { name: 'Elysia JS', level: 'Advanced' },
        { name: 'Algolia Search', level: 'Advanced' }
      ]
    },
    {
      title: 'DevOps, Tooling & Systems',
      description: 'Containerization, monorepos, CI/CD, and developer workflow',
      icon: 'Terminal',
      skills: [
        { name: 'Docker & Monorepos', level: 'Advanced', tag: 'DevOps' },
        { name: 'GitHub Actions', level: 'Advanced' },
        { name: 'Neovim & tmux', level: 'Expert', tag: 'Power User' },
        { name: 'Git & Version Control', level: 'Expert' },
        { name: 'Vite & Bundlers', level: 'Advanced' },
        { name: 'pnpm & nvm', level: 'Expert' }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      role: 'Team Lead and Senior Developer',
      company: 'RBM Pvt. Ltd.',
      location: 'Jodhpur, Rajasthan',
      period: 'May 2025 – Present',
      type: 'Full-time',
      teamSize: '4 engineers',
      current: true,
      summary: 'Directing the core cross-platform engineering team to architect modern, resilient applications with end-to-end type safety.',
      highlights: [
        'Led a 4-member cross-functional engineering team to build a high-performance cross-platform application.',
        'Architected and executed a complete application rewrite, achieving 100% end-to-end type safety across client and server.',
        'Implemented strict monorepo patterns, shared Zod validation schemas, and automated testing to eliminate cross-platform regressions.'
      ],
      skills: ['TypeScript', 'React Native', 'Expo', 'tRPC', 'Drizzle ORM', 'Docker', 'Team Leadership']
    },
    {
      role: 'Application Developer',
      company: 'Edge Software',
      location: 'Jodhpur, Rajasthan',
      period: 'Sep 2025 – Sep 2026',
      type: 'Full-time',
      current: false,
      summary: 'Engineered ultra-flexible, metadata-driven interfaces and modular client architectures for rapid enterprise deployments.',
      highlights: [
        'Built highly dynamic applications with fully configurable user interfaces, supporting on-the-fly layout and schema reconfiguration.',
        'Engineered responsive component registries with optimized re-renders and smooth UI transitions.',
        'Collaborated with clients to translate complex business workflows into intuitive digital systems.'
      ],
      skills: ['React', 'Next.js', 'Dynamic UI', 'TypeScript', 'Tailwind CSS', 'State Management']
    },
    {
      role: 'Tech Team Lead and Senior Developer',
      company: 'LivingNeeds Health Care',
      location: 'Jodhpur, Rajasthan',
      period: 'April 2024 – Feb 2025',
      type: 'Full-time',
      teamSize: '7 engineers',
      current: false,
      summary: 'Headed cross-functional development of an enterprise healthcare portal connecting patients, clinics, and medical staff.',
      highlights: [
        'Led a 7-member cross-functional team (Frontend, Backend, Mobile, QA) to build a comprehensive healthcare platform.',
        'Collaborated closely with QA and product stakeholders, accelerating sprint delivery cycles by 15%.',
        'Engineered secure, role-based workflows and real-time medical scheduling interfaces with strict data confidentiality.'
      ],
      skills: ['React', 'Next.js', 'Express.js', 'PostgreSQL', 'Docker', 'Agile/Scrum', 'Sprint Planning']
    },
    {
      role: 'Senior Developer & Team Lead',
      company: 'HarHar (Freelance Team)',
      location: 'Jodhpur, Rajasthan',
      period: 'Nov 2023 – Mar 2024',
      type: 'Freelance Squad',
      teamSize: '3 engineers',
      current: false,
      summary: 'Orchestrated technical strategy, tooling selection, and code quality for bespoke client web and mobile solutions.',
      highlights: [
        'Led a 3-member freelance team and managed end-to-end development workflows from ideation to production deployment.',
        'Selected optimal tech stacks, defined structured engineering learning paths, and solved critical architectural blockers.',
        'Maintained high application stability and reliability through continuous testing and code review rituals.'
      ],
      skills: ['Full-Stack Development', 'React Native', 'Node.js', 'Workflow Optimization', 'Client Advisory']
    },
    {
      role: 'Junior Developer and Intern',
      company: 'Bruh Techno Private Limited',
      location: 'Jodhpur, Rajasthan',
      period: 'Feb 2023 – Jul 2023',
      type: 'Internship & Full-time',
      current: false,
      summary: 'Focused on high-performance web engineering, static site generation, and cloud deployment pipelines.',
      highlights: [
        'Achieved 95+ Google PageSpeed Insights scores through rigorous asset compression, CSS tree-shaking, and SSR/SSG tuning.',
        'Deployed production web applications on shared hosting and AWS cloud infrastructure, maintaining 99.9% uptime.',
        'Engineered dynamic and static web experiences leveraging modern Astro and Laravel frameworks.'
      ],
      skills: ['Astro', 'Laravel', 'AWS', 'Performance Optimization', 'PageSpeed 95+', 'PHP', 'Tailwind CSS']
    }
  ] as Experience[],

  projects: [
    {
      id: 'justsearch',
      title: 'JustSearch',
      subtitle: 'Production Cross-Platform Business & Job Listing Ecosystem',
      period: 'Oct 2025 – Present',
      platform: 'iOS, Android & Web',
      category: 'mobile',
      tags: ['React Native', 'Expo', 'App Store', 'Google Play', 'Next.js', 'Express', 'tRPC', 'Drizzle ORM', 'Docker', 'Algolia', 'Elysia'],
      description: 'A production-grade, high-concurrency cross-platform directory connecting businesses, candidates, and job opportunities with real-time indexing and search.',
      highlights: [
        'Built a production-grade cross-platform business and job listing application running synchronously on iOS, Android, and Web.',
        'Leveraged a unified Docker-based monorepo sharing models and validation schemas between web, mobile, and backend.',
        'Integrated instant Algolia search indexing for sub-100ms multi-attribute queries across thousands of verified listings.',
        'Engineered an end-to-end type-safe client-server contract using tRPC and Elysia with Drizzle ORM.',
        'Published live on the Apple App Store, Google Play Store, and Web.'
      ],
      featured: true,
      links: {
        appstore: 'https://apps.apple.com/in/app/just-search-js/id6753580148',
        playstore: 'https://play.google.com/store/apps/details?id=com.rbm.justsearch',
        website: 'https://www.justsearch.net.in/',
        live: 'https://www.justsearch.net.in/'
      }
    },
    {
      id: 'dukandar',
      title: 'Dukandar',
      subtitle: 'Dynamic UI E-Commerce App with Video Reels Engine',
      period: 'Nov 2025 – Present',
      platform: 'Android & Mobile Web',
      category: 'mobile',
      tags: ['React Native', 'Expo', 'Google Play', 'Video Reels Engine', 'Dynamic UI', 'Tailwind CSS', 'Mobile UX'],
      description: 'A modern shopping application combining backend-driven UI layout rendering with high-retention short-form video reels shopping experience.',
      highlights: [
        'Built a cross-platform shopping application powered by a fully dynamic, backend-configured layout engine.',
        'Designed and integrated a fluid video reels feed directly into the shopping discovery flow to boost conversion.',
        'Optimized video pre-fetching, memory caches, and 60 FPS gesture-driven mobile transitions.',
        'Published live on Google Play Store with active customer accounts.'
      ],
      featured: true,
      links: {
        website: 'https://dukandar.co.in/',
        playstore: 'https://play.google.com/store/apps/details?id=com.dukandar.customer',
        live: 'https://dukandar.co.in/'
      }
    },
    {
      id: 'fruit-erp',
      title: 'Small ERP For Fruit WholeSale (Mandi)',
      subtitle: 'Keyboard-Centric High-Throughput Wholesale ERP',
      period: 'Mar 2024',
      platform: 'Web & Desktop',
      category: 'fullstack',
      tags: ['Next.js', 'SQLite', 'Prisma', 'Tailwind CSS', 'Keyboard-First UI', 'Live Demo'],
      description: 'A purpose-built mandi wholesale operations engine prioritizing keyboard speed, instant record manipulation, and official invoice generation.',
      highlights: [
        'Lightweight yet powerful full-stack architecture built using Next.js, Prisma ORM, and SQLite for swift local and cloud deployment.',
        'Spreadsheet-Like Data Control: Developed a complex sheet-style interface for admins to edit mandi data intuitively with multi-row batch updates.',
        'Support for three distinct commercial print and invoice formats tailored to regional agricultural market compliance.',
        'Keyboard-Centric UI/UX: Fully navigable via hotkeys and arrow keys, accelerating data-entry speed by 3x for power operators.'
      ],
      featured: true,
      links: {
        live: 'https://mandi-app.onrender.com/',
        demo: 'https://mandi-app.onrender.com/',
        github: 'https://github.com/itzmeranjeet/sabji-mandi'
      }
    },
    {
      id: 'mlm-enterprise',
      title: 'MLM Enterprise Engine & Network Portal',
      subtitle: 'Multi-Tier Referral, Tree Hierarchy & Financial Engine',
      period: 'Nov 2023 – Feb 2024',
      platform: 'Web Application',
      category: 'fullstack',
      tags: ['React', 'MongoDB', 'Express', 'Docker', 'Role Separation', 'Tree Algorithms'],
      description: 'Enterprise multi-level networking platform featuring recursive binary/unilevel tree structures and real-time commission settlement.',
      highlights: [
        'Frontend Separation: Developed distinct frontend applications for users and administrators with strict role-based dashboards and access control.',
        'High-Performance Express Backend: Handles user network topologies, tree/hierarchy traversals, and automated income calculations via secure REST APIs.',
        'Complex Multi-Tier Income Structures: Engineered logic for six income streams, featuring Level Income with multi-tier referral tracking and sub-second calculation.'
      ],
      featured: true,
      links: {
        github: 'https://github.com/hackritik000/MLM.git'
      }
    },
    {
      id: 'performance-platforms',
      title: 'PageSpeed 95+ Web Platforms (Bruh Techno)',
      subtitle: 'Ultra-Fast SEO & Performance Portals Built with Astro & Laravel',
      period: 'Feb 2023 – Jul 2023',
      platform: 'Web & Netlify',
      category: 'web',
      tags: ['Astro', 'Laravel', 'Netlify', 'PageSpeed 95+', 'SEO Optimization', 'Tailwind CSS'],
      description: 'Static and hybrid dynamic platforms optimized for sub-second Largest Contentful Paint (LCP), flawless SEO scores, and zero CLS.',
      highlights: [
        'Achieved verified 95+ Google PageSpeed Insights benchmarks across mobile and desktop.',
        'Engineered responsive frontends using Astro and modern optimization pipelines with streamlined asset bundling.',
        'Deployed to Netlify and AWS, maintaining high performance and 99.9% uptime.'
      ],
      featured: false,
      links: {
        live: 'https://seobruhtechno.netlify.app/',
        website: 'https://seobruhtechno.netlify.app/'
      }
    }
  ] as Project[],

  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering (CSE)',
      institution: 'Lachoo Memorial College Of Science And Technology',
      period: 'Aug 2026 – Pursuing',
      field: 'Computer Science, Algorithms & Software Engineering',
      current: true
    },
    {
      degree: 'Diploma of Pharmacy (D.Pharm)',
      institution: 'Rajasthan University of Health Sciences',
      period: 'April 2019 – April 2022',
      field: 'Pharmaceutical Sciences & Healthcare Systems'
    },
    {
      degree: 'Senior Secondary Certificate (12th PCM)',
      institution: 'Shiv Public Sr. Secondary School',
      period: 'April 2018 – April 2019',
      field: 'Physics, Chemistry, Mathematics'
    }
  ] as EducationItem[],

  terminalCommands: [
    { cmd: 'help', desc: 'List all available terminal commands' },
    { cmd: 'whoami', desc: 'Display developer profile overview' },
    { cmd: 'skills', desc: 'Print categorized technical skills' },
    { cmd: 'projects', desc: 'List featured open-source and client projects' },
    { cmd: 'experience', desc: 'Display engineering career timeline' },
    { cmd: 'education', desc: 'Show academic background' },
    { cmd: 'resume', desc: 'Trigger resume download or preview' },
    { cmd: 'contact', desc: 'Display direct email, phone, and social handles' },
    { cmd: 'neovim', desc: 'Display Neovim config & developer setup philosophy' },
    { cmd: 'clear', desc: 'Clear the interactive console screen' }
  ]
};
