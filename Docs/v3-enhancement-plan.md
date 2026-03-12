# Plan: Integrating Skills into Section Badges

Refactor the standalone Skills section by removing it and instead integrating technology stack "badges" directly into each work experience, project, and volunteering entry. This enhances the context of each item and improves scannability.

## Proposed Changes

### [Component] [NEW] [TechBadge](file:///Users/franciscosusana/local-repositories/onlineCv/app/components/techBadge.tsx)
- Create a reusable component to render technology icons/tags.
- Use `#06b6d4` (Cyan) for the badge accents to provide contrast.
- Support common libraries like React, Node, Python, C#, etc.

### [Data] [JSON Data Updates](file:///Users/franciscosusana/local-repositories/onlineCv/app/data/)
- Update `workExperience.json`, `projects.json`, and `volunteering.json` to include a `stack` field (array of strings) for each entry.
- *Guessing initial stacks based on content (e.g., GEA -> C#, .NET, Azure; NTT -> Python, JavaScript).*

### [Types] [MODIFY] [Experience.ts](file:///Users/franciscosusana/local-repositories/onlineCv/app/types/Experience.ts)
- Add optional `stack?: string[]` field to the `Experience` interface.

### [UI] [MODIFY] [Timeline](file:///Users/franciscosusana/local-repositories/onlineCv/app/components/timeline.tsx)
- Integrate the `TechBadge` component into the work experience cards.

### [UI] [MODIFY] [PostList](file:///Users/franciscosusana/local-repositories/onlineCv/app/components/postsList.tsx)
- Integrate the `TechBadge` component into project and volunteering cards.

### [UI] [DELETE] [SkillIconGrid](file:///Users/franciscosusana/local-repositories/onlineCv/app/components/skillIconGrid.tsx)
- Remove the standalone skills visualization component.

### [UI] [MODIFY] [Main Page](file:///Users/franciscosusana/local-repositories/onlineCv/app/page.tsx)
- Remove the Skills section from the single-page layout.

### [Navigation] [MODIFY] [Navbar](file:///Users/franciscosusana/local-repositories/onlineCv/app/components/nav.tsx)
- Remove the "Skills" link from the navigation menu.

## Verification Plan

### Manual Verification
- Verify that each section (Work, Projects, Volunteering) now displays relevant tech badges.
- Ensure the color `#06b6d4` is used effectively for contrast.
- Confirm the standalone Skills section and nav link are gone.
