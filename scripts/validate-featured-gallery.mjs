import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const FEATURED_DIR = path.join(process.cwd(), "src", "content", "featured");

const issues = [];

const files = (await readdir(FEATURED_DIR))
  .filter((name) => name.endsWith(".mdx"))
  .sort();

for (const file of files) {
  const absPath = path.join(FEATURED_DIR, file);
  const source = await readFile(absPath, "utf8");
  const lines = source.split(/\r?\n/);

  lines.forEach((line, index) => {
    const match = line.match(/src:\s*"([^"]*)"/);
    if (!match) return;
    const value = match[1];
    const trimmed = value.trim();

    if (!trimmed) {
      issues.push(`${file}:${index + 1} has empty gallery src`);
      return;
    }

    if (value !== trimmed) {
      issues.push(`${file}:${index + 1} has leading/trailing whitespace in gallery src: "${value}"`);
    }
  });
}

if (issues.length > 0) {
  console.error("Featured gallery validation failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(`Featured gallery validation passed (${files.length} files checked).`);
