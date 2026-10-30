import { useLang, type Lang } from '@/i18n';

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  const toggle = () => {
    const next: Lang = lang === 'es' ? 'en' : 'es';
    setLang(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="font-mono-lt text-[10px] uppercase text-ink/50 hover:text-ink transition flex items-center gap-1.5 border hairline px-2.5 py-1"
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      <span className={lang === 'es' ? 'text-ink' : ''}>ES</span>
      <span className="text-ink/20">/</span>
      <span className={lang === 'en' ? 'text-ink' : ''}>EN</span>
    </button>
  );
}
