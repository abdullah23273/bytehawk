import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Quote } from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { ABOUT_CONTENT } from '../constants/content';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0A0A0F] scroll-mt-20">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#6366F1]/10 to-transparent rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <Badge>{ABOUT_CONTENT.eyebrow}</Badge>
              </div>

              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#F5F5F7] leading-[1.15] tracking-[-0.02em] font-heading mb-6">
                {ABOUT_CONTENT.title}
              </h2>

              <p className="text-base md:text-lg leading-[1.7] text-[#A1A1AA] mb-8 max-w-xl">
                {ABOUT_CONTENT.paragraph}
              </p>

              <div>
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  icon={ArrowUpRight}
                  ariaLabel="Work with YOURCOMPANY"
                >
                  {ABOUT_CONTENT.ctaButton}
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="rounded-[12px] bg-[#12121A] border border-white/[0.08] p-6 md:p-8 shadow-xl shadow-black/20">
              <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#22D3EE] mb-5">
                {ABOUT_CONTENT.checklistTitle}
              </p>

              <ul className="space-y-4">
                {ABOUT_CONTENT.checklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="mt-0.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 p-1 text-[#22D3EE] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base text-[#F5F5F7] font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-[12px] bg-[#1A1A24]/90 border border-white/[0.08] p-6 md:p-8 shadow-xl shadow-black/20 overflow-hidden group hover:border-white/[0.15] transition-colors">
              <div className="absolute top-4 right-4 text-white/[0.05] group-hover:text-cyan-400/10 transition-colors">
                <Quote className="w-16 h-16" />
              </div>

              <p className="relative z-10 text-base md:text-lg font-medium text-[#F5F5F7] italic leading-relaxed mb-4">
                "{ABOUT_CONTENT.quoteCard.quote}"
              </p>

              <div className="relative z-10 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#22D3EE]" />
                <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#22D3EE]">
                  {ABOUT_CONTENT.quoteCard.label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}