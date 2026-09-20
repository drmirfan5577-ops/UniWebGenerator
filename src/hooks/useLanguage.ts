import { useState, useEffect, useCallback } from 'react';
import { LANGUAGES } from '@/constants/languages';
import { t } from '@/constants/languages';
import type { Language } from '@/types';

export function useLanguage() {
  const [currentLang, setCurrentLang] = useState<string>(() => {
    return localStorage.getItem('uwg_lang') || 'en';
  });

  const language: Language = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    localStorage.setItem('uwg_lang', currentLang);
    document.documentElement.dir = language.dir;
    document.documentElement.lang = currentLang;
  }, [currentLang, language.dir]);

  const translate = useCallback((key: string) => t(key, currentLang), [currentLang]);

  const switchLanguage = useCallback((code: string) => {
    setCurrentLang(code);
  }, []);

  return { currentLang, language, translate, switchLanguage, languages: LANGUAGES };
}
