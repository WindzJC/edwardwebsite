import Image from "next/image";
import { siteContent } from "@/content/site";
import { ContentBadge } from "@/components/ui/content-badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AuthorSection() {
  return (
    <section id="author" className="border-b border-white/8 px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="About the Author"
            title={siteContent.author.heading}
            description="The section below keeps the tone authoritative while leaving all unverified biography details clearly marked for replacement."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.25fr)]">
          <Reveal>
            <div className="editorial-panel overflow-hidden rounded-[30px]">
              <div className="relative aspect-[3/4]">
                <Image
                  src={siteContent.author.portrait.src}
                  alt={siteContent.author.portrait.alt}
                  fill
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_35%,rgba(5,5,5,0.78)_100%)]" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="quiet-label">Portrait</p>
                  <p className="mt-2 text-sm text-white/68">
                    Supplied image retained for editorial presentation.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="editorial-panel rounded-[30px] p-6 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <ContentBadge tone="placeholder">Editable Biography Fields</ContentBadge>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/62">{siteContent.author.note}</p>

              <div className="section-rule my-8" />

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <ContentBadge tone="placeholder">Editable Summary</ContentBadge>
                <p className="mt-4 text-base leading-8 text-white/76 sm:text-lg">
                  {siteContent.author.summary}
                </p>
              </div>

              <dl className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5">
                {siteContent.author.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
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
