import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { TESTIMONIALS_CONTENT } from '../constants/content';

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0F] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow={TESTIMONIALS_CONTENT.eyebrow}
          title={TESTIMONIALS_CONTENT.title}
          subtitle={TESTIMONIALS_CONTENT.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_CONTENT.items.map((item, index) => (
            <motion.div
              key={item.author}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="rounded-[12px] bg-[#12121A] border border-white/[0.08] hover:border-cyan-400/30 p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#22D3EE]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#22D3EE]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-white/10" />
                </div>

                <p className="text-sm md:text-[15px] leading-relaxed text-[#F5F5F7] mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#22D3EE] p-[1px]">
                  <div className="w-full h-full rounded-full bg-[#1A1A24] flex items-center justify-center font-bold text-xs text-white">
                    {item.avatarInitials}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F5F7]">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#A1A1AA]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}