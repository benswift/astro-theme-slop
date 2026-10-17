// Slop University branding for astromotion's video brand moments
// (astromotion/video/brand.js): the logo files and the closing lockup's
// geometry. The tokens are in slop.css (cream) and slop-dark.css (ink) beside
// this file. A composition reaches the package through a symlink inside its
// HyperFrames root, so these URLs resolve against wherever that is served.

const here = (p) => new URL(p, import.meta.url).href;

// title-block logos: the horizontal lockup for a cream ground or for ink
export const logos = {
  light: here("../assets/slop-horizontal-gold-black.svg"),
  dark: here("../assets/slop-horizontal-gold-white.svg"),
};

// Closing lockups. The rules run through the shield's axis (its centre,
// 15.874 of the artwork's 278.24 units in from the left edge) and stop short
// of the mark by the same share of its height as the ANU decks' closing slide.
// `height` is the mark on a 1080 px stage.
const geometry = { axis: 15.874 / 278.24, gap: 0.4575, height: 150 };
export const lockups = {
  light: { src: logos.light, ...geometry },
  dark: { src: logos.dark, ...geometry },
};
