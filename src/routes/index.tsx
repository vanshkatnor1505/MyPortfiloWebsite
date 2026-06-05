import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { Chronicle } from "@/components/portfolio/Chronicle";
import { Vision } from "@/components/portfolio/Vision";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanshdeep Katnor — Data Science & Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Vanshdeep Katnor — BTech Data Science student, web developer, ML engineer, and Unity game developer.",
      },
      { property: "og:title", content: "Vanshdeep Katnor — Portfolio" },
      {
        property: "og:description",
        content:
          "React, Python, Machine Learning, Unity Game Dev — built with precision and passion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Vanshdeep Katnor — Portfolio" },
      {
        name: "twitter:description",
        content:
          "React, Python, Machine Learning, Unity Game Dev — built with precision and passion.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-void text-silver">
      <div className="pointer-events-none fixed inset-0 z-[60] grain-overlay" aria-hidden />
      <CursorGlow />
      <Nav />
      <Hero />
      <Philosophy />
      <Projects />
      <Stack />
      <Chronicle />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
