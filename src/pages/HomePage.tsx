import React from 'react';
import type { ViewType } from '@/types';
import { TEMPLATE_CATEGORIES } from '@/constants/templates';
import { t } from '@/constants/languages';

interface HomePageProps {
  onNavigate: (v: ViewType) => void;
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
  currentLang: string;
}

const STATS = [
  { label: 'Templates', value: '100+', icon: '🎨', color: '#6366f1' },
  { label: 'Languages', value: '13+', icon: '🌐', color: '#8b5cf6' },
  { label: 'Categories', value: '10+', icon: '🗂️', color: '#ec4899' },
  { label: 'Countries', value: '15+', icon: '🌍', color: '#10b981' },
];

const FEATURES = [
  { icon: '⚡', title: 'Instant Generator', desc: 'Create enterprise sites in minutes', color: '#6366f1' },
  { icon: '📱', title: 'PWA + Mobile', desc: 'Works on all devices perfectly', color: '#8b5cf6' },
  { icon: '🌐', title: '13+ Languages', desc: 'Full RTL/LTR multi-language support', color: '#ec4899' },
  { icon: '🔒', title: 'Secure Admin', desc: 'Password-protected control panel', color: '#f59e0b' },
  { icon: '💬', title: 'WhatsApp Orders', desc: 'Direct ordering via WhatsApp', color: '#10b981' },
  { icon: '🎨', title: '100+ Templates', desc: 'Every business category covered', color: '#06b6d4' },
];

const HomePage: React.FC<HomePageProps> = ({ onNavigate, translate, dir, currentLang }) => {
  return (
    <div className={`h-full overflow-y-auto no-scrollbar ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Hero */}
      <div className="relative px-5 pt-8 pb-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 border border-indigo-200 rounded-full px-4 py-1.5 text-xs font-semibold text-indigo-700 mb-4 shadow-sm animate-fade-in">
            <span className="status-live text-[10px]">LIVE</span>
            Enterprise Digital Platform 2026
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="shimmer-text">{translate('home.hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {translate('home.hero.sub')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button onClick={() => onNavigate('templates')} className="btn-primary text-sm px-6 py-3 shadow-xl">
              🎨 {translate('btn.explore')}
            </button>
            <button
              onClick={() => onNavigate('generator')}
              className="glass-btn px-6 py-3 rounded-xl text-sm font-semibold text-indigo-700 border border-indigo-200 min-h-[44px]"
            >
              ⚡ Quick Generate
            </button>
          </div>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full opacity-10 animate-spin-slow" style={{ background: 'conic-gradient(from 0deg, #6366f1, #ec4899, #f59e0b, #10b981, #6366f1)' }} />
        <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-10 animate-spin-slow" style={{ background: 'conic-gradient(from 180deg, #8b5cf6, #06b6d4, #f59e0b, #8b5cf6)', animationDirection: 'reverse' }} />
      </div>

      {/* Stats */}
      <div className="px-4 pb-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STATS.map((s, i) => (
            <div key={i} className="gradient-card rounded-2xl p-4 text-center animate-scale-in" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-black" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[11px] text-gray-500 font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Quick Access */}
      <div className="px-4 pb-5">
        <h2 className="text-base font-bold text-gray-800 mb-3">🗂️ Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {TEMPLATE_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate('templates')}
              className="gradient-card rounded-xl p-3.5 flex items-center gap-2.5 text-left hover:scale-[1.02] transition-transform"
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${cat.gradient} shadow-sm`}
              >
                {cat.icon}
              </div>
              <div>
                <div className="text-[12px] font-semibold text-gray-700 leading-tight">{t(cat.labelKey, currentLang)}</div>
                <div className="text-[10px] text-gray-400">{cat.count} templates</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="px-4 pb-5">
        <h2 className="text-base font-bold text-gray-800 mb-3">✨ Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {FEATURES.map((f, i) => (
            <div key={i} className="gradient-card rounded-xl p-4 flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${i * 0.07}s` }}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${f.color}18` }}
              >
                {f.icon}
              </div>
              <div>
                <div className="font-bold text-[13px] text-gray-800">{f.title}</div>
                <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Target Countries */}
      <div className="px-4 pb-6">
        <h2 className="text-base font-bold text-gray-800 mb-3">🌍 Global Reach</h2>
        <div className="gradient-card rounded-2xl p-4">
          <div className="flex flex-wrap gap-2">
            {['🇵🇰 Pakistan', '🇨🇳 China', '🇧🇩 Bangladesh', '🇹🇷 Turkey', '🇮🇳 India', '🇺🇸 USA', '🇦🇪 UAE', '🇬🇧 UK', '🇷🇺 Russia', '🇸🇦 Saudi Arabia', '🇩🇪 Germany', '🇫🇷 France', '🇰🇷 Korea', '🇮🇷 Iran', '🇦🇫 Afghanistan'].map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1 bg-white/70 border border-indigo-100 rounded-full px-3 py-1 text-xs font-medium text-gray-600">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
