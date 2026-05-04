export function Problem() {
  const stats = [
    { n: "2019", l: "Banking crisis began", sub: "Loss of trust in traditional finance" },
    { n: "98%", l: "Currency depreciation", sub: "Lira collapse vs USD" },
    { n: "12M+", l: "Lebanese diaspora", sub: "Globally underserved by local banks" },
    { n: "$0", l: "Institutional crypto rails", sub: "Local banks restricted from VAs" },
  ];
  return (
    <section id="problem" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-7xl flex flex-col items-center">
          <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-primary mb-3 sm:mb-4">CONTEXT</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
            A nation locked out of its own savings —{" "}
            <span className="text-muted-foreground">crypto became the workaround.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground text-center max-w-3xl">
            Since 2019, banking dysfunction, capital controls, and currency collapse have pushed
            Lebanese individuals and businesses toward stablecoins and peer-to-peer rails. The
            informal fix proved blockchain works. LFUND formalizes it.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl glass p-4 sm:p-6 hover:border-primary/40 transition-all"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative">
                <div className="font-display text-2xl sm:text-4xl font-bold text-cedar-gradient">{s.n}</div>
                <div className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base">{s.l}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
