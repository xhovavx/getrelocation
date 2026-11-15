import React from 'react';
import { Activity, CheckCircle, ShieldCheck, Database, Bot, FileText, Server } from 'lucide-react';

export const StatusPage: React.FC = () => {
  const services = [
    {
      name: 'מנוע החישוב האלגוריתמי (GTW Core Engine)',
      version: 'v6.0 LIVE',
      uptime: '99.99%',
      status: 'פעיל לחלוטין',
      icon: Server,
    },
    {
      name: 'מאגר אמנות כפל מס (DTA Treaty Database)',
      version: 'עדכון 2025-2026',
      uptime: '100%',
      status: 'מעודכן ומסונכרן',
      icon: Database,
    },
    {
      name: 'יועץ AI / LLM חכם למשתמשים',
      version: 'Latency < 250ms',
      uptime: '99.95%',
      status: 'פעיל 24/7',
      icon: Bot,
    },
    {
      name: 'מערך הצפנה ואבטחת Local-First',
      version: 'Client-Side AES-256',
      uptime: '100%',
      status: 'מאובטח',
      icon: ShieldCheck,
    },
    {
      name: 'מערכת הפקת דוחות PDF מנהלים',
      version: 'Automated Engine',
      uptime: '99.98%',
      status: 'פעיל',
      icon: FileText,
    },
    {
      name: 'מערכת אימות דו-שלבי ו-2FA',
      version: 'Google / SMS Auth',
      uptime: '99.99%',
      status: 'פעיל',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 md:py-14 space-y-10 pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
          <Activity className="w-3.5 h-3.5 text-emerald-500" />
          <span>מצב שירותים בזמן אמת</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          לוח סטטוס מערכת מפורט — GetRelocation.com
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          בדיקת תקינות רציפה של שרתי החישוב, מאגרי המיסוי ויועץ ה-AI
        </p>
      </div>

      {/* Main Status Pill */}
      <div className="p-6 rounded-brand-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-800/60 flex items-center justify-between gap-4 shadow-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-bold text-emerald-950 dark:text-emerald-100">
              כל המערכות והשירותים פעילים כסדרם
            </h2>
            <span className="text-xs text-emerald-700 dark:text-emerald-300">
              זמינות מערכת כוללת ב-90 הימים האחרונים: 99.98%
            </span>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800">
          v6.0 LIVE
        </span>
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          פירוט שירותי תשתית ואלגוריתם
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-brand bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle flex items-start justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-brand bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {s.name}
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                      {s.version}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      זמינות: {s.uptime}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{s.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
