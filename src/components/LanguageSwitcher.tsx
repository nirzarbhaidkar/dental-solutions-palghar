import { LANGUAGES, useLanguage } from "@/i18n/LanguageContext";

type Props = {
  compact?: boolean;
};

const LanguageSwitcher = ({ compact = false }: Props) => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="inline-flex items-center rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm p-0.5"
    >
      {LANGUAGES.map((l) => {
        const isActive = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={isActive}
            className={[
              "relative px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-foreground/70 hover:text-foreground hover:bg-accent",
              compact && l.code !== "en" ? "hidden sm:inline-block" : "",
            ].join(" ")}
          >
            <span className="sr-only">{l.label}</span>
            <span aria-hidden="true">{l.short}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
