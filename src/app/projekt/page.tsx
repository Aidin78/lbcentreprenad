import type { Metadata } from "next";
import { Suspense } from "react";

import {
  ProjectGallery,
  ProjectGalleryWithParams,
} from "@/components/projects/project-gallery";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { QuoteCta } from "@/components/shared/quote-cta";
import { ButtonLink } from "@/components/ui/button-link";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { projectImages } from "@/content/projects";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projekt – bilder från våra bygg-, fasad- och trädgårdsarbeten",
  description:
    "Ett urval av tidigare utförda arbeten av LBC Entreprenad i Stockholm: fasadputs, granittrappor, tegelmurar, gjutningar, badrum och trädgårdsanläggning.",
  path: "/projekt/",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="container-page pt-8 pb-24 lg:pt-12 lg:pb-32">
        <Breadcrumbs items={[{ name: "Projekt", path: "/projekt/" }]} />
        <div className="mt-12 grid gap-x-10 gap-y-8 lg:mt-20 lg:grid-cols-12 lg:items-end">
          <h1 className="animate-fade font-display font-semibold [font-stretch:112%] lg:col-span-7">
            <span className="block text-lead font-medium tracking-[-0.01em] text-ink-muted [font-stretch:100%]">
              Projekt
            </span>
            <span className="mt-3 block text-display-lg">
              Ett urval av tidigare utförda arbeten.
            </span>
          </h1>
          <div className="animate-fade [animation-delay:150ms] lg:col-span-4 lg:col-start-9">
            <p className="text-[1.0625rem] leading-relaxed text-ink-muted">
              Bilder från fasadrenoveringar, sten- och betongarbeten, badrum och
              trädgårdar. Klicka på en bild för att se den i större format.
            </p>
            <ButtonLink
              href={site.instagram.url}
              variant="outline"
              className="mt-6"
              icon={<InstagramIcon className="size-5" />}
            >
              Fler bilder på Instagram
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          <Suspense fallback={<ProjectGallery />}>
            <ProjectGalleryWithParams />
          </Suspense>
        </div>
      </section>

      <QuoteCta
        heading="Vill du ha ett liknande resultat?"
        image={projectImages.tradgardOlivtrad}
      />
    </>
  );
}
