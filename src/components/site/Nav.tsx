import { useEffect, useState } from "react";
import heroImg from "@/assets/logo.png?url";
import MaxWidth from "../ui/max-width";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#vision", label: "Vision" },
    { href: "#solana", label: "Solana" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#strategy", label: "Strategy" },
    { href: "#roadmap", label: "Roadmap" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
      }`}
    >
      <MaxWidth>
        <div
          className={`flex items-center justify-between rounded-full px-3 sm:px-5 py-2.5 sm:py-3 transition-all glass-strong`}
        >
          <a href="#top" className="flex items-center gap-2 sm:gap-2.5 min-w-0" onClick={() => setOpen(false)}>
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 grid place-items-center shrink-0">
              <img src={heroImg} alt="Lebanon Fund" className="" />
              <span className="absolute inset-0 rounded-xl blur-md bg-primary/30 -z-10" />
            </div>
            <div className="leading-tight min-w-0">
              <div className="font-display text-xs sm:text-sm font-bold tracking-wide truncate">LEBANON FUND</div>
              <div className="text-[9px] sm:text-[10px] font-mono text-muted-foreground tracking-[0.2em] truncate">
                $LFUND · SOLANA
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/whitepaper"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-shadow"
              style={{ border: "1px solid #90ABA9", color: "#90ABA9" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1428 7.71429V18.8571C23.1428 19.4255 22.9171 19.9705 22.5152 20.3724C22.1133 20.7742 21.5683 21 21 21M21 21C20.4317 21 19.8866 20.7742 19.4847 20.3724C19.0829 19.9705 18.8571 19.4255 18.8571 18.8571V3.85714C18.8571 3.62981 18.7668 3.4118 18.6061 3.25105C18.4453 3.09031 18.2273 3 18 3H1.71426C1.48693 3 1.26891 3.09031 1.10817 3.25105C0.947423 3.4118 0.857117 3.62981 0.857117 3.85714V19.2857C0.857117 19.7404 1.03773 20.1764 1.35922 20.4979C1.68071 20.8194 2.11675 21 2.5714 21H21Z" stroke="#90ABA9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.00024 16.7147H13.7145M13.7145 7.28613H6.00024V11.5718H13.7145V7.28613Z" stroke="#90ABA9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              WhitePaper
            </a>
            <a
              href="#join"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:shadow-[0_0_30px_oklch(0.82_0.22_155/0.5)] transition-shadow"
            >
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.694 0H11.806C13.644 0 15.1 1.19209e-07 16.239 0.153C17.411 0.311 18.36 0.643 19.109 1.391C20.033 2.316 20.328 3.554 20.435 5.161C21.012 5.414 21.448 5.951 21.495 6.631C21.5 6.692 21.5 6.757 21.5 6.817V10.683C21.5 10.743 21.5 10.808 21.496 10.868C21.448 11.548 21.012 12.086 20.435 12.34C20.328 13.946 20.033 15.184 19.109 16.109C18.36 16.857 17.411 17.189 16.239 17.347C15.099 17.5 13.644 17.5 11.806 17.5H8.694C6.856 17.5 5.4 17.5 4.261 17.347C3.089 17.189 2.14 16.857 1.391 16.109C0.643 15.36 0.311 14.411 0.153 13.239C0 12.099 0 10.644 0 8.806V8.694C0 6.856 0 5.4 0.153 4.261C0.311 3.089 0.643 2.14 1.391 1.391C2.14 0.643 3.089 0.311 4.261 0.153C5.401 1.19209e-07 6.856 0 8.694 0ZM18.918 12.5H16.98C14.835 12.5 12.999 10.872 12.999 8.75C12.999 6.628 14.835 5 16.979 5H18.917C18.803 3.659 18.546 2.95 18.047 2.452C17.624 2.029 17.044 1.775 16.038 1.64C15.011 1.502 13.656 1.5 11.749 1.5H8.749C6.842 1.5 5.488 1.502 4.459 1.64C3.454 1.775 2.874 2.029 2.451 2.452C2.028 2.875 1.775 3.455 1.64 4.46C1.502 5.488 1.5 6.842 1.5 8.749C1.5 10.656 1.502 12.011 1.64 13.039C1.775 14.044 2.029 14.624 2.452 15.047C2.875 15.47 3.455 15.724 4.461 15.859C5.489 15.997 6.843 15.999 8.75 15.999H11.75C13.657 15.999 15.012 15.997 16.04 15.859C17.045 15.724 17.625 15.47 18.048 15.047C18.547 14.549 18.804 13.841 18.918 12.499M4 4.75C4 4.55109 4.07902 4.36032 4.21967 4.21967C4.36032 4.07902 4.55109 4 4.75 4H8.75C8.94891 4 9.13968 4.07902 9.28033 4.21967C9.42098 4.36032 9.5 4.55109 9.5 4.75C9.5 4.94891 9.42098 5.13968 9.28033 5.28033C9.13968 5.42098 8.94891 5.5 8.75 5.5H4.75C4.55109 5.5 4.36032 5.42098 4.21967 5.28033C4.07902 5.13968 4 4.94891 4 4.75ZM19.674 6.5H16.98C15.556 6.5 14.499 7.559 14.499 8.75C14.499 9.941 15.556 11 16.979 11H19.697C19.903 10.987 19.992 10.848 19.999 10.764V6.736C19.992 6.652 19.903 6.513 19.697 6.501L19.674 6.5Z" fill="currentColor"/>
              </svg>
              Connect Wallet
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg glass"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-strong p-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-base text-foreground/90 hover:text-primary border-b border-border/40 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Join Presale
              </a>
            </nav>
          </div>
        )}
      </MaxWidth>
    </header>
  );
}

export function CedarMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M16 2 L22 9 L19 9 L24 15 L20 15 L26 22 L18 22 L18 28 L14 28 L14 22 L6 22 L12 15 L8 15 L13 9 L10 9 Z"
        fill="currentColor"
      />
    </svg>
  );
}
