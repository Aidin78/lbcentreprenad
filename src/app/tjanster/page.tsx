import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { QuoteCta } from "@/components/shared/quote-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { projectImages } from "@/content/projects";
import { services } from "@/content/services";
import { cn } from "@/lib/cn";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tjänster – bygg, renovering, fasad, sten & trädgård i Stockholm",
  description:
    "Nybyggnation, renovering, byggservice, måleri, kakel, fasad- och putsarbeten, sten- och betongentreprenad samt landskapsdesign i Stockholm med kranskommuner. Se vad LBC Entreprenad kan hjälpa dig med.",
  path: "/tjanster/",
});

const checklist = [
  "Stenarbeten",
  "Betongentreprenad",
  "Måleri",
  "Byggservice",
  "Kakel",
  "Puts",
  "Fasadarbeten",
  "Parkett",
  "Blomsterarrangemang",
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-page grid gap-x-10 gap-y-14 pt-8 pb-20 lg:grid-cols-12 lg:pt-12 lg:pb-28">
        <div className="lg:col-span-8">
          <Breadcrumbs items={[{ name: "Tjänster", path: "/tjanster/" }]} />
          <h1 className="mt-12 font-display font-semibold [font-stretch:112%] lg:mt-20">
            <span className="block animate-fade text-lead font-medium tracking-[-0.01em] text-ink-muted [font-stretch:100%]">
              Byggtjänster i Stockholm
            </span>
            <span className="mt-3 block animate-fade text-display-lg [animation-delay:120ms]">
              Allt från nybyggnation till renovering.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl animate-fade text-lead text-graphite/85 [animation-delay:220ms]">
            Behöver ni ett riktigt bra byggföretag i Stockholm eller dess
            kranskommuner? Vi utför allt från nybyggnation till renovering –
            parkett, kakel, måleri, puts och fasader – och skapar utemiljöer
            från blomsterarrangemang till hela trädgårdar.
          </p>
        </div>

        <nav
          aria-label="Tjänsteområden"
          className="animate-fade [animation-delay:300ms] lg:col-span-4 lg:self-end"
        >
          <ol className="border-t border-graphite/15">
            {services.map((service) => (
              <li key={service.key} className="border-b border-graphite/15">
                <a
                  href={`#${service.key}`}
                  className="group flex items-center gap-4 py-4 text-[0.9875rem] font-medium"
                >
                  <span className="text-xs font-semibold text-copper-deep tabular-nums">
                    {service.index}
                  </span>
                  <span className="flex-1">{service.name}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 rotate-90 text-ink-muted transition-transform duration-500 ease-out-expo group-hover:translate-y-1"
                  />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      {services.map((service, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={service.key}
            id={service.key}
            aria-labelledby={`${service.key}-rubrik`}
            className={cn(
              "scroll-mt-20 py-20 lg:py-28",
              flip ? "bg-limestone-deep" : "bg-limestone",
            )}
          >
            <div className="container-page grid items-center gap-x-10 gap-y-12 lg:grid-cols-12">
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden bg-concrete lg:col-span-6 lg:aspect-[5/6]",
                  flip && "lg:order-2 lg:col-start-7",
                )}
              >
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  placeholder="blur"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="reveal-image object-cover"
                />
              </div>

              <div
                className={cn(
                  "reveal lg:col-span-5",
                  flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8",
                )}
              >
                <p
                  aria-hidden="true"
                  className="font-display text-[5rem] leading-none font-semibold text-copper/80 tabular-nums [font-stretch:112%] lg:text-[7rem]"
                >
                  {service.index}
                </p>
                <h2
                  id={`${service.key}-rubrik`}
                  className="mt-6 font-display text-display-md font-semibold [font-stretch:110%]"
                >
                  {service.name}
                </h2>
                <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-graphite/85">
                  {service.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="mt-8 border-t border-graphite/15">
                  {service.scope.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-graphite/15 py-3.5 text-[0.9875rem] font-medium"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-copper-deep"
                        strokeWidth={2.25}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  {service.detail ? (
                    <ButtonLink href={service.detail.path} variant="outline">
                      Läs mer om {service.name.toLowerCase()}
                    </ButtonLink>
                  ) : (
                    <ButtonLink href={`/kontakt/?tjanst=${service.key}#offert`}>
                      Begär offert på {service.name.toLowerCase()}
                    </ButtonLink>
                  )}
                </div>
              </div>
            </div>
            <JsonLd data={serviceJsonLd(service)} />
          </section>
        );
      })}

      <section
        aria-labelledby="checklista-rubrik"
        className="dark-surface grain bg-graphite py-20 text-limestone lg:py-28"
      >
        <div className="container-page grid gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2
              id="checklista-rubrik"
              className="font-display text-display-sm font-semibold [font-stretch:110%]"
            >
              Service &amp; kvalitet – inget jobb är för stort eller för litet.
            </h2>
            <Link
              href="/projekt/"
              className="group mt-8 inline-flex items-center gap-2 font-semibold"
            >
              <span className="link-underline">
                Se ett urval av tidigare arbeten
              </span>
              <ArrowRight
                aria-hidden="true"
                className="size-4 text-copper-light transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
              />
            </Link>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-display text-display-sm font-medium text-ash [font-stretch:108%] lg:col-span-8">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check
                  aria-hidden="true"
                  className="size-6 text-copper-light"
                  strokeWidth={2}
                />
                <span className="text-limestone">{item}</span>
              </li>
            ))}
            <li className="flex items-center">m.m.</li>
          </ul>
        </div>
      </section>

      <QuoteCta image={projectImages.tradgardSkifferaltan} />
    </>
  );
}
