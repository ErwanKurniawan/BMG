import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('bmg-lang') || 'id';
    } catch {
      return 'id';
    }
  });

  const switchLanguage = useCallback((newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem('bmg-lang', newLang);
    } catch {
      // localStorage unavailable – ignore
    }
  }, []);

  const t = useMemo(() => translations[lang] || translations.id, [lang]);

  const value = useMemo(
    () => ({ lang, switchLanguage, t }),
    [lang, switchLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
