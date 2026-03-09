import { siteContent } from "@/content/site";
import { BookVisual } from "@/components/site/book-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

const heroSignalStyles = {
  blue: {
    chip: "border-[#7ca8ff]/18 bg-[#7ca8ff]/[0.05] text-[#c8dcff]/78",
    dot: "bg-[#8db5ff]"
  },
  amber: {
    chip: "border-[#d6a767]/18 bg-[#d6a767]/[0.05] text-[#f0d2a4]/78",
    dot: "bg-[#d6a767]"
  },
  purple: {
    chip: "border-[#9c79db]/18 bg-[#9c79db]/[0.05] text-[#d2c0f7]/78",
    dot: "bg-[#a887eb]"
  }
} as const;

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(108,156,238,0.12),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(214,161,92,0.12),transparent_18%),radial-gradient(circle_at_78%_78%,rgba(135,98,181,0.12),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,4,10,0.28)_0%,rgba(2,4,10,0.06)_28%,rgba(5,5,5,0)_52%,rgba(14,8,4,0.2)_100%)]" />
      <div className="surface-grid absolute inset-0 opacity-35 [mask-image:radial-gradient(circle_at_center,black_34%,transparent_82%)]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute inset-y-16 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/8 to-transparent xl:block" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 sm:gap-16 sm:pb-24 sm:pt-20 lg:px-10 xl:grid-cols-[minmax(0,0.98fr)_minmax(24rem,0.92fr)] xl:items-center xl:gap-10 xl:pb-28 xl:pt-24">
        <div className="relative z-10 max-w-[42rem]">
          <Reveal className="space-y-10 sm:space-y-12">
            <div className="space-y-6 sm:space-y-7">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                <p className="quiet-label">National Renewal</p>
                <span className="hidden h-px w-16 bg-white/12 sm:block" />
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/38">
                  Economic Policy / Civic Resilience
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <p className="font-display text-[0.72rem] uppercase tracking-[0.34em] text-white/34 sm:text-[0.78rem]">
                  {siteContent.authorName}
                </p>
                <h1 className="max-w-[8.8ch] font-display text-[3.4rem] font-semibold uppercase leading-[0.86] tracking-[0.045em] text-balance text-soft-white sm:text-[4.8rem] lg:text-[5.4rem] xl:text-[6.2rem]">
                  {siteContent.book.heroTitleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                {siteContent.book.subtitle ? (
                  <p className="max-w-[30rem] font-display text-[0.82rem] uppercase leading-6 tracking-[0.4em] text-white/58 sm:text-[0.94rem] sm:leading-7">
                    {siteContent.book.subtitle}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="max-w-[37rem] space-y-6">
              <div className="section-rule max-w-[30rem]" />
              <p className="max-w-[36rem] text-base leading-8 text-white/72 sm:text-lg sm:leading-9">
                {siteContent.book.shortDescription}
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink
                href={siteContent.book.buyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                Buy at Barnes & Noble
              </ButtonLink>
              <ButtonLink
                href={siteContent.book.amazonUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Buy on Amazon
              </ButtonLink>
              <ButtonLink href="#book" variant="secondary" className="w-full sm:w-auto">
                Explore the Book
              </ButtonLink>
            </div>

            <ul
              className="grid max-w-[38rem] gap-3 pt-1 sm:grid-cols-3"
              aria-label="Book framework pillars"
            >
              {siteContent.framework.map((item) => {
                const style = heroSignalStyles[item.tone];

                return (
                  <li
                    key={item.title}
                    className={`rounded-full border px-4 py-2.5 text-center font-display text-[0.66rem] uppercase tracking-[0.32em] sm:text-[0.7rem] ${style.chip}`}
                  >
                    <span className="flex items-center justify-center gap-2.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                      <span>{item.title}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal className="relative z-10 pt-2 xl:ml-auto xl:w-full" delay={0.12} y={40}>
          <BookVisual mode={siteContent.book.heroBookMode} priority className="w-full" />
        </Reveal>
      </div>
    </section>
  );
}
