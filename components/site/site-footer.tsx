import { navigation, siteContent } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 px-6 py-8 sm:py-10 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:items-end">
        <div className="space-y-3">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-soft-white">
            {siteContent.authorName}
          </p>
          <p className="text-sm text-white/50">
            Copyright © {year} {siteContent.authorName}. All rights reserved.
          </p>
        </div>

        <div className="space-y-4 lg:justify-self-end lg:text-right">
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
            </ul>
          </nav>
          <p className="text-sm text-white/44">
            Single-author landing page focused on{" "}
            <span className="italic">{siteContent.book.title}</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
