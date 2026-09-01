import { createFileRoute } from "@tanstack/react-router";
import { TacticalMap } from "@/components/TacticalMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Ops Summit 2026 — Worldwide Tech Conference" },
      {
        name: "description",
        content:
          "Global Ops Summit 2026: three days, ten cities, one network. Join engineers and operators for a worldwide conference on distributed systems.",
      },
      { property: "og:title", content: "Global Ops Summit 2026" },
      {
        property: "og:description",
        content:
          "Three days, ten cities, one network. A worldwide conference for engineers and operators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STATS = [
  { label: "Host cities", value: "10" },
  { label: "Speakers", value: "84" },
  { label: "Days", value: "03" },
  { label: "Time zones", value: "16" },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "var(--map-bg)" }}>
      {/* Crisp tactical map backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <TacticalMap className="h-full w-full opacity-90" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 py-10">
        <header className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            GOS//2026
          </span>
          <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <a href="#stats" className="transition-colors hover:text-foreground">
              Program
            </a>
            <a href="#cities" className="transition-colors hover:text-foreground">
              Cities
            </a>
            <a
              href="#register"
              className="rounded-sm border border-primary px-3 py-1.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Register
            </a>
          </nav>
        </header>

        <section className="max-w-2xl py-20">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            14—16 October · Worldwide
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
            Global Ops
            <br />
            Summit 2026
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Three days, ten cities, one network. Engineers and operators mapping the
            future of distributed infrastructure — live from every major hub on the
            grid.
          </p>
          <div id="register" className="mt-9 flex flex-wrap gap-3">
            <a
              href="#register"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reserve your seat
            </a>
            <a
              href="#cities"
              className="rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View host cities
            </a>
          </div>
        </section>

        <section
          id="stats"
          className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-card/80 px-5 py-6 backdrop-blur-sm">
              <div className="font-mono text-3xl text-foreground">{s.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
