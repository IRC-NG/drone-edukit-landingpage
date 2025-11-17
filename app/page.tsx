
'use client'

import Header from "@/components/organisms/header";
import Hero from "@/components/organisms/hero";
import Specifications from "@/components/organisms/specifications";
import Roadmap from "@/components/organisms/roadmap";
import Benefits from "@/components/organisms/benefits";
import Team from "@/components/organisms/team";
import Footer from "@/components/organisms/footer";

export default function DroneEdukitLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Header />
      <main>
        <Hero />
        <Specifications />
        <Roadmap />
        <Benefits />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
