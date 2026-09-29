import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Code2,
  Layout,
  Smartphone,
  ShoppingBag,
  Server,
  ArrowUpRight,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { SERVICES_CONTENT } from '../constants/content';

const ICON_MAP = {
  Code2: Code2,
  Layout: Layout,
  Smartphone: Smartphone,
  ShoppingBag: ShoppingBag,
  Server: Server,
};

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  const exploreLinkElement = (
    <a
      href="#contact"
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#22D3EE] hover:text-white transition-colors py-1"
    >
      <span>{SERVICES_CONTENT.exploreLink}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0A0A0F] scroll-mt-20">
      <div className="absolute right-0 top-1/3 w-[450px] h-[450px] bg-gradient-to-l from-[#6366F1]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow={SERVICES_CONTENT.eyebrow}
          title={SERVICES_CONTENT.title}
          subtitle={SERVICES_CONTENT.subtitle}
          rightElement={exploreLinkElement}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {SERVICES_CONTENT.items.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className={`group relative rounded-[12px] p-7 md:p-8 bg-[#12121A] border border-white/[0.08] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/30 hover:shadow-cyan-500/10 ${service.colSpan}`}
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1A24] border border-white/[0.08] flex items-center justify-center text-[#22D3EE] group-hover:scale-105 group-hover:border-cyan-400/40 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-[#6B6B78] group-hover:text-[#A1A1AA] transition-colors">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F5F7] mb-3 group-hover:text-white transition-colors font-heading">
                    {service.title}
                  </h3>

                  <p className="text-sm md:text-[15px] leading-relaxed text-[#A1A1AA] mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#1A1A24] text-[#A1A1AA] border border-white/[0.06] group-hover:border-white/[0.12] group-hover:text-[#F5F5F7] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}