import Image from "next/image";
import { Phone } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { projectImages, type ProjectImage } from "@/content/projects";
import { quoteHref, site } from "@/content/site";

type QuoteCtaProps = {
  heading?: string;
  body?: string;
  image?: ProjectImage;
  quoteLink?: string;
};

export function QuoteCta({
  heading = "Begär en kostnadsfri offert",
  body = "Berätta kort om ditt projekt – nybyggnation, renovering, fasad, sten, kakel eller trädgård. Vi återkommer med rådgivning och en tydlig offert.",
  image = projectImages.betongtrappa,
  quoteLink = quoteHref,
}: QuoteCtaProps) {
  return (
    <section
      aria-label="Offertförfrågan"
      className="dark-surface grain bg-brand-deep text-limestone"
    >
      <div className="container-page grid lg:grid-cols-12">
        <div className="py-20 lg:col-span-7 lg:py-28 lg:pr-16">
          <p className="text-xs font-semibold tracking-[0.16em] text-limestone/75 uppercase">
            Offert · Rådgivning · Stockholm
          </p>
          <h2 className="mt-8 max-w-[16ch] font-display text-display-lg font-semibold [font-stretch:112%]">
            {heading}
          </h2>
          <p className="mt-8 max-w-xl text-lead text-limestone/90">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={quoteLink} variant="light">
              Begär kostnadsfri offert
            </ButtonLink>
            <ButtonLink
              href={site.phone.href}
              variant="outline-light"
              icon={<Phone className="size-5" strokeWidth={1.75} />}
            >
              Ring {site.phone.display}
            </ButtonLink>
          </div>
        </div>
        <div className="relative -mx-4 aspect-[16/10] sm:-mx-6 lg:col-span-5 lg:mx-0 lg:-mr-10 lg:aspect-auto">
          <Image
            src={image.src}
            alt={image.alt}
            placeholder="blur"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
