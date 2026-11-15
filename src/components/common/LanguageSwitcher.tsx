import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      dir="ltr"
      className={`inline-flex items-center p-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-[11px] font-bold select-none ${className}`}
      title={language === 'he' ? 'Switch to English (LTR)' : 'החלף לעברית (RTL)'}
    >
      <button
        type="button"
        onClick={() => setLanguage('he')}
        className={`px-2 py-0.5 rounded-full transition-all duration-150 ${
          language === 'he'
            ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-xs font-extrabold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`}
        aria-label="עברית (RTL)"
      >
        עב
      </button>

      <span className="text-slate-300 dark:text-slate-600 text-[10px] pointer-events-none">|</span>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-0.5 rounded-full transition-all duration-150 ${
          language === 'en'
            ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-xs font-extrabold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`}
        aria-label="English (LTR)"
      >
        EN
      </button>
    </div>
  );
};
