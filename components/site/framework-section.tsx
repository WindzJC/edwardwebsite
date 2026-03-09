import Image from "next/image";
import { siteContent } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const toneStyles = {
  blue: {
    label: "text-[#a8c9ff]",
    overlay:
      "bg-[radial-gradient(circle_at_50%_66%,rgba(116,170,255,0.26),transparent_23%),linear-gradient(180deg,rgba(3,6,12,0.84)_0%,rgba(3,6,12,0.26)_26%,rgba(3,6,12,0.12)_46%,rgba(3,6,12,0.62)_72%,rgba(3,6,12,0.9)_100%)]",
    glow: "bg-[#7ca8ff]/14"
  },
  amber: {
    label: "text-[#f1c78c]",
    overlay:
      "bg-[radial-gradient(circle_at_74%_24%,rgba(236,177,100,0.18),transparent_24%),linear-gradient(90deg,rgba(4,4,4,0.54)_0%,rgba(4,4,4,0.16)_30%,rgba(4,4,4,0.1)_68%,rgba(4,4,4,0.4)_100%),linear-gradient(180deg,rgba(6,5,3,0.8)_0%,rgba(6,5,3,0.22)_28%,rgba(6,5,3,0.18)_58%,rgba(6,5,3,0.86)_100%)]",
    glow: "bg-[#d6a767]/14"
  },
  purple: {
    label: "text-[#c4a6ff]",
    overlay:
      "bg-[radial-gradient(circle_at_70%_22%,rgba(162,125,231,0.16),transparent_26%),linear-gradient(90deg,rgba(3,4,10,0.42)_0%,rgba(3,4,10,0.08)_22%,rgba(3,4,10,0.1)_76%,rgba(3,4,10,0.48)_100%),linear-gradient(180deg,rgba(3,4,10,0.72)_0%,rgba(3,4,10,0.12)_30%,rgba(3,4,10,0.2)_68%,rgba(3,4,10,0.86)_100%)]",
    glow: "bg-[#9c79db]/12"
  }
} as const;

export function FrameworkSection() {
  return (
    <section className="border-b border-white/8 px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="The Framework"
            title="A three-part view of what is constraining national renewal"
            description="The book frames the American dilemma across material resilience, internal systems, and the wider global environment that shapes domestic priorities."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-3">
          {siteContent.framework.map((item, index) => {
            const style = toneStyles[item.tone];

            return (
              <Reveal key={item.title} delay={0.08 * index}>
                <article className="group editorial-panel relative h-full overflow-hidden rounded-[28px] p-5 transition duration-500 hover:-translate-y-1 hover:border-white/16 sm:p-6 lg:p-7">
                  <div
                    className="relative mb-5 h-44 overflow-hidden rounded-[22px] border border-white/10 sm:mb-6 sm:h-52"
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, calc(100vw - 3rem)"
                      className={`object-cover opacity-[0.9] transition duration-700 group-hover:scale-[1.03] ${item.image.className}`}
                    />
                    <div className={`absolute inset-0 ${style.overlay}`} />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_34%,rgba(0,0,0,0.44)_56%,rgba(0,0,0,0.84)_100%)]" />
                    <div className="surface-grid absolute inset-0 opacity-[0.06]" />
                    <div className={`absolute -right-3 top-8 h-28 w-28 rounded-full blur-3xl ${style.glow}`} />
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-48px_80px_rgba(0,0,0,0.72)]" />
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-6 sm:top-6">
                      <span className={`font-display text-[0.64rem] uppercase tracking-[0.32em] ${style.label}`}>
                        Domain 0{index + 1}
                      </span>
                      <span className="section-rule w-16 opacity-45" />
                    </div>
                    <div className="absolute inset-x-5 bottom-[4.9rem] h-px bg-gradient-to-r from-transparent via-white/16 to-transparent sm:inset-x-6 sm:bottom-[5.35rem]" />
                    <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
                      <p className="mb-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/36">
                        Focus Area
                      </p>
                      <h3 className="font-display text-[2rem] font-semibold uppercase leading-none tracking-[0.1em] text-soft-white sm:text-[2.2rem]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[0.98rem] leading-7 text-white/70">{item.description}</p>
                    <div className="section-rule opacity-55" />
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
