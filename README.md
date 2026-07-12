# astro-theme-slop

Slop University branding data for
[astro-theme-university](https://github.com/ANUcybernetics/astro-theme-university).
The theme code (integration, layouts, components, styles, build checks) lives in
that package; this one carries only what makes a site _Slop University_:

- `slopBranding` — lockup, crest, and favicon, shaped to spread straight into
  the core theme's site config (or `BaseLayout`)
- `slop.css` — the brand palette (lockup gold primary, bronze, warm grey) and
  the nav lockup offset; the theme derives every semantic token from these
- the lockup/crest SVG assets

It is the web mirror of the `slop-university-brand` typst package in
[slop-university](https://github.com/benswift/slop-university), which owns the
lockup artwork and palette; the SVGs here are installed by that repo's
`assets/slop-university/build-all.sh`.

Slop University is a fictional institution — see
[slop.university/colophon](https://slop.university/colophon/) for what this is
all about.

## Usage

```sh
pnpm add "git+https://github.com/ANUcybernetics/astro-theme-university.git#vX.Y.Z" \
  "git+https://github.com/benswift/astro-theme-slop.git#vX.Y.Z"
```

Register the palette in `astro.config`:

```ts
import universityTheme from "astro-theme-university";

export default defineConfig({
  integrations: [universityTheme({ brandCss: "astro-theme-slop/slop.css" })],
});
```

and spread the branding into the site config:

```ts
import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",
  // nav links, contact, licence, ...
});
```

Props placed after the spread win — a site with its own logo can spread the
branding then override `logo`/`logoDark`.

## Development

```sh
pnpm install
pnpm typecheck && pnpm test
```

The SVGs are generated artefacts — don't edit them here. The lockup generator
(`lockup-gen.typ` + `build-all.sh`) lives in the slop-university repo under
`assets/slop-university/`; `slop-crest.svg` is a hand-derived crest-only cut of
the lockup art.
