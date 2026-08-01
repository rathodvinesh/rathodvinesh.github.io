export interface Project {
  id: string;
  title: string;
  category: 'Fullstack' | 'AI / Machine Learning' | 'Cloud & Backend' | 'Frontend';
  description: string;
  metrics: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface SpotifyTrack {
  title: string;
  artist: string;
  url: string;
}

export const bioData = {
  name: "VINESH RATHOD",
  role: "Fullstack Software Engineer",
  tagline: "I BUILD SCALABLE SYSTEMS, ACCELERATE PRODUCT LAUNCHES, CREATE HIGH-IMPACT EXPERIENCES.",
  valueProp: "I specialize in engineering high-performing web applications, AI-driven workflows, and resilient distributed backends for ambitious startups.",
  location: "Bangalore, India",
  availability: "Available for Select Projects & Consulting",
  yearsExperience: "4+",
  projectsCompleted: "25+",
  githubStars: "350+",
  about: `Passionate Software Developer focused on building scalable web applications, elegant UI component libraries, and robust cloud services using React, Next.js, TypeScript, and Node.js.`,
  socials: {
    github: "https://github.com/rathodvinesh",
    linkedin: "https://linkedin.com/in/rathodvinesh",
    twitter: "https://twitter.com/rathodvinesh",
    email: "rathodvinesh.dev@gmail.com",
    calCom: "https://cal.com"
  },
  gamingHobbies: [
    "PC Gaming (Valorant, CS2, Cyberpunk 2077)",
    "Sci-Fi & Anime Enthusiast",
    "UI Design & Micro-animations"
  ]
};

export const spotifyPlaylist: SpotifyTrack[] = [
  {
    title: "Starboy",
    artist: "The Weeknd, Daft Punk",
    url: "https://open.spotify.com/track/7lQWRAVFhIQyD38d9AavwM"
  },
  {
    title: "Midnight City",
    artist: "M83",
    url: "https://open.spotify.com/track/1eyzqe2QqGZUmfcPZRi9yI"
  },
  {
    title: "Resonance",
    artist: "HOME",
    url: "https://open.spotify.com/track/1TuopWDIuJ2Y5F5yGlw19B"
  },
  {
    title: "Limitless",
    artist: "NCS Release",
    url: "https://open.spotify.com"
  }
];

export const frontendSkills = [
  "JavaScript (ES6+)", "TypeScript", "React 19", "Next.js (App Router)", 
  "Tailwind CSS", "Framer Motion", "Redux Toolkit", "HTML5 & CSS3", "shadcn/ui"
];

export const backendSkills = [
  "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", 
  "REST APIs", "WebSockets", "Redis", "Docker", "Supabase"
];

export const sampleProjects: Project[] = [
  {
    id: "project-examcentral",
    title: "ExamCentral ERP System",
    category: "Fullstack",
    description: "An ERP system for exam management developed as a company-sponsored project for Getflytechnologies. The system handles exam form submission, record keeping, hall tickets, and result publication.",
    metrics: "Production College ERP",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1280&auto=format&fit=crop",
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    demoUrl: "https://exam.vppcoe.getflytechnologies.com/",
    repoUrl: "https://github.com/rathodvinesh",
    featured: true
  },
  {
    id: "project-[#hams]",
    title: "Hospital OPD & Appointment System (HAMS)",
    category: "Cloud & Backend",
    description: "A scalable ASP.NET Core Web API for managing patient registration, doctor availability, and appointment scheduling with secure role-based access tested via Swagger/Postman with SOLID design.",
    metrics: "JWT Role-Based Security",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1280&auto=format&fit=crop",
    tags: ["ASP.NET Core", "C#", "SQL Server", "Docker", "Swagger"],
    demoUrl: "https://github.com/rathodvinesh/Hospital-management-system",
    repoUrl: "https://github.com/rathodvinesh/Hospital-management-system",
    featured: true
  },
  {
    id: "project-concession",
    title: "VPPCOE Railway Concession Software",
    category: "Fullstack",
    description: "Developed a Kotlin mobile app and website to streamline the college concession process. Integrated both the mobile app and admin-side website with Firebase Realtime Database for instant synchronization.",
    metrics: "Realtime Sync Architecture",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1280&auto=format&fit=crop",
    tags: ["Kotlin", "JavaScript", "HTML/CSS", "Firebase Realtime DB"],
    demoUrl: "https://github.com/rathodvinesh/Railway-Concession-VPPCOE",
    repoUrl: "https://github.com/rathodvinesh/Railway-Concession-VPPCOE",
    featured: true
  },
  {
    id: "project-pms",
    title: "Placement Management System API",
    category: "Cloud & Backend",
    description: "Developed a robust RESTful API using Spring Boot for managing college placement activities. Handles student profiles, company recruiter info, and placement analytics using Hibernate JPA.",
    metrics: "RESTful Enterprise Architecture",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1280&auto=format&fit=crop",
    tags: ["Java", "Spring Boot", "MySQL", "Hibernate JPA"],
    demoUrl: "https://github.com/rathodvinesh/PMS-java-api",
    repoUrl: "https://github.com/rathodvinesh/PMS-java-api"
  },
  {
    id: "project-taskflow",
    title: "Taskflow - Task & Workflow Manager",
    category: "Fullstack",
    description: "A modern task management application featuring real-time task tracking, priority workflows, state persistence across sessions, input validation, and responsive dark-mode layout.",
    metrics: "Interactive State Engine",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1280&auto=format&fit=crop",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://github.com/rathodvinesh",
    repoUrl: "https://github.com/rathodvinesh"
  }
];

export const experiencesData: Experience[] = [
  {
    role: "Senior Fullstack Engineer",
    company: "Tech Scale Solutions",
    period: "2023 - Present",
    location: "Remote",
    highlights: [
      "Engineered micro-frontend modules reducing initial bundle load time by 42%.",
      "Architected real-time WebSocket synchronization for collaborative dashboard features.",
      "Established CI/CD automated testing standards and mentored junior developers."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"]
  },
  {
    role: "Software Developer",
    company: "Innovate Labs",
    period: "2021 - 2023",
    location: "Hybrid",
    highlights: [
      "Developed high-traffic web applications handling over 500,000 active monthly users.",
      "Integrated third-party APIs and payment gateway webhooks with 99.9% reliability.",
      "Implemented dark mode design system tokens and responsive layouts."
    ],
    technologies: ["React", "JavaScript", "REST APIs", "Docker", "Tailwind CSS"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "Vinesh delivers exceptionally fast, pixel-perfect web applications with clean architecture and extreme attention to performance.",
    author: "Abhinav Sharma",
    role: "Founder & CTO",
    company: "Apex Tech"
  },
  {
    quote: "Working with Vinesh on our landing pages resulted in a 35% increase in conversion. His understanding of design and fullstack code is rare.",
    author: "Rohan Mehta",
    role: "Head of Product",
    company: "Nova Cloud"
  },
  {
    quote: "Top tier fullstack engineer! He transformed our static mockups into interactive, snappy Next.js experiences effortlessly.",
    author: "Aditi Rao",
    role: "Design Lead",
    company: "Tech Innovators"
  }
];


