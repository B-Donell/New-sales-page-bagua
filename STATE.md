# Project State - New Sales Page Bagua

_Last updated: 2025-04-08_

---

## Overview

This is a Vite + React + TypeScript project styled with Tailwind CSS, designed as a landing page for a Feng Shui course.

---

## Key Components

- **`src/App.tsx`**: Main React component rendering the landing page.
- **Images**: Located in `/images/`
  - `first_landing_image.png`
  - `second_landing_image.png`
- **Public assets**: `/public/`
- **Styling**: Tailwind CSS (`index.css`, `tailwind.config.js`)
- **Build tool**: Vite
- **TypeScript config**: `tsconfig.json`

---

## Recent Changes

- **Hero Section Image**:  
  Replaced the instructor placeholder image with `images/first_landing_image.png`.

- **Course Information Section Image**:  
  Replaced the Unsplash placeholder image with `images/second_landing_image.png`.

- **Removed** import of the old instructor image (`public/instructor.jpg`).

- **Added** image module declarations in `src/declarations.d.ts` to support PNG imports:
  ```ts
  declare module '*.png' {
    const value: string;
    export default value;
  }
  ```

- **Dependencies**:  
  Confirmed `react`, `react-dom`, `lucide-react`, and their types are installed.  
  Ran `yarn install` to ensure all dependencies are present.

- **Build**:  
  Ran `yarn build` successfully with no errors.

---

## Current Flow Summary

- The landing page is rendered by `src/App.tsx`.
- Two key images are imported from `/images/` and displayed in the Hero and Course sections.
- The project uses React 18 JSX runtime (`react-jsx`).
- Tailwind CSS is used for styling.
- No test suite is currently configured (`yarn test` script missing).

---

## Next Steps / Recommendations

- Add a test framework (e.g., Jest, React Testing Library) and configure `yarn test`.
- Continue to modularize components if the page grows.
- Maintain this `STATE.md` with future changes for clear project tracking.