import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutBookSection() {
  return (
    <section id="book" className="border-b border-white/8 px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="About the Book"
            title="A broader lens on national strategy"
            description="Written in a measured, policy-minded voice, the book argues that the United States needs a fuller method for understanding the risks shaping its future."
          />

          <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
            {siteContent.book.overview.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <ButtonLink
              href={siteContent.book.buyUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              View on Amazon
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="editorial-panel rounded-[30px] p-6 sm:p-8">
            <p className="quiet-label">Pull Quote</p>
            <blockquote className="mt-5 border-l border-white/14 pl-5 font-display text-[1.65rem] font-medium uppercase leading-[1.02] tracking-[0.08em] text-balance text-soft-white sm:mt-6 sm:text-[2rem]">
              “{siteContent.book.quote}”
            </blockquote>

            <div className="section-rule mt-7 sm:mt-8" />

            <div className="mt-7 sm:mt-8">
              <p className="quiet-label">Themes</p>
              <ul className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
                {siteContent.book.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
