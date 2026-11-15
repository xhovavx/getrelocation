import React, { useState } from 'react';
import {
  Mail,
  User,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="space-y-16 py-6 md:py-12 pb-16 max-w-4xl mx-auto">
      {/* Header Banner */}
      <section className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/60">
          <Mail className="w-3.5 h-3.5 text-sky-500" />
          <span>אנחנו כאן לכל שאלה</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          צרו קשר עם צוות GetRelocation
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          מתלבטים לגבי יעד מסוים? צריכים עזרה עם סימולציה מורכבת? השאירו הודעה ונחזור אליכם תוך שעות ספורות.
        </p>
      </section>

      {/* Contact Content Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Column */}
        <div className="space-y-6 md:col-span-1">
          <div className="p-6 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              ערוצי תקשורת ישירים
            </h3>

            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-brand bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block text-slate-800 dark:text-slate-200">
                    אימייל לצוות התמיכה
                  </span>
                  <a
                    href="mailto:support@getrelocation.com"
                    className="text-sky-600 dark:text-sky-400 hover:underline"
                    dir="ltr"
                  >
                    support@getrelocation.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-brand bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block text-slate-800 dark:text-slate-200">
                    זמני מענה
                  </span>
                  <span>ימים א׳-ה׳: 08:30 - 19:30</span>
                  <span className="block text-[11px] text-slate-400">מענה תוך עד 4 שעות עבודה</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-brand bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block text-slate-800 dark:text-slate-200">
                    צ'אט AI חכם
                  </span>
                  <span>זמין 24/7 לשאלות מיידיות דרך הבועה בפינה התחתונה</span>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Note Badge */}
          <div className="p-4 rounded-brand bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>הערת פרטיות ואבטחה</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              פרטי הקשר שלכם ישמשו אך ורק למענה לפנייתכם. אנו לעולם איננו משתפים או מוכרים מידע לחברות צד שלישי או לסוכנויות נדל"ן.
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-2">
          <div className="p-6 md:p-8 rounded-brand-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-card-dark">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  הודעתכם התקבלה בהצלחה!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  תודה שפניתם אלינו. צוות המומחים שלנו יבדוק את הפנייה ויחזור אליכם לכתובת המייל בהקדם האפשרי.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-brand bg-sky-600 text-white font-semibold text-xs hover:bg-sky-500 transition-colors"
                >
                  שליחת הודעה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      שם מלא <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="ישראל ישראלי"
                        className="w-full pr-9 pl-3 py-2.5 rounded-brand border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      כתובת אימייל <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pr-9 pl-3 py-2.5 rounded-brand border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 text-left"
                        dir="ltr"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    נושא הפנייה <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="לדוגמה: שאלה לגבי משטר מס Non-Dom בקפריסין / תוכנית Platinum"
                    className="w-full px-3.5 py-2.5 rounded-brand border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    תוכן ההודעה <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="פרטו כאן את שאלתכם, הרכב המשפחה או נושא הייעוץ הנדרש..."
                    className="w-full p-3 rounded-brand border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-brand bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-xs md:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>שולח הודעה...</span>
                    </>
                  ) : (
                    <>
                      <span>שליחת פנייה לצוות</span>
                      <Send className="w-4 h-4 rotate-180" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
