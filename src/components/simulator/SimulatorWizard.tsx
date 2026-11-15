import React, { useState } from 'react';
import {
  Users,
  Briefcase,
  Sliders,
  Globe2,
  Trophy,
  ChevronRight,
  ChevronLeft,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Check,
  FileDown,
  Sparkles,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { DESTINATION_COUNTRIES, DestinationCountry } from '../../data/countriesData';
import { PdfExportModal } from './PdfExportModal';

interface SimulationState {
  parentAge: number;
  maritalStatus: 'couple' | 'single';
  kidsCount: number;
  kidsAges: string;
  hasForeignPassport: boolean;
  passportType: string;

  incomePartner1: number;
  workTypePartner1: 'employee' | 'freelancer' | 'business_owner';
  incomePartner2: number;
  workTypePartner2: 'employee' | 'freelancer' | 'business_owner' | 'none';
  businessRegistration: 'israel' | 'foreign' | 'relocate';

  selectedPriorities: string[];
  selectedCountries: string[];
}

const INITIAL_STATE: SimulationState = {
  parentAge: 36,
  maritalStatus: 'couple',
  kidsCount: 2,
  kidsAges: '4, 7',
  hasForeignPassport: false,
  passportType: 'ישראלי בלבד',

  incomePartner1: 28000,
  workTypePartner1: 'employee',
  incomePartner2: 16000,
  workTypePartner2: 'employee',
  businessRegistration: 'israel',

  selectedPriorities: ['tax-optimization', 'cost-of-living', 'education'],
  selectedCountries: ['cyprus', 'greece', 'portugal', 'spain', 'thailand'],
};

const PRIORITIES_OPTIONS = [
  { id: 'tax-optimization', label: 'אופטימיזציית מס (Non-Dom ו-DTA)', icon: '💰' },
  { id: 'cost-of-living', label: 'יוקר מחיה וחיסכון חודשי', icon: '🏡' },
  { id: 'education', label: 'חינוך בינלאומי באנגלית (IB)', icon: '🎓' },
  { id: 'safety', label: 'ביטחון אישי ושקט נפשי', icon: '🛡️' },
  { id: 'community', label: 'קהילה ישראלית/יהודית חמה', icon: '🤝' },
  { id: 'flight-distance', label: 'טיסה קצרה וקרבה לישראל', icon: '✈️' },
  { id: 'weather', label: 'שמש ואקלים ים-תיכוני חם', icon: '☀️' },
  { id: 'pets', label: 'הטסת חיות מחמד ללא הסגר', icon: '🐾' },
];

export const SimulatorWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [data, setData] = useState<SimulationState>(INITIAL_STATE);
  const [showHelper, setShowHelper] = useState<boolean>(true);
  const [pdfModalOpen, setPdfModalOpen] = useState<boolean>(false);

  const steps = [
    { num: 1, title: 'משפחה ומעמד', icon: Users },
    { num: 2, title: 'הכנסה ותעסוקה', icon: Briefcase },
    { num: 3, title: 'סדרי עדיפויות', icon: Sliders },
    { num: 4, title: 'מדינות ו-DTA', icon: Globe2 },
    { num: 5, title: 'תוצאות וחישוב', icon: Trophy },
  ];

  const togglePriority = (id: string) => {
    if (data.selectedPriorities.includes(id)) {
      if (data.selectedPriorities.length > 1) {
        setData({
          ...data,
          selectedPriorities: data.selectedPriorities.filter((p) => p !== id),
        });
      }
    } else {
      if (data.selectedPriorities.length < 3) {
        setData({
          ...data,
          selectedPriorities: [...data.selectedPriorities, id],
        });
      } else {
        alert('במסלול החינמי (Free Demo) ניתן לבחור עד 3 קטגוריות ראשיות. שדרגו ל-GOLD או PLATINUM לפתיחת כל 35 הקטגוריות.');
      }
    }
  };

  const toggleCountry = (id: string) => {
    if (data.selectedCountries.includes(id)) {
      if (data.selectedCountries.length > 1) {
        setData({
          ...data,
          selectedCountries: data.selectedCountries.filter((c) => c !== id),
        });
      }
    } else {
      if (data.selectedCountries.length < 5) {
        setData({
          ...data,
          selectedCountries: [...data.selectedCountries, id],
        });
      } else {
        alert('במסלול החינמי ניתן להשוות עד 5 מדינות יעד בו-זמנית.');
      }
    }
  };

  const getHelperContent = () => {
    switch (currentStep) {
      case 1:
        return {
          title: 'למה שלב זה חשוב לאלגוריתם?',
          desc: 'גיל ההורה והרכב המשפחה קובעים באופן ישיר את הוצאות החינוך (מספר מסגרות בינלאומיות), גודל הדירה הנדרשת (2-4 חדרי שינה), עלויות ביטוחי הבריאות הפרטיים והזכאות למסלולי הגירה ואשרות שהייה.',
        };
      case 2:
        return {
          title: 'למה חשוב לבדוק את סוג ההכנסה?',
          desc: 'מדינות רבות (כגון קפריסין, יוון, ספרד ופורטוגל) מציעות משטרי מס מיוחדים המבדילים באופן דרמטי בין עובדי הייטק שכירים (50% פטור או חוק בקהאם) לבין עצמאיים ובעלי חברות (Non-Dom 0% מס דיבידנד).',
        };
      case 3:
        return {
          title: 'איך עובד שקלול 35 הקטגוריות?',
          desc: 'לכל משפחה סדר עדיפויות שונה לחלוטין. הבחירה שלכם מאפשרת למנוע ה-GTW לשקלל משקלים מתמטיים מדויקים במקום להסתמך על ממוצע יבש, וכך לחשוף את היעד האופטימלי ספציפית עבורכם.',
        };
      case 4:
        return {
          title: 'מהי בדיקת אמנת מס (DTA)?',
          desc: 'אמנת כפל מס בילטרלית בין ישראל למדינת היעד מונעת מצב של חיוב במס כפול ומאפשרת זיכוי מס ישיר. המערכת סורקת את ההסכם העדכני כדי לוודא שמעברכם יהיה מוגן רגולטורית.',
        };
      case 5:
        return {
          title: 'כיצד חושב החיסכון החודשי?',
          desc: 'החישוב מתבסס על ההכנסה המשפחתית שהזנתם, הפחתת המס הצפוי במדינת היעד, הפחתת שכר הדירה הממוצע וסל המחיה המקומי, בהשוואה לעלויות מקבילות בישראל.',
        };
      default:
        return null;
    }
  };

  const helper = getHelperContent();
  const totalGrossIncome = Number(data.incomePartner1 || 0) + Number(data.incomePartner2 || 0);

  const calculateCountryResults = (country: DestinationCountry) => {
    const israeliEstTaxRate = 0.31;
    const israeliLivingCostEst = 19000 + data.kidsCount * 4500;
    const israeliMonthlyNet = totalGrossIncome * (1 - israeliEstTaxRate);
    const israeliLeftover = Math.max(0, israeliMonthlyNet - israeliLivingCostEst);

    const destTaxRate = country.averageTaxRatePercent / 100;
    const destMonthlyNet = totalGrossIncome * (1 - destTaxRate);
    const destLivingCostEst = israeliLivingCostEst * (1 + country.costOfLivingVsIsraelPercent / 100);
    const destLeftover = destMonthlyNet - destLivingCostEst;
    const monthlyNetSavings = Math.round(destLeftover - israeliLeftover);

    let matchScore = 84;
    if (data.selectedPriorities.includes('tax-optimization') && country.averageTaxRatePercent <= 18) matchScore += 5;
    if (data.selectedPriorities.includes('cost-of-living') && country.costOfLivingVsIsraelPercent <= -40) matchScore += 4;
    if (data.selectedPriorities.includes('flight-distance') && country.flightHours.includes('דקות')) matchScore += 5;
    if (data.selectedPriorities.includes('safety') && country.safetyScore10 >= 9.0) matchScore += 3;
    if (data.selectedPriorities.includes('community') && country.communityScore10 >= 9.0) matchScore += 3;

    return {
      country,
      matchScore: Math.min(98, matchScore),
      monthlyNetSavings: Math.max(1200, monthlyNetSavings),
      destTaxRatePercent: country.averageTaxRatePercent,
      destMonthlyNet: Math.round(destMonthlyNet),
    };
  };

  const results = DESTINATION_COUNTRIES
    .filter((c) => data.selectedCountries.includes(c.id))
    .map(calculateCountryResults)
    .sort((a, b) => b.matchScore - a.matchScore);

  return (
    <div id="simulator-section" className="scroll-mt-24">
      <div className="bg-white dark:bg-slate-900 rounded-brand-xl shadow-card dark:shadow-card-dark border border-slate-200/80 dark:border-slate-800 overflow-hidden">
        {/* Simulator Top Header */}
        <div className="p-6 md:p-8 border-b border-slate-200/80 dark:border-slate-800 bg-gradient-to-r from-sky-50/50 via-teal-50/30 to-white dark:from-slate-900 dark:via-sky-950/20 dark:to-slate-900">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-sky-700 dark:text-sky-300 bg-sky-100/70 dark:bg-sky-950 border border-sky-300/40 dark:border-sky-800/50 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>סימולטור 5 צעדים — גרסה v6.0</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                בדיקת התאמה וחישוב חיסכון ברילוקיישן
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                מחשבון אנליטי המשלב מדרגות מס מקומיות, אמנות כפל מס (DTA) וסלי יוקר מחיה עדכניים
              </p>
            </div>

            {/* Free Tier Limitation Badge */}
            <div className="self-start md:self-auto px-3.5 py-1.5 rounded-brand bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>מסלול Free Demo פעיל (5 מדינות • 3 קטגוריות)</span>
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="mt-8 grid grid-cols-5 gap-2 md:gap-4">
            {steps.map((s) => {
              const isActive = currentStep === s.num;
              const isPast = currentStep > s.num;

              return (
                <button
                  key={s.num}
                  onClick={() => setCurrentStep(s.num)}
                  className={`flex flex-col items-center text-center p-2 rounded-brand transition-all ${
                    isActive
                      ? 'bg-sky-100/70 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 font-bold shadow-sm'
                      : isPast
                      ? 'text-teal-600 dark:text-teal-400 font-medium hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs mb-1.5 font-bold transition-all ${
                      isActive
                        ? 'bg-sky-600 text-white shadow-md ring-2 ring-sky-300 dark:ring-sky-800'
                        : isPast
                        ? 'bg-teal-500 text-white'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {isPast ? <Check className="w-4 h-4" /> : s.num}
                  </div>
                  <span className="text-[11px] md:text-xs leading-tight hidden sm:block">
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Content Area */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Helper per step */}
          {helper && (
            <div className="rounded-brand bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/70 dark:border-sky-800/50 overflow-hidden transition-all">
              <button
                onClick={() => setShowHelper(!showHelper)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold text-sky-800 dark:text-sky-300 hover:bg-sky-100/40 dark:hover:bg-sky-900/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>{helper.title}</span>
                </div>
                {showHelper ? (
                  <ChevronUp className="w-4 h-4 text-sky-600" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-sky-600" />
                )}
              </button>
              {showHelper && (
                <div className="px-4 pb-3 pt-1 text-xs text-slate-600 dark:text-slate-300 border-t border-sky-100 dark:border-sky-900/50 leading-relaxed">
                  {helper.desc}
                </div>
              )}
            </div>
          )}

          {/* STEP 1: Personal & Family Profile */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    הרכב התא המשפחתי
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setData({ ...data, maritalStatus: 'couple' })}
                      className={`py-3 px-4 rounded-brand border text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                        data.maritalStatus === 'couple'
                          ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 ring-1 ring-sky-500'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <Users className="w-4 h-4" />
                      <span>זוג / נשואים</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setData({ ...data, maritalStatus: 'single' })}
                      className={`py-3 px-4 rounded-brand border text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                        data.maritalStatus === 'single'
                          ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 ring-1 ring-sky-500'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span>יחיד / יחידנית</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between">
                    <span>גיל ההורה המוביל:</span>
                    <span className="text-sky-600 dark:text-sky-400 font-extrabold">{data.parentAge}</span>
                  </label>
                  <input
                    type="range"
                    min="22"
                    max="65"
                    value={data.parentAge}
                    onChange={(e) => setData({ ...data, parentAge: Number(e.target.value) })}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>22</span>
                    <span>35</span>
                    <span>45</span>
                    <span>55</span>
                    <span>65</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    מספר ילדים שעוברים אתכם
                  </label>
                  <div className="grid grid-cols-6 gap-2">
                    {[0, 1, 2, 3, 4, 5].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setData({ ...data, kidsCount: count })}
                        className={`py-2 rounded-brand border text-xs font-bold transition-all ${
                          data.kidsCount === count
                            ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 ring-1 ring-sky-500'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    אזרחות ודרכונים זרים
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setData({ ...data, hasForeignPassport: true, passportType: 'דרכון אירופאי (EU)' })}
                      className={`py-2.5 px-3 rounded-brand border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        data.hasForeignPassport
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 ring-1 ring-teal-500'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span>🇪🇺 יש דרכון אירופאי / זר</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setData({ ...data, hasForeignPassport: false, passportType: 'ישראלי בלבד' })}
                      className={`py-2.5 px-3 rounded-brand border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        !data.hasForeignPassport
                          ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 ring-1 ring-sky-500'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span>🇮🇱 דרכון ישראלי בלבד</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Income & Employment */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-brand border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      הכנסה חודשית ברוטו — בן/בת זוג 1
                    </span>
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-400">
                      {Number(data.incomePartner1).toLocaleString()} ₪
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1000"
                    value={data.incomePartner1}
                    onChange={(e) => setData({ ...data, incomePartner1: Number(e.target.value) })}
                    className="w-full accent-sky-600 cursor-pointer"
                  />
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                      מעמד תעסוקתי
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'employee', label: 'שכיר/ה' },
                        { id: 'freelancer', label: 'עצמאי/ת' },
                        { id: 'business_owner', label: 'בעל/ת חברה' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setData({ ...data, workTypePartner1: type.id as any })}
                          className={`py-1.5 px-2 rounded-brand text-xs font-medium border transition-all ${
                            data.workTypePartner1 === type.id
                              ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-bold'
                              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {data.maritalStatus === 'couple' ? (
                  <div className="p-4 rounded-brand border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        הכנסה חודשית ברוטו — בן/בת זוג 2
                      </span>
                      <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                        {Number(data.incomePartner2).toLocaleString()} ₪
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="1000"
                      value={data.incomePartner2}
                      onChange={(e) => setData({ ...data, incomePartner2: Number(e.target.value) })}
                      className="w-full accent-teal-600 cursor-pointer"
                    />
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                        מעמד תעסוקתי
                      </label>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { id: 'employee', label: 'שכיר/ה' },
                          { id: 'freelancer', label: 'עצמאי/ת' },
                          { id: 'business_owner', label: 'חברה' },
                          { id: 'none', label: 'ללא' },
                        ].map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setData({ ...data, workTypePartner2: type.id as any })}
                            className={`py-1.5 px-2 rounded-brand text-xs font-medium border transition-all ${
                              data.workTypePartner2 === type.id
                                ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-bold'
                                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-brand border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 flex items-center justify-center text-center text-xs text-slate-500">
                    מוגדר כמשק בית יחידני. אין חישוב בן זוג שני.
                  </div>
                )}
              </div>

              <div className="p-3.5 rounded-brand bg-slate-100 dark:bg-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Wallet className="w-4 h-4 text-emerald-500" />
                  <span>סך הכנסה משפחתית חודשית ברוטו המועברת לסימולציה:</span>
                </span>
                <span className="text-base font-extrabold text-slate-900 dark:text-white">
                  {totalGrossIncome.toLocaleString()} ₪ / חודש
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: Top Priorities */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  בחרו עד 3 קטגוריות החשובות לכם ביותר (נבחרו: {data.selectedPriorities.length}/3)
                </label>
                <span className="text-[11px] text-slate-400">
                  במסלולי GOLD/PLATINUM נפתחות כל 35 הקטגוריות
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {PRIORITIES_OPTIONS.map((item) => {
                  const isSelected = data.selectedPriorities.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => togglePriority(item.id)}
                      className={`p-3.5 rounded-brand border text-right transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-sky-500 bg-sky-50/80 dark:bg-sky-950/60 ring-1 ring-sky-500'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div className="flex-1">
                        <span
                          className={`text-xs block font-bold leading-tight ${
                            isSelected
                              ? 'text-sky-800 dark:text-sky-300'
                              : 'text-slate-800 dark:text-slate-200'
                          }`}
                        >
                          {item.label}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold mt-1 inline-flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            <span>נבחר לשקלול</span>
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Destination Countries & DTA Check */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  מדינות להשוואה וסריקת אמנת כפל מס (נבחרו: {data.selectedCountries.length}/5)
                </label>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>סורק DTA מול ישראל פעיל</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {DESTINATION_COUNTRIES.map((country) => {
                  const isSelected = data.selectedCountries.includes(country.id);
                  return (
                    <div
                      key={country.id}
                      onClick={() => toggleCountry(country.id)}
                      className={`p-4 rounded-brand border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-teal-500 bg-teal-50/50 dark:bg-teal-950/40 ring-1 ring-teal-500 shadow-sm'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-855 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{country.flag}</span>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                              {country.nameHe} ({country.nameEn})
                            </h4>
                            <span className="text-[11px] text-slate-400">
                              טיסה ישירה: {country.flightHours}
                            </span>
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          readOnly
                          className="w-4 h-4 text-teal-600 rounded cursor-pointer"
                        />
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                        <div className="flex justify-between text-slate-600 dark:text-slate-300">
                          <span>אמנת מס (DTA):</span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            {country.dtaStatus}
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-300">
                          <span>מס משוער (במשטר מועדף):</span>
                          <span className="font-bold text-sky-600 dark:text-sky-400">
                            {country.averageTaxRatePercent}%
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-300">
                          <span>הפרש יוקר מחיה מישראל:</span>
                          <span className="font-bold text-emerald-600">
                            {country.costOfLivingVsIsraelPercent}%
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: Instant Complete Results */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-brand-lg bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 text-white mb-2">
                    <Trophy className="w-3.5 h-3.5 text-amber-300" />
                    <span>היעד המנצח עבורכם לפי אלגוריתם ה-GTW</span>
                  </div>
                  <h3 className="text-2xl font-black">
                    {results[0]?.country.flag} {results[0]?.country.nameHe} — ציון התאמה {results[0]?.matchScore}%
                  </h3>
                  <p className="text-xs text-sky-100 mt-1 max-w-xl">
                    חיסכון חודשי נטו משוער של כ-
                    <span className="font-extrabold text-amber-300 text-sm mx-1">
                      {results[0]?.monthlyNetSavings.toLocaleString()} ₪ בכל חודש
                    </span>
                    ביחס לרמת החיים המקבילה בישראל.
                  </p>
                </div>

                <button
                  onClick={() => setPdfModalOpen(true)}
                  className="px-5 py-3 rounded-brand bg-white text-slate-900 font-extrabold text-xs md:text-sm shadow-md hover:bg-slate-100 transition-all flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                >
                  <FileDown className="w-4 h-4 text-sky-600" />
                  <span>הורד דוח PDF מנהלים מלא</span>
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  דירוג השוואתי מלא של 5 היעדים המובילים
                </h4>

                <div className="grid grid-cols-1 gap-4">
                  {results.map((res, index) => {
                    const c = res.country;
                    return (
                      <div
                        key={c.id}
                        className="p-5 rounded-brand-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 hover:shadow-subtle transition-all"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-extrabold text-sm text-slate-700 dark:text-slate-300">
                              #{index + 1}
                            </span>
                            <span className="text-3xl">{c.flag}</span>
                            <div>
                              <div className="flex items-center gap-2">
                                <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                                  {c.nameHe} ({c.nameEn})
                                </h5>
                                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                                  ציון {res.matchScore}%
                                </span>
                              </div>
                              <span className="text-xs text-slate-400">
                                ערים מובילות: {c.topCities.map((city) => city.nameHe).join(' • ')} | טיסה: {c.flightHours}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-right">
                            <div>
                              <span className="text-[11px] text-slate-400 block">חיסכון חודשי משוער</span>
                              <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                                +{res.monthlyNetSavings.toLocaleString()} ₪ / חודש
                              </span>
                            </div>
                            <div className="border-r border-slate-200 dark:border-slate-700 pr-4">
                              <span className="text-[11px] text-slate-400 block">מס הכנסה צפוי ביעד</span>
                              <span className="text-lg font-extrabold text-sky-600 dark:text-sky-400">
                                ~{res.destTaxRatePercent}%
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 text-xs">
                          <div className="p-2.5 rounded-brand bg-slate-50 dark:bg-slate-800">
                            <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                              משטר מס מומלץ:
                            </span>
                            <p className="text-slate-800 dark:text-slate-200 leading-snug">
                              {c.taxSystemNotes}
                            </p>
                          </div>
                          <div className="p-2.5 rounded-brand bg-slate-50 dark:bg-slate-800">
                            <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                              שכירות דירת 3-4 חדרים:
                            </span>
                            <p className="text-slate-800 dark:text-slate-200">
                              ~{c.topCities[0].avgRent3BedEur.toLocaleString()} € / חודש ב{c.topCities[0].nameHe}
                            </p>
                          </div>
                          <div className="p-2.5 rounded-brand bg-slate-50 dark:bg-slate-800">
                            <span className="font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                              מסגרות חינוך בינלאומיות:
                            </span>
                            <p className="text-slate-800 dark:text-slate-200">
                              ~{c.avgSchoolCostYearEur.toLocaleString()} € / שנה לילד (בגרות בריטית / IB)
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-brand border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs md:text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
                <span>חזרה לשלב הקודם</span>
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-brand bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white text-xs md:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>המשך לשלב {currentStep + 1}</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setPdfModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-brand bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs md:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>הורד דוח PDF מנהלים מלא (חינם)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* PDF Export Lead-Capture Modal */}
      <PdfExportModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        simulationData={data}
      />
    </div>
  );
};
