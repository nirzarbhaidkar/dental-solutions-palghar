import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGUAGES, useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

type Props = {
  // "menu": compact dropdown for the desktop header; "segmented": full-width buttons for the mobile drawer
  variant?: "menu" | "segmented";
};

const LanguageSwitcher = ({ variant = "menu" }: Props) => {
  const { lang, setLang } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  // A plain disclosure instead of a Radix dropdown: three options don't justify shipping the popper code on every page
  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setIsOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (variant === "segmented") {
    return (
      <div role="group" aria-label="Language" className="grid grid-cols-3 gap-1 rounded-xl bg-muted p-1">
        {LANGUAGES.map((l) => {
          const isActive = l.code === lang;
          return (
            <button
              key={l.code}
              type="button"
              lang={l.code}
              onClick={() => setLang(l.code)}
              aria-pressed={isActive}
              className={cn(
                "rounded-lg px-2 py-2 text-sm font-medium transition-colors",
                isActive ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l.native}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Language: ${current.label}`}
        aria-expanded={isOpen}
        aria-controls={listId}
        onClick={() => setIsOpen((open) => !open)}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isOpen ? "bg-primary/5 text-primary" : "text-foreground/75"
        )}
      >
        <Globe className="h-4 w-4" />
        <span lang={current.code}>{current.short}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 opacity-60 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div
          id={listId}
          className="absolute right-0 top-full z-50 mt-2 min-w-[10rem] rounded-xl border bg-card p-1 shadow-lg animate-in fade-in-0 zoom-in-95"
        >
          {LANGUAGES.map((l) => {
            const isActive = l.code === lang;
            return (
              <button
                key={l.code}
                type="button"
                lang={l.code}
                aria-pressed={isActive}
                onClick={() => {
                  setLang(l.code);
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-accent",
                  isActive ? "font-medium text-primary" : "text-foreground"
                )}
              >
                {l.native}
                {isActive && <Check className="h-4 w-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
