import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        tone === "dark" ? "text-graphite" : "text-limestone",
        className,
      )}
    >
      <LogoMark tone={tone} className="size-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.375rem] font-bold tracking-[-0.02em] [font-stretch:118%]">
          LBC
        </span>{" "}
        <span className="mt-1 text-[0.625rem] font-semibold tracking-[0.28em] uppercase opacity-80">
          Entreprenad
        </span>
      </span>
    </span>
  );
}

export function LogoMark({ className, tone = "dark" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <rect width="36" height="36" fill="currentColor" />
      <path
        d="M8 8h4v16h8v4H8V8Z"
        className={tone === "dark" ? "fill-limestone" : "fill-graphite"}
      />
      <path d="M22 8h6v12h-6z" fill="#b66a46" />
    </svg>
  );
}
