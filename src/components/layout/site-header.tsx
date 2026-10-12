"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "@/components/ui/logo";
import { mainNav, quoteHref, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { isCurrentSection } from "@/lib/paths";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 8);
      if (y < 320) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY.current = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const isActive = (href: string) => isCurrentSection(pathname, href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-limestone transition-[transform,box-shadow] duration-500 ease-out-expo",
        scrolled && "shadow-[0_1px_0_0_rgb(36_40_37/0.12)]",
        hidden && "-translate-y-full focus-within:translate-y-0",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-[4.75rem]">
        <Link href="/" className="shrink-0">
          <Logo />
          <span className="sr-only"> – till startsidan</span>
        </Link>

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="link-underline py-1 text-[0.9375rem] font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <a
            href={site.phone.href}
            className="group hidden items-center gap-2.5 text-[0.9375rem] font-semibold tabular-nums md:inline-flex"
          >
            <Phone
              aria-hidden="true"
              className="size-4 text-brand-deep"
              strokeWidth={2}
            />
            <span className="link-underline">{site.phone.display}</span>
          </a>
          <a
            href={site.phone.href}
            className="inline-flex size-11 items-center justify-center text-brand-deep md:hidden"
          >
            <Phone aria-hidden="true" className="size-5" strokeWidth={1.75} />
            <span className="sr-only">Ring {site.phone.display}</span>
          </a>
          <div className="hidden sm:block">
            <ButtonLink href={quoteHref} className="min-h-11 px-5 py-2.5">
              Begär offert
            </ButtonLink>
          </div>
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
