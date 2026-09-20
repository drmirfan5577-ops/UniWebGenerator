import React, { useState } from 'react';
import { LANGUAGES } from '@/constants/languages';

interface HeaderProps {
  onMenuToggle: () => void;
  currentLang: string;
  onLangChange: (code: string) => void;
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, currentLang, onLangChange, translate, dir }) => {
  const [showLang, setShowLang] = useState(false);
  const lang = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  return (
    <header
      className="flex items-center justify-between px-4 py-2.5 bg-white/80 backdrop-blur-xl border-b border-indigo-50 shadow-sm z-30 relative"
      style={{ minHeight: 56 }}
    >
      {/* Left: hamburger */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-xl glass-btn text-gray-600"
        aria-label="Menu"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="17" y2="6"/>
          <line x1="3" y1="10" x2="17" y2="10"/>
          <line x1="3" y1="14" x2="17" y2="14"/>
        </svg>
      </button>

      {/* Center: brand */}
      <div className={`flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs"
          style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
        >
          UW
        </div>
        <span className="font-bold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
          {translate('app.title')}
        </span>
      </div>

      {/* Right: language + status */}
      <div className="flex items-center gap-2">
        <div className="hidden sm:block status-live text-[10px]">LIVE</div>

        {/* Language selector */}
        <div className="relative">
          <button
            onClick={() => setShowLang(!showLang)}
            className="glass-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium text-gray-700"
          >
            <span>{lang.flag}</span>
            <span className="hidden sm:block">{lang.nativeName}</span>
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="2,4 6,8 10,4"/>
            </svg>
          </button>

          {showLang && (
            <div
              className="absolute right-0 top-10 bg-white/95 backdrop-blur-xl border border-indigo-100 rounded-2xl shadow-2xl p-2 w-52 z-50 max-h-72 overflow-y-auto no-scrollbar"
              style={{ animation: 'scaleIn 0.2s ease-out' }}
            >
              {LANGUAGES.map(l => (
                <button
                  key={l.code}
                  onClick={() => { onLangChange(l.code); setShowLang(false); }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all ${currentLang === l.code ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <span className="text-base">{l.flag}</span>
                  <span className="flex-1 text-left">{l.nativeName}</span>
                  <span className="text-[10px] text-gray-400">{l.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
