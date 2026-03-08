import type { ReactNode } from "react";

type ContentBadgeProps = {
  children: ReactNode;
  tone?: "default" | "placeholder";
  className?: string;
};

const toneClasses = {
  default: "border-white/10 bg-white/[0.04] text-white/58",
  placeholder: "border-white/12 bg-white/[0.05] text-white/66"
} as const;

export function ContentBadge({
  children,
  className,
  tone = "default"
}: ContentBadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 font-display text-[0.62rem] uppercase tracking-[0.28em]",
        toneClasses[tone],
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
