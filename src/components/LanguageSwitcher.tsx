import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES, useLanguage } from "@/i18n/LanguageContext";

type Props = {
  variant?: "ghost" | "outline";
  compact?: boolean;
};

const LanguageSwitcher = ({ variant = "ghost", compact = false }: Props) => {
  const { lang, setLang, t } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={compact ? "icon" : "sm"}
          className={compact ? "h-10 w-10" : "gap-2"}
          aria-label={t("lang.label")}
        >
          <Globe className="h-4 w-4" />
          {!compact && (
            <span className="text-sm font-medium">{current.native}</span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>
              <span className="font-medium">{l.native}</span>
              {l.code !== "en" && (
                <span className="ml-2 text-xs text-muted-foreground">
                  {l.label}
                </span>
              )}
            </span>
            {lang === l.code && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
