# Edward A. Corcoran Website

Premium single-author landing page for *Threats & Challenges: Strategies in a New Century*, built with Next.js, React, Tailwind CSS, and Framer Motion.

## Commands

- `npm install`
- `npm run dev`
- `npm run typecheck`
- `npm run build`
- `npm run start`

## Editable Content

Update verified content in [content/site.ts](/mnt/d/VS/edward%20website/content/site.ts).

- Book title, subtitle, hero line breaks, CTA text, and Amazon link
- Framework card copy
- Author biography placeholders
- Review placeholders
- Contact placeholder

## Assets

Swap images in [public/images/book-cover.jpg](/mnt/d/VS/edward%20website/public/images/book-cover.jpg) and [public/images/edward-photo.jpg](/mnt/d/VS/edward%20website/public/images/edward-photo.jpg).

- The current files are supplied editorial assets
- The hero 3D presentation is CSS-based and can fall back to a flat cover image
- Switch the hero mode in `siteContent.book.heroBookMode`

## Structure

- [app/page.tsx](/mnt/d/VS/edward%20website/app/page.tsx): homepage composition
- [components/site](/mnt/d/VS/edward%20website/components/site): section components
- [components/ui](/mnt/d/VS/edward%20website/components/ui): reusable primitives
- [app/globals.css](/mnt/d/VS/edward%20website/app/globals.css): global theme and editorial surface styles

## Handoff Notes

- Placeholder biography, reviews, and contact areas are explicitly labeled in the UI
- Keep biography and review replacements verified and attributed
- Preserve the current dark editorial palette and restrained motion unless a redesign is intentional
