# Griff.Digital

Personal portfolio built with Next.js 15, React and Tailwind CSS. The existing visual design and employment history are retained.

## Development

Run `npm ci --legacy-peer-deps`, then `npm run dev`.
Run `npm run build` to generate the static website in `out/`.

## Content

- `src/content/homepage.js`: introduction, About copy, contact details, CV link and grouped capabilities.
- `public/data/portfolio.json`: project descriptions, contributions, agency credits, status and images.
- `src/components/LatestWork.jsx`: the four featured homepage projects.
- `public/images/projects/`: project screenshots reused from Freelance Pixels (`site-refresh`).

Homepage and project content are local. No WordPress endpoint or local development server is required for the static build. Historical projects remain accessible at their existing URLs but are hidden from the main work listing. Existing commercial project slugs are preserved.

Project roles and credits follow the Freelance Pixels source: development-only work is not presented as design work, Oasis LMF remains labelled as staging, and historical designs retain their archive notes. No performance or conversion claims have been invented.
