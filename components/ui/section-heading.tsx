type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={["flex flex-col gap-3.5 sm:gap-4", alignment, className].filter(Boolean).join(" ")}>
      <p className="quiet-label">{eyebrow}</p>
      <h2 className="font-display text-[1.95rem] font-semibold uppercase leading-[0.94] tracking-[0.07em] text-balance text-soft-white sm:text-[2.45rem] lg:text-[3.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[0.98rem] leading-7 text-white/70 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
