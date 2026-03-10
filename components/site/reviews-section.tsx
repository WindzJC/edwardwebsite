import { siteContent } from "@/content/site";
import { ContentBadge } from "@/components/ui/content-badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative overflow-hidden border-b border-white/8 px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(214,161,92,0.08),transparent_24%),radial-gradient(circle_at_82%_74%,rgba(108,156,238,0.08),transparent_28%)]" />
      <div className="surface-grid absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black_34%,transparent_84%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="REVIEWS"
            title="Critical Response"
            description="A featured editorial review highlighting the book's scale, urgency, and argument for national renewal."
          />
        </Reveal>

        <div className="mt-12 space-y-5 sm:mt-14">
          {siteContent.reviews.map((review, index) => {
            const [leadParagraph, ...supportingParagraphs] = review.body;

            return (
              <Reveal key={review.title} delay={0.08 * index}>
                <article className="editorial-panel glass-outline overflow-hidden rounded-[34px]">
                  <div className="grid lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)]">
                    <div className="relative border-b border-white/8 px-6 py-7 sm:px-8 sm:py-9 lg:border-b-0 lg:border-r lg:px-9">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(214,161,92,0.12),transparent_30%),radial-gradient(circle_at_84%_84%,rgba(108,156,238,0.12),transparent_36%)]" />

                      <div className="relative">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="quiet-label">Editorial Review</p>
                          <ContentBadge>{review.source}</ContentBadge>
                        </div>

                        <p className="mt-8 font-display text-[4rem] font-medium leading-none tracking-[0.08em] text-white/[0.08] sm:text-[4.8rem]">
                          01
                        </p>

                        <h3 className="mt-4 max-w-md font-display text-[1.55rem] font-medium uppercase leading-[1.02] tracking-[0.08em] text-balance text-soft-white sm:text-[1.85rem] lg:text-[2.1rem]">
                          {review.title}
                        </h3>

                        <div className="section-rule mt-7 max-w-xs sm:mt-8" />

                        <div className="mt-7 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:mt-8 sm:p-6">
                          <p className="quiet-label">Verdict</p>
                          <blockquote className="mt-4 font-display text-[1.08rem] font-medium uppercase leading-[1.08] tracking-[0.08em] text-balance text-soft-white sm:text-[1.28rem]">
                            {review.verdict}
                          </blockquote>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-7 sm:px-8 sm:py-9 md:px-10 lg:px-12">
                      <div className="max-w-4xl">
                        <p className="quiet-label">Full Review</p>

                        <p className="mt-6 max-w-3xl text-[1.02rem] leading-8 text-white/82 sm:text-[1.12rem] sm:leading-9">
                          {leadParagraph}
                        </p>

                        {supportingParagraphs.length ? (
                          <>
                            <div className="section-rule mt-7 max-w-2xl sm:mt-8" />

                            <div className="mt-7 grid gap-6 sm:mt-8 xl:grid-cols-2">
                              {supportingParagraphs.map((paragraph) => (
                                <p
                                  key={paragraph}
                                  className="text-base leading-8 text-white/72 sm:text-[1.02rem]"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
