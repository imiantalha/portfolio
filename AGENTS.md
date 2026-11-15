<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repository guidance

## Project overview

This repository is a personal portfolio built with the Next.js App Router, React, TypeScript, and Tailwind CSS. Portfolio content is maintained in the `app/data/` directory; reusable interface elements live in `app/components/`.

## Before making changes

- Read the relevant source files and follow existing patterns before editing.
- Treat `app/data/site.ts` and the other files in `app/data/` as the source of truth for portfolio content. Do not invent employment history, project details, metrics, dates, or contact information.
- Preserve existing working behavior and responsive layouts. Keep changes focused on the requested scope.
- Do not reintroduce removed experience entries or duplicate sections.
- Avoid adding dependencies unless the task requires them; use the existing stack first.
- Do not commit secrets, credentials, private customer data, or proprietary project source.

## Implementation conventions

- Use TypeScript and keep types explicit where they improve clarity.
- Prefer reusable components and semantic HTML with accessible labels and keyboard behavior.
- Respect reduced-motion preferences for animations and transitions.
- Keep client components limited to features that need browser APIs, state, or event handlers.
- Keep metadata, sitemap, robots rules, and structured data consistent with the deployed portfolio routes and canonical site URL.
- Handle external data failures gracefully so optional integrations do not break the portfolio.

## Validation

The package scripts currently available are:

- `npm run lint` — run ESLint.
- `npm run build` — create a production build.
- `npm run dev` — start the local development server.

Run the relevant checks after code changes and report any checks that could not be run. Do not claim validation passed without an actual successful result.

## Documentation

Keep `README.md` aligned with the actual project structure, dependencies, scripts, and implemented features. Keep this file as the shared source of repository-specific agent guidance; tool-specific instruction files should reference it rather than maintain conflicting copies.
