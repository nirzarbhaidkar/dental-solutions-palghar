import React from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const NewsletterCTA: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-20"
      aria-labelledby="newsletter-heading"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[hsl(197_71%_42%)] to-[hsl(210_80%_38%)] p-8 text-primary-foreground shadow-2xl md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[hsl(160_84%_39%)]/30 blur-3xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Mail className="h-3.5 w-3.5" />
              Free dental wellness updates
            </span>
            <h2
              id="newsletter-heading"
              className="mt-4 font-serif text-3xl font-bold leading-tight md:text-4xl"
            >
              Brush up on the latest from Palghar's dental experts.
            </h2>
            <p className="mt-3 max-w-lg text-base text-white/85">
              One expert-written article a month — implants, kids' dentistry,
              cosmetic care and more. No spam, unsubscribe anytime.
            </p>
          </div>

          <form
            className="md:col-span-2"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const email = (f.elements.namedItem("email") as HTMLInputElement)
                ?.value;
              if (email) {
                alert(
                  `Thanks! We'll send our next article to ${email}.`
                );
                f.reset();
              }
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 rounded-2xl border border-white/25 bg-white/10 p-2 backdrop-blur-md sm:flex-row">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-xl bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 inline-flex items-center gap-2 text-xs text-white/75">
              <Phone className="h-3 w-3" /> Or call us directly: +91 86008 92884
            </p>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterCTA;
