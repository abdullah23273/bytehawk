import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ariaLabel,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 rounded-full gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2',
    lg: 'text-base px-7 py-3.5 rounded-full gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:brightness-110 border border-white/20',
    secondary:
      'bg-[#1A1A24] text-[#F5F5F7] border border-white/[0.1] hover:border-white/[0.25] hover:bg-[#222230]',
    ghost:
      'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/[0.05] border border-transparent',
    outline:
      'bg-transparent text-[#F5F5F7] border border-white/[0.15] hover:border-cyan-400/50 hover:bg-white/[0.03]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} aria-label={ariaLabel} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} aria-label={ariaLabel} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}