import React from 'react';
import { Lock, Database, EyeOff, FileText } from 'lucide-react';
import { LEGAL_DISCLAIMER } from '../data/relocationData';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 md:py-14 space-y-10 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60">
          <Lock className="w-3.5 h-3.5 text-teal-500" />
          <span>אבטחה ופרטיות Local-First</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          מדיניות פרטיות ואבטחת מידע (Privacy Policy)
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          ארכיטקטורת Local-First • עמידה מלאה בתקני GDPR (EU 2016/679) וב-HIPAA (45 CFR § 164)
        </p>
      </div>

      {/* Local-First Core Guarantee Banner */}
      <div className="p-6 rounded-brand-xl bg-gradient-to-br from-teal-900 via-sky-950 to-slate-900 text-white space-y-3 shadow-lg border border-teal-800/40">
        <div className="flex items-center gap-2 text-teal-300 font-extrabold text-sm">
          <Lock className="w-5 h-5 flex-shrink-0" />
          <span>התחייבות הברזל שלנו: נתוני ההכנסה שלכם נשארים בדפדפן שלכם בלבד!</span>
        </div>
        <p className="text-xs md:text-sm leading-relaxed text-slate-300">
          בניגוד לשירותים מסורתיים ששומרים את נתוני השכר והמשפחה בשרתי ענן מרכזיים, מערכת GetRelocation v6.0 פועלת במודל <strong>Local-First</strong>. כל חישובי הנטו, שכר בני הזוג והסימולציות מתבצעים ישירות על מעבד המכשיר שלכם ואינם מועברים או נשמרים במסדי נתונים חיצוניים.
        </p>
      </div>

      {/* Privacy Clauses */}
      <div className="space-y-8 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <EyeOff className="w-4 h-4 text-sky-500" />
            <span>1. איסוף מידע ואי-שיתוף עם גורמים מסחריים</span>
          </h2>
          <p>
            אנו אוספים אך ורק את המידע הנחוץ לניהול החשבון שלכם (כתובת אימייל ושם לצורך התחברות מאובטחת והפקת דוחות). אנו לעולם איננו משתפים, משכירים או מוכרים פרטים אלו לסוכנויות נדל"ן, קרנות השקעה או חברות שיווק.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Database className="w-4 h-4 text-teal-500" />
            <span>2. עמידה בתקני GDPR ו-HIPAA</span>
          </h2>
          <p>
            המערכת עומדת בהוראות תקנות הגנת המידע הכלליות של האיחוד האירופי (GDPR - EU Regulation 2016/679) ובהנחיות האבטחה של HIPAA (45 CFR § 164) לגבי הגנה על מידע אישי. לכל משתמש שמורה הזכות למחיקה מלאה (Right to be Forgotten) של החשבון והמידע המקושר אליו בכל עת.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-500" />
            <span>3. אבטחת גישה ואימות דו-שלבי (2FA)</span>
          </h2>
          <p>
            הגישה למערכת מאובטחת באמצעות הצפנת SSL/TLS 256-bit בתקן בנקאי ומאפשרת אימות דו-שלבי (2FA) באמצעות Google Authenticator או SMS כדי למנוע גישה לא מורשית לחשבונכם.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-500" />
            <span>4. קבצי עוגיות (Cookies) ואחסון מקומי (LocalStorage)</span>
          </h2>
          <p>
            האתר משתמש ב-LocalStorage של הדפדפן לשמירת העדפות תצוגה בלבד (מצב תצוגה כהה/בהיר) וב-Session Storage לשמירת נתוני הסימולציה הפעילה. לא נעשה שימוש בעוגיות מעקב של צדדים שלישיים לצרכי פרסום ממוקד.
          </p>
        </section>
      </div>

      {/* Verbatim Legal Disclaimer */}
      <div className="p-6 rounded-brand-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
        <span className="font-bold text-slate-800 dark:text-slate-200 block">
          הבהרה משפטית (Disclaimer):
        </span>
        <p className="leading-relaxed">
          {LEGAL_DISCLAIMER}
        </p>
      </div>
    </div>
  );
};
