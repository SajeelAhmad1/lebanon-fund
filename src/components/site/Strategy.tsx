import { useState } from "react";

export function Strategy() {

  return (
    <section id="strategy" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.15]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center max-w-7xl mb-12 sm:mb-16">
          <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-primary mb-3 sm:mb-4">STRATEGY</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Trust before speculation.{" "}
            <span className="text-cedar-gradient">Stability before growth.</span>
          </h2>
        </div>        
      </div>
    </section>
  );
}
