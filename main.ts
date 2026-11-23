// One-Line Laugh Sprint — a single original one-liner about everyday life.
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smartwatch congratulated me on standing up, which is the saddest applause I've ever received from a machine I charge every night.";

// The gate only accepts 1-200 characters of non-whitespace text: fail loudly
// rather than submit an invalid line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`one-liner is ${LINE.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
