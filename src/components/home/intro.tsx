import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow } from "@/components/ui/eyebrow";

export function Intro() {
  return (
    <section
      aria-labelledby="intro-rubrik"
      className="container-page border-t border-graphite/15 py-24 lg:py-36"
    >
      <div className="grid gap-x-10 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Eyebrow index="01">Välkommen</Eyebrow>
        </div>
        <div className="lg:col-span-9">
          <h2
            id="intro-rubrik"
            className="reveal font-display text-display-md font-medium [font-stretch:106%]"
          >
            Kompetens, pålitlighet och effektivitet utmärker ett bra
            byggföretag.{" "}
            <span className="text-ink-muted">
              Det är vad vi strävar efter i varje uppdrag – stort som litet.
            </span>
          </h2>

          <div className="reveal mt-14 grid gap-8 text-[1.0625rem] leading-relaxed text-graphite/85 md:grid-cols-2 md:gap-10">
            <p>
              Kvaliteten i utförandet och förmågan att hålla tidplaner är
              avgörande. Lika viktigt är tydlig kommunikation och en transparent
              prissättning, så att samarbetet blir smidigt och utan
              missförstånd.
            </p>
            <div>
              <p>
                LBC Entreprenad har sin bas i Jordbro och arbetar i hela
                Stockholm med kranskommuner – från nybyggnation till renovering,
                fasader, sten och trädgård.
              </p>
              <Link
                href="/om-oss/"
                className="group mt-6 inline-flex items-center gap-2 font-semibold text-graphite"
              >
                <span className="link-underline">Mer om oss</span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 text-brand-deep transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
