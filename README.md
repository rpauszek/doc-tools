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
