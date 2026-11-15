import React, { useId } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const LogoIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 sm:w-9 sm:h-9' }) => {
  const maskId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          {/* White base keeps the house solid */}
          <rect width="24" height="24" fill="white" />
          {/* Clean boolean subtraction channel cutting through the house */}
          <path
            d="M 4 18.5 C 9.5 18.5 15 11 22 2"
            fill="none"
            stroke="black"
            strokeWidth="4.8"
            strokeLinecap="round"
          />
          {/* Cutout clearance around arrowhead */}
          <path
            d="M 15 2 H 23 V 10"
            fill="none"
            stroke="black"
            strokeWidth="4.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
      </defs>

      {/* Solid filled dark house shape (deep charcoal/slate) with boolean subtraction cutout */}
      <path
        d="M 11 5 L 2 12 H 4 V 22 H 18 V 12 H 20 Z"
        className="fill-slate-900 dark:fill-slate-100"
        fill="#0f172a"
        mask={`url(#${maskId})`}
      />

      {/* Curved, upward-trending exponential growth arrow pulled high above the roof in vibrant turquoise-green / teal */}
      <path
        d="M 5 18.5 C 10.5 18.5 16 11 22 2"
        fill="none"
        className="stroke-emerald-500 dark:stroke-emerald-400"
        stroke="#10b981"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M 16 2 H 22 V 8"
        fill="none"
        className="stroke-emerald-500 dark:stroke-emerald-400"
        stroke="#10b981"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = false }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* 
        Clean, natural prominent header size without any background square/box container.
        Scalable and breathes naturally.
      */}
      <LogoIcon className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 transition-transform duration-200 group-hover:scale-105" />

      {/* Brand Text - STRICTLY enforced LTR so .com is ALWAYS to the right of GetRelocation */}
      <div className="flex flex-col leading-tight" dir="ltr">
        <div className="flex items-baseline font-sans">
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
            Get<span className="text-teal-600 dark:text-teal-400 font-bold">Relocation</span>
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 ml-0.5">
            .com
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium" dir="rtl">
            הבית של המשפחות ברילוקיישן חכם
          </span>
        )}
      </div>
    </Link>
  );
};
