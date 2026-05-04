"use client";
import { useEffect, useRef, useState } from "react";
import MaxWidth from "../ui/max-width";
import shadowBG from '@/assets/shadow.svg';
import shadowBGMobile from '@/assets/shadow-mobile.svg';

const pillars = [
  {
    num: "01",
    tag: "FOUNDATION",
    label: "Capital Preservation",
    pct: "50%",
    desc: "Hard-currency treasury allocation to stable, low-volatility instruments — protecting against FX risk and systemic shocks.",
  },
  {
    num: "02",
    tag: "GROWTH",
    label: "Sustainable Yield",
    pct: "35%",
    desc: "Structured yield strategies — trade finance, invoice discounting, and DeFi liquidity — optimised for risk-adjusted returns.",
  },
  {
    num: "03",
    tag: "IMPACT",
    label: "Lebanon-Linked Opportunities",
    pct: "15%",
    desc: "Selective exposure to vetted Lebanese economic recovery plays — SMEs, infrastructure receivables, and high-conviction opportunities.",
  },
];

/* Reusable hook: fires once when element enters viewport */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const COLORS = [
  "#00EB81",
  "#00EB81",
  "#00EB81",
];

export function Strategy() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref: sectionRef, visible } = useInView(0.15);

  return (
    <section id="strategy" className="relative py-20 sm:py-28 overflow-hidden">
      {/* ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/8 blur-[130px] pointer-events-none" />

      <MaxWidth>
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-primary mb-4 bg-[#00EB81]/15 rounded-full px-4 py-2">
            STRATEGY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight text-center">
            Trust before speculation.{" "}
            <span className="text-cedar-gradient">Stability before growth.</span>
          </h2>
        </div>

        {/* Hexagon cards */}
        <div
          ref={sectionRef}
          className="flex flex-col sm:flex-row items-center justify-center -space-y-28 sm:-space-y-0 sm:-space-x-6"
        >
          {pillars.map((p, i) => {
            const isHov = hovered === i;
            const color = COLORS[i];
            const delay = i * 120;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex flex-col items-center cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                }}
              >
                {/* Hexagon container with image background */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: "clamp(160px, 22vw, 220px)",
                    height: "clamp(175px, 24vw, 240px)",
                    transform: isHov ? "scale(1.07)" : "scale(1)",
                    transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                >
                  {/* Background Image - original colors visible */}
                  <img 
                    src={shadowBG} 
                    alt="shadow" 
                    className="absolute inset-0 w-full h-full hidden md:block"
                    style={{
                      filter: isHov ? `drop-shadow(0 0 20px ${color})` : "none",
                      transition: "filter 0.4s ease",
                    }}
                  />
                  <img 
                    src={shadowBGMobile} 
                    alt="shadow" 
                    className="absolute inset-0 w-[254px] h-[254px] md:hidden"
                    style={{
                      filter: isHov ? `drop-shadow(0 0 20px ${color})` : "none",
                      transition: "filter 0.4s ease",
                    }}
                  />

                  {/* content */}
                  <div className="relative z-10 flex flex-col items-center text-center px-4">
                    <div
                      className="font-bold text-[24px] tracking-[0.3em] mb-1 text-white"
                      // style={{ color: isHov ? color : "#666666" }}
                    >
                      {p.num}
                    </div>
                    <div
                      className="font-mono text-[9px] tracking-[0.25em] mb-3 text-[#00EB81] "
                      // style={{ color: isHov ? color : "#666666" }}
                    >
                      {p.tag}
                    </div>
                    <div className="font-display text-sm sm:text-base font-bold leading-tight mb-3 text-white">
                      {p.label}
                    </div>
                    <div
                      className="font-display font-bold text-[40px] text-[#00EB81] leading-none"
                      style={{
                        // fontSize: "clamp(2rem, 5vw, 3rem)",
                        // color: color,
                        textShadow: isHov ? `0 0 30px ${color}` : "none",
                        transition: "text-shadow 0.4s ease",
                      }}
                    >
                      {p.pct}
                    </div>
                  </div>
                </div>

                {/* Tooltip description on hover */}
                <div
                  className="mt-4 max-w-[220px] text-center text-xs text-gray-400 leading-relaxed"
                  style={{
                    opacity: isHov ? 1 : 0,
                    transform: isHov ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  {p.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA / Join block */}
        <div className="mt-12 relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-[#00EB81]/20 p-6 sm:p-12 lg:p-20 text-center">
          {/* grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-30 rounded-[inherit]" />
          {/* glows */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[300px] sm:h-[400px] w-[500px] sm:w-[700px] max-w-full rounded-full bg-[#00EB81]/25 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 right-0 h-[200px] sm:h-[300px] w-[200px] sm:w-[300px] rounded-full bg-[#00EB81]/20 blur-[100px] pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 mb-5 sm:mb-6">
              <span className="h-2 w-2 rounded-full bg-[#00EB81] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-white">PRESALE WHITELIST OPEN</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-3xl mx-auto text-white">
              The cedar stands.{" "}
              <span className="text-[#00EB81] block sm:inline">The chain remembers.</span>
            </h2>

            <p className="mt-5 sm:mt-6 max-w-xl mx-auto text-base sm:text-lg text-gray-300">
              Join the diaspora-powered movement rebuilding Lebanese capital infrastructure on
              transparent, programmable rails.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 rounded-full bg-black/50 border border-[#00EB81]/30 px-5 sm:px-6 py-3 sm:py-3.5 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#00EB81] focus:ring-2 focus:ring-[#00EB81]/30 transition"
              />
              <button
                type="button"
                className="rounded-full bg-[#00EB81] px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_#00EB81/40] hover:shadow-[0_0_60px_#00EB81/70] transition-shadow whitespace-nowrap"
              >
                Reserve allocation
              </button>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs text-gray-400 px-2">
              By joining, you confirm you are not a restricted person. This is not an offer to sell securities.
            </p>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}