import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { InstagramIcon } from "@/components/ui/instagram-icon";
import { services, serviceHref } from "@/content/services";
import { mainNav, site } from "@/content/site";

async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  return (
    <footer className="dark-surface grain overflow-hidden bg-graphite text-limestone">
      <div className="container-page pt-20 lg:pt-28">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-ash uppercase">
              {site.legalName}
            </p>
            <p className="mt-6 max-w-[14ch] font-display text-display-lg font-semibold [font-stretch:112%]">
              Har du ett projekt på gång?
            </p>
          </div>
          <div className="flex flex-col justify-end gap-5 lg:col-span-5">
            <a
              href={site.phone.href}
              className="group inline-flex items-center gap-3 font-display text-display-sm font-semibold tabular-nums [font-stretch:112%]"
            >
              <span className="link-underline">{site.phone.display}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-6 text-copper-light transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="link-underline w-fit text-lead text-limestone/90"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-graphite-line pt-12 md:grid-cols-4">
          <FooterColumn title="Tjänster">
            {services.map((service) => (
              <li key={service.key}>
                <Link href={serviceHref(service)} className="link-underline">
                  {service.name}
                </Link>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn title="Sidor">
            <li>
              <Link href="/" className="link-underline">
                Start
              </Link>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn title="Besöksadress">
            <li>
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </address>
            </li>
            <li>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-copper-light"
              >
                Visa på karta
              </a>
            </li>
          </FooterColumn>
          <FooterColumn title="Följ oss">
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5"
              >
                <InstagramIcon className="size-5" />
                <span className="link-underline">{site.instagram.handle}</span>
              </a>
            </li>
            <li className="text-ash">
              Se fler bilder från våra arbeten på Instagram.
            </li>
          </FooterColumn>
        </div>
      </div>

      <div className="container-page mt-20 @container" aria-hidden="true">
        <p className="pb-[0.12em] font-display text-[11.3cqw] leading-none font-bold tracking-[-0.045em] whitespace-nowrap text-graphite-line [font-stretch:112%]">
          LBC Entreprenad
        </p>
      </div>

      <div className="container-page flex flex-col gap-3 border-t border-graphite-line py-8 text-sm text-ash sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CopyrightYear /> {site.legalName}
        </p>
        <p className="tracking-[0.12em] uppercase">{site.values.join(" · ")}</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-[0.16em] text-ash uppercase">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-[0.9375rem]">{children}</ul>
    </div>
  );
}
