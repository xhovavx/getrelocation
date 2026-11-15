import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  ShieldCheck,
  Compass,
  Sparkles,
  Layers,
  Users,
  Calculator,
  FileCheck,
  Bot,
  ArrowLeft,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { MODEL_PRINCIPLES } from '../data/relocationData';
import { TestimonialsSection } from '../components/common/TestimonialsSection';

export const AboutPage: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-sky-500" />,
    Users: <Users className="w-5 h-5 text-teal-500" />,
    Calculator: <Calculator className="w-5 h-5 text-emerald-500" />,
    FileCheck: <FileCheck className="w-5 h-5 text-indigo-500" />,
    Bot: <Bot className="w-5 h-5 text-sky-500" />,
  };

  return (
    <div className="space-y-16 md:space-y-24 py-6 md:py-12 pb-16">
      {/* Header Banner */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/60">
          <HeartHandshake className="w-3.5 h-3.5 text-sky-500" />
          <span>אודות מערכת GetRelocation.com</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          הסיפור האישי שמאחורי המערכת ומודל ה-GTW
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          איך הורים ואנשי הייטק שהתמודדו בעצמם עם כאב הראש של תכנון רילוקיישן, הפכו את אי-הוודאות למנוע החלטות אנליטי מבוסס עובדות.
        </p>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-xs font-bold text-emerald-700 dark:text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>ארכיטקטורת מערכת פעילה: v6.0 LIVE</span>
        </div>
      </section>

      {/* The Story & Problem We Solve */}
      <section className="rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark p-6 md:p-12 space-y-8">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <span>מי אנחנו — אנחנו בדיוק במצב שאתם נמצאים 🤝</span>
          </h2>

          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            אנחנו נמצאים בדיוק במצב שבו אתם נמצאים עכשיו — הורים, בני זוג ואנשי מקצוע שמחפשים מקום טוב יותר, בטוח יותר, שפוי יותר וכלכלי יותר לגדל בו את המשפחה שלנו.
          </p>

          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            אחרי מאות שעות של חיפושים מתישים, טבלאות אקסל מפותלות, שמועות סותרות בקבוצות פייסבוק ואי-ודאות מול רשויות המס, הבנו שאין שום מערכת אחת שמרכזת את כל האמת האנליטית במקום אחד.
          </p>

          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            לכן בנינו את המערכת הזו קודם כל עבור עצמנו ועבור המשפחה שלנו — כדי לקבל החלטת חיים שקולה, מבוססת נתונים אמיתיים, אמנות מס ושינויי חקיקה עדכניים — והחלטנו לפתוח אותה עבורכם, כדי שגם אתם תוכלו למצוא את המקום הטוב ביותר עבורכם בביטחון מלא ובלי לנחש בחשיכה.
          </p>
        </div>

        {/* 3 Core Ground Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="p-5 rounded-brand bg-slate-50 dark:bg-slate-850/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
            <div className="w-10 h-10 rounded-brand bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              נבנה מהשטח, מתוך צורך אמיתי
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              כל אחד מ-175 תת-הקטגוריות נולד מתוך דילמה אמיתית שפגשנו בעצמנו במהלך תכנון המעבר המשפחתי: מהסגר חיות מחמד ועד עלות ביטוח שיניים.
            </p>
          </div>

          <div className="p-5 rounded-brand bg-slate-50 dark:bg-slate-850/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
            <div className="w-10 h-10 rounded-brand bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              אובייקטיביות ושקיפות מלאה
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              אנחנו לא סוכנות נדל"ן ולא משווקים פרויקטים במדינה ספציפית — המנוע מודד את המדינות אך ורק לפי הנתונים והמשקלים שלכם, ללא הטיות מסחריות.
            </p>
          </div>

          <div className="p-5 rounded-brand bg-slate-50 dark:bg-slate-850/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2">
            <div className="w-10 h-10 rounded-brand bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              פרטיות מוחלטת (Local-First)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              כמו שאנחנו שומרים על פרטיות המשפחה שלנו, כך בנינו את המערכת: כל נתוני ההכנסה והמשפחה נשמרים בדפדפן שלכם בלבד ואינם נשמרים בשרת.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Core GTW Model Principles in Clean Cards */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/50">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span>הארכיטקטורה האנליטית</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            5 עקרונות המודל החכם שלנו (GTW Engine)
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            הבסיס המדעי והאנליטי המאפשר השוואה אמינה בין עשרות מדינות ומאות תרחישי שכר ומיסוי
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODEL_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark flex flex-col justify-between group hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-brand bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {iconMap[principle.icon]}
                  </div>
                  <span className="font-mono text-xs font-black text-slate-400 dark:text-slate-500">
                    עיקרון {principle.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {principle.title}
                </h3>

                <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-3">
                  {principle.shortDesc}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.detailedDesc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>מוטמע במנוע החישוב של v6.0</span>
              </div>
            </div>
          ))}

          {/* Quick interactive callout card */}
          <div className="p-6 rounded-brand-xl bg-gradient-to-br from-sky-600 to-teal-700 text-white shadow-card flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                מוכנים להתחיל?
              </span>
              <h3 className="text-xl font-extrabold text-white">
                הריצו את המודל על הנתונים שלכם עכשיו
              </h3>
              <p className="text-xs text-sky-100 leading-relaxed">
                הסימולטור פעיל בחינם לכל משתמש ומציג תמונת מצב מלאה ב-5 שלבים פשוטים.
              </p>
            </div>

            <Link
              to="/#simulator-section"
              className="mt-6 w-full py-2.5 px-4 rounded-brand bg-white text-slate-900 font-bold text-xs text-center shadow-md hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              <span>מעבר לסימולטור 5 צעדים</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The 3 Official Testimonials in Full Detail */}
      <TestimonialsSection
        title="המלצות אותנטיות של משפחות יוצאות ישראל"
        subtitle="ללא תמונות מלאכותיות וללא שמות מומצאים — עדויות של משפחות אמיתיות"
      />
    </div>
  );
};
