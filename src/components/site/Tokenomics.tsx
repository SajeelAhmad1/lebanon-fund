"use client";
import { useState, useRef, useEffect } from "react";
import MaxWidth from "../ui/max-width";

const allocations = [
  { label: "Public & Ecosystem", pct: 40, color: "oklch(0.82 0.22 155)", hex: "#00eb81" },
  { label: "Treasury Reserves",  pct: 20, color: "oklch(0.70 0.20 185)", hex: "#00c4c4" },
  { label: "Strategic Partners",  pct: 15, color: "oklch(0.85 0.13 85)",  hex: "#f5b800" },
  { label: "Team & Advisors",     pct: 15, color: "oklch(0.55 0.22 340)", hex: "#ff4fa3" },
  { label: "Grants & Community",  pct: 10, color: "oklch(0.72 0.20 145)", hex: "#a3f542" },
];

/* Build SVG arcs for the donut */
const RADIUS = 120;
const STROKE  = 38;
const CX = 160;
const CY = 160;

function polarToCartesian(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, start: number, end: number) {
  const s = polarToCartesian(cx, cy, r, start);
  const e = polarToCartesian(cx, cy, r, end);
  const large = end - start > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

interface Segment {
  label: string;
  pct: number;
  color: string;
  hex: string;
  startDeg: number;
  endDeg: number;
  midDeg: number;
}

const segments: Segment[] = (() => {
  let cursor = 0;
  return allocations.map((a) => {
    const startDeg = cursor * 3.6;
    const endDeg   = (cursor + a.pct) * 3.6;
    const midDeg   = (startDeg + endDeg) / 2;
    cursor += a.pct;
    return { ...a, startDeg, endDeg, midDeg };
  });
})();

export function Tokenomics() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const focusIdx = hovered !== null ? hovered : active;
  const focusSeg = focusIdx !== null ? segments[focusIdx] : null;

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28 overflow-hidden">
      {/* ambient glows */}
      <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <MaxWidth>
        {/* Header */}
        <div className="flex flex-col items-center mb-14 sm:mb-20">
          <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-primary mb-3 bg-[#00EB81]/15 rounded-full px-4 py-2">
            TOKENOMICS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            Tokenomics
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-center">
            Designed to reward long-term alignment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* ── Donut Chart ── */}
          <div className="relative flex items-center justify-center">
            <svg
              viewBox="0 0 320 320"
              className="w-full max-w-[340px] mx-auto select-none"
              style={{ filter: "drop-shadow(0 0 40px oklch(0.82 0.22 155 / 0.25))" }}
            >
              {segments.map((seg, i) => {
                const isActive  = active  === i;
                const isHovered = hovered === i;
                const isFocused = isActive || isHovered;
                const gap = 2.5; // degrees gap between segments
                const d = describeArc(CX, CY, RADIUS, seg.startDeg + gap / 2, seg.endDeg - gap / 2);

                // Translate segment outward when focused
                const angle = (seg.midDeg - 90) * (Math.PI / 180);
                const tx = isFocused ? Math.cos(angle) * 10 : 0;
                const ty = isFocused ? Math.sin(angle) * 10 : 0;

                return (
                  <g key={i}
                    style={{ transform: `translate(${tx}px, ${ty}px)`, transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}
                    onClick={() => setActive(active === i ? null : i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer"
                  >
                    {/* glow layer */}
                    {isFocused && (
                      <path
                        d={d}
                        fill="none"
                        stroke={seg.color}
                        strokeWidth={STROKE + 12}
                        strokeLinecap="round"
                        opacity={0.3}
                      />
                    )}
                    <path
                      d={d}
                      fill="none"
                      stroke={seg.color}
                      strokeWidth={isFocused ? STROKE + 4 : STROKE}
                      strokeLinecap="round"
                      opacity={focusIdx !== null && !isFocused ? 0.3 : 1}
                      style={{ transition: "stroke-width 0.3s ease, opacity 0.3s ease" }}
                    />
                  </g>
                );
              })}

              {/* Center hole content */}
              <foreignObject x={CX - 80} y={CY - 68} width={160} height={136}>
                <div
                  className="w-full h-full flex flex-col items-center justify-center text-center"
                  style={{
                    background: "oklch(0.18 0.04 200)",
                    borderRadius: "50%",
                  }}
                >
                  {focusSeg ? (
                    <>
                      <div
                        className="font-display text-4xl font-bold leading-none"
                        style={{ color: focusSeg.color, transition: "color 0.3s ease" }}
                      >
                        {focusSeg.pct}%
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground mt-1.5 px-2 leading-tight">
                        {focusSeg.label}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-[9px] font-mono tracking-[0.2em] text-muted-foreground mb-1">
                        MAX SUPPLY
                      </div>
                      <div className="font-display text-lg font-bold leading-tight px-2">
                        1,000,000,000
                      </div>
                      <div className="font-mono text-[10px] text-primary mt-1">$LFUND · SPL</div>
                    </>
                  )}
                </div>
              </foreignObject>
            </svg>
          </div>

          {/* ── Cards ── */}
          <div className="space-y-3">
            {segments.map((seg, i) => {
              const isActive  = active  === i;
              const isHovered = hovered === i;
              const isFocused = isActive || isHovered;

              return (
                <div
                  key={i}
                  className="group flex items-center gap-3 sm:gap-4 rounded-xl glass p-3 sm:p-4 cursor-pointer"
                  style={{
                    border: isFocused
                      ? `1px solid ${seg.color}`
                      : "1px solid oklch(0.82 0.22 155 / 0.15)",
                    background: isFocused
                      ? `oklch(0.22 0.04 200 / 0.85)`
                      : "oklch(0.22 0.04 200 / 0.55)",
                    boxShadow: isFocused ? `0 0 24px ${seg.color}33` : "none",
                    transform: isFocused ? "scale(1.025)" : "scale(1)",
                    transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  {/* color bar */}
                  <span
                    className="h-10 w-1.5 rounded-full shrink-0"
                    style={{
                      background: seg.color,
                      boxShadow: isFocused ? `0 0 20px ${seg.color}` : "none",
                      transition: "box-shadow 0.3s ease",
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-sm sm:text-base truncate">{seg.label}</span>
                      <span
                        className="font-display text-lg sm:text-2xl font-bold shrink-0"
                        style={{ color: isFocused ? seg.color : undefined, transition: "color 0.3s" }}
                      >
                        {seg.pct}%
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${seg.pct}%`,
                          background: seg.color,
                          boxShadow: isFocused ? `0 0 12px ${seg.color}` : "none",
                          transition: "box-shadow 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <p className="text-[11px] sm:text-xs text-muted-foreground pt-3">
              * Illustrative — final tokenomics confirmed after legal, tax &amp; securities review.
            </p>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}