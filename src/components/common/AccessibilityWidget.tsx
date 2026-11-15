import React, { useState } from 'react';
import { Accessibility, Check, X } from 'lucide-react';

export const AccessibilityWidget: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('contrast-more');
  };

  const toggleLargeFont = () => {
    setLargeFont(!largeFont);
    document.documentElement.classList.toggle('text-lg');
  };

  return (
    <div className="fixed bottom-5 left-5 z-40">
      {/* Popover helper if clicked */}
      {isOpen && (
        <div className="mb-3 w-64 p-4 rounded-brand-lg bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <span className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
              <Accessibility className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>התאמות נגישות (AA)</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            האתר תואם לתקנות הנגישות הבינלאומיות WCAG 2.1 ברמת AA.
          </p>
          <div className="space-y-1.5">
            <button
              onClick={toggleHighContrast}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-brand text-xs font-medium border transition-colors ${
                highContrast
                  ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-300'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-750 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>ניגודיות מוגברת</span>
              {highContrast && <Check className="w-3.5 h-3.5 text-sky-600" />}
            </button>
            <button
              onClick={toggleLargeFont}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-brand text-xs font-medium border transition-colors ${
                largeFont
                  ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-300'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-750 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              <span>הגדלת גופן טקסט</span>
              {largeFont && <Check className="w-3.5 h-3.5 text-sky-600" />}
            </button>
          </div>
        </div>
      )}

      {/* Static Visual Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-11 h-11 rounded-full bg-slate-900/90 dark:bg-slate-800/90 hover:bg-slate-800 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-sky-500"
        aria-label="התאמות נגישות"
        title="נגישות האתר"
      >
        <Accessibility className="w-5 h-5 text-sky-400" />
      </button>

      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="absolute bottom-14 left-0 whitespace-nowrap bg-slate-900 text-white text-[11px] py-1 px-2.5 rounded-md shadow-md border border-slate-800 pointer-events-none">
          תפריט נגישות (WCAG 2.1 AA)
        </div>
      )}
    </div>
  );
};
