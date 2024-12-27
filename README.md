# Arent Test Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `app/(main)/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to automatically optimize and load Geist, a new font family for Vercel.

## Node Version

This project requires Node.js version `v22.12.0`.

## Project Structure

- **app**: Contains the main application pages and layout.
  - **(main)**: Contains the main pages of the application.
    - `page.tsx`: The home page.
    - `record/page.tsx`: The record page.
    - `recommended/page.tsx`: The recommended page.
  - `layout.tsx`: The root layout of the application.
  - `globals.css`: Global CSS styles.

- **components**: Contains the reusable UI components.
  - `navigation.tsx`: The navigation component.
  - `footer.tsx`: The footer component.

- **sections**: Contains the section components.
  - `sectionHero.tsx`: The hero section.
  - `sectionMealHistory.tsx`: The meal history section.
  - `sectionNavigationInput.tsx`: The navigation input section.
  - `sectionRecommended.tsx`: The recommended section.
  - `sectionBodyRecord.tsx`: The body record section.

- **ui**: Contains the UI components.
  - `button.tsx`: The button component.
  - `buttonScrollToTop.tsx`: The scroll to top button component.
  - `circularProgress.tsx`: The circular progress component.
  - `sheet.tsx`: The sheet component.
  - `drawer.tsx`: The drawer component.

- **mocks**: Contains the mock data used in the application.
  - `myExcercise.json`
  - `recommendCardPost.json`
  - `recommendCardText.json`
  - `bodyRecords.json`
  - `mealsHistory.json`

- **lib**: Contains utility functions.
  - `utils.ts`: Utility functions.

## Contact Information

- **Linh Pham**
  - Email: phamviethonglinh@gmail.com
  - Phone: 0366286668
