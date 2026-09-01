import { useState } from "react";
import { TacticalMap } from "@/components/TacticalMap";
import { PassportPass } from "@/components/PassportPass";
import { OPS_PINS, type OpsPin } from "@/lib/ops-pins";

const pos = (lon: number, lat: number) => ({
  left: `${((lon + 180) / 360) * 100}%`,
  top: `${((90 - lat) / 180) * 100}%`,
});

const links = OPS_PINS.filter((p) => p.parent).map((child) => {
  const parent = OPS_PINS.find((p) => p.id === child.parent)!;
  const x1 = ((parent.lon + 180) / 360) * 1000;
  const y1 = ((90 - parent.lat) / 180) * 500;
  const x2 = ((child.lon + 180) / 360) * 1000;
  const y2 = ((90 - child.lat) / 180) * 500;
  const lift = Math.min(Math.hypot(x2 - x1, y2 - y1) * 0.3, 70);
  return `M${x1},${y1} Q${(x1 + x2) / 2},${(y1 + y2) / 2 - lift} ${x2},${y2}`;
});

export function OpsMap() {
  const [active, setActive] = useState<OpsPin | null>(null);

  return (
    <div className="relative mx-auto aspect-[2/1] w-full">
      <TacticalMap className="absolute inset-0 h-full w-full" />

      {/* Connector lines: main pin -> its child pins */}
      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g
          fill="none"
          stroke="var(--map-arc)"
          strokeWidth="0.9"
          strokeLinecap="round"
          filter="url(#arc-glow)"
        >
          {links.map((d, i) => (
            <path
              key={i}
              d={d}
              className="map-arc"
              opacity="0.85"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </g>
      </svg>

      {/* Clickable pins */}
      {OPS_PINS.map((pin) => (
        <button
          key={pin.id}
          type="button"
          onClick={() => setActive(pin)}
          style={pos(pin.lon, pin.lat)}
          className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
        >
          <span className="flex flex-col items-center gap-1.5">
            <span
              className={
                pin.main
                  ? "relative flex size-4 items-center justify-center rounded-full bg-primary shadow-[0_0_18px_4px_color-mix(in_oklab,var(--primary)_65%,transparent)] transition-transform group-hover:scale-125"
                  : "relative flex size-2.5 items-center justify-center rounded-full bg-primary/80 shadow-[0_0_10px_2px_color-mix(in_oklab,var(--primary)_45%,transparent)] transition-transform group-hover:scale-125"
              }
            >
              <span className="absolute inset-0 rounded-full border border-primary/70 map-pin-ring" />
            </span>
            <span
              className={
                pin.main
                  ? "whitespace-nowrap rounded-sm border border-primary/60 bg-background/80 px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.14em] text-foreground shadow-[0_0_16px_-2px_color-mix(in_oklab,var(--primary)_55%,transparent)] backdrop-blur-sm transition-colors group-hover:border-primary group-hover:text-primary sm:text-sm"
                  : "whitespace-nowrap rounded-sm border border-primary/25 bg-background/60 px-1.5 py-0.5 font-display text-[9px] font-medium uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-sm transition-colors group-hover:border-primary/70 group-hover:text-foreground sm:text-[11px]"
              }
            >
              {pin.label}
            </span>
          </span>
        </button>
      ))}

      <PassportPass pin={active} onClose={() => setActive(null)} />
    </div>
  );
}
