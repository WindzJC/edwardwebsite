import { navigation, siteContent } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8 px-6 py-8 sm:py-10 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(108,156,238,0.08),transparent_22%),radial-gradient(circle_at_82%_74%,rgba(214,161,92,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="editorial-panel glass-outline rounded-[30px] px-6 py-7 sm:px-8 sm:py-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,1.05fr)] lg:items-end">
            <div className="space-y-4">
              <p className="quiet-label">Closing Notes</p>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-soft-white">
                {siteContent.authorName}
              </p>
              <p className="max-w-xl text-sm leading-7 text-white/56">
                A single-book editorial landing page built around{" "}
                <span className="italic text-white/72">{siteContent.book.title}</span>, with sections for the framework, trailer, reviews, and purchase links.
              </p>
              <p className="text-sm text-white/42">
                Copyright © {year} {siteContent.authorName}. All rights reserved.
              </p>
            </div>

            <div className="space-y-5 lg:justify-self-end lg:text-right">
              <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/54 sm:gap-x-5 sm:text-[0.72rem] lg:justify-end">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="hover:text-soft-white">
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={siteContent.book.buyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-soft-white"
                    >
                      Barnes & Noble
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteContent.book.amazonUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-soft-white"
                    >
                      Amazon
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/60 lg:ml-auto">
                {siteContent.book.availability}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
