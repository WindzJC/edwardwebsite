import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
};

const variantClasses = {
  primary:
    "border-[#f4efe6] bg-[#f4efe6] !text-[#050505] shadow-[0_10px_32px_rgba(255,255,255,0.08)] hover:border-white hover:bg-white hover:!text-black",
  secondary:
    "border-white/14 bg-white/[0.03] text-white/88 hover:border-white/24 hover:bg-white/[0.08] hover:text-soft-white"
} as const;

const sizeClasses = {
  sm: "px-4 py-2.5 text-[0.7rem] tracking-[0.18em] sm:text-[0.74rem] sm:tracking-[0.22em]",
  md: "px-5 py-3.5 text-[0.74rem] tracking-[0.2em] sm:text-[0.78rem] sm:tracking-[0.24em]"
} as const;

export function ButtonLink({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full border text-center font-display font-semibold uppercase whitespace-nowrap transition duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian",
    variantClasses[variant],
    sizeClasses[size],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
