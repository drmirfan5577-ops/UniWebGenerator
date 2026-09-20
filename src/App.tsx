import React, { useState, useCallback } from 'react';
import { useSwipe } from '@/hooks/useSwipe';
import { useLanguage } from '@/hooks/useLanguage';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import MarqueeBar from '@/components/layout/MarqueeBar';
import HomePage from '@/pages/HomePage';
import TemplatesPage from '@/pages/TemplatesPage';
import GeneratorPage from '@/pages/GeneratorPage';
import SocialPage from '@/pages/SocialPage';
import MarketingPage from '@/pages/MarketingPage';
import AdminPage from '@/pages/AdminPage';
import TemplatePreviewPage from '@/pages/TemplatePreviewPage';
import type { ViewType, Template } from '@/types';

const VIEWS: ViewType[] = ['home', 'templates', 'generator', 'social', 'marketing', 'admin'];

const TOP_MARQUEE_ITEMS = [
  '🛒 Supermarket Templates Available',
  '💊 Pharmacy Websites Ready',
  '🍔 Food & Restaurant Designs',
  '👗 Fashion Store Templates',
  '📱 Electronics Shops',
  '🚚 Delivery Service Sites',
  '💄 Cosmetics & Beauty Stores',
  '🧁 Bakery & Sweet Shops',
  '🏠 Real Estate & OLX Style',
  '🌐 13+ Languages Supported',
  '📲 PWA + Mobile Ready',
  '⚡ Enterprise Grade Quality',
];

const BOTTOM_MARQUEE_ITEMS = [
  '🇵🇰 Pakistan • پاکستان',
  '🇨🇳 China • 中国',
  '🇧🇩 Bangladesh • বাংলাদেশ',
  '🇹🇷 Turkey • Türkiye',
  '🇮🇳 India • भारत',
  '🇺🇸 United States',
  '🇦🇪 UAE • الإمارات',
  '🇬🇧 United Kingdom',
  '🇷🇺 Russia • Россия',
  '🇸🇦 Saudi Arabia • السعودية',
  '🇰🇷 Korea • 한국',
  '🇩🇪 Germany • Deutschland',
  '🇫🇷 France • France',
  '🇮🇷 Iran • ایران',
  '🇦🇫 Afghanistan • افغانستان',
];

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const { currentLang, language, translate, switchLanguage } = useLanguage();

  const currentIndex = VIEWS.indexOf(activeView);

  const navigateNext = useCallback(() => {
    if (previewTemplate) return;
    const next = VIEWS[(currentIndex + 1) % VIEWS.length];
    setActiveView(next);
  }, [currentIndex, previewTemplate]);

  const navigatePrev = useCallback(() => {
    if (previewTemplate) return;
    const prev = VIEWS[(currentIndex - 1 + VIEWS.length) % VIEWS.length];
    setActiveView(prev);
  }, [currentIndex, previewTemplate]);

  const swipeHandlers = useSwipe(
    language.dir === 'rtl' ? navigatePrev : navigateNext,
    language.dir === 'rtl' ? navigateNext : navigatePrev,
  );

  const handleNavigate = (v: ViewType) => {
    setActiveView(v);
    setPreviewTemplate(null);
  };

  return (
    <AnimatedBackground>
      <div className="flex h-full w-full">
        {/* Sidebar */}
        <Sidebar
          activeView={activeView}
          onNavigate={handleNavigate}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          translate={translate}
          dir={language.dir}
        />

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
          {/* Top Marquee */}
          <MarqueeBar
            items={TOP_MARQUEE_ITEMS}
            gradient="linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899,#f59e0b,#10b981,#06b6d4,#8b5cf6,#6366f1)"
            textColor="white"
            speed="normal"
          />

          {/* Header */}
          <Header
            onMenuToggle={() => setSidebarOpen(true)}
            currentLang={currentLang}
            onLangChange={switchLanguage}
            translate={translate}
            dir={language.dir}
          />

          {/* Page content with swipe */}
          <div
            className="flex-1 min-h-0 relative overflow-hidden"
            {...swipeHandlers}
          >
            <div
              className="absolute inset-0 overflow-hidden"
              key={previewTemplate ? `preview-${previewTemplate.id}` : activeView}
              style={{ animation: 'slideInRight 0.3s ease-out' }}
            >
              {previewTemplate ? (
                <TemplatePreviewPage
                  template={previewTemplate}
                  onBack={() => setPreviewTemplate(null)}
                  onSelect={(t) => {
                    alert(`"${t.name}" selected! Configure it in the Generator tab.`);
                    setPreviewTemplate(null);
                    setActiveView('generator');
                  }}
                  translate={translate}
                  dir={language.dir}
                />
              ) : activeView === 'home' ? (
                <HomePage onNavigate={handleNavigate} translate={translate} dir={language.dir} currentLang={currentLang} />
              ) : activeView === 'templates' ? (
                <TemplatesPage translate={translate} dir={language.dir} currentLang={currentLang} onPreviewTemplate={setPreviewTemplate} />
              ) : activeView === 'generator' ? (
                <GeneratorPage translate={translate} dir={language.dir} />
              ) : activeView === 'social' ? (
                <SocialPage translate={translate} dir={language.dir} />
              ) : activeView === 'marketing' ? (
                <MarketingPage translate={translate} dir={language.dir} />
              ) : activeView === 'admin' ? (
                <AdminPage translate={translate} dir={language.dir} />
              ) : null}
            </div>
          </div>

          {/* Bottom Tab Nav (mobile) */}
          <nav className="lg:hidden flex border-t border-indigo-50 bg-white/90 backdrop-blur-xl">
            {[
              { id: 'home' as ViewType, icon: '🏠', label: translate('nav.home') },
              { id: 'templates' as ViewType, icon: '🎨', label: translate('nav.templates') },
              { id: 'generator' as ViewType, icon: '⚡', label: translate('nav.generator') },
              { id: 'social' as ViewType, icon: '🔗', label: translate('nav.social') },
              { id: 'admin' as ViewType, icon: '🔐', label: translate('nav.admin') },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex-1 flex flex-col items-center justify-center py-2 text-[10px] font-semibold transition-all min-h-[56px] gap-0.5 ${activeView === item.id ? 'text-indigo-600' : 'text-gray-400'}`}
              >
                <span className="text-xl leading-none">{item.icon}</span>
                <span className="leading-none">{item.label}</span>
                {activeView === item.id && (
                  <div className="w-4 h-0.5 rounded-full bg-indigo-500 mt-0.5" />
                )}
              </button>
            ))}
          </nav>

          {/* Bottom Marquee */}
          <MarqueeBar
            items={BOTTOM_MARQUEE_ITEMS}
            reverse
            gradient="linear-gradient(90deg,#10b981,#06b6d4,#6366f1,#8b5cf6,#ec4899,#f59e0b,#10b981)"
            textColor="white"
            speed="slow"
          />
        </div>
      </div>
    </AnimatedBackground>
  );
}
