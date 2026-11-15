import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Search,
} from 'lucide-react';
import {
  PRICING_PLANS,
  COMPARISON_TABLE_ROWS,
  FAQ_ITEMS,
} from '../data/relocationData';
import { ReferralBanner } from '../components/common/ReferralBanner';
import { AuthModal } from '../components/common/AuthModal';

export const PricingPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [faqSearch, setFaqSearch] = useState('');

  const tags = ['all', 'קפריסין', 'יוון', 'Non-Dom', 'ויזת נוודים', 'חבר מביא חבר', 'ניתוק תושבות', 'DTA'];

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    if (selectedTag !== 'all' && faq.tag !== selectedTag) return false;
    if (!faqSearch.trim()) return true;
    const q = faqSearch.toLowerCase();
    return (
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      faq.tag.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-16 md:space-y-24 py-6 md:py-12 pb-16">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/60">
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          <span>מחירים שקופים וללא אותיות קטנות</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          טבלת המחירים והמסלולים השקופה שלנו
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          בחרו את המסלול המתאים לכם — תשלום חד-פעמי ללא דמי מנוי חודשיים, כולל מודל AI / LLM חופשי לשאלות ותשובות בכל שלושת המסלולים!
        </p>

        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/60">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>תשלום חד-פעמי בלבד • ללא חידוש אוטומטי • Local-First מוגן</span>
        </div>
      </section>

      {/* 3-Tier Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          return (
            <div
              key={plan.id}
              className={`relative rounded-brand-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-white dark:bg-slate-900 border-2 border-sky-500 shadow-elevated'
                  : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-600 to-teal-600 text-white font-extrabold text-xs shadow-md">
                  המסלול המבוקש ביותר
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">
                  {plan.badge}
                </span>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                      {plan.priceShekels} ₪
                    </span>
                    {plan.priceShekels === 0 ? (
                      <span className="text-xs text-slate-500 font-semibold">/ חינם לתמיד</span>
                    ) : (
                      <span className="text-xs text-slate-500 font-semibold">/ תשלום חד-פעמי</span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    {plan.periodLabel}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    מה כלול במסלול:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setAuthModalOpen(true)}
                className={`w-full py-3 px-4 rounded-brand font-bold text-xs md:text-sm transition-all shadow-sm hover:shadow text-center flex items-center justify-center gap-1.5 ${
                  plan.buttonVariant === 'solid'
                    ? 'bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white'
                    : plan.buttonVariant === 'gradient'
                    ? 'bg-gradient-to-r from-amber-500 via-sky-600 to-teal-600 hover:opacity-95 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200'
                }`}
              >
                <span>{plan.buttonText}</span>
              </button>
            </div>
          );
        })}
      </section>

      {/* Feature Comparison Table */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            השוואת יכולות מלאה בין המסלולים
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            כל הנתונים והיכולות המדויקות במערכת GetRelocation v6.0
          </p>
        </div>

        <div className="rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark overflow-x-auto">
          <table className="w-full text-right text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-850/80 border-b border-slate-200 dark:border-slate-800">
                <th className="p-4 md:p-5 font-bold text-slate-700 dark:text-slate-300 w-2/5">
                  מאפיין / יכולת במערכת
                </th>
                <th className="p-4 md:p-5 font-bold text-slate-700 dark:text-slate-300 w-1/5 text-center">
                  <div>מסלול 1 — חופשי</div>
                  <div className="text-[11px] font-normal text-slate-400">0 ₪ (חינם)</div>
                </th>
                <th className="p-4 md:p-5 font-bold text-sky-600 dark:text-sky-400 w-1/5 text-center bg-sky-50/50 dark:bg-sky-950/20">
                  <div>מסלול 2 — GOLD ⭐</div>
                  <div className="text-[11px] font-normal text-sky-500">50 ₪ (חד-פעמי)</div>
                </th>
                <th className="p-4 md:p-5 font-bold text-slate-700 dark:text-slate-300 w-1/5 text-center">
                  <div>מסלול 3 — PLATINUM 👑</div>
                  <div className="text-[11px] font-normal text-slate-400">150 ₪ (חד-פעמי)</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {COMPARISON_TABLE_ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/60 dark:hover:bg-slate-850/40 transition-colors"
                >
                  <td className="p-4 md:p-5 font-semibold text-slate-800 dark:text-slate-200">
                    {row.feature}
                  </td>
                  <td className="p-4 md:p-5 text-center text-slate-600 dark:text-slate-400">
                    {row.free}
                  </td>
                  <td className="p-4 md:p-5 text-center font-semibold text-sky-700 dark:text-sky-300 bg-sky-50/30 dark:bg-sky-950/10">
                    {row.gold}
                  </td>
                  <td className="p-4 md:p-5 text-center font-bold text-slate-900 dark:text-white">
                    {row.platinum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Standalone Referral Program Banner */}
      <ReferralBanner />

      {/* FAQ Accordion Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/50">
            <HelpCircle className="w-3.5 h-3.5 text-sky-500" />
            <span>מאגר הידע המלא</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            30 שאלות ותשובות רלוונטיות + צ'אט AI חופשי
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            חפשו מתוך מאגר השאלות או שאלו ישירות את הצ'אט החכם של המערכת בכל נושא שרלוונטי למעבר שלכם.
          </p>
        </div>

        {/* Search & Tag Filter */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative">
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="חפשו שאלה (למשל: Non-Dom, ביטוח לאומי, בתי ספר, זיכוי מס)..."
              className="w-full pr-10 pl-4 py-3 rounded-brand border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar text-xs">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full font-semibold transition-colors whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                {tag === 'all' ? 'הכל' : tag}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-brand border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-subtle transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-right font-bold text-xs md:text-sm text-slate-900 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-850 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {faq.tag}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0 mr-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 mr-2" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
};
