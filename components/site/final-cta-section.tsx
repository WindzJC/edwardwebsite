import { BookVisual } from "@/components/site/book-visual";
import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { ContentBadge } from "@/components/ui/content-badge";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,161,92,0.08),transparent_22%),radial-gradient(circle_at_84%_72%,rgba(108,156,238,0.1),transparent_28%)]" />
      <div className="surface-grid absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black_34%,transparent_84%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="editorial-panel glass-outline relative overflow-hidden rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(109,160,241,0.1),transparent_26%),radial-gradient(circle_at_84%_20%,rgba(217,164,96,0.08),transparent_18%),radial-gradient(circle_at_74%_78%,rgba(157,119,222,0.08),transparent_22%)]" />
            <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="quiet-label">Final CTA</p>
                  <ContentBadge>{siteContent.book.availability}</ContentBadge>
                </div>

                <h2 className="mt-5 max-w-4xl font-display text-[2.15rem] font-semibold uppercase leading-[0.95] tracking-[0.08em] text-balance sm:text-[3rem]">
                  Read the case for reviving the American dream.
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
                </div>

                <div className="section-rule mt-8 max-w-xl sm:mt-10" />

                <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(15rem,0.9fr)]">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="quiet-label">Contact</p>
                      {siteContent.contact.isPlaceholder ? (
                        <ContentBadge tone="placeholder">Editable</ContentBadge>
                      ) : null}
                    </div>
                    <p className="mt-3 font-display text-[0.72rem] uppercase tracking-[0.28em] text-soft-white">
                      {siteContent.contact.label}
                    </p>
                    {siteContent.contact.href ? (
                      <a
                        href={siteContent.contact.href}
                        className="mt-3 inline-flex text-sm text-white/78 transition hover:text-soft-white"
                      >
                        {siteContent.contact.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-sm text-white/70">{siteContent.contact.value}</p>
                    )}
                    <p className="mt-2 text-sm text-white/48">{siteContent.contact.note}</p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/22 p-5 sm:p-6">
                    <p className="quiet-label">Edition</p>
                    <p className="mt-4 font-display text-[1rem] uppercase tracking-[0.14em] text-soft-white">
                      {siteContent.book.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/62">
                      Purchase links remain anchored below for the paperback listing and current marketplace availability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[21rem] lg:mr-0">
                <div className="relative rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:p-5">
                  <div className="absolute inset-x-[18%] bottom-2 h-10 rounded-full bg-[#88a9eb]/12 blur-3xl" />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                    <span className="quiet-label">Paperback</span>
                    <span className="section-rule w-14 opacity-40" />
                  </div>
                  <div className="relative px-2 pb-2 pt-10">
                    <BookVisual mode="flat" size="compact" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
