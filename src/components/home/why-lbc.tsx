import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { companyValues } from "@/content/values";
import { projectImages } from "@/content/projects";

const commitments = [
  {
    title: "Lång erfarenhet",
    text: "Vi har utfört det mesta inom området – från grundplattor till badrum.",
  },
  {
    title: "Bred kompetens",
    text: "Betong, sten, puts, måleri, kakel, parkett och trädgård i samma team.",
  },
  {
    title: "Tydlig offert",
    text: "Du får ett tydligt underlag med tidsplan innan arbetet startar.",
  },
  {
    title: "Kostnadsfritt",
    text: "Att begära offert kostar ingenting.",
  },
];

export function WhyLbc() {
  const image = projectImages.fasadKvall;

  return (
    <section
      aria-labelledby="varfor-rubrik"
      className="bg-concrete py-24 lg:py-36"
    >
      <div className="container-page grid gap-x-10 gap-y-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow index="04">Därför LBC</Eyebrow>
          <h2
            id="varfor-rubrik"
            className="mt-8 font-display text-display-lg font-semibold [font-stretch:112%]"
          >
            Tre ord vi arbetar efter.
          </h2>
          <div className="relative mt-12 hidden aspect-[4/5] overflow-hidden bg-concrete-deep lg:block">
            <Image
              src={image.src}
              alt={image.alt}
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 38vw, 1px"
              className="reveal-image object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <dl className="border-t border-graphite/20">
            {companyValues.map((value, i) => (
              <div
                key={value.name}
                className="reveal grid gap-4 border-b border-graphite/20 py-10 sm:grid-cols-[1fr_1.1fr] sm:gap-10 lg:py-14"
              >
                <dt className="flex items-baseline gap-4 font-display text-display-md font-semibold [font-stretch:112%]">
                  <span className="text-xs font-semibold tracking-[0.16em] text-brand-deep tabular-nums [font-stretch:100%]">
                    0{i + 1}
                  </span>
                  {value.name}
                </dt>
                <dd className="text-[1.0625rem] leading-relaxed text-ink-strong sm:pt-2">
                  {value.text}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-14 grid gap-px bg-graphite/15 sm:grid-cols-2">
            {commitments.map((item) => (
              <li key={item.title} className="bg-concrete py-6 sm:p-6">
                <p className="font-semibold">{item.title}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-strong">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
