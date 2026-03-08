import { BookVisual } from "@/components/site/book-visual";
import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section className="px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="editorial-panel relative overflow-hidden rounded-[34px] px-6 py-8 sm:px-10 sm:py-12 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(109,160,241,0.1),transparent_26%),radial-gradient(circle_at_84%_20%,rgba(217,164,96,0.08),transparent_18%),radial-gradient(circle_at_74%_78%,rgba(157,119,222,0.08),transparent_22%)]" />
            <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_16rem] lg:items-center">
              <div>
                <p className="quiet-label">Final CTA</p>
                <h2 className="mt-5 max-w-4xl font-display text-[2.15rem] font-semibold uppercase leading-[0.95] tracking-[0.08em] text-balance sm:text-[3rem]">
                  Add the book to your strategic reading list.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  {siteContent.book.shortDescription}
                </p>

                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <ButtonLink
                    href={siteContent.book.buyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    Buy on Amazon
                  </ButtonLink>
                  <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                    {siteContent.book.availability}
                  </p>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[16rem] lg:mr-0">
                <BookVisual mode="flat" size="compact" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
