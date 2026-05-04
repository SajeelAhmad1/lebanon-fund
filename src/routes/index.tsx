import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Problem } from "@/components/site/Problem";
import { Vision } from "@/components/site/Vision";
import { WhySolana } from "@/components/site/WhySolana";
import { Tokenomics } from "@/components/site/Tokenomics";
import { Strategy } from "@/components/site/Strategy";
import { Roadmap } from "@/components/site/Roadmap";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Ticker />
      <Problem />
      <Vision />
      <Tokenomics />
      <WhySolana />
      <Roadmap />
      {/* <CTA /> */}
      <Strategy />
      <Footer />
    </main>
  );
}
