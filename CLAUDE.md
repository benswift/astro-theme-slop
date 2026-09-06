# astro-theme-slop

Slop University branding data for `astro-theme-university` --- the web mirror of
the `slop-university-brand` typst package, and the slop equivalent of
astro-theme-anu. Consumers install it git-pinned to a release tag and get the
identity from `slopBranding` (index.ts) + `slop.css` + the SVGs in `assets/`.
The package ships as source, with no build step.

## Rules

- **Don't edit the SVGs here.** They're generated artefacts; the README says
  where they come from. Palette changes start in the typst brand package and
  mirror here.
- **Release flow:** commit, tag `vX.Y.Z`, push the tag, then bump the pinned tag
  in each consumer (consumer map in the `ben:anu-theme-sync` skill).
- No satire signals: like every Slop University artefact, the brand reads
  straight.

## Checks

`pnpm typecheck && pnpm lint && pnpm lint:css && pnpm format:check && pnpm test`
--- all green before any commit. CI runs the same via mise
(`.github/workflows/ci.yml`).

typescript stays on v6: astro is currently incompatible with typescript 7, and
`typecheck` loads astro's types through the shim.
