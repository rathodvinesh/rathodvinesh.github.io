export interface MediaAbout {
  overview: string;
  conclusion: string;
}

export interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

export interface MediaContentCollection {
  [key: string]: MediaContent;
}

export const softwareDevMedia: MediaContentCollection = {
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-41551-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop',
    background:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop',
    title: 'SOFTWARE ENGINEER & SYSTEM ARCHITECT',
    date: 'Fullstack Development & AI Systems',
    scrollToExpand: 'Scroll down to expand developer workspace',
    about: {
      overview:
        'Welcome to my engineering portfolio. I build high-performance web platforms, real-time distributed services, and modern UI systems. As you scroll down, watch the coding workspace expand to reveal my featured projects, system architecture skills, and CLI terminal.',
      conclusion:
        'With a strong background in TypeScript, React, Next.js, and Node.js, I focus on writing clean, scalable, and self-documenting code built for growth.',
    },
  },
  image: {
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1920&auto=format&fit=crop',
    background:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&auto=format&fit=crop',
    title: 'CRAFTING SCALABLE WEB APPLICATIONS',
    date: 'React • Next.js • TypeScript • Cloud',
    scrollToExpand: 'Scroll down to inspect full tech stack',
    about: {
      overview:
        'Engineering modern web experiences requires a balance of intuitive UI design and solid backend infrastructure. From micro-interactions to cloud deployment pipelines, every line of code is written with precision.',
      conclusion:
        'Explore my interactive portfolio below to filter live projects, execute custom commands in the built-in terminal, or get in touch for collaborations.',
    },
  },
};
