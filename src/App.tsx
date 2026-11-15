import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { StatusPage } from './pages/StatusPage';
import { Compass } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 text-center space-y-4">
      <div className="w-16 h-16 bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 rounded-full flex items-center justify-center mx-auto">
        <Compass className="w-8 h-8" />
      </div>
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
        עמוד 404 — הדף לא נמצא
      </h2>
      <p className="text-sm text-slate-500 max-w-sm mx-auto">
        נראה שהגעתם לכתובת שאינה קיימת במערכת GetRelocation.
      </p>
      <Link
        to="/"
        className="inline-flex px-6 py-2.5 rounded-brand bg-sky-600 text-white font-bold text-xs hover:bg-sky-500 transition-colors"
      >
        חזרה לדף הבית
      </Link>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="product" element={<ProductPage />} />
              <Route path="plans" element={<PricingPage />} />
              <Route path="pricing" element={<Navigate to="/plans" replace />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="status" element={<StatusPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
