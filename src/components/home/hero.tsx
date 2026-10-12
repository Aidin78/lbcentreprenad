import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { DimensionLine } from "@/components/ui/dimension-line";
import { projectImages } from "@/content/projects";
import { quoteHref, site } from "@/content/site";

const headline = ["Från grund", "till fasad."];

const assurances = [
  "Lång erfarenhet",
  "Bred kompetens",
  "Trygghet",
  "Kostnadsfri offert",
];

export function Hero() {
  const main = projectImages.fasadVillaFardig;
  const inset = projectImages.granittrappaArbete;

  return (
    <section className="container-page grid gap-x-10 pt-8 pb-20 lg:grid-cols-12 lg:pt-14 lg:pb-28">
      <div className="lg:col-span-7 lg:row-start-1">
        <p className="flex animate-fade items-center gap-3 text-xs font-semibold tracking-[0.16em] text-ink-muted uppercase">
          <span className="size-2 bg-brand" aria-hidden="true" />
          {site.address.city} · {site.areaServed}
        </p>
        <h1 className="mt-6 font-display font-semibold [font-stretch:112%] lg:mt-10">
          <span className="block animate-fade text-lead font-medium tracking-[-0.01em] text-ink-muted [animation-delay:120ms] [font-stretch:100%]">
            Byggföretag i Stockholm
          </span>
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <span
                className="block animate-rise text-display-xl"
                style={{ animationDelay: `${200 + i * 110}ms` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
      </div>

      <div className="relative mt-10 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mt-0">
        <figure className="relative">
          <div className="relative aspect-[4/5] animate-unveil overflow-hidden bg-concrete [animation-delay:150ms] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={main.src}
              alt={main.alt}
              placeholder="blur"
              preload
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-ink-muted">
            <span>
              <span className="font-semibold text-graphite">Fig. 01</span> —{" "}
              {main.caption}
            </span>
            <span className="hidden sm:inline">
              Fotografi från LBC:s arbeten
            </span>
          </figcaption>
        </figure>

        <div className="absolute bottom-24 -left-16 hidden w-40 animate-fade border-[6px] border-limestone bg-concrete [animation-delay:700ms] xl:block 2xl:-left-24 2xl:w-48">
          <div className="relative aspect-[9/16]">
            <Image
              src={inset.src}
              alt={inset.alt}
              placeholder="blur"
              fill
              sizes="12rem"
              className="object-cover"
            />
          </div>
        </div>

        <DimensionLine
          orientation="vertical"
          label="Grund · Stomme · Fasad"
          className="absolute top-0 -right-7 bottom-10 hidden text-ink-muted lg:flex 2xl:-right-9"
        />
      </div>

      <div className="mt-10 animate-fade [animation-delay:500ms] lg:col-span-6 lg:row-start-2 lg:mt-12 lg:self-end">
        <p className="max-w-xl text-lead text-graphite/85">
          Vi utför nybyggnation, renovering, fasad- och putsarbeten, måleri och
          kakel, sten- och betongarbeten samt trädgårdsanläggning – för
          privatpersoner, bostadsrättsföreningar och fastighetsägare.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={quoteHref}>Begär kostnadsfri offert</ButtonLink>
          <ButtonLink href="/tjanster/" variant="outline">
            Utforska våra tjänster
          </ButtonLink>
        </div>
        <ul className="mt-12 grid grid-cols-2 border-t border-graphite/15 sm:grid-cols-4">
          {assurances.map((item, i) => (
            <li
              key={item}
              className="flex flex-col gap-1 border-b border-graphite/15 py-4 pr-4 text-sm font-medium sm:border-b-0"
            >
              <span className="text-[0.6875rem] text-brand-deep tabular-nums">
                0{i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
