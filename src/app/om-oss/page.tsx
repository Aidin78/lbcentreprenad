import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { QuoteCta } from "@/components/shared/quote-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { projectImages } from "@/content/projects";
import { site } from "@/content/site";
import { companyValues } from "@/content/values";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Om oss – ett byggföretag i Stockholm med fokus på service och kvalitet",
  description:
    "LBC Entreprenad AB är ett byggföretag med bas i Jordbro som erbjuder trygga helhetslösningar i Stockholm. Lär känna våra värderingar: öppenhet, engagemang och trygghet.",
  path: "/om-oss/",
});

const approach = [
  {
    title: "Kompetens och pålitlighet",
    text: "Ett bra byggföretag utmärker sig genom professionell kompetens, pålitlighet och effektivitet. Kvaliteten i arbetet och förmågan att hålla tidplaner är avgörande.",
  },
  {
    title: "Tydlighet i varje steg",
    text: "Kundnöjdhet och tydlig kommunikation skapar förtroende. En transparent och tydlig prissättning gör att samarbetet blir smidigt och utan missförstånd.",
  },
  {
    title: "Erfarenhet och moderna metoder",
    text: "Vi har stor erfarenhet och har utfört det mesta inom området. Vi håller oss uppdaterade om moderna byggtekniker och miljövänliga metoder.",
  },
  {
    title: "Bred kompetens under ett tak",
    text: "Allt från nybyggnation till renovering – parkett, kakel, måleri, puts och fasader – och utemiljöer från blomsterarrangemang till hela trädgårdar.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-page grid gap-x-10 gap-y-14 pt-8 pb-20 lg:grid-cols-12 lg:pt-12 lg:pb-32">
        <div className="lg:col-span-6">
          <Breadcrumbs items={[{ name: "Om oss", path: "/om-oss/" }]} />
          <Eyebrow className="mt-12 lg:mt-20">Om LBC Entreprenad</Eyebrow>
          <h1 className="mt-6 animate-fade font-display text-display-xl font-semibold [font-stretch:112%]">
            Vi älskar service &amp; kvalitet.
          </h1>
          <div className="mt-10 max-w-xl animate-fade space-y-5 text-lead text-graphite/85 [animation-delay:150ms]">
            <p>
              Med våra tjänster erbjuder vi trygga helhetslösningar – och det är
              enkelt att anlita oss för alla typer av uppdrag.
            </p>
            <p>
              Vi på LBC Entreprenad strävar alltid efter att överträffa våra
              kunders förväntningar. Varmt välkommen att kontakta oss.
            </p>
          </div>
        </div>

        <div className="grid aspect-[6/5] grid-cols-6 grid-rows-2 gap-3 sm:gap-4 lg:col-span-6 lg:self-start">
          <div className="relative col-span-4 row-span-2 animate-unveil overflow-hidden bg-concrete">
            <Image
              src={projectImages.villaVeranda.src}
              alt={projectImages.villaVeranda.alt}
              placeholder="blur"
              preload
              fill
              sizes="(min-width: 1024px) 32vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-2 animate-unveil overflow-hidden bg-concrete [animation-delay:150ms]">
            <Image
              src={projectImages.granittrappa.src}
              alt={projectImages.granittrappa.alt}
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 16vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-2 animate-unveil overflow-hidden bg-concrete [animation-delay:300ms]">
            <Image
              src={projectImages.badrumKakelsattning.src}
              alt={projectImages.badrumKakelsattning.alt}
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 16vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="arbetssatt-rubrik"
        className="container-page border-t border-graphite/15 py-24 lg:py-32"
      >
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="01">Vårt arbetssätt</Eyebrow>
            <h2
              id="arbetssatt-rubrik"
              className="mt-8 font-display text-display-md font-semibold [font-stretch:110%]"
            >
              Detta är vad vi står för.
            </h2>
          </div>
          <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {approach.map((item, i) => (
              <li
                key={item.title}
                className="reveal border-t border-graphite/25 pt-6"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-copper-deep tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1.0125rem] leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="varderingar-rubrik"
        className="dark-surface grain bg-graphite py-24 text-limestone lg:py-32"
      >
        <div className="container-page">
          <Eyebrow index="02" tone="light">
            Våra värderingar
          </Eyebrow>
          <h2 id="varderingar-rubrik" className="sr-only">
            Våra värderingar
          </h2>
          <ul className="mt-14 grid gap-px bg-graphite-line lg:grid-cols-3">
            {companyValues.map((value) => (
              <li
                key={value.name}
                className="reveal bg-graphite py-10 lg:px-10 lg:py-6 lg:first:pl-0"
              >
                <p className="font-display text-display-md font-semibold [font-stretch:112%]">
                  {value.name}
                </p>
                <p className="mt-6 max-w-sm text-[1.0625rem] leading-relaxed text-ash">
                  {value.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="instagram-rubrik"
        className="container-page grid items-center gap-x-10 gap-y-12 py-24 lg:grid-cols-12 lg:py-32"
      >
        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:col-span-7">
          {[
            projectImages.tegelmurRundadSten,
            projectImages.tradgardSkifferaltan,
            projectImages.fasadPutsEntre,
          ].map((image, i) => (
            <div
              key={image.id}
              className={`relative aspect-[3/4] overflow-hidden bg-concrete ${i === 1 ? "translate-y-8" : ""}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                placeholder="blur"
                fill
                sizes="(min-width: 1024px) 18vw, 33vw"
                className="reveal-image object-cover"
              />
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <Eyebrow index="03">Instagram</Eyebrow>
          <h2
            id="instagram-rubrik"
            className="mt-8 font-display text-display-md font-semibold [font-stretch:110%]"
          >
            Se vad vi har gjort.
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-muted">
            Vi delar bilder från våra arbeten på Instagram – från grundarbeten
            och murar till färdiga fasader och trädgårdar.
          </p>
          <ButtonLink
            href={site.instagram.url}
            variant="outline"
            className="mt-8"
            icon={<InstagramIcon className="size-5" />}
          >
            Följ {site.instagram.handle}
          </ButtonLink>
        </div>
      </section>

      <QuoteCta
        heading="Välkommen att kontakta oss"
        body="Inget jobb är för stort eller för litet. Ring, maila eller skicka en förfrågan så berättar vi mer."
        image={projectImages.tegelmur}
      />
    </>
  );
}
