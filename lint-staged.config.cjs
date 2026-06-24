module.exports = {
  "**/*.{ts,tsx,js,jsx,json,css}": ["prettier --write --log-level debug", "pnpm exec eslint --fix"],
};
