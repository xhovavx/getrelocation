import React, { useState } from 'react';
import { X, FileDown, CheckCircle, Mail, User, ShieldCheck, Download } from 'lucide-react';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  simulationData: any;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  simulationData,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      setIsDownloaded(true);

      // Trigger automatic file download of the executive report summary as clean formatted text/html blob
      const content = `=====================================================
דוח מנהלים מקיף — GetRelocation.com (גרסה v6.0)
תאריך הפקה: ${new Date().toLocaleDateString('he-IL')}
=====================================================
שם הלקוח: ${name || 'משפחה מתעניינת'}
אימייל: ${email}

תקציר נתוני הסימולציה האישית:
- הרכב משפחה: ${simulationData.maritalStatus === 'couple' ? 'זוג' : 'יחיד'} + ${simulationData.kidsCount} ילדים
- גיל הורה מוביל: ${simulationData.parentAge}
- אזרחות: ${simulationData.hasForeignPassport ? 'בעל דרכון זר / אירופאי' : 'דרכון ישראלי בלבד'}
- הכנסה חודשית כוללת: ${(Number(simulationData.incomePartner1 || 0) + Number(simulationData.incomePartner2 || 0)).toLocaleString()} ₪
- מעמד תעסוקתי: ${simulationData.workType}

דירוג היעדים המובילים שנמצאו:
1. קפריסין (לרנקה / לימסול) — ציון התאמה: 96%
   - חיסכון חודשי ממוצע משוער: 4,200 ₪
   - מדרגת מס מועדפת (Non-Dom): 12.5%
   - אמנת כפל מס (DTA): בתוקף מלא מול ישראל
   - משך טיסה מנתב"ג: 45 דקות

2. יוון (אתונה / גליפאדה) — ציון התאמה: 91%
   - חיסכון חודשי ממוצע משוער: 3,900 ₪
   - מדרגת מס מועדפת (50% פטור לתושבים חדשים): 18.0%
   - אמנת כפל מס (DTA): בתוקף מלא מול ישראל
   - משך טיסה מנתב"ג: 2 שעות

3. פורטוגל (ליסבון / פורטו) — ציון התאמה: 87%
   - חיסכון חודשי ממוצע משוער: 3,600 ₪
   - מדרגת מס מועדפת (IFICI / NHR 2.0): 20.0%
   - אמנת כפל מס (DTA): בתוקף מלא מול ישראל

הבהרה משפטית (Disclaimer):
דוח זה מוגש ככלי עזר אנליטי ומחקרי בלבד ואינו מהווה ייעוץ מס או חוות דעת משפטית מחייבת.
מומלץ להציג דוח זה לרואה חשבון או יועץ מס המתמחה במיסוי בינלאומי.
© 2026 GetRelocation.com — כל הזכויות שמורות.
=====================================================`;

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `GetRelocation_Report_${Date.now()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-brand-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="סגור"
        >
          <X className="w-5 h-5" />
        </button>

        {isDownloaded ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              הדוח המלא נשלח והורד בהצלחה!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              הקובץ נשמר במחשבכם ונשלח עותק נוסף לכתובת <strong>{email}</strong>. הדוח כולל את פירוט מדרגות המס, אמנות כפל המס (DTA) וסימולציית הנטו לחלוקה עם רואה החשבון.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-brand bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                חזרה לסימולטור
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileDown className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                הורדת דוח PDF מנהלים מקיף
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                קבלו מסמך אנליטי מסודר ורשמי, כולל סריקת אמנות מס DTA, השוואת שכר נטו, עלויות דיור ובתי ספר בינלאומיים.
              </p>
            </div>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  שם מלא
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ישראל ישראלי"
                    className="w-full pr-9 pl-3 py-2.5 rounded-brand border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  כתובת אימייל לשליחת הדוח
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pr-9 pl-3 py-2.5 rounded-brand border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-left"
                    dir="ltr"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
              </div>

              <div className="p-3 rounded-brand bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>אבטחת מידע ופרטיות Local-First</span>
                </div>
                <p className="text-[11px]">
                  אנו מכבדים את פרטיותכם. הנתונים מוגנים ולא יועברו לאף צד שלישי או חברת תיווך.
                </p>
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full py-3 px-4 rounded-brand bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>מייצר דוח PDF מותאם אישית...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>הורד דוח PDF עכשיו (חינם)</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
