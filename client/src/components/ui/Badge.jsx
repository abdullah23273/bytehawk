import React from 'react';

export default function Badge({ children, withDot = true, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121A] border border-white/[0.08] text-[12px] tracking-[0.12em] uppercase font-semibold text-[#22D3EE] shadow-sm select-none ${className}`}
    >
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}