import { useMemo } from "react";
import { WORLD_PATHS, MAP_W, MAP_H } from "@/lib/world-map";

const project = (lon: number, lat: number): [number, number] => [
  ((lon + 180) / 360) * MAP_W,
  ((90 - lat) / 180) * MAP_H,
];

type City = { name: string; lon: number; lat: number };

const CITIES: City[] = [
  { name: "San Francisco", lon: -122.4, lat: 37.8 },
  { name: "New York", lon: -74.0, lat: 40.7 },
  { name: "São Paulo", lon: -46.6, lat: -23.5 },
  { name: "London", lon: -0.1, lat: 51.5 },
  { name: "Berlin", lon: 13.4, lat: 52.5 },
  { name: "Dubai", lon: 55.3, lat: 25.2 },
  { name: "Mumbai", lon: 72.9, lat: 19.1 },
  { name: "Singapore", lon: 103.8, lat: 1.35 },
  { name: "Tokyo", lon: 139.7, lat: 35.7 },
  { name: "Sydney", lon: 151.2, lat: -33.9 },
];

// Flight routes as [fromIndex, toIndex] pairs.
const ROUTES: Array<[number, number]> = [
  [0, 1],
  [1, 3],
  [3, 4],
  [3, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [7, 9],
  [0, 8],
  [2, 1],
  [4, 7],
  [1, 2],
];

function arcPath(a: [number, number], b: [number, number]): string {
  const mx = (a[0] + b[0]) / 2;
  const my = (a[1] + b[1]) / 2;
  const dist = Math.hypot(b[0] - a[0], b[1] - a[1]);
  // Lift the control point toward the top of the map, scaled by distance.
  const lift = Math.min(dist * 0.35, 90);
  return `M${a[0]},${a[1]} Q${mx},${my - lift} ${b[0]},${b[1]}`;
}

export function TacticalMap({ className }: { className?: string }) {
  const grid = useMemo(() => {
    const lines: string[] = [];
    // Longitude lines every 20 degrees.
    for (let lon = -160; lon < 180; lon += 20) {
      const [x] = project(lon, 0);
      lines.push(`M${x},0 L${x},${MAP_H}`);
    }
    // Latitude lines every 20 degrees.
    for (let lat = -60; lat <= 80; lat += 20) {
      const [, y] = project(0, lat);
      lines.push(`M0,${y} L${MAP_W},${y}`);
    }
    return lines;
  }, []);

  const pins = CITIES.map((c) => ({ ...c, p: project(c.lon, c.lat) }));
  const arcs = ROUTES.map(([f, t]) => arcPath(pins[f].p, pins[t].p));

  return (
    <svg
      viewBox={`0 0 ${MAP_W} ${MAP_H}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Subtle glow applied ONLY to the flight arcs, never the base map. */}
        <filter id="arc-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Lat/long tactical grid — thin, low-opacity blue. */}
      <path
        d={grid.join(" ")}
        fill="none"
        stroke="var(--map-grid)"
        strokeWidth="0.5"
        opacity="0.5"
      />

      {/* Crisp continent outlines — no fill, no blur, no glow. */}
      <g
        fill="var(--map-land-fill)"
        stroke="var(--map-line)"
        strokeWidth="0.9"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {WORLD_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* Flight arcs — thin, crisp blue with a subtle local glow. */}
      <g
        fill="none"
        stroke="var(--map-arc)"
        strokeWidth="1.1"
        strokeLinecap="round"
        filter="url(#arc-glow)"
      >
        {arcs.map((d, i) => (
          <path
            key={i}
            d={d}
            className="map-arc"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        ))}
      </g>

      {/* Sharp pin markers. */}
      <g>
        {pins.map((c, i) => (
          <g key={c.name} transform={`translate(${c.p[0]},${c.p[1]})`}>
            <circle
              r="6"
              fill="none"
              stroke="var(--map-arc)"
              strokeWidth="0.8"
              className="map-pin-ring"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <circle r="2" fill="var(--map-pin)" />
          </g>
        ))}
      </g>
    </svg>
  );
}
