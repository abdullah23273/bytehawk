export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  eyebrow: 'AVAILABLE FOR SELECT PROJECTS — 2026 / 2027',
  h1Prefix: 'We build digital experiences ',
  h1Accent: 'that matter.',
  subtitle:
    'We design and develop modern websites, web applications and digital experiences that help businesses communicate clearly, build trust and grow online.',
  ctaPrimary: 'Start a project',
  ctaSecondary: 'View our work',
  beliefCard: {
    label: 'WHAT WE BELIEVE',
    quote: 'Good digital work should feel simple, intentional and built around the people using it.',
  },
};

export const SERVICES_CONTENT = {
  eyebrow: 'CAPABILITIES',
  title: 'Everything needed to build better digital products.',
  subtitle:
    'From the first idea to the final launch, we combine design, development and technology to create digital experiences that serve a real business purpose.',
  exploreLink: 'Explore all services',
  items: [
    {
      id: '01',
      title: 'Web Development',
      description:
        'High performance websites and web applications built with modern technologies and a strong focus on usability.',
      tags: ['React', 'JavaScript', 'Node.js'],
      iconName: 'Code2',
      colSpan: 'lg:col-span-4 md:col-span-6',
    },
    {
      id: '02',
      title: 'UI / UX Design',
      description:
        'Clean, thoughtful interfaces that make complex products feel simple and give brands a stronger digital presence.',
      tags: ['Interface', 'UX', 'Design Systems'],
      iconName: 'Layout',
      colSpan: 'lg:col-span-4 md:col-span-6',
    },
    {
      id: '03',
      title: 'Responsive Experiences',
      description:
        'Digital experiences carefully designed to work across phones, tablets, and desktops without compromise in quality.',
      tags: ['Mobile', 'Tablet', 'Desktop'],
      iconName: 'Smartphone',
      colSpan: 'lg:col-span-4 md:col-span-12',
    },
    {
      id: '04',
      title: 'E-Commerce',
      description:
        'Conversion-focused online stores that make products easy to discover, understand, and purchase.',
      tags: ['Stores', 'Products', 'Payments'],
      iconName: 'ShoppingBag',
      colSpan: 'lg:col-span-6 md:col-span-6',
    },
    {
      id: '05',
      title: 'Backend & APIs',
      description:
        'Reliable backend systems, databases, and APIs that give digital products the foundation they need to scale.',
      tags: ['Node.js', 'MongoDB', 'APIs'],
      iconName: 'Server',
      colSpan: 'lg:col-span-6 md:col-span-6',
    },
  ],
};

export const WORK_CONTENT = {
  eyebrow: 'FEATURED WORK',
  title: 'Recent projects built for real-world impact.',
  subtitle: 'A selection of high-performance web applications and digital interfaces built with modern craftsmanship.',
  projects: [
    {
      id: 'work-1',
      title: 'Aura Financial Suite',
      category: 'FinTech Platform',
      description: 'End-to-end wealth management portal with real-time portfolio telemetry and banking grade security.',
      tags: ['React', 'Node.js', 'Tailwind', 'Recharts'],
      metrics: '+140% User Retention',
      imageGradient: 'from-indigo-900/60 via-purple-900/30 to-cyan-950/60',
      demoUrl: '#',
    },
    {
      id: 'work-2',
      title: 'Kroma Sound Lab',
      category: 'E-Commerce & 3D Interactive',
      description: 'Next-generation acoustic studio platform with custom hardware configurator and seamless Stripe checkout.',
      tags: ['Three.js', 'React', 'Stripe', 'Framer Motion'],
      metrics: '3.4x Conversion Rate',
      imageGradient: 'from-blue-900/60 via-cyan-900/30 to-slate-900/60',
      demoUrl: '#',
    },
    {
      id: 'work-3',
      title: 'Synapse AI Orchestrator',
      category: 'Developer Platform & Cloud API',
      description: 'Enterprise developer docs and model evaluation dashboard with sub-80ms streaming responses.',
      tags: ['Next.js', 'TypeScript', 'WebSockets', 'GraphQL'],
      metrics: '99.99% System Uptime',
      imageGradient: 'from-violet-900/60 via-indigo-950/40 to-cyan-900/50',
      demoUrl: '#',
    },
  ],
};

