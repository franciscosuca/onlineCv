# Project Plan: Online CV v2.0 Enhancement

This document outlines the detailed plan for transforming the Online CV into a modern, interactive, and professional portfolio.

## 1. Data Integration (̉Fetching & Parsing)
- **Goal**: Synchronize local data with the current live site using static files.
- **Tasks**:
  - [ ] Create a utility script `scripts/fetch-cv-data.ts` to scrape/fetch from `https://cv.by-francisco.com/`.
  - [ ] Map external data to our internal `Experience` and `Project` types and save as local JSON files.
  - [ ] Archive (do not delete) existing CosmosDB integration code.

## 2. Global UI/UX Overhaul
- **Goal**: Implement a "Hackier & Professional" design system.
- **Tasks**:
  - [ ] Define a new color palette in `tailwind.config.ts` (e.g., `hacker-green`, `deep-slate-900`, `cyber-blue`).
  - [ ] Install `next-themes` and create a `ThemeToggle` component in the `Navbar`.
  - [ ] Update `app/global.css` with subtle "hacker" effects (e.g., custom scrollbars, slight text-shadows for high contrast).
  - [ ] Ensure full responsiveness across mobile, tablet, and desktop.

## 3. Work Experience Timeline
- **Goal**: Create an interactive, scrollable timeline.
- **Tasks**:
  - [ ] Build a `Timeline` component using Tailwind and potentially Framer Motion for smooth entry/exit animations.
  - [ ] Support both vertical (standard) and horizontal (experimental) scrolling modes.
  - [ ] Feature sticky date headers and connecting lines between experiences.

## 4. Projects & Volunteering Enhancements
- **Goal**: Add rich metadata and resource links.
- **Tasks**:
  - [ ] Update data schemas to include `links: { label: string, url: string }[]`.
  - [ ] Redesign project cards to display these links as interactive icons (GitHub, External Link, PDF).
  - [ ] Add a "Resource Hub" section to each project for diagrams and technical repository links.

## 5. Skills Visualization 2.0
- **Goal**: Icon-centric graphs with time-based experience.
- **Tasks**:
  - [ ] Create a library of SVG icons for all core technologies (React, Python, C#, etc.).
  - [ ] Replace the current `GraphBar` components with `IconExperienceGraph`.
  - [ ] The new graph should use the icon as a marker on a timeline or as a size-weighted bubble/badge indicating years of experience.

## 6. Deployment & Testing
- **Goals**: Ensure stability and performance.
- **Tasks**:
  - [ ] Run benchmark tests for SSR performance.
  - [ ] Verify accessibility (A11y) for the new dark/light themes.
  - [ ] Deploy a preview branch to Vercel/Azure for final review.

---
**Timeline Estimate**: 2-3 Sprints of focused development.
**Next Steps**: Initialize the `scripts/fetch-cv-data.ts` to begin data population.
