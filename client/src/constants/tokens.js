export const TOKENS = {
  colors: {
    background: '#0A0A0F',
    surface: '#12121A',
    surfaceElevated: '#1A1A24',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 255, 255, 0.16)',
    textPrimary: '#F5F5F7',
    textSecondary: '#A1A1AA',
    textMuted: '#6B6B78',
    accentIndigo: '#6366F1',
    accentCyan: '#22D3EE',
  },
  typography: {
    heroH1: 'text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.02em]',
    sectionH2: 'text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em]',
    body: 'text-[16px] md:text-[18px] leading-[1.7] text-[#A1A1AA]',
    eyebrow: 'text-[12px] uppercase font-semibold tracking-[0.12em] text-[#22D3EE]',
  },
  layout: {
    container: 'max-w-[1200px] mx-auto px-6 md:px-12',
    sectionPadding: 'py-20 md:py-28 lg:py-32',
  },
  radii: {
    card: 'rounded-[12px]',
    pill: 'rounded-full',
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
      delay: custom * 0.1,
    },
  }),
};