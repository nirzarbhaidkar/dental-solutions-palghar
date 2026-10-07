import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Calendar, ChevronRight, Facebook, Menu, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ToothIcon from "@/components/icons/ToothIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  CLINIC_FACEBOOK_URL,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_HREF,
  CLINIC_WHATSAPP_URL,
  useClinicStatus,
} from "@/lib/clinic";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "nav.services", href: "/#services" },
  { key: "nav.nri", href: "/#nri-corner" },
  { key: "nav.location", href: "/#location" },
  { key: "nav.testimonials", href: "/#testimonials" },
  { key: "nav.faqs", href: "/#faqs" },
  { key: "nav.blog", href: "/blog" },
];

const SECTION_IDS = NAV_ITEMS.filter((item) => item.href.startsWith("/#")).map((item) => item.href.slice(2));

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const status = useClinicStatus();
  const isHome = location.pathname === "/";

  // Solid background once scrolled, and on the homepage highlight the section under the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
      if (!isHome) return;
      const line = window.innerHeight * 0.35;
      const current = SECTION_IDS.find((id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect && rect.top <= line && rect.bottom > line;
      });
      setActiveSection(current ?? null);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/#services" && location.pathname.startsWith("/services")) return true;
    if (href.startsWith("/#")) return isHome && activeSection === href.slice(2);
    return location.pathname.startsWith(href);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsNavOpen(false);

    if (!href.startsWith("/#")) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    e.preventDefault();
    if (!isHome) {
      // Index waits for the lazy-loaded section to mount, then scrolls to it
      navigate(href);
      return;
    }
    document.getElementById(href.slice(2))?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
  };

  // Pages don't share a #main-content id, so focus the page's <main> or whatever follows the header
  const handleSkipToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target =
      document.querySelector<HTMLElement>("main") ??
      (headerRef.current?.nextElementSibling as HTMLElement | null);
    if (!target) return;
    e.preventDefault();
    target.setAttribute("tabindex", "-1");
    target.focus();
  };

  const handleBookAppointment = () => {
    window.open(CLINIC_WHATSAPP_URL, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to book your appointment");
  };

  const renderNavLink = (item: (typeof NAV_ITEMS)[number], className: (active: boolean) => string, trailing?: React.ReactNode) => {
    const active = isActive(item.href);
    const props = {
      className: className(active),
      "aria-current": active ? (item.href.startsWith("/#") ? ("true" as const) : ("page" as const)) : undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href),
    };
    const content = (
      <>
        {t(item.key)}
        {trailing}
      </>
    );
    return item.href.startsWith("/#") ? (
      <a href={item.href} {...props}>
        {content}
      </a>
    ) : (
      <Link to={item.href} {...props}>
        {content}
      </Link>
    );
  };

  const desktopLinkClass = (active: boolean) =>
    cn(
      "relative inline-flex h-9 items-center whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      active ? "text-primary" : "text-foreground/75"
    );

  const drawerLinkClass = (active: boolean) =>
    cn(
      "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
      active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
    );

  return (
    <>
      <a
        href="#main-content"
        onClick={handleSkipToContent}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to content
      </a>

      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled ? "liquid-glass-scrolled" : "liquid-glass"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
              <ToothIcon className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block text-[15px] font-bold tracking-tight text-foreground sm:text-base">
                Dental Solutions
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                Palghar
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  {renderNavLink(item, desktopLinkClass, isActive(item.href) && (
                    <span aria-hidden="true" className="absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-primary" />
                  ))}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            <LanguageSwitcher />
            <a
              href={CLINIC_PHONE_HREF}
              aria-label={t("cta.callClinicFull")}
              className="inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium text-foreground/75 transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden tabular-nums xl:inline">{CLINIC_PHONE_DISPLAY}</span>
            </a>
            <Button size="sm" onClick={handleBookAppointment} className="ml-1 h-9 rounded-full px-4 font-semibold shadow-soft">
              <Calendar className="mr-1.5 h-4 w-4" />
              {t("cta.bookNow")}
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={CLINIC_PHONE_HREF}
              aria-label={t("cta.callClinicFull")}
              className="flex h-11 w-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/10"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="h-11 w-11 rounded-full" aria-label={t("nav.menu")}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex w-[86%] flex-col gap-0 p-0 sm:max-w-sm [&>button:last-child]:right-3 [&>button:last-child]:top-3.5 [&>button:last-child]:rounded-full [&>button:last-child]:p-2.5"
              >
                <div className="border-b px-5 py-4 pr-14">
                  <SheetTitle className="text-base">{t("nav.menu")}</SheetTitle>
                  <SheetDescription className="sr-only">Site navigation, language and contact options</SheetDescription>
                </div>

                <nav aria-label="Main" className="flex-1 overflow-y-auto px-3 py-3">
                  <ul className="space-y-0.5">
                    <li>
                      <Link
                        to="/"
                        onClick={(e) => {
                          setIsNavOpen(false);
                          handleLogoClick(e);
                        }}
                        className={drawerLinkClass(isHome && !activeSection)}
                        aria-current={isHome && !activeSection ? "page" : undefined}
                      >
                        {t("nav.home")}
                        <ChevronRight className="h-4 w-4 opacity-40" />
                      </Link>
                    </li>
                    {NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        {renderNavLink(item, drawerLinkClass, <ChevronRight className="h-4 w-4 opacity-40" />)}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 px-1">
                    <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Language · भाषा
                    </p>
                    <LanguageSwitcher variant="segmented" />
                  </div>
                </nav>

                <div className="space-y-3 border-t bg-muted/40 p-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold",
                        status.isOpen ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                      )}
                    >
                      <span className={cn("h-1.5 w-1.5 rounded-full", status.isOpen ? "bg-emerald-500" : "bg-rose-500")} />
                      {status.isOpen ? "Open now" : "Closed now"}
                    </span>
                    <span className="text-muted-foreground">{status.detail}</span>
                  </div>
                  <Button
                    onClick={() => {
                      handleBookAppointment();
                      setIsNavOpen(false);
                    }}
                    className="h-12 w-full bg-[#25D366] font-semibold text-[#063b1f] hover:bg-[#1ebe5a]"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" />
                    {t("cta.bookWhatsapp")}
                  </Button>
                  <Button asChild variant="outline" className="h-12 w-full font-semibold">
                    <a href={CLINIC_PHONE_HREF}>
                      <Phone className="mr-2 h-5 w-5" />
                      {t("cta.callClinicFull")}
                    </a>
                  </Button>
                  <a
                    href={CLINIC_FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Facebook className="h-4 w-4 text-[#1877F2]" />
                    {t("nav.followFb")}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
