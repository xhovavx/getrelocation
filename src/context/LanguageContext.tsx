import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'he' | 'en';
export type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const titles: Record<Language, string> = {
  he: 'מעבר משפחתי חכם | GetRelocation',
  en: 'Smart Household Relocation | GetRelocation',
};

const translations: Record<Language, Record<string, string>> = {
  he: {
    // Nav
    'nav.home': 'בית',
    'nav.about': 'אודות',
    'nav.product': 'המוצר',
    'nav.plans': 'תוכניות',
    'nav.contact': 'צרו קשר',
    'nav.simulator': 'סימולטור 5 צעדים',
    'nav.login': 'כניסה למערכת (Google / 2FA)',
    'nav.freeCheck': 'בדיקת זכאות בחינם',
    'nav.chatBanner': 'מענה עם צ\'אט ייעודי שלמד את הנושא לעומק',
    'nav.bannerTitle': '✈️ אנחנו נדאג לחישובים ולהמלצות — אתם תדאגו לארוז!',
    'nav.trustRating': '⭐⭐⭐⭐⭐ 4.9/5 (+2,480 משפחות והייטקיסטים)',
    'nav.big4': 'אומת ע״י מומחי Big-4',

    // Hero
    'hero.badge': '✈️ סימולטור 5 צעדים — גרסה v6.0',
    'hero.titlePrefix': 'אנחנו נדאג לחישובים ולהמלצות — ',
    'hero.titleAccent': 'אתם תדאגו לארוז! ✈️',
    'hero.subtitle': 'בלי מונחים מסובכים ובלי טפסים ארוכים. בחרו מה חשוב לכם בסימולטור למטה או בצעו בדיקת זכאות מהירה למעבר חלק ובטוח.',
    'hero.ctaSimulator': '✈️ הרץ סימולציה ב-5 שלבים פשוטים',
    'hero.ctaPricing': 'צפייה בתוכניות ובמחירים (החל מ-0 ₪)',

    // Common
    'common.darkMode': 'מצב כהה',
    'common.lightMode': 'מצב בהיר',
    'common.close': 'סגור',
    'common.menu': 'תפריט',
    'common.systemStatus': 'v6.0 LIVE — שירותים תקינים',
    'common.localFirst': 'ארכיטקטורת Local-First מאובטחת',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.product': 'Product',
    'nav.plans': 'Plans & Pricing',
    'nav.contact': 'Contact Us',
    'nav.simulator': '5-Step Simulator',
    'nav.login': 'Sign In (Google / 2FA)',
    'nav.freeCheck': 'Free Eligibility Check',
    'nav.chatBanner': 'Dedicated 24/7 AI Relocation Advisor',
    'nav.bannerTitle': '✈️ We handle the calculations — you focus on packing!',
    'nav.trustRating': '⭐⭐⭐⭐⭐ 4.9/5 (+2,480 Families & Tech Pros)',
    'nav.big4': 'Verified by Big-4 Experts',

    // Hero
    'hero.badge': '✈️ 5-Step Simulator — Version v6.0',
    'hero.titlePrefix': 'We handle the calculations and insights — ',
    'hero.titleAccent': 'you focus on packing! ✈️',
    'hero.subtitle': 'No complicated financial jargon and no endless forms. Select your priorities in the simulator below or run a fast eligibility check for a smooth transition.',
    'hero.ctaSimulator': '✈️ Run 5-Step Simulation',
    'hero.ctaPricing': 'View Plans & Pricing (Starting at 0 ₪)',

    // Common
    'common.darkMode': 'Dark Mode',
    'common.lightMode': 'Light Mode',
    'common.close': 'Close',
    'common.menu': 'Menu',
    'common.systemStatus': 'v6.0 LIVE — All Systems Operational',
    'common.localFirst': 'Local-First Encrypted Architecture',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('getrelocation_lang');
    return saved === 'en' || saved === 'he' ? saved : 'he';
  });

  const direction: Direction = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('dir', direction);
    root.setAttribute('lang', language);
    document.title = titles[language];
    localStorage.setItem('getrelocation_lang', language);
  }, [language, direction]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.he[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
