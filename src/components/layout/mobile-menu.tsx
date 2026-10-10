"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRef } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "@/components/ui/logo";
import { services, serviceHref } from "@/content/services";
import { mainNav, quoteHref, site } from "@/content/site";
import { isCurrentSection } from "@/lib/paths";

export function MobileMenu({ pathname }: { pathname: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-controls="mobilmeny"
        className="-mr-2 inline-flex size-11 items-center justify-center lg:hidden"
      >
        <Menu aria-hidden="true" className="size-6" strokeWidth={1.75} />
        <span className="sr-only">Öppna menyn</span>
      </button>

      <dialog
        ref={dialogRef}
        id="mobilmeny"
        aria-label="Meny"
        className="dark-surface grain fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none translate-y-0 overflow-y-auto bg-graphite text-limestone opacity-100 transition-[opacity,translate,display,overlay] transition-discrete duration-500 ease-out-expo not-open:pointer-events-none not-open:-translate-y-4 not-open:opacity-0 starting:open:-translate-y-4 starting:open:opacity-0 lg:hidden"
      >
        <div className="container-page flex min-h-full flex-col pb-10">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" onClick={close}>
              <Logo tone="light" />
              <span className="sr-only"> – till startsidan</span>
            </Link>
            <button
              type="button"
              onClick={close}
              className="-mr-2 inline-flex size-11 items-center justify-center"
            >
              <X aria-hidden="true" className="size-6" strokeWidth={1.75} />
              <span className="sr-only">Stäng menyn</span>
            </button>
          </div>

          <nav aria-label="Mobilmeny" className="mt-10">
            <ul className="border-t border-graphite-line">
              {mainNav.map((item, i) => (
                <li key={item.href} className="border-b border-graphite-line">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={
                      isCurrentSection(pathname, item.href) ? "page" : undefined
                    }
                    className="flex items-baseline gap-5 py-5 font-display text-4xl font-semibold tracking-tight [font-stretch:112%] aria-[current=page]:text-copper-light"
                  >
                    <span className="text-xs font-semibold tracking-[0.16em] text-ash tabular-nums">
                      0{i + 1}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 text-[0.9375rem] text-ash min-[420px]:grid-cols-2">
            {services.map((service) => (
              <li key={service.key}>
                <Link
                  href={serviceHref(service)}
                  onClick={close}
                  className="hover:text-limestone"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-12">
            <a
              href={site.phone.href}
              className="block font-display text-3xl font-semibold tabular-nums [font-stretch:112%]"
            >
              {site.phone.display}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-ash hover:text-limestone"
            >
              {site.email}
            </a>
            <ButtonLink
              href={quoteHref}
              onClick={close}
              variant="light"
              className="mt-8 w-full"
            >
              Begär kostnadsfri offert
            </ButtonLink>
          </div>
        </div>
      </dialog>
    </>
  );
}
