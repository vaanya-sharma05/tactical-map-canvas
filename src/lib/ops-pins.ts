export type OpsPin = {
  id: string;
  label: string;
  main: boolean;
  parent?: string;
  lon: number;
  lat: number;
  code: string;
  route: string;
  gate: string;
  body: string[];
};

/** 9 pins spread across every continent so nothing clusters. */
export const OPS_PINS: OpsPin[] = [
  {
    id: "about",
    label: "ABOUT US",
    main: true,
    lon: -100,
    lat: 44,
    code: "TASK-2026",
    route: "HQ → WORLD",
    gate: "A01",
    body: [
      "INTEL X is a clandestine 72-hour operation for builders who move high-stakes digital cargo across borders.",
      "Three rounds. One syndicate. No questions asked.",
    ],
  },
  {
    id: "r1",
    label: "ROUND 1",
    main: false,
    parent: "about",
    lon: -112,
    lat: 20,
    code: "TASK-2026/R1",
    route: "MEX → SFO",
    gate: "B11",
    body: [
      "Round 1 — Recon. Assemble your crew and file the opening manifest.",
      "Duration: 24 hours. Payload: concept + prototype drop.",
    ],
  },
  {
    id: "r2",
    label: "ROUND 2",
    main: false,
    parent: "about",
    lon: -56,
    lat: -18,
    code: "TASK-2026/R2",
    route: "GRU → LIS",
    gate: "B12",
    body: [
      "Round 2 — Transit. Move the payload past the border controls.",
      "Duration: 24 hours. Checkpoint review at the halfway mark.",
    ],
  },
  {
    id: "r3",
    label: "ROUND 3",
    main: false,
    parent: "about",
    lon: -52,
    lat: 62,
    code: "TASK-2026/R3",
    route: "YQX → JFK",
    gate: "B13",
    body: [
      "Round 3 — Extraction. Final delivery to the syndicate council.",
      "Duration: 24 hours. Stakes: the full prize vault.",
    ],
  },
  {
    id: "rulebook",
    label: "RULEBOOK",
    main: true,
    lon: 14,
    lat: 51,
    code: "TASK-2026/CODE",
    route: "BER → ANY",
    gate: "C00",
    body: [
      "The Smuggler's Code. Read it once, follow it always.",
      "Payload limits, border controls, interception penalties — all clauses binding.",
    ],
  },
  {
    id: "rr1",
    label: "ROUND 1 RULES",
    main: false,
    parent: "rulebook",
    lon: 18,
    lat: 4,
    code: "CODE/01",
    route: "CLAUSE 01",
    gate: "C11",
    body: [
      "Payload limits: max 4 operatives per crew, one manifest per crew.",
      "All cargo must be original. Contraband from prior ops is seized.",
    ],
  },
  {
    id: "rr2",
    label: "ROUND 2 RULES",
    main: false,
    parent: "rulebook",
    lon: 48,
    lat: 32,
    code: "CODE/02",
    route: "CLAUSE 02",
    gate: "C12",
    body: [
      "Border controls: deadlines are hard. Late manifests are impounded.",
      "One checkpoint appeal permitted per crew, filed in writing.",
    ],
  },
  {
    id: "rr3",
    label: "ROUND 3 RULES",
    main: false,
    parent: "rulebook",
    lon: 100,
    lat: 22,
    code: "CODE/03",
    route: "CLAUSE 03",
    gate: "C13",
    body: [
      "Interception penalties: plagiarism, leaks, or tampering end the run.",
      "Council rulings are final and unappealable.",
    ],
  },
  {
    id: "register",
    label: "REGISTER",
    main: true,
    lon: 142,
    lat: -28,
    code: "TASK-2026/BP",
    route: "ANY → INTEL X",
    gate: "Z99",
    body: [
      "Acquire your boarding pass. Seats are limited and vetted.",
      "Registration closes when the last gate shuts.",
    ],
  },
];
