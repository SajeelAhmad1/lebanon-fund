import MaxWidth from "../ui/max-width";

export function Vision() {
  const pillars = [
    {
      num: "01",
      title: "Capital Providers",
      desc: "Diaspora and global supporters allocating into a transparent, hard-currency-oriented treasury.",
      stat: "$2.4B",
      statLabel: "Diaspora remittances / yr",
    },
    {
      num: "02",
      title: "Governance Holders",
      desc: "Token holders coordinate on treasury policy, grants, and ecosystem direction through on-chain voting.",
      stat: "100%",
      statLabel: "On-chain transparency",
    },
    {
      num: "03",
      title: "Ecosystem Partners",
      desc: "Originators of real economic opportunities — SMEs, trade finance, and infrastructure receivables.",
      stat: "3 Layer",
      statLabel: "Vetting framework",
    },
  ];

  return (
    <section id="vision" className="relative py-20 sm:py-32 overflow-hidden">
      {/* ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-primary/10 blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-accent/10 blur-[100px] sm:blur-[120px]" />
      </div>

      <MaxWidth >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-12 sm:mb-20">
          <div>
            <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-primary mb-3 sm:mb-4 bg-[#00EB81]/15 rounded-full px-4 py-2 max-w-max">VISION</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              The coordination layer for a{" "}
              <span className="text-cedar-gradient">resilient Lebanon Fund.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground">
            Not a bank rebuilt on-chain — a programmable treasury and participation system aligning
            three groups around transparent rules, structured impact, and selective recovery
            exposure.
          </p>
        </div>

        {/* Vertical timeline / connected pillars */}
        <div className="relative">
          {/* vertical connecting line */}
          <div className="absolute left-5 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {pillars.map((p, i) => (
              <div
                key={i}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* node dot */}
                <div className="absolute left-5 sm:left-8 md:left-1/2 top-2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />
                    <div className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-primary ring-4 ring-background" />
                  </div>
                </div>

                {/* content side */}
                <div className={`pl-12 sm:pl-20 md:pl-0 ${i % 2 === 1 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-primary/70 mb-2 sm:mb-3">
                    PILLAR / {p.num}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-md md:max-w-none md:inline-block">
                    {p.desc}
                  </p>
                </div>

                {/* stat side */}
                <div className={`pl-12 sm:pl-20 md:pl-0 ${i % 2 === 1 ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right"}`}>
                  <div className="inline-block">
                    <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-cedar-gradient leading-none">
                      {p.stat}
                    </div>
                    <div className="mt-2 sm:mt-3 font-mono text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      {p.statLabel}
                    </div>
                    <div className={`mt-3 sm:mt-4 h-px w-20 sm:w-24 bg-gradient-to-r from-primary to-transparent ${
                      i % 2 === 1 ? "" : "md:ml-auto md:bg-gradient-to-l"
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
