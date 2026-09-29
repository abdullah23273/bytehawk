import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { WORK_CONTENT, STATS_CONTENT } from '../constants/content';

export default function Work() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0A0A0F] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow={WORK_CONTENT.eyebrow}
          title={WORK_CONTENT.title}
          subtitle={WORK_CONTENT.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {WORK_CONTENT.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="group relative rounded-[12px] bg-[#12121A] border border-white/[0.08] hover:border-cyan-400/40 overflow-hidden flex flex-col transition-all duration-300 shadow-xl shadow-black/40"
            >
              <div
                className={`relative h-56 w-full bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between overflow-hidden border-b border-white/[0.06]`}
              >
                <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#22D3EE] border border-cyan-400/20">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-md bg-[#12121A]/85 backdrop-blur-md text-[#F5F5F7] border border-white/[0.1]">
                    {project.metrics}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F7] group-hover:text-white transition-colors mb-2 font-heading flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#22D3EE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A1A1AA] mb-5">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.04]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1A1A24] text-[#A1A1AA] border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[12px] bg-[#12121A]/90 border border-white/[0.08] p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-cyan-500/5 to-transparent pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
            {STATS_CONTENT.map((stat, i) => (
              <div
                key={stat.label}
                className={`${i !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''} flex flex-col justify-center`}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F5F5F7] font-heading tracking-tight mb-1">
                  <span className="text-gradient">{stat.value}</span>
                </div>
                <div className="text-sm font-semibold text-[#F5F5F7] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#A1A1AA]">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}