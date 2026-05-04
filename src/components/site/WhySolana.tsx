export function WhySolana() {
  const stats = [
    { v: "65,000", u: "TPS", l: "Throughput for global participation" },
    { v: "$0.0003", u: "AVG FEE", l: "Cross-border transfers at scale" },
    { v: "400ms", u: "FINALITY", l: "Real-time treasury operations" },
    { v: "24/7", u: "UPTIME", l: "Mature SPL standard & tooling" },
  ];

  return (
    <section id="solana" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] rounded-full bg-accent/20 blur-[100px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center max-w-7xl mb-12 sm:mb-16">
          <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-primary mb-3 sm:mb-4">RAILS</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Built on <span className="text-cedar-gradient">Solana</span> for speed, scale, and
            consumer reach.
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground text-center max-w-5xl">
            A fund ecosystem with frequent treasury movements, governance voting, staking, and
            cross-border participation needs rails built for it. Solana delivers — without the
            cost burden of EVM chains.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-2xl sm:rounded-3xl overflow-hidden border-1 border-[#00EB81]">
          {stats.map((s, i) => (
            <div key={i} className="bg-card p-5 sm:p-8 hover:bg-card/60 transition-colors">
              <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-primary">{s.u}</div>
              <div className="mt-2 font-display text-2xl sm:text-4xl font-bold break-words">{s.v}</div>
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
