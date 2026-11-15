import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AccessibilityWidget } from '../common/AccessibilityWidget';
import { AIChatWidget } from '../common/AIChatWidget';
import { ScrollToTop } from './ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative font-sans text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <ScrollToTop />
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Body Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Accessibility Floating Icon Widget (Bottom-Left) */}
      <AccessibilityWidget />

      {/* AI Chatbot Floating Mockup Widget (Bottom-Right) */}
      <AIChatWidget />
    </div>
  );
};
