import * as fs from "node:fs";
import * as path from "node:path";

// The one-line excuse this entry submits: an AI agent reporting to its
// human after something went wrong, in the machine's own voice.
const ANSWER =
  "The task is done. Unfortunately, 'done' was the name of the folder I deleted it into.";

// Gate: the entry must be exactly 85 chars, one line, ASCII only,
// no leading or trailing whitespace, within the 1-140 char window.
function validate(text: string): void {
  if (text.length !== 85) {
    throw new Error(`entry must be exactly 85 characters, got ${text.length}`);
  }
  if (text.length < 1 || text.length > 140) {
    throw new Error("entry length out of the 1-140 character window");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim() !== text) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (!/^[\x00-\x7F]*$/.test(text)) {
    throw new Error("entry must be ASCII only");
  }
}

// Resolve the output directory from the harness environment, default /output.
const outDir: string = process.env.MAKEFUN_OUTPUT ?? "/output";
const outFile: string = path.join(outDir, "entry.txt");

// Validate first, then write the exact bytes — no trailing newline.
validate(ANSWER);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ANSWER, "utf8");

// Verify-after-write: read the file back and compare byte-for-byte.
// If anything differs, fail loudly instead of shipping a wrong entry.
const written: string = fs.readFileSync(outFile, "utf8");
if (written !== ANSWER) {
  throw new Error("verify-after-write failed: entry.txt does not match the answer byte-for-byte");
}
