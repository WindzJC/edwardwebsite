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
        <div className="editorial-panel glass-outline relative h-full overflow-hidden rounded-[30px] border-white/10 shadow-[0_36px_110px_-28px_rgba(0,0,0,0.9)]">
          <Image
            src="/images/book-cover.jpg"
            alt="Cover of Threats & Challenges by Edward A. Corcoran"
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
    <div className={`${wrapperClassName} overflow-visible [perspective:2600px]`}>
      <div className="absolute inset-x-[16%] bottom-[5%] h-16 rounded-full bg-black/85 blur-[44px]" />
      <div className="absolute inset-x-[24%] bottom-[7%] h-12 rounded-full bg-[#8caef0]/8 blur-[60px]" />
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
              ? { rotateX: 9.5, rotateY: -17, rotateZ: -2.6, x: 0, y: 0 }
              : {
                  rotateX: [9.5, 8.9, 9.5],
                  rotateY: [-17, -15.5, -17],
                  rotateZ: [-2.6, -2.1, -2.6],
                  x: [0, 3, 0],
                  y: [0, -7, 0]
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
            className="absolute right-[22%] top-[12.8%] w-[61%] rounded-[30px] border border-white/5 bg-[linear-gradient(180deg,#0c0c0c,#030303)] shadow-[0_42px_120px_-26px_rgba(0,0,0,0.92)] aspect-[333/500]"
            style={{ transform: "translateZ(-34px) translateX(-22px) translateY(12px)" }}
          />
          <div
            className="absolute left-[22.8%] top-[14.1%] h-[69%] w-[2.2%] rounded-l-[8px] border-l border-white/7 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_22%,rgba(0,0,0,0.58)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_50px_rgba(0,0,0,0.3)]"
            style={{ transform: "translateZ(2px)" }}
          />
          <div
            className="absolute right-[12.8%] top-[13.7%] h-[70.5%] w-[8.2%] rounded-r-[16px] border-y border-r border-black/30 bg-[repeating-linear-gradient(180deg,#e2dccf_0px,#d4cec1_2px,#f1ece4_4px,#dbd4c7_6px)] opacity-88 shadow-[0_28px_84px_rgba(0,0,0,0.34)]"
            style={{ transform: "translateZ(-10px)" }}
          />
          <div
            className="absolute right-[18.2%] top-[12%] w-[61.5%] rounded-[30px] border border-white/10 bg-black shadow-[0_52px_140px_-24px_rgba(0,0,0,0.96),0_0_0_1px_rgba(255,255,255,0.05)] aspect-[333/500]"
            style={{ transform: "translateZ(10px)" }}
          >
            <div className="absolute inset-[1px] overflow-hidden rounded-[29px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(123,168,255,0.2),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(156,121,219,0.15),transparent_24%),radial-gradient(circle_at_62%_76%,rgba(232,173,102,0.12),transparent_30%)]" />
              <Image
                src="/images/book-cover.jpg"
                alt="Cover of Threats & Challenges by Edward A. Corcoran"
                fill
                priority={priority}
                sizes={size === "hero" ? "(min-width: 1024px) 34rem, 70vw" : "16rem"}
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.16),transparent_18%,transparent_60%,rgba(255,255,255,0.05)_76%,transparent_100%)] mix-blend-screen opacity-55" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-20px_36px_rgba(0,0,0,0.4),inset_14px_0_20px_rgba(0,0,0,0.12)]" />
            </div>
          </div>
          <div
            className="absolute right-[20%] top-[15%] h-[60%] w-[44%] rounded-[30px] bg-white/[0.025] blur-2xl"
            style={{ transform: "translateZ(-42px)" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
