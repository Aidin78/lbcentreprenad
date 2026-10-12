import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { services, serviceHref } from "@/content/services";

export default function NotFound() {
  return (
    <section className="container-page grid gap-x-10 gap-y-12 py-24 lg:grid-cols-12 lg:py-36">
      <div className="lg:col-span-7">
        <p className="text-xs font-semibold tracking-[0.16em] text-brand-deep uppercase">
          Fel 404
        </p>
        <h1 className="mt-6 font-display text-display-lg font-semibold [font-stretch:112%]">
          Sidan kunde inte hittas.
        </h1>
        <p className="mt-6 max-w-lg text-lead text-ink-muted">
          Sidan kan ha flyttats eller tagits bort. Gå tillbaka till startsidan
          eller välj en av våra tjänster.
        </p>
        <ButtonLink href="/" className="mt-10">
          Till startsidan
        </ButtonLink>
      </div>
      <ul className="border-t border-graphite/15 lg:col-span-4 lg:col-start-9 lg:self-end">
        {services.map((service) => (
          <li key={service.key} className="border-b border-graphite/15">
            <Link
              href={serviceHref(service)}
              className="flex gap-4 py-4 font-medium hover:text-brand-deep"
            >
              <span className="text-xs text-brand-deep tabular-nums">
                {service.index}
              </span>
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
