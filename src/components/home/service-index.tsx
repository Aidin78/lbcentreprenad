"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { services, serviceHref } from "@/content/services";
import { cn } from "@/lib/cn";

export function ServiceIndex() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="grid gap-x-10 lg:grid-cols-12">
      <ol className="border-t border-graphite/15 lg:col-span-7">
        {services.map((service, i) => {
          const isActive = i === active;
          return (
            <li key={service.key} className="border-b border-graphite/15">
              <Link
                href={serviceHref(service)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 py-7 sm:grid-cols-[4rem_1fr_auto] lg:py-9"
              >
                <span
                  className={cn(
                    "pt-2 text-xs font-semibold tracking-[0.16em] tabular-nums transition-colors duration-300",
                    isActive ? "text-copper-deep" : "text-ink-muted",
                  )}
                >
                  {service.index}
                </span>
                <span>
                  <span
                    className={cn(
                      "block font-display text-display-sm font-semibold [font-stretch:110%] transition-transform duration-500 ease-out-expo lg:text-[2.375rem]",
                      isActive && "lg:translate-x-2",
                    )}
                  >
                    {service.name}
                  </span>
                  <span
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo",
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0",
                    )}
                  >
                    <span className="overflow-hidden">
                      <span className="block max-w-lg pt-3 text-[0.9875rem] leading-relaxed text-ink-muted lg:translate-x-2">
                        {service.summary}
                      </span>
                    </span>
                  </span>
                  <span className="relative mt-5 block aspect-[16/10] overflow-hidden bg-concrete lg:hidden">
                    <Image
                      src={service.image.src}
                      alt=""
                      placeholder="blur"
                      fill
                      sizes="(min-width: 640px) 80vw, 90vw"
                      className="object-cover"
                    />
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1.5 inline-flex size-10 items-center justify-center border transition-colors duration-300",
                    isActive
                      ? "border-copper-deep bg-copper-deep text-limestone"
                      : "border-graphite/25 text-graphite",
                  )}
                >
                  <ArrowUpRight
                    className="size-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45"
                    strokeWidth={1.75}
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-concrete">
            {services.map((service, i) => (
              <Image
                key={service.key}
                src={service.image.src}
                alt={i === active ? service.image.alt : ""}
                aria-hidden={i !== active}
                placeholder="blur"
                fill
                sizes="(min-width: 1024px) 38vw, 1px"
                className={cn(
                  "object-cover transition-[opacity,scale] duration-700 ease-out-expo",
                  i === active
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0",
                )}
              />
            ))}
          </div>
          <div className="mt-4 flex items-start justify-between gap-6 text-sm">
            <p className="font-semibold">
              <span className="text-copper-deep tabular-nums">
                {current.index}
              </span>{" "}
              {current.name}
            </p>
            <p className="max-w-[18rem] text-right text-ink-muted">
              {current.scope.slice(0, 3).join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
