import { mkdirSync, writeFileSync } from "node:fs";

const line = "Today in Fogglemere: fog with a five-second delay, 9°C. "
  + "The 7:42 tram to Cinder Market waits on Pepper Street till the fog catches up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
