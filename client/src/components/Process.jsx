import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { PROCESS_CONTENT } from '../constants/content';

export default function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#0A0A0F] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow={PROCESS_CONTENT.eyebrow}
          title={PROCESS_CONTENT.title}
          subtitle={PROCESS_CONTENT.subtitle}
        />

        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-white/[0.08] pointer-events-none">
            <motion.div
              initial={shouldReduceMotion ? { width: '100%' } : { width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#6366F1] via-[#22D3EE] to-[#6366F1]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_CONTENT.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative flex flex-col"
              >
                <div className="mb-6 flex items-center gap-4 lg:block">
                  <div className="w-14 h-14 rounded-full bg-[#12121A] border-2 border-white/[0.12] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] flex items-center justify-center transition-all duration-300 relative z-20">
                    <span className="font-mono text-sm font-bold text-[#F5F5F7] group-hover:text-[#22D3EE] transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div className="lg:hidden flex-1 h-[1px] bg-white/[0.08]" />
                </div>

                <div className="p-6 rounded-[12px] bg-[#12121A] border border-white/[0.08] group-hover:border-white/[0.16] transition-all duration-300 flex-1 flex flex-col shadow-lg shadow-black/20">
                  <h3 className="text-xl font-bold text-[#F5F5F7] mb-2.5 group-hover:text-white font-heading">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A1A1AA]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}