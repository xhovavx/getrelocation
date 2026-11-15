import React from 'react';
import { ShieldAlert, FileText } from 'lucide-react';
import { LEGAL_DISCLAIMER } from '../data/relocationData';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 md:py-14 space-y-10 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60">
          <FileText className="w-3.5 h-3.5 text-sky-500" />
          <span>מסמך משפטי מחייב</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          תקנון האתר ותנאי שימוש (Terms of Service)
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          עודכן לאחרונה: 2026 | תקף עבור GetRelocation.com
        </p>
      </div>

      {/* Prominent Legal Disclaimer Box */}
      <div className="p-6 rounded-brand-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300/80 dark:border-amber-800/60 text-slate-800 dark:text-slate-200 space-y-3 shadow-subtle">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-extrabold text-sm">
          <ShieldAlert className="w-5 h-5 flex-shrink-0" />
          <span>דיסקליימר משפטי, מיסויי ופיננסי מחייב (Explicit Disclaimer)</span>
        </div>
        <p className="text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {LEGAL_DISCLAIMER}
        </p>
      </div>

      {/* Terms Content Clauses */}
      <div className="space-y-8 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. מבוא והסכמה לתנאים
          </h2>
          <p>
            ברוכים הבאים לאתר GetRelocation.com (להלן: "האתר" או "המערכת"). השימוש באתר ובשירותיו, לרבות סימולטור ה-GTW, מאגרי הידע, מודל ה-AI ודוחות ה-PDF, כפוף לתנאים המפורטים להלן. בעצם הגלישה או השימוש במערכת, הנכם מאשרים כי קראתם, הבנתם והסכמתם לכל תנאי השימוש.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            2. אופי השירות ואי-מתן ייעוץ מקצועי
          </h2>
          <p>
            האתר מהווה כלי אנליטי ומחקרי המרכז נתונים פומביים, טבלאות מס ואומדני יוקר מחיה. המערכת אינה מעניקה ייעוץ משפטי, ייעוץ מס, ייעוץ פנסיוני, ייעוץ השקעות או ייעוץ הגירה. כל החלטה פיננסית או מעבר מדינה חייבים להתבצע בליווי אנשי מקצוע מוסמכים (רואי חשבון, עורכי דין ויועצי הגירה) המכירים את המקרה הפרטני שלכם.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            3. תוכניות רכישה, מחירים ומדיניות ביטולים
          </h2>
          <p>
            הרכישות באתר במסלולי GOLD (50 ₪) ו-PLATINUM (150 ₪) הינן עסקאות חד-פעמיות המקנות מכסת סימולציות מוגדרת. בהתאם לחוק הגנת הצרכן הישראלי החל על מוצרי מידע וקניין רוחני הניתנים להעתקה, מרגע הפקת סימולציה או הורדת דוח PDF לא יינתן החזר כספי.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            4. תוכנית "חבר מביא חבר" (Referrals)
          </h2>
          <p>
            כל משתמש רשום רשאי להזמין חברים דרך מסך ההגדרות (SETTINGS). זיכוי בסימולציה נוספת יינתן רק לאחר השלמת הרשמה והתחברות מלאה של החבר המוזמן דרך הלינק הייחודי. האתר שומר לעצמו את הזכות לבטל קרדיטים שהושגו באמצעי תרמית או חשבונות פיקטיביים.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            5. קניין רוחני
          </h2>
          <p>
            כל זכויות הקניין הרוחני באתר, לרבות אלגוריתם ה-GTW, 35 הקטגוריות ו-175 תת-הקטגוריות, הטקסטים, הלוגו, העיצוב הגרפי וקוד המקור, הינם קניינה הבלעדי של GetRelocation.com. אין להעתיק, לשכפל או להפיץ חלקים מהמערכת ללא אישור מראש ובכתב.
          </p>
        </section>
      </div>
    </div>
  );
};
