import heroImg from "@/assets/logo.png?url";
import xSvg from "@/assets/x.svg?url";
import telegramSvg from "@/assets/telegram.svg?url";

export function Footer() {
  const links = ["Vision", "Solana", "Tokenomics", "Strategy", "Roadmap", "Whitepaper"];

  return (
    <footer className="relative pb-0 px-4 sm:px-8">
      <div
        className="mx-auto px-8 sm:px-12 pt-10 pb-8 flex flex-col min-h-[220px]"
        style={{ background: "#042F32B2", borderRadius: "22px 22px 0 0" }}
      >
        {/* two-column layout with equal baseline */}
        <div className="flex justify-between gap-8 mb-6">
          {/* left: logo + description */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-2.5">
              <img src={heroImg} alt="Lebanon Fund" className="h-10 w-10" />
              <div>
                <div className="font-display font-bold tracking-wide">LEBANON FUND</div>
                <div className="text-[10px] font-mono text-muted-foreground tracking-[0.2em]">
                  $LFUND · SOLANA
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mt-4">
              A Solana-based utility &amp; governance token mobilizing global capital into transparent,
              blockchain-auditable Lebanon-focused opportunities.
            </p>
          </div>

          {/* right: social icons top, nav links bottom */}
          <div className="flex flex-col justify-between items-end">
            <div className="flex items-center gap-3">
              <a href="#" aria-label="X / Twitter">
                <img src={xSvg} alt="X" className="h-[45px] w-[45px]" />
              </a>
              <a href="#" aria-label="Telegram">
                <img src={telegramSvg} alt="Telegram" className="h-[45px] w-[45px]" />
              </a>
            </div>
            <nav className="flex items-center gap-6 flex-wrap justify-end">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-white hover:text-foreground transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* disclaimer */}
        <div className="rounded-2xl glass p-5 mt-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Disclaimer.</strong> This site is a conceptual
            communication and not an offer to sell securities, fund interests, or crypto assets in
            any jurisdiction. Any LFUND launch will require formal legal, tax, sanctions, and AML
            review and jurisdiction-specific offering documentation.
          </p>
        </div>

        {/* copyright */}
        <div className="text-xs font-mono text-muted-foreground mt-6 text-center">
          © {new Date().getFullYear()} LEBANON FUND — ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
