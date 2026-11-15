import React, { useState } from 'react';
import { Gift, Mail, Copy, Check, Users, Sparkles, Send, ShieldCheck } from 'lucide-react';

export const ReferralBanner: React.FC = () => {
  const [friendEmail, setFriendEmail] = useState('');
  const [invited, setInvited] = useState(false);
  const [copied, setCopied] = useState(false);

  const sampleLink = 'https://getrelocation.com/invite?ref=user_a79f_2026';

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!friendEmail.trim()) return;
    setInvited(true);
    setTimeout(() => {
      setFriendEmail('');
    }, 3000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(sampleLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-brand-xl bg-gradient-to-br from-teal-900 via-sky-950 to-slate-900 text-white p-6 md:p-10 border border-teal-800/40 shadow-xl overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
            <Gift className="w-3.5 h-3.5 text-teal-300" />
            <span>תוכנית אפילאייטציה — חבר מביא חבר</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
            שלחו הזמנה לחבר במייל — וקבלו סימולציה נוספת חינם! 🎁
          </h3>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            כל לקוח ששולח הזמנה לחבר (במייל) ומחובר למערכת דרך הלינק החד-פעמי — מזכה את המזמין ב-
            <span className="text-teal-300 font-bold mx-1">1+ סימולציה חינם</span>
            המתווספת לחשבונו לפי המעמד שלו בפועל במערכת (משתמש רשום FREE // GOLD // PLATINUM). הלינק של החבר פעיל לפעם אחת בלבד, ופותח עבור החבר חשבון מיידי עם סיסמה אוטומטית וסימולציה מלאה.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-teal-200/90 pt-1">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>זמין לכל המשתמשים</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-teal-300" />
              <span>ללא הגבלה על כמות החברים</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-300" />
              <span>לינק מאובטח חד-פעמי</span>
            </span>
          </div>
        </div>

        {/* Action Card inside banner */}
        <div className="w-full lg:w-96 p-5 rounded-brand bg-white/10 backdrop-blur-md border border-white/15 space-y-4 flex-shrink-0">
          <div className="text-xs font-bold text-white flex items-center justify-between">
            <span>שליחת הזמנה מהירה (SETTINGS):</span>
            <span className="text-[11px] text-teal-300 font-mono">+1 קרדיט</span>
          </div>

          {invited ? (
            <div className="py-4 text-center space-y-2 bg-teal-950/60 rounded-brand border border-teal-500/40 p-4">
              <Check className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-sm font-bold text-white">ההזמנה נשלחה בהצלחה!</h4>
              <p className="text-[11px] text-slate-300">
                החבר יקבל מייל עם לינק הצטרפות וסיסמה אוטומטית. ברגע שיתחבר, יתווסף לכם קרדיט סימולציה.
              </p>
            </div>
          ) : (
            <form onSubmit={handleInvite} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={friendEmail}
                  onChange={(e) => setFriendEmail(e.target.value)}
                  placeholder="כתובת המייל של החבר/ה..."
                  className="w-full pl-3 pr-9 py-2.5 rounded-brand bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-teal-400 text-left"
                  dir="ltr"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-brand bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 rotate-180" />
                <span>שלח הזמנה לחבר וקבל +1 סימולציה</span>
              </button>
            </form>
          )}

          {/* Copy Link Option */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
            <span className="text-[11px] text-slate-300 truncate font-mono">
              {sampleLink}
            </span>
            <button
              onClick={handleCopyLink}
              className="px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1 transition-colors flex-shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-300" />
                  <span>הועתק!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>העתק לינק</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
