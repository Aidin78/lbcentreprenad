import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-light" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-copper-deep text-limestone hover:bg-graphite focus-visible:bg-graphite",
  outline:
    "border border-graphite/80 text-graphite hover:bg-graphite hover:text-limestone",
  "outline-light":
    "border border-limestone/50 text-limestone hover:border-limestone hover:bg-limestone hover:text-graphite",
  light: "bg-limestone text-graphite hover:bg-copper-light",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode | false;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  className,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(
    "group/button inline-flex min-h-13 items-center justify-between gap-6 px-6 py-3.5 text-[0.9375rem] font-semibold tracking-[-0.005em] transition-colors duration-300",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {icon !== false && (
        <span
          aria-hidden="true"
          className="relative inline-flex size-5 shrink-0 overflow-hidden"
        >
          {icon ?? (
            <>
              <ArrowRight
                className="size-5 transition-transform duration-500 ease-out-expo group-hover/button:translate-x-full"
                strokeWidth={1.75}
              />
              <ArrowRight
                className="absolute inset-0 size-5 -translate-x-full transition-transform duration-500 ease-out-expo group-hover/button:translate-x-0"
                strokeWidth={1.75}
              />
            </>
          )}
        </span>
      )}
    </>
  );

  if (/^(https?:|tel:|mailto:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
