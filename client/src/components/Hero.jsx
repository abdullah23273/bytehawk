import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { HERO_CONTENT } from '../constants/content';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] md:w-[900px] h-[450px] bg-gradient-to-b from-[#6366F1]/18 via-[#22D3EE]/08 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge className="border-indigo-500/20 bg-[#12121A]/80 backdrop-blur-sm">
              {HERO_CONTENT.eyebrow}
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#F5F5F7] leading-[1.08] tracking-[-0.025em] font-heading"
          >
            {HERO_CONTENT.h1Prefix}
            <span className="text-gradient inline-block font-extrabold">
              {HERO_CONTENT.h1Accent}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-[#A1A1AA] text-lg md:text-xl leading-[1.65] max-w-2xl font-normal"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
              ariaLabel="Start a project with our team"
            >
              {HERO_CONTENT.ctaPrimary}
            </Button>

            <Button
              href="#work"
              variant="secondary"
              size="lg"
              ariaLabel="View our portfolio of work"
            >
              {HERO_CONTENT.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 max-w-xl"
          >
            <div className="relative group p-5 md:p-6 rounded-[12px] bg-[#12121A]/80 backdrop-blur-md border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 shadow-xl shadow-black/20">
              <div className="absolute top-0 right-0 p-4 opacity-30 text-[#22D3EE] group-hover:opacity-60 transition-opacity">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#22D3EE] mb-2">
                {HERO_CONTENT.beliefCard.label}
              </p>
              <p className="text-sm md:text-base text-[#F5F5F7] font-medium leading-relaxed italic">
                "{HERO_CONTENT.beliefCard.quote}"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? false : { opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 w-full pt-10 flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-[#6B6B78]"
      >
        <span className="w-6 h-[1px] bg-white/[0.1]" />
        <span>Scroll to explore</span>
        <motion.div
          animate={shouldReduceMotion ? false : { y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#22D3EE]" />
        </motion.div>
      </motion.div>
    </section>
  );
}