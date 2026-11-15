import React from 'react';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/relocationData';

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "מה מספרות המשפחות שכבר עברו עם המערכת?",
  subtitle = "תובנות אמיתיות של ישראלים שהשתמשו במודל ה-GTW כדי לקבל החלטה שקולה וחסכו אלפי שקלים בכל חודש",
  compact = false,
}) => {
  return (
    <section className="space-y-8">
      {!compact && (
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>עדויות מאומתות • דירוג 4.9 מתוך 5 כוכבים</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="relative p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark flex flex-col justify-between group hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-200 hover:-translate-y-1"
          >
            {/* Abstract geometric quote icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-brand bg-gradient-to-tr from-sky-100 to-teal-50 dark:from-slate-800 dark:to-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center font-black text-sm">
                <Quote className="w-5 h-5 rotate-180" />
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.savings}</span>
              </div>
            </div>

            {/* Verbatim Quote */}
            <blockquote className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-6 leading-snug">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author Meta */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              {/* Minimalist Geometric Monogram Avatar - NO PHOTOS */}
              <div className="w-11 h-11 rounded-brand bg-gradient-to-tr from-sky-500 via-teal-500 to-emerald-400 p-[1.5px] flex-shrink-0">
                <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-[10.5px] flex items-center justify-center font-extrabold text-sm text-sky-600 dark:text-sky-400">
                  {t.avatarInitials}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900 dark:text-white">
                  <span>{t.author}</span>
                  <span className="text-base">{t.flag}</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
