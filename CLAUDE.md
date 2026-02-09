# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build (also validates types and static generation)
- `npm run lint` — ESLint
- No test framework is configured

## Architecture

Next.js 16 App Router site with TypeScript, Tailwind CSS v4, and a file-based Markdown blog. The entire site is statically generated — no database or external APIs.

### Blog System

Blog posts live in `content/blog/*.md` (at project root, not inside `src/`). Each file has YAML frontmatter (`title`, `date`, `category`, `excerpt`) and the slug is derived from the filename.

`src/lib/posts.ts` is the data layer: it reads markdown files with `gray-matter`, converts content to HTML with `remark` + `remark-html`, and exposes `getAllPosts()`, `getAllSlugs()`, and `getPostBySlug()`. Blog post pages use `generateStaticParams()` for static generation.

Categories are: **Technology**, **Sports**, **Ghana**.

### Client vs Server Components

Everything is a server component except two files that use `"use client"`:
- `src/app/blog/BlogListClient.tsx` — wraps the blog listing with category filter state
- `src/components/CategoryFilter.tsx` — interactive pill buttons

### Styling

Tailwind v4 utility classes for layout/components. Hand-written `.prose` CSS rules in `src/app/globals.css` for rendered markdown content (no `@tailwindcss/typography` plugin). Inter font loaded via `next/font/google`. Layout is single-column, `max-w-3xl`, centered.

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).
