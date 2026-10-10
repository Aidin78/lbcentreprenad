import type { Metadata } from "next";

import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { Process } from "@/components/home/process";
import { SelectedWork } from "@/components/home/selected-work";
import { ServiceIndex } from "@/components/home/service-index";
import { WhyLbc } from "@/components/home/why-lbc";
import { QuoteCta } from "@/components/shared/quote-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Byggföretag i Stockholm – nybyggnation & renovering | LBC Entreprenad",
  description:
    "LBC Entreprenad är ett byggföretag i Stockholm för nybyggnation, renovering, fasad- och putsarbeten, måleri, kakel, sten- och betongarbeten samt landskapsdesign. Begär kostnadsfri offert.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <section
        aria-labelledby="tjanster-rubrik"
        className="container-page pb-24 lg:pb-36"
      >
        <div className="grid gap-x-10 gap-y-8 pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
          <div className="lg:col-span-7">
            <Eyebrow index="02">Tjänster</Eyebrow>
            <h2
              id="tjanster-rubrik"
              className="mt-8 font-display text-display-lg font-semibold [font-stretch:112%]"
            >
              Fem hantverk, en entreprenör.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.0625rem] leading-relaxed text-ink-muted">
              Allt från nybyggnation och renovering till fasader, sten, ytskikt
              och trädgård – samordnat av samma team.
            </p>
            <ButtonLink href="/tjanster/" variant="outline" className="mt-8">
              Alla tjänster
            </ButtonLink>
          </div>
        </div>
        <ServiceIndex />
      </section>
      <SelectedWork />
      <WhyLbc />
      <Process />
      <QuoteCta />
    </>
  );
}