export const STATS_CONTENT = [
  { value: '50+', label: 'Projects Shipped', detail: 'From seed-stage MVPs to enterprise apps' },
  { value: '30+', label: 'Global Clients', detail: 'Across North America, Europe & APAC' },
  { value: '5+', label: 'Years Experience', detail: 'Delivering modern full-stack web software' },
  { value: '99.8%', label: 'On-Time Delivery', detail: 'Rigorous sprint discipline and execution' },
];

export const ABOUT_CONTENT = {
  eyebrow: 'ABOUT US',
  title: 'Technology should make things clearer, not harder.',
  paragraph:
    'We are a digital development company focused on creating useful, polished, and scalable digital experiences. Our work sits at the intersection of thoughtful design, reliable technology, and practical business needs.',
  ctaButton: 'Work with us',
  checklistTitle: 'WHAT YOU CAN EXPECT',
  checklist: [
    'Business goals before unnecessary complexity',
    'Clean interfaces with strong visual hierarchy',
    'Modern technology built for real-world use',
    'Clear communication from start to launch',
  ],
  quoteCard: {
    label: 'OUR DESIGN PRINCIPLE',
    quote: 'The best digital experiences feel effortless because of the hard work behind the scenes.',
  },
};

export const PROCESS_CONTENT = {
  eyebrow: 'PROCESS',
  title: 'Simple process. Serious execution.',
  subtitle:
    'A clear process keeps projects moving, reduces unnecessary complexity and makes sure every decision has a purpose.',
  steps: [
    {
      number: '01',
      title: 'Discover',
      description:
        'We understand your business, audience, goals, and what the product actually needs to achieve.',
    },
    {
      number: '02',
      title: 'Define',
      description:
        'We shape the structure, content, and visual direction before development begins.',
    },
    {
      number: '03',
      title: 'Build',
      description:
        'We turn the approved direction into a responsive, reliable, and polished digital product.',
    },
    {
      number: '04',
      title: 'Launch',
      description:
        'We test, refine, and prepare everything for launch so the final experience feels complete.',
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  eyebrow: 'TESTIMONIALS',
  title: 'Built with purpose. Proven by results.',
  subtitle: 'Hear directly from the founders and product leaders we have partnered with.',
  items: [
    {
      quote:
        'YOURCOMPANY redesigned our core web application with surgical precision. The clarity, speed, and design polish directly boosted our conversion by 48% in the first quarter.',
      author: 'Marcus Vance',
      role: 'Head of Product, Aura Finance',
      avatarInitials: 'MV',
    },
    {
      quote:
        'A rare agency team that genuinely bridges high-taste design with serious engineering velocity. They took ownership of the outcome, not just the ticket queue.',
      author: 'Elena Rostova',
      role: 'Founder & CEO, Kroma Labs',
      avatarInitials: 'ER',
    },
    {
      quote:
        'Our developer documentation and customer portal went from a point of friction to our greatest sales asset. Unmatched attention to visual hierarchy and performance.',
      author: 'Julian Reed',
      role: 'VP Engineering, Synapse AI',
      avatarInitials: 'JR',
    },
  ],
};

export const CTA_CONTENT = {
  eyebrow: 'START SOMETHING MEANINGFUL',
  title: "Have an idea? Let's build it.",
  subtitle:
    'Tell us what you are working on. We will help turn the idea into a clear digital experience.',
  buttonText: 'Start a conversation',
  email: 'hello@yourcompany.com',
  responseGuarantee: 'Average response time: within 24 hours',
};

export const FOOTER_CONTENT = {
  logoFirst: 'YOUR',
  logoSecond: 'COMPANY',
  tagline:
    'A high-end digital agency engineering performant web applications, intuitive interfaces, and scalable architectures for forward-thinking brands.',
  email: 'hello@yourcompany.com',
  location: 'San Francisco, CA & Global Remote',
  links: {
    navigation: [
      { label: 'Services', href: '#services' },
      { label: 'Featured Work', href: '#work' },
      { label: 'About Agency', href: '#about' },
      { label: 'Our Process', href: '#process' },
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com', icon: 'Github' },
      { name: 'Twitter / X', href: 'https://twitter.com', icon: 'Twitter' },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
      { name: 'Dribbble', href: 'https://dribbble.com', icon: 'Dribbble' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  copyright: `© ${new Date().getFullYear()} YOURCOMPANY Inc. All rights reserved.`,
};