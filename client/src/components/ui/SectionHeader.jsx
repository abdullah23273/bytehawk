import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Badge from './Badge';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  rightElement,
  align = 'left',
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center flex flex-col items-center' : 'flex flex-col md:flex-row md:items-end justify-between gap-6'
      } ${className}`}
    >
      <div className={`max-w-3xl ${isCenter ? 'mx-auto' : ''}`}>
        {eyebrow && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Badge>{eyebrow}</Badge>
          </motion.div>
        )}

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#F5F5F7] leading-[1.15] tracking-[-0.02em]"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className={`mt-4 text-[#A1A1AA] text-base md:text-lg leading-[1.7] ${
              isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
            }`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {rightElement && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
          whileInView={shouldReduceMotion ? false : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="shrink-0"
        >
          {rightElement}
        </motion.div>
      )}
    </div>
  );
}