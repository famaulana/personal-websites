"use client";
import { useEffect } from "react";
import Hero from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col">
      <Hero />
      <Projects />
    </div>
  );
}
