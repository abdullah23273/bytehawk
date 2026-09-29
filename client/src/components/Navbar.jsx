import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Button from './ui/Button';
import { NAV_LINKS } from '../constants/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0F]/85 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-xl shadow-black/40'
          : 'bg-[#0A0A0F]/50 backdrop-blur-sm border-b border-white/[0.04] py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          aria-label="YOURCOMPANY Agency Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#22D3EE] p-[1px] shadow-sm shadow-indigo-500/30">
            <div className="w-full h-full bg-[#0A0A0F] rounded-[7px] flex items-center justify-center font-bold text-xs text-white">
              YC
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#F5F5F7] font-heading">
            YOUR<span className="text-gradient">COMPANY</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-1 py-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            icon={ArrowUpRight}
            ariaLabel="Start a project with YOURCOMPANY"
          >
            Start a project
          </Button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#A1A1AA] hover:text-[#F5F5F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] bg-black/70 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 bg-[#12121A] border-b border-white/[0.1] shadow-2xl p-6 z-50 md:hidden"
            >
              <nav className="flex flex-col gap-4 mb-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#F5F5F7] hover:text-[#22D3EE] py-2 border-b border-white/[0.04] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={ArrowUpRight}
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a project
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}