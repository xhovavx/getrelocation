import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Zap,
} from 'lucide-react';
import { SimulatorWizard } from '../components/simulator/SimulatorWizard';
import { TestimonialsSection } from '../components/common/TestimonialsSection';
import { ReferralBanner } from '../components/common/ReferralBanner';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const isHe = language === 'he';

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-14 overflow-hidden">
        {/* Subtle abstract geometric background shapes */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-sky-400/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-tr from-emerald-400/10 to-sky-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Trust rating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm text-xs text-slate-700 dark:text-slate-300">
            <span className="text-amber-400 font-bold">⭐⭐⭐⭐⭐ 4.9/5</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {isHe ? 'מעל 2,480 משפחות והייטקיסטים' : 'Over 2,480 Families & Tech Professionals'}
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{t('nav.big4')}</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            {isHe ? (
              <>
                אנחנו נדאג לחישובים ולהמלצות —{' '}
                <span className="gradient-text">אתם תדאגו לארוז! ✈️</span>
              </>
            ) : (
              <>
                We handle the calculations and insights —{' '}
                <span className="gradient-text">you focus on packing! ✈️</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isHe
              ? 'בלי מונחים מסובכים ובלי טפסים ארוכים. בחרו מה חשוב לכם בסימולטור למטה או בצעו בדיקת זכאות מהירה למעבר חלק ובטוח.'
              : 'No complicated financial jargon and no endless forms. Select your priorities in the simulator below or run a fast eligibility check for a smooth transition.'}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#simulator-section"
              className="w-full sm:w-auto px-7 py-3.5 rounded-brand bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-extrabold text-sm md:text-base shadow-elevated hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <span>{isHe ? '✈️ הרץ סימולציה ב-5 שלבים פשוטים' : '✈️ Run 5-Step Simulation'}</span>
              {isHe ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>

            <Link
              to="/plans"
              className="w-full sm:w-auto px-6 py-3.5 rounded-brand border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm md:text-base transition-all duration-150 flex items-center justify-center gap-2"
            >
              <span>{isHe ? 'צפייה בתוכניות ובמחירים (החל מ-0 ₪)' : 'View Plans & Pricing (Starting at 0 ₪)'}</span>
            </Link>
          </div>

          {/* Fast metric pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto text-xs">
            <div className="p-3 rounded-brand bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
              <span className="block font-black text-base text-sky-600 dark:text-sky-400">
                {isHe ? '35 קטגוריות' : '35 Categories'}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                {isHe ? 'ו-175 תת-קטגוריות' : '& 175 Subcategories'}
              </span>
            </div>
            <div className="p-3 rounded-brand bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
              <span className="block font-black text-base text-teal-600 dark:text-teal-400">
                {isHe ? '65 יעדים' : '65 Destinations'}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                {isHe ? 'וערים מובילות ברילוקיישן' : 'Top Relocation Cities'}
              </span>
            </div>
            <div className="p-3 rounded-brand bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
              <span className="block font-black text-base text-emerald-600 dark:text-emerald-400">
                {isHe ? 'סורק DTA' : 'DTA Treaty Scanner'}
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                {isHe ? 'מניעת כפל מס מול ישראל' : 'Double Tax Relief'}
              </span>
            </div>
            <div className="p-3 rounded-brand bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
              <span className="block font-black text-base text-slate-800 dark:text-white">Local-First</span>
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                {isHe ? 'נתונים מוצפנים בדפדפן' : 'In-Browser Encryption'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Value Overview ("How it works") */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/50">
            <Zap className="w-3.5 h-3.5 text-sky-500" />
            <span>{isHe ? 'מדריך תפעול פשוט ומהיר' : 'Quick & Simple Guide'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isHe
              ? 'איך המערכת עובדת? בגובה העיניים ובלי כאבי ראש'
              : 'How Does It Work? Crystal Clear & Hassle-Free'}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {isHe
              ? 'כל מה שצריך כדי לקבל החלטה שקולה על רילוקיישן — בצעדים פשוטים, בלי נוסחאות מורכבות ובלי אותיות קטנות.'
              : 'Everything you need to make an informed relocation decision — in simple steps, without complicated formulas or fine print.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark relative group hover:border-sky-300 dark:hover:border-sky-700 transition-all">
            <div className="w-12 h-12 rounded-brand bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center font-black text-lg mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {isHe ? 'מי אתם ומה יש לכם?' : 'Who Are You & What You Have?'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {isHe
                ? 'מזינים גיל הורה, מספר ילדים ואזרחות זרה (אם יש). המערכת מתאימה אוטומטית את משקלי הדיור, בתי הספר והויזות הנדרשות.'
                : 'Enter parent age, number of children, and foreign passports. The system dynamically weights housing needs, international schools, and visa requirements.'}
            </p>
          </div>

          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark relative group hover:border-teal-300 dark:hover:border-teal-700 transition-all">
            <div className="w-12 h-12 rounded-brand bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-lg mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {isHe ? 'ממה אתם מתפרנסים ומה חשוב לכם?' : 'Income & What Matters Most?'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {isHe
                ? 'מגדירים הכנסה (שכיר, עצמאי, בעל חברה) ובוחרים את סדרי העדיפויות המשפחתיים: חיסכון במס, יוקר מחיה, חינוך או קרבה לישראל.'
                : 'Define income structures (employee, freelance, company owner) and choose family priorities: tax relief, living costs, schooling, or proximity.'}
            </p>
          </div>

          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark relative group hover:border-emerald-300 dark:hover:border-emerald-700 transition-all">
            <div className="w-12 h-12 rounded-brand bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-lg mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {isHe ? 'מקבלים את התשובה המלאה והמדויקת!' : 'Get the Complete, Accurate Answer!'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {isHe
                ? 'מנוע ה-GTW מחשב דירוג יעדים מנצח, שכר נטו צפוי, חיסכון חודשי אמיתי ביחס לישראל, ואפשרות להורדת דוח PDF מנהלים מלא.'
                : 'The GTW engine computes your top destination rankings, expected net income, real monthly savings, and generates an executive PDF report.'}
            </p>
          </div>
        </div>
      </section>

      {/* Simulator Anchor & Main Interactive Component */}
      <section className="space-y-4">
        <SimulatorWizard />
      </section>

      {/* Testimonial Highlights */}
      <TestimonialsSection />

      {/* Referral Standalone Banner ("חבר מביא חבר") */}
      <ReferralBanner />

      {/* Bottom CTA Banner */}
      <section className="rounded-brand-xl bg-slate-900 text-white p-8 md:p-12 text-center space-y-4 border border-slate-800">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white">
          {isHe
            ? 'רוצים להבין בדיוק איך עובד המנוע האלגוריתמי?'
            : 'Want to understand how the algorithmic engine works?'}
        </h3>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          {isHe
            ? 'גלו את 35 הקטגוריות, מודל ה-GTW הייחודי, וכיצד אמנות המס (DTA) מגינות על החיסכון המשפחתי שלכם.'
            : 'Explore all 35 categories, the GTW analytical model, and how bilateral tax treaties (DTA) safeguard your family wealth.'}
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/product"
            className="px-6 py-3 rounded-brand bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs md:text-sm shadow-md transition-all"
          >
            {isHe ? 'גלו את המוצר והמנוע האנליטי 💡' : 'Explore Product & Engine 💡'}
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-brand bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold text-xs md:text-sm transition-all border border-slate-700"
          >
            {isHe ? 'מי אנחנו וסיפור ההקמה 🏠' : 'About Us & Mission 🏠'}
          </Link>
        </div>
      </section>
    </div>
  );
};
