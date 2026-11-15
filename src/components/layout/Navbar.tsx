import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  Lock,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { AuthModal } from '../common/AuthModal';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent background scrolling when mobile menu overlay is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/product', label: t('nav.product') },
    { to: '/plans', label: t('nav.plans') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Trust & Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Main message & Trust ratings */}
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1 font-semibold text-sky-400">
              {t('nav.bannerTitle')}
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-amber-400 font-bold tracking-wider">
                {t('nav.trustRating')}
              </span>
            </div>
            <span className="hidden lg:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              <span>{t('nav.big4')}</span>
            </span>
          </div>

          {/* Quick links & Contact shortcut */}
          <div className="flex items-center gap-3 text-[11px]">
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const sim = document.getElementById('simulator-section');
                  if (sim) sim.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hidden md:inline-flex items-center gap-1 font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('nav.freeCheck')}</span>
            </button>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <MessageSquare className="w-3 h-3 text-sky-400" />
              <span>{t('nav.chatBanner')}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 w-full glass-header shadow-subtle transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <Logo showTagline={false} />

              {/* Desktop Nav Items */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-brand text-sm font-semibold transition-all duration-150 ${
                        isActive
                          ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 shadow-xs'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {/* Delicate Language Switcher */}
              <LanguageSwitcher />

              {/* Dark / Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
                className="p-2 rounded-brand text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                title={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              {/* Fast Simulator CTA - with Taking-off Airplane Icon */}
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const sim = document.getElementById('simulator-section');
                    if (sim) sim.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-brand text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/50 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors"
              >
                <span>✈️ {t('nav.simulator')}</span>
              </button>

              {/* Login / Auth Button */}
              <button
                onClick={() => setAuthModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-brand bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-semibold text-xs md:text-sm shadow-sm hover:shadow transition-all duration-150"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{t('nav.login')}</span>
              </button>
            </div>

            {/* Mobile Actions: Delicate Language toggle + Dark toggle + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <LanguageSwitcher />

              <button
                onClick={toggleTheme}
                aria-label="החלף מצב תצוגה"
                className="p-1.5 rounded-brand text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              {/* Hamburger Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-brand text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="פתח תפריט ניווט"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 
        CRITICAL FIX: Mobile Full-Screen Overlay (z-[9999] covering inset-0)
        Appears completely on top of all headers, content, and floating widgets
      */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-white dark:bg-slate-900 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          {/* Mobile Overlay Top Bar */}
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white/95 dark:bg-slate-900/95 backdrop-blur-md sticky top-0 z-10">
            <Logo showTagline={false} />

            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <button
                onClick={toggleTheme}
                aria-label="מצב תצוגה"
                className="p-2 rounded-brand text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-brand bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label={t('common.close')}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Body */}
          <div className="px-6 py-6 flex-1 space-y-6">
            {/* Navigation Links */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                {language === 'he' ? 'ניווט בעמודי האתר' : 'Site Pages'}
              </div>
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={handleMobileNavClick}
                    className={({ isActive }) =>
                      `py-3 px-4 rounded-brand text-lg font-bold transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shadow-xs'
                          : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 text-slate-400 ${language === 'he' ? 'rotate-180' : ''}`} />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Quick Action CTAs inside mobile menu - with Airplane icon */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <button
                onClick={() => {
                  handleMobileNavClick();
                  navigate('/');
                  setTimeout(() => {
                    const sim = document.getElementById('simulator-section');
                    if (sim) sim.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full py-3.5 px-4 rounded-brand bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 font-bold text-sm border border-teal-200 dark:border-teal-800/80 text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <span>✈️ {t('nav.simulator')}</span>
              </button>

              <button
                onClick={() => {
                  handleMobileNavClick();
                  setAuthModalOpen(true);
                }}
                className="w-full py-3.5 px-4 rounded-brand bg-gradient-to-r from-sky-600 to-teal-600 text-white font-bold text-sm shadow-md text-center flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>{t('nav.login')}</span>
              </button>
            </div>
          </div>

          {/* Bottom Security & Status Meta inside mobile menu */}
          <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 bg-slate-50/50 dark:bg-slate-950/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono">{t('common.systemStatus')}</span>
              <span className="text-emerald-500 font-bold">● Active</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
              <span>{t('common.localFirst')}</span>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
};
