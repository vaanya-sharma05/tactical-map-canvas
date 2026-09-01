import { createFileRoute } from "@tanstack/react-router";
import { Radar, Ticket } from "lucide-react";
import { OpsMap } from "@/components/OpsMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INTEL X — Operation Taskari | Underground Ops Summit 2026" },
      {
        name: "description",
        content:
          "INTEL X: a 72-hour clandestine operation. Explore the tactical world map, open the classified boarding passes and acquire your seat before the last gate shuts.",
      },
      { property: "og:title", content: "INTEL X — Operation Taskari" },
      {
        property: "og:description",
        content:
          "A 72-hour clandestine operation. Tap the map pins to open your classified boarding passes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "var(--map-bg)" }}
    >
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-8 sm:px-8">
        <header className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            <Radar className="size-4" />
            INTEL X
          </span>
          <a
            href="#map"
            className="rounded-sm border border-primary/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:text-xs"
          >
            Register
          </a>
        </header>

        <section className="pt-14 text-center sm:pt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-primary sm:text-xs">
            Operation Taskari · No questions asked
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Move high-stakes cargo
            <br />
            across every border
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tap any station on the grid to open its classified boarding pass.
          </p>
          <a
            href="#map"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-[0_0_28px_-4px_color-mix(in_oklab,var(--primary)_75%,transparent)] transition-opacity hover:opacity-90"
          >
            <Ticket className="size-4" />
            Acquire boarding pass
          </a>
        </section>

        <section id="map" className="mt-12 pb-16">
          <OpsMap />
        </section>
      </div>
    </main>
  );
}
