import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { CTA_CONTENT } from '../constants/content';

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0A0A0F] scroll-mt-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#6366F1]/18 via-[#22D3EE]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[16px] p-[1px] bg-gradient-to-b from-white/[0.15] via-white/[0.05] to-transparent shadow-2xl"
        >
          <div className="relative rounded-[15px] bg-[#12121A]/95 backdrop-blur-xl p-8 md:p-16 lg:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="mb-5">
                <Badge className="border-indigo-500/20 bg-[#1A1A24]">
                  {CTA_CONTENT.eyebrow}
                </Badge>
              </div>

              <h2 className="text-[clamp(2.2rem,5vw,3.75rem)] font-bold text-[#F5F5F7] leading-[1.1] tracking-[-0.025em] font-heading mb-5">
                {CTA_CONTENT.title}
              </h2>

              <p className="text-base md:text-lg text-[#A1A1AA] leading-[1.7] mb-10 max-w-xl">
                {CTA_CONTENT.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button
                  href={`mailto:${CTA_CONTENT.email}?subject=Project%20Inquiry%20from%20Website`}
                  variant="primary"
                  size="lg"
                  icon={ArrowUpRight}
                  ariaLabel="Start a conversation with YOURCOMPANY"
                  className="w-full sm:w-auto"
                >
                  {CTA_CONTENT.buttonText}
                </Button>

                <Button
                  href={`mailto:${CTA_CONTENT.email}`}
                  variant="secondary"
                  size="lg"
                  icon={Mail}
                  iconPosition="left"
                  ariaLabel="Send email to hello@yourcompany.com"
                  className="w-full sm:w-auto"
                >
                  {CTA_CONTENT.email}
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs text-[#6B6B78] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>{CTA_CONTENT.responseGuarantee}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}