import type { ImageMetadata } from "astro";
import slopCrest from "./assets/slop-crest.svg";
import slopLogo from "./assets/slop-horizontal-gold-black.svg";
import slopLogoDark from "./assets/slop-horizontal-gold-white.svg";

/** Slop University branding data for astro-theme-university. The fields match
 *  the theme's `SiteConfig` branding props, so spread it into the site config
 *  (or straight into BaseLayout):
 *
 *  ```ts
 *  import { defineSiteConfig } from "astro-theme-university/types";
 *  import { slopBranding } from "astro-theme-slop";
 *
 *  export const siteConfig = defineSiteConfig({
 *    ...slopBranding,
 *    name: "Slop University",
 *    // ...
 *  });
 *  ```
 *
 *  and register the palette in astro.config:
 *
 *  ```ts
 *  universityTheme({ brandCss: "astro-theme-slop/slop.css" })
 *  ```
 *
 *  Site-specific props placed after the spread win, so a site can spread the
 *  branding and then override `logo`/`logoDark`. */
export interface SlopBranding {
  logo: ImageMetadata;
  logoDark: ImageMetadata;
  logoCompact: ImageMetadata;
  favicon: ImageMetadata;
  legalLinks: { text: string; href: string }[];
}

export const slopBranding: SlopBranding = {
  logo: slopLogo,
  logoDark: slopLogoDark,
  // On narrow viewports the wide horizontal lockup wraps the nav bar, so the
  // theme swaps to the crest below 640px. The gold outline reads on both the
  // cream and dark backgrounds, so a single mark serves both themes.
  logoCompact: slopCrest,
  favicon: slopCrest,
  // Wayfinding home. A course site is a leaf of the identity with no route
  // back to it, so the brand layer carries the cross-links rather than leaving
  // each site to remember them. A hub that would link to itself (the apex, the
  // course register) overrides this.
  legalLinks: [
    { text: "Slop University", href: "https://slop.university/" },
    { text: "Programs and courses", href: "https://courses.slop.university/" },
  ],
};
