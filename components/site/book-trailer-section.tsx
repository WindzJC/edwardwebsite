import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.hostname.includes("youtu.be")
      ? parsedUrl.pathname.replace("/", "")
      : parsedUrl.searchParams.get("v");

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url;
  }
}

export function BookTrailerSection() {
  const trailer = siteContent.book.trailer;
  const embedUrl = getYouTubeEmbedUrl(trailer.url);

  return (
    <section id="trailer" className="relative overflow-hidden border-b border-white/8 px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(214,161,92,0.1),transparent_24%),radial-gradient(circle_at_82%_74%,rgba(108,156,238,0.1),transparent_28%)]" />
      <div className="surface-grid absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black_34%,transparent_84%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-12">
        <Reveal className="max-w-2xl">
          <SectionHeading
            eyebrow="Book Trailer"
            title="See the book in motion"
            description={trailer.description}
          />

          <p className="mt-8 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            Watch the trailer for a concise introduction to the book&apos;s argument and tone, then continue into the full overview below.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href={trailer.url} target="_blank" rel="noreferrer">
              Watch on YouTube
            </ButtonLink>
            <ButtonLink href="#book" variant="secondary">
              Read about the book
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="editorial-panel glass-outline rounded-[32px] p-3 sm:p-4">
            <div className="aspect-video overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
              <iframe
                className="h-full w-full"
                src={embedUrl}
                title={trailer.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
