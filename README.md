# chmmao.github.io

A static Astro personal hub: https://chmmao.github.io/

## Navigation

- Latest: reverse chronological feed combining published blog posts and dated updates.
- Work: All / Blog / Videos / Projects.
- Thoughts: short notes, shown in full in a chronological feed.
- Resources: browser tools and public downloads.
- About: profile links and email.

English is the default. German uses `/de/`, Chinese `/zh/`. There is no footer navigation.

## Run locally

```sh
npm ci
ASTRO_TELEMETRY_DISABLED=1 npm run dev
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run preview
```

Use Node 22.23.4 or newer; a compatible project-local Node is included as a development dependency.

## Publish an article

Add a Markdown file to `src/content/blog/`:

```md
---
title: Article title
description: A short summary.
date: 2026-10-25
lang: en
draft: false
---

Article content.
```

Use `lang: en`, `de`, or `zh`. Published articles automatically appear in that language's blog and latest feed. Drafts are excluded from all public routes and the sitemap.

## Publish a thought or update

Add an entry to `updates` in `src/data/hub.ts` with a stable ID, publication date, type, localized title and body, and optional destination URL. Supported types: update, project, video, thought, resource. Thoughts appear in both Thoughts and Latest. Short thoughts are readable directly in the feed; each entry also has a permanent detail URL. Set `draft: true` to keep an entry private. Keep dates in `YYYY-MM-DD` format.

The latest feed loads entries in groups of 20 as you scroll, with a Load more button as a fallback. Project and resource listings are maintained in the shared Hub component/data. Add a finished video to the Work video section when one is ready; publishing a dated update does not itself create an asset listing.

## Editing

- Shared navigation, languages and metadata: `src/layouts/Base.astro`
- Page content, feed and asset sections: `src/components/Hub.astro`
- Shared text, project links and dated updates: `src/data/hub.ts`
- Browser tool behavior: `src/components/CounterScript.astro`
- Appearance and immediate hover feedback: `src/styles/global.css`

Older `/blog/`, `/projects/` and `/tools/` entry URLs remain available under the new navigation. There are no animation or transition delays. Hover prefetch is enabled for internal links.

## Deployment

The public repository is `chmmao/chmmao.github.io`. Settings → Pages → Source is **GitHub Actions**. Every push to `main` builds and deploys `dist/` using the workflow in `.github/workflows/deploy.yml`; no personal token or paid hosting is needed.
