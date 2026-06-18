import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const CLINIC = {
  name: "Dental Solutions Palghar — Multispeciality Dental Clinic & Implant Centre",
  phone: "+918600892884",
  phoneDisplay: "+91 86008 92884",
  email: "contact@dentalsolutionspalghar.com",
  street: "Shop number 5, 6, Apoorva Apartments, Mahim Rd, next to Chetna Classes",
  locality: "Palghar",
  region: "Maharashtra",
  postal: "401404",
  country: "IN",
  lat: 19.6944377,
  lng: 72.7659732,
  mapsUrl:
    "https://www.google.com/maps/place/Dental+Solutions+Palghar/@19.6944377,72.7659732,17z",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.0!2d72.76597319999999!3d19.694437699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQxJzQwLjAiTiA3MsKwNDUnNTcuNSJF!5e0!3m2!1sen!2sin!4v1717488000000",
};

const Contact = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [reviewsInView, setReviewsInView] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!widgetRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setReviewsInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(widgetRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!reviewsInView) return;
    const SRC = "https://static.elfsight.com/platform/platform.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, [reviewsInView]);

  const url = "https://dentalsolutionspalghar.in/contact";

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contactpage`,
    name: "Contact Dental Solutions Palghar — Multispeciality Dental Clinic & Implant Centre",
    description:
      "Contact the best dentist in Palghar — phone, WhatsApp, email and clinic address. Same-day appointments and 24/7 emergency dental care across Palghar, Boisar, Tarapur, Virar and Vasai.",
    url,
    mainEntity: { "@id": "https://dentalsolutionspalghar.in/#dentist" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://dentalsolutionspalghar.in/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: url },
      ],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "MedicalBusiness"],
    "@id": "https://dentalsolutionspalghar.in/#localbusiness",
    name: CLINIC.name,
    image: "https://dentalsolutionspalghar.in/og-image.jpg",
    url: "https://dentalsolutionspalghar.in",
    telephone: CLINIC.phone,
    email: CLINIC.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.street,
      addressLocality: CLINIC.locality,
      addressRegion: CLINIC.region,
      postalCode: CLINIC.postal,
      addressCountry: CLINIC.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: CLINIC.lat, longitude: CLINIC.lng },
    hasMap: CLINIC.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:00",
        closes: "21:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CLINIC.phone,
        contactType: "Appointments",
        availableLanguage: ["English", "Hindi", "Marathi", "Gujarati"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: CLINIC.phone,
        contactType: "Emergency",
        availableLanguage: ["English", "Hindi", "Marathi"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        email: CLINIC.email,
        contactType: "Customer Service",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    areaServed: [
      { "@type": "City", name: "Palghar" },
      { "@type": "City", name: "Boisar" },
      { "@type": "City", name: "Tarapur" },
      { "@type": "City", name: "Virar" },
      { "@type": "City", name: "Vasai" },
      { "@type": "City", name: "Safale" },
      { "@type": "City", name: "Manor" },
      { "@type": "City", name: "Wada" },
      { "@type": "City", name: "Dahanu" },
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: CLINIC.lat, longitude: CLINIC.lng },
        geoRadius: "50000",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Helmet>
        <title>Contact Dental Solutions Palghar — Best Dentist in Palghar</title>
        <meta
          name="description"
          content="Contact the best dentist in Palghar. Call +91 86008 92884 or visit our multispeciality dental clinic & implant centre on Mahim Rd, Palghar. Same-day appointments and 24/7 emergency care."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Contact Dental Solutions Palghar" />
        <meta
          property="og:description"
          content="Phone, email, address and Google Maps directions to Palghar's trusted multispeciality dental clinic & implant centre."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </header>

          <section className="grid md:grid-cols-2 gap-6 mb-16" aria-label="Clinic contact details">
            <article className="rounded-2xl border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">{t("contact.reachUs")}</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 text-primary shrink-0" aria-hidden />
                  <div>
                    <div className="font-medium">{t("contact.phoneWa")}</div>
                    <a className="text-muted-foreground hover:text-primary" href={`tel:${CLINIC.phone}`}>
                      {CLINIC.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 text-primary shrink-0" aria-hidden />
                  <div>
                    <div className="font-medium">{t("contact.email")}</div>
                    <a className="text-muted-foreground hover:text-primary" href={`mailto:${CLINIC.email}`}>
                      {CLINIC.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" aria-hidden />
                  <div>
                    <div className="font-medium">{t("contact.address")}</div>
                    <address className="not-italic text-muted-foreground">
                      {CLINIC.street}
                      <br />
                      {CLINIC.locality}, {CLINIC.region} {CLINIC.postal}
                    </address>
                    <a
                      className="inline-block mt-2 text-primary hover:underline"
                      href={CLINIC.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("contact.directions")}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-1 text-primary shrink-0" aria-hidden />
                  <div>
                    <div className="font-medium">{t("contact.hours")}</div>
                    <div className="text-muted-foreground">
                      {t("contact.hoursValue")}
                      <br />
                      {t("contact.sunday")}
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={`tel:${CLINIC.phone}`} aria-label="Call clinic to book appointment">
                    {t("contact.callToBook")}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href={`https://wa.me/${CLINIC.phone.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message clinic on WhatsApp"
                  >
                    {t("contact.whatsappUs")}
                  </a>
                </Button>
              </div>
            </article>

            <article className="rounded-2xl overflow-hidden border bg-card shadow-sm min-h-[360px]">
              <iframe
                title="Map to Dental Solutions Palghar"
                src={CLINIC.mapsEmbed}
                className="w-full h-full min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </article>
          </section>

          <section aria-labelledby="reviews-heading" className="mb-8">
            <div className="text-center mb-8">
              <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold mb-3">
                Real Google Reviews from Palghar Patients
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                4.9★ rated by hundreds of patients across Palghar, Boisar, Tarapur, Virar
                and Vasai. Live Google Reviews — unedited.
              </p>
            </div>
            <div ref={widgetRef} className="min-h-[420px]">
              {reviewsInView && (
                <div
                  className="elfsight-app-1c9335dd-4e92-462e-9c64-87c8b9bcb7ab"
                  data-elfsight-app-lazy
                />
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
