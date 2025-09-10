# Copilot Instructions for LinkBoard

## Project Overview
- **LinkBoard** is a Next.js web app for creating a personalized, shareable link board. It is highly customizable via config files and themes.
- The app is structured with clear separation of concerns: UI components (`components/`), configuration (`config.ts`), theming (`themes/`), and utility functions (`utils/`).

## Architecture & Key Patterns
- **Entry Point:** The app starts from `app/page.tsx` and `app/layout.tsx`.
- **Configuration:** All user-specific data (name, description, links, theme, animations) is set in `config.ts`. This file drives most dynamic content and appearance.
- **Theming:** Themes are defined in `themes/themes.ts`. To change the theme, update the `theme` property in `config.ts`.
- **Components:** Major UI elements are in `components/`:
  - `linkBoard/` for the main board and its styles
  - `sharebar/`, `source/`, and `loading/` for auxiliary features
- **Context:** `context/themeContext.tsx` provides theme context for the app.
- **Assets:** Profile and background images are in `public/` and referenced in config.
- **Types:** Shared types are in `types/data.ts`.
- **Utilities:** Helper functions (e.g., name randomization) are in `utils/`.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev` (default port: 3000)
- **Configuration changes:** Edit `config.ts` and restart if necessary.
- **Theme changes:** Edit `themes/themes.ts` and update `config.ts`.
- **Static assets:** Replace images in `public/` for profile/background.

## Conventions & Patterns
- **Styling:** Component-specific styles are colocated (e.g., `linkBoardStyles.ts`). Global styles in `styles/`.
- **Component structure:** Prefer functional React components. Use props for data/config injection.
- **No backend/server code:** All logic is client-side; no API routes or server functions.
- **Animations & sorting:** Controlled via flags in `config.ts`.
- **No tests or build scripts detected.**

## Integration Points
- **No external APIs or authentication.**
- **No database or persistent storage.**
- **All customization is file-based.**

## Examples
- To add a new link: Edit the links array in `config.ts`.
- To change the theme: Edit `themes/themes.ts` and set the theme name in `config.ts`.
- To update profile image: Replace `public/profile.png`.

---

If any section is unclear or missing, please provide feedback so this guide can be improved for future AI agents.
