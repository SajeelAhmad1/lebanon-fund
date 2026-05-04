import { useMemo, useState } from "react";
import solImage from "@/assets/sol.svg";
import logo from "@/assets/logo.png";

const TOKEN_PRICE_USD = 0.025; // $LFUND price during presale
const SOL_PRICE_USD = 175; // indicative SOL/USD
const MIN_SOL = 0.1;

type PayCurrency = "SOL" | "USDC" | "USDT";

const currencies: { id: PayCurrency; label: string; rate: number }[] = [
  { id: "SOL", label: "SOL", rate: SOL_PRICE_USD },
  { id: "USDC", label: "USDC", rate: 1 },
  { id: "USDT", label: "USDT", rate: 1 },
];

export function BuyWidget() {
  const [pay, setPay] = useState<PayCurrency>("SOL");
  const [amount, setAmount] = useState<string>("1");

  const active = currencies.find((c) => c.id === pay)!;

  const tokens = useMemo(() => {
    const n = parseFloat(amount || "0");
    if (!n || n < 0) return 0;
    const usd = n * active.rate;
    return usd / TOKEN_PRICE_USD;
  }, [amount, active.rate]);

  const usdValue = useMemo(() => {
    const n = parseFloat(amount || "0");
    return n > 0 ? n * active.rate : 0;
  }, [amount, active.rate]);

  // Presale progress (visual only)
  const raisedUsd = 1_842_500;
  const goalUsd = 5_000_000;
  const pct = Math.min(100, (raisedUsd / goalUsd) * 100);

  return (
    <div className="relative">
      {/* Glow halos */}
      <div className="absolute -inset-8 bg-primary/25 blur-[80px] rounded-full -z-10 animate-pulse-glow" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-accent/30 blur-[80px] rounded-full -z-10" />

      <div className="relative rounded-3xl glass border border-primary/30 p-6 sm:p-7 shadow-[0_30px_80px_-20px_oklch(0.13_0.035_205/0.8)] backdrop-blur-xl overflow-hidden">
        {/* corner shimmer */}
        <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary">
              Presale · Stage 02
            </span>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Price
            </div>
            <div className="font-display text-sm font-bold">
              1 $LFUND = ${TOKEN_PRICE_USD.toFixed(3)}
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="flex items-end justify-between mb-2">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Raised
              </div>
              <div className="font-display text-2xl font-bold text-foreground">
                ${raisedUsd.toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Goal
              </div>
              <div className="font-display text-sm font-bold text-muted-foreground">
                ${goalUsd.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="relative h-2.5 rounded-full bg-secondary/60 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${pct}%`,
                background:
                  "linear-gradient(90deg, oklch(0.82 0.22 155), oklch(0.90 0.20 165))",
                boxShadow: "0 0 24px oklch(0.82 0.22 155 / 0.7)",
              }}
            />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] font-mono text-muted-foreground">
            <span>{pct.toFixed(1)}% filled</span>
            <span>Next stage: $0.030</span>
          </div>
        </div>

        {/* Currency tabs */}
        <div className="mt-6 grid grid-cols-3 gap-2 p-1 rounded-xl bg-secondary/50 border border-border/60">
          {currencies.map((c) => {
            const isActive = c.id === pay;
            return (
              <button
                key={c.id}
                onClick={() => setPay(c.id)}
                className={`relative rounded-lg py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_oklch(0.82_0.22_155/0.5)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Inputs */}
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-border/60 bg-deep/40 p-3">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <span>You pay</span>
              <span>
                Min {MIN_SOL} {active.label}
              </span>
            </div>
            <div className="mt-1 flex items-center gap-3">
              <input
                inputMode="decimal"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value.replace(/[^0-9.]/g, ""))
                }
                placeholder="0.0"
                className="flex-1 bg-transparent outline-none font-display text-2xl font-bold text-foreground placeholder:text-muted-foreground/40"
              />
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-secondary/70 px-2.5 py-1.5 border border-border/60">
                <img src={solImage} alt="Solana Image" />
                <span className="text-xs font-mono font-semibold">
                  {active.label}
                </span>
              </div>
            </div>
            <div className="mt-1 text-[10px] font-mono text-muted-foreground">
              ≈ $
              {usdValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
          </div>

          {/* swap arrow */}
          <div className="flex justify-center -my-1.5 relative z-10">
            <div className="h-7 w-7 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-[0_0_20px_oklch(0.82_0.22_155/0.6)]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>

          <div className="rounded-xl border border-primary/30 bg-primary/5 p-3">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <span>You receive</span>
              <span className="text-primary">Locked rate</span>
            </div>
            <div className="mt-1 flex items-center gap-3">
              <div className="flex-1 font-display text-2xl font-bold text-cedar-gradient truncate">
                {tokens.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-deep/70 px-2.5 py-1.5 border border-primary/40">
                <img src={logo} alt="Logo" className="h-5 w-5" />
                <span className="text-xs font-mono font-semibold">$LFUND</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-5 w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.82_0.22_155/0.45)] hover:shadow-[0_0_60px_oklch(0.82_0.22_155/0.75)] transition-all">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
            <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
          </svg>
          Connect Wallet & Buy
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>

        {/* footer info */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            { k: "Network", v: "Solana" },
            { k: "Vesting", v: "Linear" },
            { k: "TGE", v: "Q3 2025" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-lg bg-secondary/40 border border-border/40 py-2"
            >
              <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">
                {m.k}
              </div>
              <div className="text-xs font-display font-bold">{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute -left-4 -top-4 glass rounded-xl px-3 py-2 shadow-xl hidden sm:block animate-float">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono">TX 0.0003 SOL</span>
        </div>
      </div>
      <div className="absolute -right-3 -bottom-4 glass rounded-xl px-3 py-2 shadow-xl hidden sm:block">
        <div className="text-[10px] font-mono text-muted-foreground">
          DIASPORA
        </div>
        <div className="text-sm font-display font-bold">12M+ globally</div>
      </div>
    </div>
  );
}
