import { ContentBadge } from "@/components/ui/content-badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const reservedReviewCards = [
  {
    title: "Editorial Reviews",
    description:
      "Reserved for future coverage from publications, journals, and editorial outlets."
  },
  {
    title: "Reader Commentary",
    description:
      "Reserved for approved reader response and selected commentary once available."
  },
  {
    title: "Professional Endorsements",
    description:
      "Reserved for formal endorsements from policy, academic, and public-affairs voices."
  }
] as const;

export function ReviewsSection() {
  return (
    <section id="reviews" className="border-b border-white/8 px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="REVIEWS"
            title="Critical Response"
            description="This section is reserved for future editorial reviews, reader commentary, and professional endorsements. If the author chooses, Threats & Challenges can be featured here with selected review excerpts and endorsements."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-3">
          {reservedReviewCards.map((card, index) => (
            <Reveal key={card.title} delay={0.08 * index}>
              <article className="editorial-panel h-full rounded-[28px] p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="quiet-label">Reserved</p>
                  <ContentBadge>Future Use</ContentBadge>
                </div>
                <h3 className="mt-5 font-display text-[1.08rem] uppercase tracking-[0.12em] text-soft-white sm:mt-6 sm:text-[1.18rem]">
                  {card.title}
                </h3>
                <div className="section-rule mt-7 sm:mt-8" />
                <p className="mt-5 text-sm leading-7 text-white/60 sm:mt-6">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
