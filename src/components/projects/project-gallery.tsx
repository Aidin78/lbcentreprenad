"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { Lightbox } from "@/components/projects/lightbox";
import {
  projectCategories,
  projectGallery,
  type ProjectCategory,
} from "@/content/projects";
import { cn } from "@/lib/cn";

type Filter = ProjectCategory | "alla";

const filters: { value: Filter; label: string }[] = [
  { value: "alla", label: "Alla" },
  ...(Object.entries(projectCategories) as [ProjectCategory, string][]).map(
    ([value, label]) => ({ value, label }),
  ),
];

function isFilter(value: string | null): value is Filter {
  return value !== null && filters.some((f) => f.value === value);
}

export function ProjectGalleryWithParams() {
  const param = useSearchParams().get("kategori");
  return <ProjectGallery initialFilter={isFilter(param) ? param : "alla"} />;
}

export function ProjectGallery({
  initialFilter = "alla",
}: {
  initialFilter?: Filter;
}) {
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items =
    filter === "alla"
      ? projectGallery
      : projectGallery.filter((item) => item.category === filter);

  const selectFilter = (value: Filter) => {
    setFilter(value);
    const url = new URL(window.location.href);
    if (value === "alla") url.searchParams.delete("kategori");
    else url.searchParams.set("kategori", value);
    window.history.replaceState(null, "", url);
  };

  const countFor = (value: Filter) =>
    value === "alla"
      ? projectGallery.length
      : projectGallery.filter((item) => item.category === value).length;

  return (
    <>
      <div
        role="group"
        aria-label="Filtrera projekt efter kategori"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((f) => {
          const active = f.value === filter;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={active}
              onClick={() => selectFilter(f.value)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2.5 border px-4 py-2.5 text-sm font-semibold transition-colors duration-300",
                active
                  ? "border-graphite bg-graphite text-limestone"
                  : "border-graphite/25 hover:border-graphite",
              )}
            >
              {f.label}
              <span
                className={cn(
                  "text-xs tabular-nums",
                  active ? "text-brand-light" : "text-ink-muted",
                )}
              >
                {countFor(f.value)}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Visar {items.length} bilder
      </p>

      <ul className="mt-10 columns-2 gap-3 sm:gap-4 lg:columns-3 lg:gap-5">
        {items.map((item, i) => (
          <li
            key={`${filter}-${item.id}`}
            className="mb-3 animate-fade break-inside-avoid sm:mb-4 lg:mb-5"
            style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden bg-concrete text-left"
            >
              <Image
                src={item.src}
                alt={item.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="h-auto w-full transition-transform duration-1000 ease-out-expo group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-graphite/80 to-transparent p-3 pt-12 text-limestone opacity-100 transition-opacity duration-500 sm:p-4 sm:pt-16 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                <span>
                  <span className="block text-[0.625rem] font-semibold tracking-[0.16em] text-brand-light uppercase sm:text-[0.6875rem]">
                    {projectCategories[item.category]}
                  </span>
                  <span className="mt-0.5 block text-xs font-medium sm:text-sm">
                    {item.caption}
                  </span>
                </span>
              </span>
              <span className="sr-only">– visa större bild</span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={items} index={openIndex} onIndexChange={setOpenIndex} />
    </>
  );
}
