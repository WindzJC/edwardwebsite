import { siteContent } from "@/content/site";
import { ContentBadge } from "@/components/ui/content-badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ReviewsSection() {
  return (
    <section id="reviews" className="border-b border-white/8 px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews / Praise"
            title="Placeholders reserved for attributed commentary"
            description="No publication-ready endorsements were supplied, so the cards below are explicitly marked as placeholder content."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-3">
          {siteContent.reviews.map((review, index) => (
            <Reveal key={review.source} delay={0.08 * index}>
              <article className="editorial-panel h-full rounded-[28px] p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="quiet-label">Review</p>
                  <ContentBadge tone="placeholder">Placeholder</ContentBadge>
                </div>
                <blockquote className="mt-5 text-[1.02rem] leading-8 text-white/76 sm:mt-6 sm:text-lg">
                  “{review.quote}”
                </blockquote>
                <div className="section-rule mt-7 sm:mt-8" />
                <p className="mt-5 text-sm uppercase tracking-[0.24em] text-white/48 sm:mt-6">
                  {review.source}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/42">
                  Replace with a verified quote and cleared attribution before publication.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
