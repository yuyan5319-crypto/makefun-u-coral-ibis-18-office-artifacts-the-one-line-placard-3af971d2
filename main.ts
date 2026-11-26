// Office Artifacts: The One-Line Placard Contest
//
// Writes a single-line museum placard for an ordinary office object,
// treated as an ancient artifact, to <MAKEFUN_OUTPUT_DIR>/entry.txt.
//
// Deterministic by design: the text is fixed, there is no input, no
// randomness, no clock and no network. The grader runs this twice and
// the two runs must agree, so the output never varies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The placard is assembled from labelled catalogue parts, then checked
// against the gate (one line, 1-180 characters) before it is written,
// so a bad edit fails loudly here instead of silently at grading time.
const CATALOGUE = "Stapler, c. 1987, chromed steel.";
const HISTORY =
  "Bound 12,000 pages into a single covenant; retired after the Great Unjamming of '94.";
const PROVENANCE = "Gift of the Filing Department.";

const PLACARD = [CATALOGUE, HISTORY, PROVENANCE].join(" ");

if (PLACARD.length < 1 || PLACARD.length > 180 || PLACARD.includes("\n")) {
  throw new Error(
    `placard fails the gate: ${PLACARD.length} characters, must be 1-180 on one line`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLACARD + "\n", "utf8");
