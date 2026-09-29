import React from 'react';
import { ArrowUp, Mail, Globe } from 'lucide-react';
import { FOOTER_CONTENT } from '../constants/content';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DribbbleIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
);

const SOCIAL_ICONS = {
  Github: GithubIcon,
  Twitter: TwitterIcon,
  Linkedin: LinkedinIcon,
  Dribbble: DribbbleIcon,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0F] border-t border-white/[0.08] pt-16 pb-12 text-[#A1A1AA]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 -ml-1 mb-4"
                aria-label="YOURCOMPANY Agency Home"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#22D3EE] p-[1px] shadow-sm">
                  <div className="w-full h-full bg-[#0A0A0F] rounded-[7px] flex items-center justify-center font-bold text-xs text-white">
                    YC
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight text-[#F5F5F7] font-heading">
                  {FOOTER_CONTENT.logoFirst}
                  <span className="text-gradient">{FOOTER_CONTENT.logoSecond}</span>
                </span>
              </a>

              <p className="text-sm leading-relaxed text-[#A1A1AA] max-w-sm mb-6">
                {FOOTER_CONTENT.tagline}
              </p>

              <div className="flex items-center gap-2 text-xs text-[#6B6B78]">
                <Globe className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>{FOOTER_CONTENT.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {FOOTER_CONTENT.links.social.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon] || Globe;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#12121A] border border-white/[0.08] hover:border-cyan-400/40 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5F5F7] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {FOOTER_CONTENT.links.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5F5F7] mb-5">
                Direct Contact
              </h4>
              <p className="text-sm text-[#A1A1AA] mb-4">
                Have an RFP, collaboration idea, or want to discuss architecture?
              </p>
              <a
                href={`mailto:${FOOTER_CONTENT.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#22D3EE] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{FOOTER_CONTENT.email}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.04]">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-[#22D3EE] bg-cyan-950/40 px-3 py-1.5 rounded-full border border-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Accepting new clients for 2026/2027
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B78]">
          <div className="flex items-center gap-6">
            <span>{FOOTER_CONTENT.copyright}</span>
            <div className="flex gap-4">
              {FOOTER_CONTENT.links.legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#A1A1AA] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded px-2 py-1"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}