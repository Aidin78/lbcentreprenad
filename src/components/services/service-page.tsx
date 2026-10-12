import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { QuoteCta } from "@/components/shared/quote-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  services,
  serviceHref,
  type Service,
  type ServiceDetail,
} from "@/content/services";
import type { ProjectImage } from "@/content/projects";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { serviceJsonLd } from "@/lib/seo";

export function ServicePage({ service }: { service: Service }) {
  const detail = service.detail as ServiceDetail;
  const quoteLink = `/kontakt/?tjanst=${service.key}#offert`;
  const related = services.filter((s) => s.key !== service.key);
  const gallery = detail.gallery.filter((img) => img.id !== service.image.id);

  return (
    <>
      <section className="container-page grid gap-x-10 gap-y-12 pt-8 pb-20 lg:grid-cols-12 lg:pt-12 lg:pb-28">
        <div className="flex flex-col lg:col-span-7">
          <Breadcrumbs
            items={[
              { name: "Tjänster", path: "/tjanster/" },
              { name: service.name, path: detail.path },
            ]}
          />
          <Eyebrow index={service.index} className="mt-12 lg:mt-20">
            {service.name}
          </Eyebrow>
          <h1 className="mt-6 animate-fade font-display text-display-lg font-semibold [font-stretch:112%]">
            {detail.title}
          </h1>
          <p className="mt-8 max-w-2xl animate-fade text-lead text-graphite/85 [animation-delay:150ms]">
            {detail.lead}
          </p>
          <div className="mt-10 flex animate-fade flex-col gap-3 [animation-delay:250ms] sm:flex-row">
            <ButtonLink href={quoteLink}>Begär kostnadsfri offert</ButtonLink>
            <ButtonLink href={site.phone.href} variant="outline" icon={false}>
              Ring {site.phone.display}
            </ButtonLink>
          </div>
        </div>
        <figure className="lg:col-span-5">
          <div className="relative aspect-[4/5] animate-unveil overflow-hidden bg-concrete sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              placeholder="blur"
              preload
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs text-ink-muted">
            {service.image.caption}
          </figcaption>
        </figure>
      </section>

      <section className="bg-graphite text-limestone dark-surface grain">
        <div className="container-page grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <span
            aria-hidden="true"
            className="hidden h-px bg-brand-light lg:col-span-2 lg:mt-6 lg:block"
          />
          <p className="reveal font-display text-display-md font-medium [font-stretch:106%] lg:col-span-9 lg:col-start-4">
            {detail.statement}
          </p>
        </div>
      </section>

      <div className="container-page grid gap-x-10 py-24 lg:grid-cols-12 lg:py-32">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav aria-label="Innehåll" className="sticky top-28">
            <p className="text-xs font-semibold tracking-[0.16em] text-ink-muted uppercase">
              Innehåll
            </p>
            <ol className="mt-5 space-y-3 border-l border-graphite/15 text-[0.9375rem]">
              {detail.sections.map((section, i) => (
                <li key={section.heading}>
                  <a
                    href={`#avsnitt-${i + 1}`}
                    className="-ml-px block border-l border-transparent pl-4 text-ink-muted transition-colors hover:border-brand-deep hover:text-graphite"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="lg:col-span-8 lg:col-start-5">
          {detail.sections.map((section, i) => (
            <section
              key={section.heading}
              id={`avsnitt-${i + 1}`}
              aria-labelledby={`avsnitt-${i + 1}-rubrik`}
              className={cn(
                "reveal border-t border-graphite/15 py-14 first:border-t-0 first:pt-0 lg:py-16",
              )}
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-deep tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2
                id={`avsnitt-${i + 1}-rubrik`}
                className="mt-4 font-display text-display-sm font-semibold [font-stretch:108%]"
              >
                {section.heading}
              </h2>
              <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-graphite/85">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items && (
                <ul className="mt-8 grid border-t border-graphite/15 sm:grid-cols-2 sm:gap-x-10">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-graphite/15 py-4 text-[0.9875rem] font-medium"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-brand-deep"
                        strokeWidth={2.25}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.note && (
                <p className="mt-8 border-l-2 border-brand pl-5 text-[1.0625rem] leading-relaxed text-ink-strong">
                  {section.note}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>

      <ServiceGallery images={gallery.slice(0, 3)} />

      <section
        aria-labelledby="skal-rubrik"
        className="container-page py-24 lg:py-32"
      >
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Därför LBC</Eyebrow>
            <h2
              id="skal-rubrik"
              className="mt-6 font-display text-display-md font-semibold [font-stretch:110%]"
            >
              Därför väljer kunder LBC Entreprenad
            </h2>
          </div>
          <ol className="grid gap-px bg-graphite/15 sm:grid-cols-2 lg:col-span-8">
            {detail.reasons.map((reason, i) => (
              <li
                key={reason}
                className="reveal flex min-h-36 flex-col justify-between gap-8 bg-limestone py-6 sm:p-7"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-brand-deep tabular-nums">
                  0{i + 1}
                </span>
                <span className="text-lg font-semibold tracking-[-0.01em]">
                  {reason}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="relaterat-rubrik"
        className="border-t border-graphite/15 bg-limestone-deep py-24 lg:py-28"
      >
        <div className="container-page">
          <h2
            id="relaterat-rubrik"
            className="font-display text-display-sm font-semibold [font-stretch:110%]"
          >
            Relaterade tjänster
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.key}>
                <Link href={serviceHref(item)} className="group block">
                  <span className="relative block aspect-[4/3] overflow-hidden bg-concrete">
                    <Image
                      src={item.image.src}
                      alt=""
                      placeholder="blur"
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.04]"
                    />
                  </span>
                  <span className="mt-4 flex items-start justify-between gap-4">
                    <span>
                      <span className="block text-xs font-semibold text-brand-deep tabular-nums">
                        {item.index}
                      </span>
                      <span className="mt-1 block text-lg font-semibold">
                        {item.name}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-5 size-5 shrink-0 transition-transform duration-500 ease-out-expo group-hover:rotate-45"
                      strokeWidth={1.75}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteCta
        heading={detail.cta.heading}
        body={detail.cta.body}
        image={gallery[3] ?? service.image}
        quoteLink={quoteLink}
      />

      <JsonLd data={serviceJsonLd(service)} />
    </>
  );
}

function ServiceGallery({ images }: { images: ProjectImage[] }) {
  const layout = [
    "col-span-2 aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto",
    "aspect-square lg:col-span-5 lg:aspect-[16/10]",
    "aspect-square lg:col-span-5 lg:aspect-[16/10]",
  ];

  return (
    <section
      aria-labelledby="galleri-rubrik"
      className="dark-surface grain bg-graphite py-20 text-limestone lg:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2
            id="galleri-rubrik"
            className="font-display text-display-sm font-semibold [font-stretch:110%]"
          >
            Från våra arbeten
          </h2>
          <Link
            href="/projekt/"
            className="group inline-flex items-center gap-2 text-[0.9375rem] font-semibold"
          >
            <span className="link-underline">Se alla projekt</span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 text-brand-light transition-transform duration-500 ease-out-expo group-hover:rotate-45"
            />
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-5">
          {images.map((image, i) => (
            <li
              key={image.id}
              className={cn(
                "relative overflow-hidden bg-graphite-soft",
                layout[i],
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                placeholder="blur"
                fill
                sizes={
                  i === 0
                    ? "(min-width: 1024px) 60vw, 100vw"
                    : "(min-width: 1024px) 40vw, 50vw"
                }
                className="reveal-image object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
