export interface DestinationCountry {
  id: string;
  nameHe: string;
  nameEn: string;
  flag: string;
  flightHours: string;
  topCities: { nameHe: string; nameEn: string; avgRent3BedEur: number }[];
  costOfLivingVsIsraelPercent: number; // e.g. -45% compared to Tel Aviv
  taxSystemNotes: string;
  dtaStatus: "בתוקף מלא — מניעת כפל מס" | "בתוקף — זיכוי מס הדדי" | "פטור מס מקומי";
  averageTaxRatePercent: number; // For simulation
  avgSchoolCostYearEur: number;
  safetyScore10: number;
  communityScore10: number;
  weatherScore10: number;
  keyBenefits: string[];
  keyChallenges: string[];
  recommendedVisa: string;
}

export const DESTINATION_COUNTRIES: DestinationCountry[] = [
  {
    id: "cyprus",
    nameHe: "קפריסין",
    nameEn: "Cyprus",
    flag: "🇨🇾",
    flightHours: "45 דקות",
    topCities: [
      { nameHe: "לרנקה", nameEn: "Larnaca", avgRent3BedEur: 1300 },
      { nameHe: "לימסול", nameEn: "Limassol", avgRent3BedEur: 2200 },
      { nameHe: "פאפוס", nameEn: "Paphos", avgRent3BedEur: 1200 },
    ],
    costOfLivingVsIsraelPercent: -42,
    taxSystemNotes: "משטר Non-Dom מעניק פטור של 17 שנה מדיבידנדים ורווחי הון, ו-50% פטור ממס הכנסה על שכר מעל 55,000 אירו.",
    dtaStatus: "בתוקף מלא — מניעת כפל מס",
    averageTaxRatePercent: 12.5,
    avgSchoolCostYearEur: 6500,
    safetyScore10: 9.2,
    communityScore10: 9.5,
    weatherScore10: 9.4,
    keyBenefits: [
      "טיסה קצרה של 45 דק׳ בלבד לישראל (כמו נסיעה ברכבת)",
      "משטר Non-Dom פטור מלא מדיבידנדים ורווחי הון",
      "קהילה ישראלית חמה, בתי ספר ובתי כנסת בכל עיר",
      "אנגלית מדוברת ברמת שפת אם בכל השירותים והבנקים",
    ],
    keyChallenges: [
      "חודשי קיץ חמים מאוד (יולי-אוגוסט)",
      "תחבורה ציבורית בסיסית — חובה רכב",
    ],
    recommendedVisa: "תושבות Non-Dom / חברת השקעות זרה / ויזת נוודים",
  },
  {
    id: "greece",
    nameHe: "יוון",
    nameEn: "Greece",
    flag: "🇬🇷",
    flightHours: "שעתיים",
    topCities: [
      { nameHe: "אתונה (פרברים דרומיים / גליפאדה)", nameEn: "Athens", avgRent3BedEur: 1400 },
      { nameHe: "סלוניקי", nameEn: "Thessaloniki", avgRent3BedEur: 950 },
      { nameHe: "חאניה (כרתים)", nameEn: "Chania", avgRent3BedEur: 900 },
    ],
    costOfLivingVsIsraelPercent: -48,
    taxSystemNotes: "הטבת מס מיוחדת לתושבים חדשים: פטור של 50% ממס הכנסה למשך 7 שנים לעובדים שכירים ועצמאיים.",
    dtaStatus: "בתוקף מלא — מניעת כפל מס",
    averageTaxRatePercent: 18.0,
    avgSchoolCostYearEur: 8000,
    safetyScore10: 8.8,
    communityScore10: 9.0,
    weatherScore10: 9.2,
    keyBenefits: [
      "50% פטור ממס הכנסה ל-7 שנים למעתיקי תושבות",
      "שעתיים טיסה בלבד מישראל, עשרות טיסות שבועיות",
      "תרבות ים-תיכונית מסבירת פנים ואוכל מעולה",
      "יוקר מחיה זול משמעותית מתל אביב (דיור ומזון)",
    ],
    keyChallenges: [
      "בירוקרטיה מקומית מורכבת במשרדי ממשלה",
      "בתי ספר בינלאומיים מרוכזים בעיקר בצפון ודרום אתונה",
    ],
    recommendedVisa: "ויזת נווד דיגיטלי (DNV) / אשרת עצמאי / חוק 50% פטור",
  },
  {
    id: "portugal",
    nameHe: "פורטוגל",
    nameEn: "Portugal",
    flag: "🇵🇹",
    flightHours: "5.5 שעות",
    topCities: [
      { nameHe: "ליסבון", nameEn: "Lisbon", avgRent3BedEur: 1800 },
      { nameHe: "פורטו", nameEn: "Porto", avgRent3BedEur: 1400 },
      { nameHe: "קשקאיש", nameEn: "Cascais", avgRent3BedEur: 2300 },
    ],
    costOfLivingVsIsraelPercent: -38,
    taxSystemNotes: "מסלול ה-IFICI (NHR 2.0) החדש מציע מס קבוע של 20% לעובדי הייטק, מו\"פ ומקצועות נדרשים.",
    dtaStatus: "בתוקף מלא — מניעת כפל מס",
    averageTaxRatePercent: 20.0,
    avgSchoolCostYearEur: 9500,
    safetyScore10: 9.6,
    communityScore10: 8.6,
    weatherScore10: 8.9,
    keyBenefits: [
      "מדורגת בין המדינות הבטוחות והשלוות ביותר בעולם",
      "ויזת נוודים דיגיטליים D8 מוסדרת וברורה",
      "קהילת הייטק ורילוקיישן גלובלית גדולה בליסבון ופורטו",
      "מזג אוויר נוח וקרבה לחוף האוקיינוס",
    ],
    keyChallenges: [
      "זמני טיסה ארוכים יותר מישראל ללא טיסות יומיות מרובות",
      "עליית מחירי השכירות בליסבון במרכז העיר בשנים האחרונות",
    ],
    recommendedVisa: "ויזת נווד דיגיטלי D8 / ויזת הכנסה פסיבית D7",
  },
  {
    id: "spain",
    nameHe: "ספרד",
    nameEn: "Spain",
    flag: "🇪🇸",
    flightHours: "4.5 שעות",
    topCities: [
      { nameHe: "ולנסיה", nameEn: "Valencia", avgRent3BedEur: 1350 },
      { nameHe: "מדריד", nameEn: "Madrid", avgRent3BedEur: 2100 },
      { nameHe: "ברצלונה", nameEn: "Barcelona", avgRent3BedEur: 2200 },
      { nameHe: "אליקנטה", nameEn: "Alicante", avgRent3BedEur: 1100 },
    ],
    costOfLivingVsIsraelPercent: -35,
    taxSystemNotes: "חוק בקהאם (Beckham Law) מאפשר מס קבוע של 24% בלבד עד 600,000 אירו עד 6 שנים, כולל לנוודים דיגיטליים.",
    dtaStatus: "בתוקף מלא — מניעת כפל מס",
    averageTaxRatePercent: 24.0,
    avgSchoolCostYearEur: 8500,
    safetyScore10: 9.0,
    communityScore10: 8.4,
    weatherScore10: 9.1,
    keyBenefits: [
      "חוק בקהאם: מס מופחת קבוע של 24% לשש שנים",
      "תשתיות עירוניות, תחבורה ציבורית ורכבות מהירות ברמה עולמית",
      "מערכת בריאות ציבורית ופרטית מצטיינת",
      "ערים מובילות למשפחות כמו ולנסיה ומאלגה",
    ],
    keyChallenges: [
      "חוקי הגנת דיירים מורכבים בשוק השכירות",
      "דרישת הכנסה מינימלית גבוהה יותר לויזת נוודים",
    ],
    recommendedVisa: "ויזת נוודים ספרדית (DNV) + החלת חוק בקהאם",
  },
  {
    id: "thailand",
    nameHe: "תאילנד",
    nameEn: "Thailand",
    flag: "🇹🇭",
    flightHours: "10.5 שעות",
    topCities: [
      { nameHe: "צ׳יאנג מאי", nameEn: "Chiang Mai", avgRent3BedEur: 750 },
      { nameHe: "קו סמוי / פוקט", nameEn: "Koh Samui", avgRent3BedEur: 1200 },
      { nameHe: "בנגקוק", nameEn: "Bangkok", avgRent3BedEur: 1500 },
    ],
    costOfLivingVsIsraelPercent: -65,
    taxSystemNotes: "הכנסות מחו״ל שאינן מועברות לתאילנד באותה שנת מס פטורות, ובנוסף קיימת ויזת DTV חדשה ל-5 שנים.",
    dtaStatus: "בתוקף — זיכוי מס הדדי",
    averageTaxRatePercent: 10.0,
    avgSchoolCostYearEur: 7000,
    safetyScore10: 9.1,
    communityScore10: 8.8,
    weatherScore10: 8.5,
    keyBenefits: [
      "יוקר מחיה נמוך במיוחד (סל חיסכון חודשי עצום)",
      "ויזת DTV חדשה ומהפכנית ל-5 שנים בעלות נמוכה",
      "איכות חיים מפנקת (עזרה בבית, קולינריה, טבע טרופי)",
      "קהילת משפחות ישראליות גדולה באיים ובצפון",
    ],
    keyChallenges: [
      "מרחק טיסה גדול והפרשי שעות מול לקוחות בישראל/אירופה",
      "ביטוח בריאות פרטי מלא הוא הכרחי ומצריך כיסוי קפדני",
    ],
    recommendedVisa: "ויזת DTV (Destination Thailand Visa) ל-5 שנים",
  },
  {
    id: "georgia",
    nameHe: "גיאורגיה",
    nameEn: "Georgia",
    flag: "🇬🇪",
    flightHours: "2.5 שעות",
    topCities: [
      { nameHe: "טביליסי", nameEn: "Tbilisi", avgRent3BedEur: 850 },
      { nameHe: "בטומי", nameEn: "Batumi", avgRent3BedEur: 700 },
    ],
    costOfLivingVsIsraelPercent: -58,
    taxSystemNotes: "סטטוס 'עסק קטן' (Small Business) מעניק מס הכנסה של 1% בלבד על מחזור של עד ~180,000 דולר בשנה.",
    dtaStatus: "בתוקף מלא — מניעת כפל מס",
    averageTaxRatePercent: 5.0,
    avgSchoolCostYearEur: 5000,
    safetyScore10: 9.3,
    communityScore10: 7.9,
    weatherScore10: 7.8,
    keyBenefits: [
      "משטר מס 1% מחזור בלבד לעצמאיים ועובדי הייטק מרחוק",
      "שהייה של 365 ימים ללא צורך בויזה לבעלי דרכון ישראלי",
      "טיסה של שעתיים וחצי בלבד לטביליסי ובטומי",
      "פתיחת חשבונות בנק מהירה וקלה לזרים",
    ],
    keyChallenges: [
      "חורף קר ומושלג בחודשי דצמבר-פברואר",
      "שוק בתי ספר בינלאומיים קטן יחסית מחוץ לטביליסי",
    ],
    recommendedVisa: "כניסה חופשית לשנה (Visa-free) / רישום כעסק קטן 1%",
  },
];
