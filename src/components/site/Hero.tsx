import MaxWidth from "../ui/max-width";
import { BuyWidget } from "./BuyWidget";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* grid + glow backdrop */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[300px] sm:h-[500px] w-[600px] sm:w-[900px] max-w-full rounded-full bg-primary/20 blur-[100px] sm:blur-[140px] -z-0" />
      <div className="absolute bottom-0 right-0 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-accent/15 blur-[100px] sm:blur-[120px]" />

      <MaxWidth className="relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 mb-5 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-muted-foreground">
                LIVE · SOLANA · SPL TOKEN
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight lg:max-w-[650px] ">
              Global crypto access to
              <span className="block text-cedar-gradient">Lebanese markets.</span>
            </h1>

            <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              LFUND is a Solana-based utility & governance token mobilizing diaspora
              capital into transparent, blockchain-auditable opportunities — built on
              the rails of trust Lebanon has been waiting for.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#join"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.82_0.22_155/0.4)] hover:shadow-[0_0_60px_oklch(0.82_0.22_155/0.7)] transition-all"
              >
                Acquire $LFUND
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#whitepaper"
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-foreground hover:border-primary/40 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1428 7.71429V18.8571C23.1428 19.4255 22.9171 19.9705 22.5152 20.3724C22.1133 20.7742 21.5683 21 21 21M21 21C20.4317 21 19.8866 20.7742 19.4847 20.3724C19.0829 19.9705 18.8571 19.4255 18.8571 18.8571V3.85714C18.8571 3.62981 18.7668 3.4118 18.6061 3.25105C18.4453 3.09031 18.2273 3 18 3H1.71426C1.48693 3 1.26891 3.09031 1.10817 3.25105C0.947423 3.4118 0.857117 3.62981 0.857117 3.85714V19.2857C0.857117 19.7404 1.03773 20.1764 1.35922 20.4979C1.68071 20.8194 2.11675 21 2.5714 21H21Z" stroke="#90ABA9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.00024 16.7147H13.7145M13.7145 7.28613H6.00024V11.5718H13.7145V7.28613Z" stroke="#90ABA9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                {/* <img src={wallet} alt="Solana Image" className="" /> */}
                Read Whitepaper
              </a>
            </div>

            {/* metric pills */}
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg">
              {[
                { k: "Chain", v: "Solana" },
                { k: "Standard", v: "SPL" },
                { k: "Supply", v: "1B Max" },
              ].map((m) => (
                <div key={m.k} className="glass rounded-xl p-3 sm:p-4">
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {m.k}
                  </div>
                  <div className="mt-1 font-display text-base sm:text-xl font-bold text-foreground">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
            <BuyWidget />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
