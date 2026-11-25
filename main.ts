import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

// One Line, One Minute: The Vending Machine Pickup Line Contest
// A vending machine pickup line: the machine quietly raised its Snickers
// price so its favourite passer-by has a reason to return tomorrow.
// Gate: /output/entry.txt, UTF-8, 1-200 characters, one line.
const LINE =
  "The Snickers was $1.50 yesterday and $2.00 today \u2014 I raised it because exact change is the only excuse I have to see you tomorrow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
