import Image from "next/image";
import { siteContent } from "@/content/site";
import { ContentBadge } from "@/components/ui/content-badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AuthorSection() {
  return (
    <section id="author" className="relative overflow-hidden border-b border-white/8 px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(108,156,238,0.08),transparent_24%),radial-gradient(circle_at_82%_72%,rgba(214,161,92,0.08),transparent_24%)]" />
      <div className="surface-grid absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black_34%,transparent_84%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="About the Author"
            title={siteContent.author.heading}
            description="The section below keeps the tone authoritative while leaving all unverified biography details clearly marked for replacement."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <Reveal>
            <div className="editorial-panel glass-outline overflow-hidden rounded-[32px]">
              <div className="relative aspect-[3/4]">
                <Image
                  src={siteContent.author.portrait.src}
                  alt={siteContent.author.portrait.alt}
                  fill
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(214,161,92,0.16),transparent_22%),linear-gradient(180deg,rgba(5,5,5,0.06)_0%,rgba(5,5,5,0.16)_38%,rgba(5,5,5,0.86)_100%)]" />
                <div className="surface-grid absolute inset-0 opacity-[0.08]" />
                <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-6 sm:top-6">
                  <ContentBadge tone="placeholder">Editorial Portrait</ContentBadge>
                  <span className="section-rule w-14 opacity-45" />
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/10 bg-black/42 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <p className="quiet-label">Portrait</p>
                  <p className="mt-3 font-display text-[1rem] uppercase tracking-[0.16em] text-soft-white">
                    {siteContent.authorName}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    Supplied image retained for editorial presentation while verified biographical copy is prepared.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="editorial-panel glass-outline rounded-[32px] p-6 sm:p-8 md:p-10">
              <div className="grid gap-5 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <ContentBadge tone="placeholder">Editorial Note</ContentBadge>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/62">{siteContent.author.note}</p>
                </div>

                <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <ContentBadge tone="placeholder">Editable Summary</ContentBadge>
                  </div>
                  <p className="mt-4 text-base leading-8 text-white/76 sm:text-lg">
                    {siteContent.author.summary}
                  </p>
                </div>
              </div>

              <div className="section-rule my-8" />

              <dl className="grid gap-4 sm:grid-cols-3 sm:gap-5">
                {siteContent.author.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-white/14 hover:bg-white/[0.045]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <dt className="quiet-label !text-[0.64rem]">{detail.label}</dt>
                      <ContentBadge tone="placeholder">Editable</ContentBadge>
                    </div>
                    <dd className="mt-4 text-sm leading-7 text-white/68">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
