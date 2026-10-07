import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Facebook, Instagram, MapPin, Phone, Twitter } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  CLINIC_FACEBOOK_URL,
  CLINIC_MAPS_URL,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_HREF,
  CLINIC_WHATSAPP_URL,
  useClinicStatus,
} from "@/lib/clinic";

type FooterLinkItem = {
  label: string;
  href: string;
};

const treatments: FooterLinkItem[] = [
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Root Canal Treatment", href: "/services/root-canal" },
  { label: "Orthodontics & Braces", href: "/services/orthodontics" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
  { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
  { label: "Emergency Dental Care", href: "/services/emergency-dental-care" },
];

const exploreLinks: FooterLinkItem[] = [
  { label: "NRI Corner", href: "/#nri-corner" },
  { label: "Our Locations", href: "/#location" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Dental Health Quiz", href: "/#quiz" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: CLINIC_FACEBOOK_URL, icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/dentalsolutionspalghar", icon: Instagram },
  { label: "X (Twitter)", href: "https://x.com/dentalsoluti0ns", icon: Twitter },
];

const headingClass = "text-xs font-semibold uppercase tracking-[0.16em] text-primary-300";
const linkClass = "text-sm text-white/70 transition-colors hover:text-white";

// Service and blog pages don't reset scroll on mount, so jump to the top before navigating
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "instant" });

const FooterLink = ({ label, href }: FooterLinkItem) =>
  href.includes("#") ? (
    <a href={href} className={linkClass}>
      {label}
    </a>
  ) : (
    <Link to={href} onClick={scrollToTop} className={linkClass}>
      {label}
    </Link>
  );

const Footer = () => {
  const status = useClinicStatus();

  const contactTiles = [
    {
      label: "Call us",
      value: CLINIC_PHONE_DISPLAY,
      href: CLINIC_PHONE_HREF,
      icon: <Phone className="h-5 w-5" />,
    },
    {
      label: "WhatsApp · 24/7",
      value: "Book an appointment",
      href: CLINIC_WHATSAPP_URL,
      icon: <WhatsAppIcon className="h-5 w-5" />,
      external: true,
    },
    {
      label: "Get directions",
      value: "Near National College",
      href: CLINIC_MAPS_URL,
      icon: <MapPin className="h-5 w-5" />,
      external: true,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-primary-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[56rem] max-w-full -translate-x-1/2 rounded-full bg-primary-500/15 blur-3xl"
      />

      <div className="container relative mx-auto px-4">
        {/* Contact strip */}
        <div className="grid gap-3 pt-12 md:grid-cols-3 md:pt-16">
          {contactTiles.map((tile) => (
            <a
              key={tile.label}
              href={tile.href}
              {...(tile.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-primary-400/40 hover:bg-white/[0.06] sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300 ring-1 ring-inset ring-primary-400/20">
                {tile.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-wider text-white/50">
                  {tile.label}
                </span>
                <span className="mt-0.5 block truncate font-semibold text-white">{tile.value}</span>
              </span>
              <ArrowUpRight className="hidden h-4 w-4 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white lg:block" />
            </a>
          ))}
        </div>

        {/* Main columns */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 py-12 md:grid-cols-3 lg:grid-cols-12 lg:gap-x-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <Link to="/" onClick={scrollToTop} className="text-xl font-bold tracking-tight">
              Dental Solutions <span className="text-primary-300">Palghar</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Dental Solutions Palghar is the best dental clinic in Palghar, offering comprehensive oral healthcare including dental implants, orthodontics (braces), root canal treatment, teeth whitening, pediatric dentistry, and emergency dental care near Palghar station.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-inset ring-white/10 transition-colors hover:bg-primary hover:text-white hover:ring-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Treatments" className="lg:col-span-3">
            <h3 className={headingClass}>Treatments</h3>
            <ul className="mt-5 space-y-3">
              {treatments.map((item) => (
                <li key={item.href}>
                  <FooterLink {...item} />
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/#services"
                  className="group flex w-fit items-center gap-1 text-sm font-medium text-primary-300 transition-colors hover:text-primary-200"
                >
                  All services
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Explore" className="lg:col-span-2">
            <h3 className={headingClass}>Explore</h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <FooterLink {...item} />
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <h3 className={headingClass}>Visit us</h3>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    status.isOpen ? "bg-emerald-400/15 text-emerald-300" : "bg-rose-400/15 text-rose-300"
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                        status.isOpen ? "bg-emerald-400" : "bg-rose-400"
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-2 w-2 rounded-full ${
                        status.isOpen ? "bg-emerald-400" : "bg-rose-400"
                      }`}
                    />
                  </span>
                  {status.isOpen ? "Open now" : "Closed now"}
                </span>
                <span className="text-xs text-white/60">{status.detail}</span>
              </div>
              <dl className="mt-4 divide-y divide-white/10 text-sm">
                <div className="flex justify-between gap-4 pb-3">
                  <dt className="font-medium text-white/80">Mon – Sat</dt>
                  <dd className="text-right tabular-nums text-white/60">
                    9:30 am – 2 pm
                    <br />
                    5 pm – 9 pm
                  </dd>
                </div>
                <div className="flex justify-between gap-4 pt-3">
                  <dt className="font-medium text-white/80">Sunday</dt>
                  <dd className="text-rose-300/90">Closed</dd>
                </div>
              </dl>
            </div>
            <address className="mt-5 flex gap-3 text-sm not-italic leading-relaxed text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
              <span>
                Shop number 5,6, Apoorva Apartments, Mahim Rd, next to Chetna Classes, next to National College, Shri Ram Nagar, Vishnu Nagar, Palghar, Maharashtra 401404
              </span>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dental Solutions Palghar. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://nirzar.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Nirzar Marketing Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
