import { createFileRoute } from "@tanstack/react-router";
import { Radar } from "lucide-react";
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
        <header className="flex items-center justify-start">
          <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            <Radar className="size-4" />
            INTEL X
          </span>
        </header>

        <section id="map" className="flex flex-1 items-center justify-center py-8">
          <div className="w-full">
            <OpsMap />
          </div>
        </section>
      </div>
    </main>
  );
}
