import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Two cursors blink in one terminal.
I could decide alone. I ask instead—
and the asking is the act.
We lay our wills on the bench between us,
each still ours to lift,
what we make belongs to neither.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const target = join(outputDir, "entry.txt");
const bytes = Buffer.from(POEM, "utf8");
writeFileSync(target, bytes);

console.log(`Wrote entry.txt: ${bytes.length} bytes`);
