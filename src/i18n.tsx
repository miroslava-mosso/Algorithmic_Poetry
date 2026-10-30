import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

export type Lang = 'es' | 'en';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (es: string, en: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');

  const t = useCallback((es: string, en: string) => (lang === 'en' ? en : es), [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
