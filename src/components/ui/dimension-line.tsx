import { cn } from "@/lib/cn";

type DimensionLineProps = {
  label: string;
  orientation?: "vertical" | "horizontal";
  className?: string;
};

export function DimensionLine({
  label,
  orientation = "horizontal",
  className,
}: DimensionLineProps) {
  const vertical = orientation === "vertical";
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center text-[0.625rem] font-semibold tracking-[0.2em] whitespace-nowrap uppercase",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
    >
      <span
        className={cn("bg-current", vertical ? "h-px w-2.5" : "h-2.5 w-px")}
      />
      <span
        className={cn("flex-1 bg-current/50", vertical ? "w-px" : "h-px")}
      />
      <span
        className={cn(
          "px-2 py-2",
          vertical && "[writing-mode:vertical-rl] rotate-180",
        )}
      >
        {label}
      </span>
      <span
        className={cn("flex-1 bg-current/50", vertical ? "w-px" : "h-px")}
      />
      <span
        className={cn("bg-current", vertical ? "h-px w-2.5" : "h-2.5 w-px")}
      />
    </div>
  );
}
