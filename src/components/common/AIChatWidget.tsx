import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, CheckCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const AIChatWidget: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialGreeting = language === 'he'
    ? 'שלום! 👋 אני יועץ ה-AI החכם של GetRelocation. למדתי לעומק את כל 35 קטגוריות הרילוקיישן, אמנות המס (DTA) ומערכות החינוך ב-65 יעדים בעולם. במה אוכל לעזור לכם היום?'
    : 'Hello! 👋 I am the GetRelocation AI Advisor. Trained on 35 core relocation categories, DTA double tax treaties, and international schooling across 65 destinations. How can I help you today?';

  const quickQuestions = language === 'he' ? [
    'איך עובד ה-Non-Dom בקפריסין?',
    'מה העלות הממוצעת למשפחה בליסבון?',
    'האם יש אמנת כפל מס (DTA) עם יוון?',
    'איך עובדת תוכנית חבר מביא חבר?',
  ] : [
    'How does Non-Dom work in Cyprus?',
    'Average cost of living in Lisbon for a family?',
    'Is there a DTA tax treaty with Greece?',
    'How does Refer-a-Friend program work?',
  ];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: initialGreeting,
      time: 'Just now',
    },
  ]);

  // Update greeting if language toggles before user sends messages
  useEffect(() => {
    if (messages.length === 1 && messages[0].sender === 'bot') {
      setMessages([
        {
          id: 'm1',
          sender: 'bot',
          text: initialGreeting,
          time: 'Just now',
        },
      ]);
    }
  }, [language, initialGreeting]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    const isEn = language === 'en';

    if (q.includes('קפריסין') || q.includes('נונדום') || q.includes('cyprus') || q.includes('non-dom') || q.includes('non dom')) {
      return isEn
        ? 'Cyprus offers one of the most attractive Non-Dom tax regimes in Europe: 0% tax on foreign dividends and capital gains for 17 years! In addition, there is a 50% income tax exemption for salaries above €55,000/year. Direct flights from Tel Aviv to Larnaca take only 45 minutes.'
        : 'בקפריסין חל משטר ה-Non-Dom המבוקש ביותר באירופה: פטור מלא ממס (0%) על דיבידנדים ורווחי הון למשך 17 שנה! כמו כן, קיימת מדרגת פטור של 50% ממס הכנסה למי ששכרו עולה על 55,000 אירו. זמן הטיסה מתל אביב ללרנקה הוא 45 דקות בלבד.';
    }
    if (q.includes('יוון') || q.includes('אתונה') || q.includes('greece') || q.includes('athens') || q.includes('dta') || q.includes('treaty') || q.includes('כפל מס')) {
      return isEn
        ? 'Greece has an active Double Tax Treaty (DTA) with Israel, providing bilateral foreign tax credits to avoid double taxation. Furthermore, Greece offers a special 50% income tax exemption for 7 years for qualifying relocating professionals and self-employed.'
        : 'ליוון יש אמנת כפל מס (DTA) מלאה ובתוקף מול ישראל, המונעת תשלום כפול ומעניקה מנגנון זיכוי מס ישיר. בנוסף, יוון מציעה חוק מיוחד של 50% פטור ממס הכנסה למשך 7 שנים לעובדים שכירים ועצמאיים שמעתיקים את תושבותם.';
    }
    if (q.includes('פורטוגל') || q.includes('ליסבון') || q.includes('portugal') || q.includes('lisbon') || q.includes('rent') || q.includes('שכירות')) {
      return isEn
        ? 'Cost of living in Lisbon and Porto is roughly 38% lower than Tel Aviv. Average rent for a 3-bedroom apartment in good neighborhoods is €1,600 - €2,000/month. Portugal also offers the D8 Digital Nomad visa and the new IFICI (NHR 2.0) 20% flat tax rate.'
        : 'יוקר המחיה בליסבון ופורטו נמוך בכ-38% לעומת תל אביב. שכר דירה ממוצע לדירת 3-4 חדרים בשכונות נוחות נע בין 1,600 ל-2,000 אירו לחודש. בפורטוגל קיימת ויזת נוודים D8 ומשטר המס IFICI (לשעבר NHR 2.0) המציע מס קבוע של 20% למקצועות טכנולוגיים.';
    }
    if (q.includes('חבר') || q.includes('הזמנ') || q.includes('refer') || q.includes('friend') || q.includes('credit')) {
      return isEn
        ? 'The Refer-a-Friend program allows you to invite friends from the SETTINGS menu with a one-time secure link. Once your friend signs in, you automatically receive +1 simulation credit added to your account tier!'
        : 'תוכנית חבר מביא חבר מאפשרת לכם לשלוח הזמנה לחברים דרך הגדרות המערכת (SETTINGS). ברגע שהחבר שלכם נרשם ומתחבר בלינק הייחודי, אתם מקבלים קרדיט של סימולציה מלאה נוספת (+1) לחשבונכם ללא הגבלה!';
    }
    return isEn
      ? 'Great question! The GetRelocation v6.0 engine scans 35 core categories and 175 sub-categories to provide verified data. Feel free to run our 5-step simulator on the Home page, or export an executive PDF report for your tax advisor.'
      : 'שאלה מצוינת! מנוע GetRelocation v6.0 סורק 35 קטגוריות ליבה ו-175 תת-קטגוריות כדי להעניק לכם את התחזית המדויקת ביותר. מומלץ להזין את פרטי ההכנסה והמשפחה בסימולטור 5 הצעדים שלנו בעמוד הבית, או להפיק דוח PDF מנהלים מקיף לקראת פגישה עם יועץ מס.';
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString(language === 'he' ? 'he-IL' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString(language === 'he' ? 'he-IL' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="פתח צ'אט AI חכם"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white dark:ring-slate-900 animate-pulse"></span>
          </div>
          <span className="font-bold text-sm tracking-wide hidden sm:inline">
            {language === 'he' ? "שאל את צ'אט ה-AI (חינם)" : 'Ask AI Advisor (Free)'}
          </span>
          <span className="text-[10px] bg-white/20 text-white font-mono px-2 py-0.5 rounded-full">
            24/7
          </span>
        </button>
      )}

      {/* Intercom-style Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-brand-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-sky-700 via-teal-700 to-slate-900 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <Bot className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm">
                    {language === 'he' ? 'יועץ ה-AI של GetRelocation' : 'GetRelocation AI Advisor'}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-[11px] text-teal-100 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-teal-300" />
                  <span>{language === 'he' ? 'מאומן על 35 קטגוריות ו-DTA' : 'Trained on 35 Categories & DTA'}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              aria-label="סגור צ'אט"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50 dark:bg-slate-950/40 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-brand-lg px-3.5 py-2.5 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-sky-600 text-white rounded-br-none shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200/80 dark:border-slate-700/80 shadow-subtle'
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 px-1">
                  <span>{m.time}</span>
                  {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-sky-400" />}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-2 rounded-brand w-fit border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[11px] text-slate-400 mr-1">
                  {language === 'he' ? 'סוכן ה-AI מחשב מענה...' : 'AI Advisor thinking...'}
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick chips */}
          <div className="px-3 py-2 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-slate-750 text-slate-600 dark:text-slate-300 transition-colors border border-slate-200/60 dark:border-slate-700/60 text-[11px]"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={language === 'he' ? 'כתבו כאן שאלה (למשל: מה המס בקפריסין?)...' : 'Type a question (e.g., Non-Dom tax in Cyprus)...'}
              className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs px-3.5 py-2.5 rounded-brand border border-transparent focus:border-sky-500 focus:bg-white dark:focus:bg-slate-850 focus:outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-brand bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white transition-all shadow-sm flex-shrink-0"
              aria-label="שלח הודעה"
            >
              <Send className={`w-4 h-4 ${language === 'he' ? 'rotate-180' : ''}`} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
