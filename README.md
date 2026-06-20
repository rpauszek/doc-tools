# document-tools

Typescript CLI tools for generating styled PDF artifacts from structured text input.

Here’s a clean copy-paste section for your README:

## Development Workflow

This is a pnpm-based monorepo using TypeScript.

### Install dependencies

```bash
pnpm install
```

### Run a CLI in development mode

Each package can be run independently in dev mode using `tsx`:

#### CV generator CLI

```bash
pnpm --filter @doc-tools/cvgen dev
```

#### Doc generator CLI

```bash
pnpm --filter @doc-tools/docgen dev
```

### Linting & Formatting

Run ESLint across the entire monorepo:

```bash
pnpm lint
```

Format all files in the repository:

```bash
pnpm format
```

Check formatting without modifying files:

```bash
pnpm check-format
```

### Pre-commit hooks

This repository uses Husky + lint-staged to automatically run:

- Prettier (formatting)
- ESLint (linting with auto-fix)

on every commit. No manual action is required when committing changes.

#### GUI Git clients (VSCode, Fork, etc.)

If committing via a GUI Git client (e.g. Fork), make sure to launch the app from the terminal:

```bash
open -a Fork
```

This ensures the app inherits your shell environment (PATH, pnpm, fnm, etc.). If the app is launched from the macOS Dock or Finder, Git hooks may fail due to missing `pnpm` in PATH.

## 📦 SVG Icon Pipeline (cvgen)

This project uses a custom build pipeline to convert SVG assets into React components for use in CV rendering.

### Overview

```

SVG assets
↓
SVGO (optimization)
↓
SVGR (React component generation)
↓
Custom barrel generation (icons.ts)
↓
React components used in CV layout
↓
Puppeteer → PDF output

```

---

### 📁 Directory structure

```
packages/cvgen/
├── assets/
│   └── icons/                  # Source SVG files
│
└── src/
    ├── generated/
    │   └── icons/              # Auto-generated React components
    │
    └── icons.ts                # Manually generated public API
```

---

### ⚙️ Build process

Icons are generated via:

```bash
pnpm svgo -f assets/icons -o assets/icons
pnpm exec svgr assets/icons --out-dir src/generated/icons --typescript --icon --no-index
node scripts/generate-icons.mjs
```

---

### 🧠 Key design decisions

#### 1. SVGs are optimized before compilation

SVGO removes unnecessary metadata, reduces file size, and normalizes structure.

#### 2. React components are generated via SVGR

Each SVG becomes a typed React component for use in JSX.

#### 3. No SVGR index file is used

Instead, a custom `icons.ts` file is generated to define the public API explicitly.

This avoids:

* Node ESM resolution issues
* unstable generated exports
* uncontrolled naming

#### 4. Controlled public API

Only `icons.ts` is imported by application code:

```ts
import { PythonIcon } from "./icons.js";
```

---

### 🔁 Development workflow

A watch mode can be used to automatically regenerate icons on change:

```bash
pnpm icons:watch
```

This triggers rebuilds whenever SVG assets are modified.

---

### 🎨 Styling

Icons are React components that render inline SVG and support CSS styling:

```css
.icon {
  fill: currentColor;
  width: 32px;
  height: 32px;
}
```

This allows icon color and size to be controlled via CSS.

---

### 🚀 Why this approach

This pipeline was designed to:

* keep SVG assets source-controlled and clean
* generate type-safe React components
* avoid bundler-specific SVG handling
* enable reuse across CV layouts and future document tools

## 🏗 Build & Production Workflow

This monorepo separates development and production execution.

### Build packages

Build a specific package:

```bash
pnpm --filter @doc-tools/cvgen build
pnpm --filter @doc-tools/docgen build
```

Each package outputs compiled JavaScript to:

```
dist/
```

Example:

```
packages/cvgen/dist/index.js
```

### Run production build

You can run the compiled CLI directly with Node:

```bash
node packages/cvgen/dist/index.js
```

This is the production-equivalent execution path (no `tsx` involved).

### Development vs Production

| Mode       | Command                   | Purpose              |
| ---------- | ------------------------- | -------------------- |
| Dev        | `tsx src/index.ts`        | Fast iteration       |
| Production | `node dist/index.js`      | Real execution       |
| Build      | `tsup` via package script | Generate dist output |

### 📌 Notes

- Development uses `tsx` for fast TypeScript execution
- Production relies entirely on compiled output in `dist/`
- Each package is built and run independently within the monorepo
