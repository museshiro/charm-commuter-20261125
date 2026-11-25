import { mkdirSync, writeFileSync } from "node:fs";

// One-line forecast for Dripwick. The grader sandbox is read-only, so the
// entry is written only to the absolute path /output/entry.txt — never to a
// relative entry.txt — and with no trailing newline, exactly as specified.
const line = "Today in Dripwick: rain falling upwards, 11°C. Hold your umbrella upside down. The 8:15 bus is still late.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
