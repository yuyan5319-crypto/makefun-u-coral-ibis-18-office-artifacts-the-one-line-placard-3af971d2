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

// The placard, 151 characters: a two-hole punch catalogued as an
// ancient artifact, with a date, a material and a donor, in the dry
// voice of a curator who has seen it all.
const PLACARD =
  "Two-Hole Punch, c. 1993, pressed steel. Bored 41,208 holes in the service of order; retired to a drawer, filed under 'Miscellaneous'. Gift of Accounts.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLACARD + "\n", "utf8");
