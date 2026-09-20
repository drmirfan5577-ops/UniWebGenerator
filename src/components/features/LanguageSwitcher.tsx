import React from 'react';
import { LANGUAGES } from '@/constants/languages';

interface LanguageSwitcherProps {
  current: string;
  onChange: (code: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ current, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {LANGUAGES.map(lang => (
        <button
          key={lang.code}
          onClick={() => onChange(lang.code)}
          className={`category-pill flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${current === lang.code ? 'active' : ''}`}
        >
          <span>{lang.flag}</span>
          <span>{lang.nativeName}</span>
          {lang.dir === 'rtl' && <span className="text-[10px] opacity-60">RTL</span>}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
