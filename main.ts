import { mkdirSync, writeFileSync } from "node:fs";

// 5-7-5 haiku about debugging: a breakpoint at midnight, a log that
// claims innocence, and git blame landing the last line on the author.
const lines = [
  "Breakpoint at midnight",
  "the log insists nothing moved",
  "git blames only me",
];

const haiku = lines.join("\n") + "\n";
if (haiku.length > 200) {
  throw new Error(`haiku too long: ${haiku.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku);
