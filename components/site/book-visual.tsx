"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export type BookVisualMode = "mockup" | "flat";

type BookVisualProps = {
  mode?: BookVisualMode;
  priority?: boolean;
  size?: "hero" | "compact";
  className?: string;
};

const sizeClasses = {
  hero: "max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[31rem] xl:max-w-[36rem]",
  compact: "max-w-[12rem] sm:max-w-[14rem] md:max-w-[16rem]"
} as const;

const coverImageSrc = "/images/revive-american-dream-cover.jpg";

export function BookVisual({
  mode = "mockup",
  priority = false,
  size = "hero",
  className
}: BookVisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const wrapperClassName = [
    "relative mx-auto w-full",
    mode === "flat" ? "aspect-[333/500]" : "aspect-[0.9]",
    sizeClasses[size],
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (mode === "flat") {
    return (
      <motion.div
        className={wrapperClassName}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-x-[20%] bottom-[5%] h-12 rounded-full bg-[#7f9fdf]/12 blur-[52px]" />
        <div className="editorial-panel glass-outline relative h-full overflow-hidden rounded-[22px] border-white/10 shadow-[0_36px_110px_-28px_rgba(0,0,0,0.9)]">
          <Image
            src={coverImageSrc}
            alt="Cover of Revive the American Dream by Edward Corcoran"
            fill
            priority={priority}
            sizes={size === "hero" ? "(min-width: 1024px) 34rem, 70vw" : "16rem"}
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.24),transparent_24%,transparent_100%)] mix-blend-screen opacity-45" />
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`${wrapperClassName} overflow-visible [perspective:2200px]`}>
      <div className="absolute left-[12%] right-[20%] bottom-[2.5%] h-14 rounded-full bg-black/90 blur-[24px]" />
      <div className="absolute left-[18%] right-[24%] bottom-[6%] h-20 rounded-full bg-black/78 blur-[54px]" />
      <div className="absolute inset-x-[26%] bottom-[8%] h-12 rounded-full bg-[#8caef0]/8 blur-[64px]" />
      <motion.div
        className="relative h-full w-full"
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 32
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          animate={
            shouldReduceMotion
              ? { rotateX: 10.5, rotateY: -22, rotateZ: -2.4, x: 0, y: 0 }
              : {
                  rotateX: [10.5, 9.8, 10.5],
                  rotateY: [-22, -20.2, -22],
                  rotateZ: [-2.4, -1.9, -2.4],
                  x: [0, 2, 0],
                  y: [0, -6, 0]
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 8.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
          }
        >
          <div
            className="absolute right-[21.2%] top-[12.6%] w-[61.4%] rounded-[22px] border border-white/[0.04] bg-[linear-gradient(180deg,#0c0c0c,#020202)] opacity-90 shadow-[0_38px_110px_-30px_rgba(0,0,0,0.95)] aspect-[333/500]"
            style={{ transform: "translateZ(-30px) translateX(-16px) translateY(10px) rotateY(5deg)" }}
          />
          <div
            className="absolute left-[19.4%] top-[14.2%] h-[69.8%] w-[5.4%] rounded-l-[8px] border-y border-l border-white/[0.07] bg-[linear-gradient(180deg,#151515_0%,#0b0b0b_34%,#020202_100%)] shadow-[inset_1px_0_0_rgba(255,255,255,0.08),inset_-10px_0_14px_rgba(0,0,0,0.42),0_20px_50px_rgba(0,0,0,0.26)]"
            style={{ transform: "translateZ(-1px) rotateY(-70deg)", transformOrigin: "right center" }}
          />
          <div
            className="absolute right-[16.4%] top-[12.7%] h-[70.9%] w-[4.7%] rounded-r-[9px] border-r border-black/28 bg-[linear-gradient(180deg,#f0ebe0_0%,#ddd7ca_14%,#f8f4eb_28%,#d7d0c4_46%,#f1ece3_64%,#d8d1c5_82%,#eee7db_100%)] opacity-96 shadow-[inset_1px_0_0_rgba(255,255,255,0.55),inset_-6px_0_10px_rgba(0,0,0,0.11),0_24px_60px_rgba(0,0,0,0.24)]"
            style={{ transform: "translateZ(-2px) rotateY(74deg)", transformOrigin: "left center" }}
          />
          <div
            className="absolute right-[18%] top-[12%] w-[61.5%] rounded-[22px] border border-white/10 bg-black shadow-[24px_58px_110px_-36px_rgba(0,0,0,0.95),0_18px_22px_rgba(0,0,0,0.34),0_0_0_1px_rgba(255,255,255,0.05)] aspect-[333/500]"
            style={{ transform: "translateZ(12px)" }}
          >
            <div className="absolute inset-[1px] overflow-hidden rounded-[21px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(123,168,255,0.2),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(156,121,219,0.15),transparent_24%),radial-gradient(circle_at_62%_76%,rgba(232,173,102,0.12),transparent_30%)]" />
              <Image
                src={coverImageSrc}
                alt="Cover of Revive the American Dream by Edward Corcoran"
                fill
                priority={priority}
                sizes={size === "hero" ? "(min-width: 1024px) 34rem, 70vw" : "16rem"}
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(108deg,rgba(255,255,255,0.2),transparent_16%,transparent_58%,rgba(255,255,255,0.04)_76%,transparent_100%)] mix-blend-screen opacity-60" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_12%,transparent_76%,rgba(0,0,0,0.16)_100%)]" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-28px_36px_rgba(0,0,0,0.48),inset_14px_0_22px_rgba(0,0,0,0.14),inset_-10px_0_18px_rgba(0,0,0,0.18)]" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-[3.5%] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_30%,rgba(0,0,0,0.2)_100%)]" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-[2.2%] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01)_28%,rgba(0,0,0,0.22)_100%)]" />
            </div>
          </div>
          <div
            className="absolute left-[26%] top-[20%] h-[52%] w-[34%] rounded-[26px] bg-white/[0.02] blur-[40px]"
            style={{ transform: "translateZ(-40px)" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
