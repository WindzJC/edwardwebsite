import { AboutBookSection } from "@/components/site/about-book-section";
import { AuthorSection } from "@/components/site/author-section";
import { FinalCtaSection } from "@/components/site/final-cta-section";
import { FrameworkSection } from "@/components/site/framework-section";
import { HeroSection } from "@/components/site/hero-section";
import { ReviewsSection } from "@/components/site/reviews-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function HomePage() {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-hidden bg-obsidian text-soft-white"
    >
      <SiteHeader />
      <main>
        <HeroSection />
        <FrameworkSection />
        <AboutBookSection />
        <AuthorSection />
        <ReviewsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
