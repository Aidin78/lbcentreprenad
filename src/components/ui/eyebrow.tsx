import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type EyebrowProps = {
  index?: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

export function Eyebrow({
  index,
  children,
  tone = "dark",
  className,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase",
        tone === "dark" ? "text-ink-muted" : "text-ash",
        className,
      )}
    >
      {index && (
        <span
          className={cn(
            "tabular-nums",
            tone === "dark" ? "text-copper-deep" : "text-copper-light",
          )}
        >
          {index}
        </span>
      )}
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-8",
          tone === "dark" ? "bg-graphite/30" : "bg-limestone/30",
        )}
      />
      <span>{children}</span>
    </p>
  );
}
