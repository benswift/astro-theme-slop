// Semantic CSS linting for slop.css. Extends stylelint-config-standard but
// turns off the rules that fight oxfmt (which owns formatting).
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "comment-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "custom-property-pattern": null, // --at-* theme tokens
  },
};
