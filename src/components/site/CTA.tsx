import MaxWidth from "../ui/max-width";

export function CTA() {
  return (
    <section id="join" className="relative py-20 sm:py-28">
      <MaxWidth >
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] glass-strong p-6 sm:p-12 lg:p-20 text-center">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[300px] sm:h-[400px] w-[500px] sm:w-[700px] max-w-full rounded-full bg-primary/30 blur-[100px] sm:blur-[120px]" />
          <div className="absolute -bottom-20 right-0 h-[200px] sm:h-[300px] w-[200px] sm:w-[300px] rounded-full bg-accent/20 blur-[100px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 mb-5 sm:mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono tracking-wider">PRESALE WHITELIST OPEN</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1] tracking-tight max-w-3xl mx-auto">
              The cedar stands. <br />
              <span className="text-cedar-gradient">The chain remembers.</span>
            </h2>

            <p className="mt-5 sm:mt-6 max-w-xl mx-auto text-base sm:text-lg text-muted-foreground">
              Join the diaspora-powered movement rebuilding Lebanese capital infrastructure on
              transparent, programmable rails.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 rounded-full bg-background/80 border border-border px-5 sm:px-6 py-3 sm:py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.82_0.22_155/0.4)] hover:shadow-[0_0_60px_oklch(0.82_0.22_155/0.7)] transition-shadow whitespace-nowrap"
              >
                Reserve allocation
              </button>
            </form>

            <p className="mt-4 text-[11px] sm:text-xs text-muted-foreground px-2">
              By joining, you confirm you are not a restricted person. This is not an offer to sell securities.
            </p>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
