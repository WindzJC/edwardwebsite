import { navigation, siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-obsidian/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="font-display text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-soft-white sm:text-sm sm:tracking-[0.32em]"
          >
            {siteContent.authorName}
          </a>
          <ButtonLink
            href={siteContent.book.buyUrl}
            target="_blank"
            rel="noreferrer"
            size="sm"
            className="shrink-0 lg:hidden"
          >
            Buy Book
          </ButtonLink>
        </div>
        <nav aria-label="Primary navigation" className="w-full lg:w-auto">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.66rem] uppercase tracking-[0.22em] text-white/58 sm:gap-x-5 sm:text-[0.72rem] sm:tracking-[0.28em] lg:justify-center">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-soft-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink
          href={siteContent.book.buyUrl}
          target="_blank"
          rel="noreferrer"
          size="sm"
          className="hidden shrink-0 lg:inline-flex"
        >
          Buy Book
        </ButtonLink>
      </div>
    </header>
  );
}
