"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";

import { projectCategories, type ProjectImage } from "@/content/projects";
import { cn } from "@/lib/cn";

type LightboxProps = {
  items: ProjectImage[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
};

export function Lightbox({ items, index, onIndexChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);
  const item = index === null ? null : items[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  useLayoutEffect(() => () => onIndexChange(null), [onIndexChange]);

  const step = (delta: number) => {
    if (index === null) return;
    onIndexChange((index + delta + items.length) % items.length);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Bildvisning"
      onClose={() => onIndexChange(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
      onTouchStart={(e) => {
        touchStart.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        touchStart.current = null;
      }}
      className="dark-surface fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-graphite text-limestone opacity-100 transition-[opacity,display,overlay] transition-discrete duration-300 not-open:opacity-0 starting:open:opacity-0"
    >
      {item && index !== null && (
        <div className="flex h-full flex-col">
          <div className="container-page flex h-16 shrink-0 items-center justify-between">
            <p className="text-sm text-ash tabular-nums">
              {index + 1} / {items.length}
            </p>
            <button
              type="button"
              onClick={() => onIndexChange(null)}
              className="-mr-2 inline-flex size-11 items-center justify-center"
              autoFocus
            >
              <X aria-hidden="true" className="size-6" strokeWidth={1.75} />
              <span className="sr-only">Stäng</span>
            </button>
          </div>

          <figure className="relative flex min-h-0 flex-1 flex-col px-4 pb-6 sm:px-20">
            <div className="relative min-h-0 flex-1">
              <Image
                key={item.id}
                src={item.src}
                alt={item.alt}
                placeholder="blur"
                fill
                sizes="100vw"
                quality={85}
                className="animate-fade object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center">
              <span className="block text-[0.6875rem] font-semibold tracking-[0.16em] text-brand-light uppercase">
                {projectCategories[item.category]}
              </span>
              <span className="mt-1 block text-[0.9375rem]">
                {item.caption}
              </span>
            </figcaption>

            <StepButton
              direction="prev"
              onClick={() => step(-1)}
              className="absolute top-1/2 left-2 hidden -translate-y-1/2 sm:inline-flex"
            />
            <StepButton
              direction="next"
              onClick={() => step(1)}
              className="absolute top-1/2 right-2 hidden -translate-y-1/2 sm:inline-flex"
            />
          </figure>

          <div className="flex shrink-0 justify-center gap-3 pb-6 sm:hidden">
            <StepButton direction="prev" onClick={() => step(-1)} />
            <StepButton direction="next" onClick={() => step(1)} />
          </div>
        </div>
      )}
    </dialog>
  );
}

function StepButton({
  direction,
  onClick,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex size-12 items-center justify-center border border-limestone/30 transition-colors hover:bg-limestone hover:text-graphite",
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
      <span className="sr-only">
        {direction === "prev" ? "Föregående bild" : "Nästa bild"}
      </span>
    </button>
  );
}
