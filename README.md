Quiz Application – Frontend Assignment

This project is a desktop-only, slide-based quiz application built according to the provided Figma prototype. It focuses on pixel-accurate UI implementation, smooth transitions, and clean, maintainable frontend code.

🚀 Setup Instructions

Prerequisites

Node.js v18 or above

npm

Steps to Run Locally

Install dependencies:
npm install


Start development server:

npm run dev


View the application:
Open your browser and visit https://quiz-app-proj-ivory.vercel.app/

🛠 Tech Stack Used

Next.js 14 (App Router) – Framework

React 18 – UI Library

TypeScript – Type safety

Tailwind CSS – Utility-first styling for pixel-accurate UI

Framer Motion – Smooth slide transitions and score animations

✨ Key Features Implemented

Desktop-only UI: Matches the Figma prototype specifications.

Slide-by-slide Flow: Smooth navigation between quiz questions.

State Management: Persistent answer selection state.

Navigation: Left and right arrow navigation controls.

Progress Tracking: Visual indicator for current question progress.

Conditional Submit: Submit button appears only on the final slide.

Scoring System: - Calculates final score based on selected answers.

Animated rolling/count-up score reveal on submission.

Animations: High-quality transitions using Framer Motion.

Architecture: Clean, component-based structure.

Accessibility: Readable UI structure.

🧠 Assumptions Made

The application is intended for desktop screens only, as specified.

Questions and answers are static and stored locally.

No backend or API integration was required.

No authentication or persistence across reloads was required.

Styling and spacing were aligned visually with the Figma prototype rather than using exact exported tokens.

⏱ Time Spent on the Assignment

Task

Time

UI layout & structure

3–4 hours

Quiz logic & navigation

2 hours

Animations & transitions

1–1.5 hours

Debugging & refinements

1–2 hours

Total

~7–9 hours

📁 Project Structure (High Level)

src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Option.tsx
│   ├── Progress.tsx
│   ├── Navigation.tsx
│   └── RollingScore.tsx
├── data/
│   └── questions.ts
└── styles/
    └── globals.css


✅ Notes

Code follows modern React & Next.js best practices.

Designed to be easily extensible (e.g., adding more questions, animations, or validation).

Built with performance, readability, and maintainability in mind.

🧾 .gitignore Configuration

Ensure your .gitignore file in the project root includes the following:

# dependencies
node_modules

# Next.js build output
.next
out

# environment files
.env
.env.local

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS files
.DS_Store
Thumbs.db
