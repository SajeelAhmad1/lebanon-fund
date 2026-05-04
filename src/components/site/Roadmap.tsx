export function Roadmap() {
  const phases = [
    {
      q: "Phase 01",
      title: "Legal & Structural Foundation",
      items: ["Jurisdiction selection (SPV / foundation)", "AML & sanctions framework", "Custody & administration partners"],
      status: "active",
    },
    {
      q: "Phase 02",
      title: "Token Architecture & Audit",
      items: ["SPL token deployment", "Multisig treasury programs", "Independent security audits"],
      status: "next",
    },
    {
      q: "Phase 03",
      title: "Pilot & Treasury Reporting",
      items: ["Phased public rollout", "Reserve dashboards & oracles", "Wallet transparency systems"],
      status: "next",
    },
    {
      q: "Phase 04",
      title: "Ecosystem Activation",
      items: ["Solana-native staking", "Governance portal launch", "Diaspora partnerships & tokenized access"],
      status: "future",
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-primary mb-3 sm:mb-4">06 / ROADMAP</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            A measured path from{" "}
            <span className="text-cedar-gradient">structure to scale.</span>
          </h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {phases.map((p, i) => (
              <div key={i} className="relative">
                <div className="hidden lg:flex absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className={`h-4 w-4 rounded-full ring-4 ring-background ${p.status === "active" ? "bg-primary animate-pulse" : "bg-border"}`} />
                </div>
                <div className={`lg:mt-24 rounded-2xl p-5 sm:p-6 transition-all ${
                  p.status === "active" ? "glass-strong ring-cedar" : "glass"
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-primary">{p.q}</div>
                    {p.status === "active" && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                        NOW
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold leading-tight">{p.title}</h3>
                  <ul className="mt-3 sm:mt-4 space-y-2">
                    {p.items.map((it) => (
                      <li key={it} className="text-xs sm:text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-0.5">›</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
