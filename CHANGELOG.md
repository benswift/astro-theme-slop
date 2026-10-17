# Changelog

## 0.3.0 (2026-10-17)

- `video/` brands astromotion's video stage (astromotion 0.35.0 or later):
  `video/slop.css` sets its `--video-*` tokens in the house register (ink and
  lockup gold on cream paper), `video/slop-dark.css` the ink variant for the
  signage screens, and `video/brand.js` exports the lockup logos and the closing
  lockup's geometry for astromotion's `video/brand.js`.

## 0.2.0 (2026-09-22)

- `slopBranding` now carries `legalLinks`: footer cross-links to
  slop.university and courses.slop.university, so a course site has a route
  back to the identity it wears. A site that would link to itself overrides
  them.

## 0.1.0 (2026-07-12)

Initial release: the Slop University web identity, extracted from the
slop-university repo so any astro-theme-university consumer can wear it.

- `slopBranding` props object (lockup light/dark, crest as compact logo and
  favicon)
- `slop.css` brand palette (gold `#b97d1c` primary, bronze secondary, warm grey
  tertiary) and nav lockup offset
- lockup/crest SVG assets
