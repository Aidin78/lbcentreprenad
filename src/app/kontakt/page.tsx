import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { QuoteForm } from "@/components/contact/quote-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { projectImages } from "@/content/projects";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt – begär kostnadsfri offert",
  description:
    "Kontakta LBC Entreprenad i Stockholm. Ring 070-390 70 71, maila kontakt@lbcentreprenad.se eller skicka en offertförfrågan om nybyggnation, renovering, fasad, sten, kakel eller trädgård.",
  path: "/kontakt/",
});

export default function ContactPage() {
  return (
    <>
      <section className="container-page pt-8 pb-16 lg:pt-12 lg:pb-20">
        <Breadcrumbs items={[{ name: "Kontakt", path: "/kontakt/" }]} />
        <div className="mt-12 grid gap-x-10 gap-y-8 lg:mt-20 lg:grid-cols-12 lg:items-end">
          <h1 className="animate-fade font-display font-semibold [font-stretch:112%] lg:col-span-7">
            <span className="block text-lead font-medium tracking-[-0.01em] text-ink-muted [font-stretch:100%]">
              Kontakt
            </span>
            <span className="mt-3 block text-display-xl">Hör av dig.</span>
          </h1>
          <p className="animate-fade text-lead text-graphite/85 [animation-delay:150ms] lg:col-span-5">
            Varmt välkommen till oss på LBC Entreprenad. Inget jobb är för stort
            eller för litet – ring, maila eller skicka en förfrågan så berättar
            vi mer.
          </p>
        </div>
      </section>

      <section
        aria-label="Kontaktuppgifter och offertförfrågan"
        className="container-page grid gap-x-10 gap-y-16 pb-24 lg:grid-cols-12 lg:pb-32"
      >
        <div className="lg:col-span-5">
          <ul className="border-t border-graphite/15">
            <ContactRow
              icon={<Phone className="size-5" strokeWidth={1.75} />}
              label="Telefon"
            >
              <a
                href={site.phone.href}
                className="link-underline font-display text-display-sm font-semibold tabular-nums [font-stretch:110%]"
              >
                {site.phone.display}
              </a>
            </ContactRow>
            <ContactRow
              icon={<Mail className="size-5" strokeWidth={1.75} />}
              label="E-post"
            >
              <a
                href={`mailto:${site.email}`}
                className="link-underline text-lg font-semibold break-all sm:text-xl"
              >
                {site.email}
              </a>
            </ContactRow>
            <ContactRow
              icon={<MapPin className="size-5" strokeWidth={1.75} />}
              label="Adress"
            >
              <address className="text-lg not-italic">
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </address>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-deep"
              >
                <span className="link-underline">Öppna i Google Maps</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </ContactRow>
            <ContactRow
              icon={<InstagramIcon className="size-5" />}
              label="Instagram"
            >
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-lg font-semibold"
              >
                {site.instagram.handle}
              </a>
            </ContactRow>
          </ul>

          <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-ink-muted uppercase">
            {site.values.join(" · ")}
          </p>

          <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden bg-concrete lg:block">
            <Image
              src={projectImages.tradgardSkifferaltan.src}
              alt={projectImages.tradgardSkifferaltan.alt}
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 38vw, 1px"
              className="object-cover"
            />
          </div>
        </div>

        <div
          id="offert"
          className="scroll-mt-24 bg-limestone-deep p-6 sm:p-10 lg:col-span-7 lg:p-12"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-brand-deep uppercase">
            Kostnadsfritt
          </p>
          <h2 className="mt-4 font-display text-display-md font-semibold [font-stretch:110%]">
            Begär kostnadsfri offert
          </h2>
          <p className="mt-4 mb-10 max-w-lg text-[1.0625rem] leading-relaxed text-ink-muted">
            Fyll i formuläret så återkommer vi. Ju mer du berättar om projektet,
            desto enklare blir det för oss att ge ett bra svar.
          </p>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <li className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-graphite/15 py-7">
      <span aria-hidden="true" className="pt-1 text-brand-deep">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-ink-muted uppercase">
          {label}
        </p>
        <div className="mt-2">{children}</div>
      </div>
    </li>
  );
}
