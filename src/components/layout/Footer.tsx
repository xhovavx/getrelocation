import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { ShieldAlert, Activity, Lock, Globe } from 'lucide-react';
import { LEGAL_DISCLAIMER } from '../../data/relocationData';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Logo showTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'he'
                ? 'פלטפורמת החלטות אנליטית חכמה לתכנון רילוקיישן משפחתי. ניתוח מבוסס נתונים של 35 קטגוריות ליבה, אמנות כפל מס ויוקר מחיה.'
                : 'Intelligent decision-making engine for family relocation. Data-driven analysis of 35 core categories, double-tax treaties (DTA), and real-time cost of living.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-brand inline-flex">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t('common.systemStatus')}</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              {language === 'he' ? 'ניווט ראשי' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-sky-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-sky-400 transition-colors">
                  {t('nav.product')}
                </Link>
              </li>
              <li>
                <Link to="/plans" className="hover:text-sky-400 transition-colors">
                  {t('nav.plans')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Security Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              {language === 'he' ? 'משפטי ואבטחה' : 'Legal & Trust'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/terms" className="hover:text-sky-400 transition-colors">
                  {language === 'he' ? 'תקנון האתר ותנאי שימוש (Terms)' : 'Terms of Service'}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-sky-400 transition-colors">
                  {language === 'he' ? 'מדיניות פרטיות (Privacy Policy)' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link to="/status" className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{language === 'he' ? 'לוח סטטוס מערכת מפורט' : 'System Status Dashboard'}</span>
                </Link>
              </li>
            </ul>
            <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-sky-400" />
              <span>{t('common.localFirst')}</span>
            </div>
          </div>

          {/* Language & Global Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              {language === 'he' ? 'שפה ותקנים בינלאומיים' : 'Language & Standards'}
            </h4>
            <div className="p-3.5 rounded-brand bg-slate-800/80 border border-slate-700/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-sky-400" />
                  <span>{language === 'he' ? 'שפת ממשק' : 'Interface'}</span>
                </span>
                <LanguageSwitcher />
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {language === 'he'
                  ? 'עברית (IL) עם התאמה לאמנות מס ישראליות ולתקני OECD, GDPR ו-HIPAA.'
                  : 'Multi-lingual support matching OECD tax treaties, GDPR, and HIPAA compliance.'}
              </p>
              <div className="text-[11px] text-slate-500 font-mono">
                GDPR (EU 2016/679) • HIPAA § 164
              </div>
            </div>
          </div>
        </div>

        {/* Verbatim Legal Disclaimer Box */}
        <div className="p-4 md:p-5 rounded-brand bg-slate-950/70 border border-slate-800 text-slate-400 text-xs leading-relaxed space-y-2 mb-8">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <span>דיסקליימר משפטי ומיסויי ברור (Explicit Legal, Tax & Financial Disclaimer)</span>
          </div>
          <p className="text-[11.5px] leading-relaxed text-slate-400">
            {LEGAL_DISCLAIMER}
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 GetRelocation.com — {language === 'he' ? 'כל הזכויות שמורות. נבנה עבור משפחות ברילוקיישן.' : 'All rights reserved. Built for families in relocation.'}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/status" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>{language === 'he' ? 'סטטוס שרתים' : 'Live Status'}</span>
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              {language === 'he' ? 'תנאי שימוש' : 'Terms'}
            </Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              {language === 'he' ? 'פרטיות' : 'Privacy'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
