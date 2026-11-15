import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Layers,
  FileCheck,
  Search,
  CheckCircle,
  ArrowLeft,
  ShieldCheck,
  Receipt,
  Home,
  GraduationCap,
  HeartPulse,
  Palmtree,
  BookOpen,
} from 'lucide-react';
import { CATEGORY_GROUPS } from '../data/relocationData';

export const ProductPage: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const groupIconMap: Record<string, React.ReactNode> = {
    'tax-finance': <Receipt className="w-5 h-5 text-sky-500" />,
    'housing-living': <Home className="w-5 h-5 text-teal-500" />,
    'education-kids': <GraduationCap className="w-5 h-5 text-emerald-500" />,
    'healthcare': <HeartPulse className="w-5 h-5 text-rose-500" />,
    'community-safety': <ShieldCheck className="w-5 h-5 text-amber-500" />,
    'visas-relocation': <FileCheck className="w-5 h-5 text-indigo-500" />,
    'lifestyle-pets': <Palmtree className="w-5 h-5 text-cyan-500" />,
  };

  const filteredGroups = CATEGORY_GROUPS.filter((group) => {
    if (selectedGroup !== 'all' && group.id !== selectedGroup) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const inName = group.name.toLowerCase().includes(q);
    const inDesc = group.description.toLowerCase().includes(q);
    const inSubs = group.subcategories.some((sub) => sub.toLowerCase().includes(q));
    return inName || inDesc || inSubs;
  });

  return (
    <div className="space-y-16 md:space-y-24 py-6 md:py-12 pb-16">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/60">
          <Cpu className="w-3.5 h-3.5 text-sky-500" />
          <span>המוצר</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          המנוע האלגוריתמי של GetRelocation
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          איך המערכת משקללת 35 קטגוריות ליבה, 175 תת-קטגוריות, אמנות מס (DTA) ונתוני שכר כדי לחשב את תרחיש המעבר המדויק ביותר עבורכם.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            35 קטגוריות ליבה
          </span>
          <span>•</span>
          <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            175 תת-קטגוריות
          </span>
          <span>•</span>
          <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            סורק אמנות מס DTA
          </span>
          <span>•</span>
          <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            יועץ AI / LLM חופשי
          </span>
        </div>
      </section>

      {/* 6-Step Algorithmic Engine Workflow */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/50">
            <Layers className="w-3.5 h-3.5 text-teal-500" />
            <span>זרימת החישוב</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            הסבר מלא: איך המנוע האלגוריתמי עובד עבורכם?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            בלי מונחים מפותלים — שישה מודולים טכנולוגיים שפועלים בסנכרון מלא להפקת התוצאה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark space-y-3">
            <div className="w-10 h-10 rounded-brand bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-black text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              פרופיל משפחתי, גיל הורה ומדינת מוצא
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              הזינו את מדינת המוצא (מקום האזרחות/תושבות), גיל ההורה המוביל, מספר בני הזוג והילדים. המערכת מתאימה אוטומטית את חוקי מס המוצא ואת משקלי הקטגוריות.
            </p>
          </div>

          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark space-y-3">
            <div className="w-10 h-10 rounded-brand bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-black text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              מבחן הכנסה ואזרחות לכל בן זוג
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              הגדירו לכל בן זוג בנפרד: שכר, עצמאי או בעל חברה, ביטוח מנהלים, קרן השתלמות, דרכון זר ומדינת רישום העסק לקבלת מודל נטו אמיתי.
            </p>
          </div>

          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark space-y-3">
            <div className="w-10 h-10 rounded-brand bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              שקלול 35 קטגוריות ו-175 תת-קטגוריות
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              בחרו אילו קטגוריות ותת-קטגוריות חשובות לכם ביותר — מיוקר דיור וחינוך בינלאומי ועד קהילה יהודית, אשרות שהייה, קנאביס רפואי וחיות מחמד.
            </p>
          </div>

          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark space-y-3">
            <div className="w-10 h-10 rounded-brand bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-sm">
              04
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              בדיקת שינויי חקיקה ואמנות מס (DTA)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              לפני כל החלטה, המערכת סורקת שינויי חקיקה עדכניים בין מדינת המוצא למדינת היעד ובודקת אמנות למניעת כפל מס, ניכוי במקור ומיסי פנסיה.
            </p>
          </div>

          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark space-y-3">
            <div className="w-10 h-10 rounded-brand bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-sm">
              05
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              סימולטור נטו משפחתי ודירוג ערים
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              קבלו דירוג מדויק של המדינות והערים המובילות, כולל חישוב הנטו החודשי של כל בן זוג לאחר מס ביעד, קצבאות ילדים מקומיות וחיסכון חודשי נטו.
            </p>
          </div>

          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark space-y-3">
            <div className="w-10 h-10 rounded-brand bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center font-black text-sm">
              06
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              יועץ AI חופשי ודוח PDF מנהלים
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              התייעצו בחופשיות עם צ'אט ה-AI של המערכת המותאם יעדים והגברה מנופי מס, והפיקו דוח PDF מנהלים להדפסה או שיתוף עם בנק ורואה החשבון.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Exploration of Categories */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/50">
              <BookOpen className="w-3.5 h-3.5 text-sky-500" />
              <span>קטלוג המדדים</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              35 קטגוריות הליבה ו-175 תת-הקטגוריות
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              לחצו וסננו בין תחומי החיים השונים הנמדדים במערכת GetRelocation
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="חיפוש קטגוריה (למשל: NHR, בתי ספר, כשרות)..."
              className="w-full pr-9 pl-3 py-2 rounded-brand border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
          </div>
        </div>

        {/* Group selector tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs">
          <button
            onClick={() => setSelectedGroup('all')}
            className={`px-3 py-1.5 rounded-brand font-semibold transition-colors whitespace-nowrap ${
              selectedGroup === 'all'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            כל התחומים ({CATEGORY_GROUPS.length})
          </button>
          {CATEGORY_GROUPS.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-3 py-1.5 rounded-brand font-semibold transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                selectedGroup === group.id
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>{group.name.split(',')[0]}</span>
            </button>
          ))}
        </div>

        {/* Categories cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-brand bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                  {groupIconMap[group.id]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {group.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  תת-קטגוריות לדוגמה הכלולות במודל:
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {group.subcategories.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-850 px-3 py-2 rounded-brand"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DTA Tax Treaties Deep Dive Section */}
      <section className="rounded-brand-xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-6 md:p-12 border border-slate-800 shadow-xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
            <span>סורק אמנות כפל מס (DTA)</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            איך אמנות כפל מס (DTA) מגינות עליכם?
          </h2>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            אמנת מס (Double Tax Agreement) היא הסכם בילטרלי בין ישראל למדינת היעד המגדיר בבירור איזו מדינה רשאית לגבות מס, ומונע מצב של תשלום כפול על אותו שכר או דיבידנד.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-4 rounded-brand bg-white/5 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-teal-300">
              1. זיכוי מס זר (Foreign Tax Credit)
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              כל יורו או שקל של מס ששולם במדינת היעד מזוכה ישירות כנגד חבות מס בישראל בהתאם לסעיפי האמנה, כך שאינכם משלמים מס כפול.
            </p>
          </div>

          <div className="p-4 rounded-brand bg-white/5 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-sky-300">
              2. הגנה על פנסיות וקופות גמל
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              האמנה מסדירה את הכללים למשיכת כספי פנסיה, קרנות השתלמות ופיצויי פיטורין לאחר ניתוק התושבות מישראל.
            </p>
          </div>

          <div className="p-4 rounded-brand bg-white/5 border border-white/10 space-y-2">
            <h4 className="text-sm font-bold text-amber-300">
              3. התאמה למשטרי Non-Dom
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              שילוב של פטור מס מקומי (כמו 0% דיבידנד בקפריסין) יחד עם אמנת המס מבטיח מימוש חוקי ומלא של החיסכון.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 text-xs text-slate-400">
          <span>עודכן לשנת המס 2025-2026 מול רשות המסים בישראל</span>
          <Link
            to="/#simulator-section"
            className="px-4 py-2 rounded-brand bg-sky-600 hover:bg-sky-500 text-white font-bold transition-colors flex items-center gap-1.5"
          >
            <span>בדקו את השכר שלכם בסימולטור</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
