import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  projectCategories,
  projectImages,
  type ProjectImage,
} from "@/content/projects";
import { cn } from "@/lib/cn";

type Tile = {
  image: ProjectImage;
  className: string;
  sizes: string;
};

const tiles: Tile[] = [
  {
    image: projectImages.fasadPutsVeranda,
    className: "col-span-2 aspect-[4/3] lg:col-span-8",
    sizes: "(min-width: 1024px) 60vw, 100vw",
  },
  {
    image: projectImages.granittrappaArbete,
    className: "aspect-[3/5] lg:col-span-4 lg:row-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 30vw, 50vw",
  },
  {
    image: projectImages.tegelmurRundad,
    className: "aspect-[3/5] lg:col-span-4 lg:aspect-square",
    sizes: "(min-width: 1024px) 30vw, 50vw",
  },
  {
    image: projectImages.tradgardGang,
    className: "aspect-square lg:col-span-4",
    sizes: "(min-width: 1024px) 30vw, 50vw",
  },
  {
    image: projectImages.badrumDusch,
    className: "aspect-square lg:col-span-5 lg:aspect-[16/11]",
    sizes: "(min-width: 1024px) 40vw, 50vw",
  },
  {
    image: projectImages.betongGjutning,
    className: "col-span-2 aspect-[16/10] lg:col-span-7 lg:aspect-auto",
    sizes: "(min-width: 1024px) 55vw, 100vw",
  },
];

export function SelectedWork() {
  return (
    <section
      aria-labelledby="arbeten-rubrik"
      className="dark-surface grain bg-graphite py-24 text-limestone lg:py-36"
    >
      <div className="container-page">
        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow index="03" tone="light">
              Utvalda arbeten
            </Eyebrow>
            <h2
              id="arbeten-rubrik"
              className="mt-8 font-display text-display-lg font-semibold [font-stretch:112%]"
            >
              Hantverk som syns – och håller.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[1.0625rem] leading-relaxed text-ash">
              Ett urval av tidigare utförda arbeten: fasader och puts, trappor
              och murar, gjutningar, badrum och trädgårdar runt om i Stockholm.
            </p>
            <ButtonLink
              href="/projekt/"
              variant="outline-light"
              className="mt-8"
            >
              Se alla projekt
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-20 lg:grid-cols-12 lg:gap-5">
          {tiles.map(({ image, className, sizes }) => (
            <li key={image.id} className={cn("relative", className)}>
              <Link
                href={`/projekt/?kategori=${image.category}`}
                className="group absolute inset-0 block overflow-hidden bg-graphite-soft"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  placeholder="blur"
                  fill
                  sizes={sizes}
                  className="reveal-image object-cover transition-transform duration-1000 ease-out-expo group-hover:[transform:scale(1.04)]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-graphite/85 via-graphite/30 to-transparent p-4 pt-16 transition-[padding] duration-500 ease-out-expo sm:p-5 sm:pt-20 lg:translate-y-2 lg:opacity-0 lg:transition-[opacity,translate] lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                  <span>
                    <span className="block text-[0.6875rem] font-semibold tracking-[0.16em] text-copper-light uppercase">
                      {projectCategories[image.category]}
                    </span>
                    <span className="mt-1 block text-sm font-medium sm:text-base">
                      {image.caption}
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
