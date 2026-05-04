import MaxWidth from "../ui/max-width";

export function Ticker() {
  const items = [
    "DIASPORA CAPITAL",
    "ON-CHAIN TRANSPARENCY",
    "SOLANA SPL",
    "TREASURY GOVERNANCE",
    "STAKING REWARDS",
    "TOKENIZED FUND",
    "HARD-CURRENCY ANCHORED",
    "LEBANON-FOCUSED",
  ];
  const doubled = [...items, ...items];
  return (
    <MaxWidth className="relative border-y border-border/50 bg-deep/50 overflow-hidden py-3 sm:py-5">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-3 sm:gap-6 px-3 sm:px-6 font-display text-base sm:text-2xl font-bold">
            <span className={i % 2 ? "text-cedar-gradient" : "text-muted-foreground"}>{t}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </MaxWidth>
  );
}
