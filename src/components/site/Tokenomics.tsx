export function Tokenomics() {
  const allocations = [
    { label: "Public & Ecosystem", pct: 40, color: "oklch(0.82 0.22 155)" },
    { label: "Treasury Reserves", pct: 20, color: "oklch(0.70 0.20 185)" },
    { label: "Strategic Partners", pct: 15, color: "oklch(0.85 0.13 85)" },
    { label: "Team & Advisors", pct: 15, color: "oklch(0.55 0.15 200)" },
    { label: "Grants & Community", pct: 10, color: "oklch(0.65 0.18 145)" },
  ];

  // build conic gradient
  let cursor = 0;
  const stops = allocations.map((a) => {
    const start = cursor;
    cursor += a.pct;
    return `${a.color} ${start}% ${cursor}%`;
  }).join(", ");

  return (
    <section id="tokenomics" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center max-w-7xl mb-12 sm:mb-16">
          <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-primary mb-3 sm:mb-4">TOKENOMICS</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            TOKENOMICS
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground">
            Designed to reward long-term alignment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="relative aspect-square max-w-xs sm:max-w-md mx-auto w-full">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(${stops})`,
                filter: "drop-shadow(0 0 40px oklch(0.82 0.22 155 / 0.35))",
              }}
            />
            <div className="absolute inset-[18%] rounded-full bg-background grid place-items-center ring-1 ring-border p-2">
              <div className="text-center">
                <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-muted-foreground">
                  MAX SUPPLY
                </div>
                <div className="font-display text-xl sm:text-3xl md:text-4xl font-bold mt-1.5 sm:mt-2">1,000,000,000</div>
                <div className="font-mono text-[10px] sm:text-xs text-primary mt-1">$LFUND · SPL</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {allocations.map((a) => (
              <div
                key={a.label}
                className="group flex items-center gap-3 sm:gap-4 rounded-xl glass p-3 sm:p-4 hover:bg-card/80 transition-colors"
              >
                <span
                  className="h-10 w-1.5 rounded-full shrink-0"
                  style={{ background: a.color, boxShadow: `0 0 20px ${a.color}` }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-sm sm:text-base truncate">{a.label}</span>
                    <span className="font-display text-lg sm:text-2xl font-bold shrink-0">{a.pct}%</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${a.pct}%`, background: a.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <p className="text-[11px] sm:text-xs text-muted-foreground pt-3">
              * Illustrative — final tokenomics confirmed after legal, tax & securities review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
