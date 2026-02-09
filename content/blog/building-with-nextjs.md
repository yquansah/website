---
title: "Building a Personal Website with Next.js"
date: "2026-02-09"
category: "Technology"
excerpt: "A look at why Next.js with the App Router is a great choice for building a fast, modern personal website."
---

## Why Next.js?

When I set out to build my personal website, I wanted something that was fast, easy to maintain, and simple to deploy. Next.js checked all the boxes.

The **App Router** introduced in Next.js 13+ makes it incredibly intuitive to organize pages. Each folder in the `app/` directory becomes a route — no configuration files, no magic.

## Markdown for Blog Posts

Instead of reaching for a CMS, I decided to keep things simple: blog posts are plain Markdown files stored right in the repository. At build time, Next.js reads these files, parses the frontmatter with `gray-matter`, and converts the content to HTML using `remark`.

This approach has a few advantages:

- **Version control** — every post is tracked in Git
- **No external dependencies** — no database, no API keys
- **Fast builds** — static generation means pages are pre-rendered

## Tailwind CSS for Styling

Tailwind's utility-first approach pairs perfectly with React components. Instead of maintaining separate CSS files, styles live right alongside the markup. The result is a clean, consistent design with minimal effort.

## Deployment

With Vercel, deployment is as simple as pushing to GitHub. Every commit triggers a build, and the site is live within seconds. It doesn't get easier than that.

If you're thinking about building your own site, I'd highly recommend giving Next.js a try.
