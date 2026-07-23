import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// index.ts can't be imported here — its `*.svg` imports resolve to
// ImageMetadata only under Astro's Vite plugin — so these tests enforce the
// file-level invariants instead (tsc covers the types).

const root = import.meta.dirname;
const indexSource = readFileSync(join(root, "index.ts"), "utf8");
const relativeImports = Array.from(indexSource.matchAll(/from "(\.\/[^"]+)"/g), (m) => m[1]);

describe("index.ts asset imports", () => {
  it("imports at least one asset", () => {
    expect(relativeImports.length).toBeGreaterThan(0);
  });

  it.each(relativeImports)("%s resolves to a file", (specifier) => {
    expect(existsSync(join(root, specifier))).toBe(true);
  });

  it("references every file in assets/ (no orphans)", () => {
    const shipped = readdirSync(join(root, "assets")).map((f) => `./assets/${f}`);
    expect(relativeImports.toSorted()).toEqual(shipped.toSorted());
  });
});

describe("slop.css", () => {
  const css = readFileSync(join(root, "slop.css"), "utf8");

  // The palette mirrors the slop-university-brand typst package: primary is
  // the lockup gold. If this changes, the typst package must change with it.
  it("declares the brand tokens", () => {
    expect(css).toMatch(/--at-primary:\s*#b97d1c/);
    expect(css).toMatch(/--at-secondary:\s*#8a5c13/);
    expect(css).toMatch(/--at-tertiary:\s*#6b6154/);
    expect(css).toMatch(/--at-logo-offset-x:/);
  });
});

describe("package.json", () => {
  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

  it("export targets exist", () => {
    for (const target of Object.values(pkg.exports)) {
      const path = (target as string).replace("/*", "");
      expect(existsSync(join(root, path)), `${target} missing`).toBe(true);
    }
  });

  it("files list ships the exports and the type shim", () => {
    for (const entry of ["index.ts", "types-shim.d.ts", "slop.css", "assets/"]) {
      expect(pkg.files).toContain(entry);
    }
  });
});
