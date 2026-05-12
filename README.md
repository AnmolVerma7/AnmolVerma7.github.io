# Anmol's Cyberpunk Portfolio

A futuristic, interactive portfolio website built with React and Vite, featuring a Cyberpunk/Matrix aesthetic with digital rain backgrounds, glitch effects, and dynamic content.

## 🚀 Tech Stack

- **Core**: [React](https://react.dev/) (v19), [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with CSS Custom Properties (no preprocessors, no CSS Modules)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Mobile Nav**: [hamburger-react](https://github.com/luukdv/hamburger-react) (animated hamburger icon)
- **Linting**: ESLint

## ✨ Features

- **Matrix Rain**: Custom HTML5 Canvas implementation of the classic digital rain effect
- **Glitch Effects**: "Hacked" text animations with randomized character ping-pong reveal
- **Notched UI**: Signature cyberpunk clipped corners on cards, buttons, and containers via `clip-path`
- **Pad Component**: Reusable notched container with neon border and diagonal corner accent
- **Mobile Navigation**: React Portal-based dropdown with animated `hamburger-react` toggle
- **Dynamic GitHub Activity**: Fetches and displays latest public events from the GitHub API
- **Daily Quote Rotator**: Random quote from a curated JSON pool, seeded by calendar day
- **Cyber Toast Notifications**: Custom in-app toast system used for contact form feedback
- **Responsive Design**: Mobile-first, fully responsive layout
- **Centralized Theming**: All colors, glows, fonts, and spacing defined as CSS variables — theme-engine ready

## 🛠️ Setup & Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/AnmolVerma7/AnmolVerma7.github.io.git
    cd AnmolVerma7.github.io/AnmolsPortfolio
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

4. **Build for production**

    ```bash
    npm run build
    ```

## 📂 Project Structure

```
AnmolsPortfolio/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Layout.jsx        # Sticky navbar, mobile nav portal, page wrapper
│   │   ├── Sections/
│   │   │   ├── Hero.jsx          # Landing section w/ GitHub activity & quote rotator
│   │   │   ├── Projects.jsx      # Featured projects grid w/ video/image cards
│   │   │   ├── Experience.jsx    # Work & education timeline
│   │   │   ├── About.jsx         # Bio & tech stack overview
│   │   │   ├── Contact.jsx       # Contact links & form
│   │   │   └── Skills_Archive.jsx # (Archive — not currently active)
│   │   └── UI/
│   │       ├── Pad.jsx           # Core notched card container
│   │       ├── Button.jsx        # Cyberpunk-styled button (primary/secondary variants)
│   │       ├── Badge.jsx         # Status badge (Active Dev / Completed)
│   │       ├── CyberToast.jsx    # Custom toast notification system
│   │       └── MatrixBackground.jsx # Canvas-based digital rain renderer
│   ├── data/
│   │   └── quotes.json           # Curated pool of daily rotating quotes
│   ├── styles/
│   │   ├── index.css             # Global resets, scrollbar, utility classes (.pad, .text-heading*)
│   │   ├── sections.css          # Section-specific layout and component styles
│   │   ├── theme.css             # Shared semantic classes (.section-container, .text-heading3, etc.)
│   │   └── variables.css         # All CSS Custom Properties (colors, fonts, glows, spacing)
│   ├── utils/
│   │   └── github.js             # GitHub public events API fetch helper
│   ├── App.jsx                   # Route/section switching logic
│   └── main.jsx                  # App entry point
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Pages deployment via Actions
```

## 🎨 Design System

All design tokens live in `variables.css` and are consumed globally via CSS custom properties — no hardcoded values in components.

| Token Category | Examples |
|---|---|
| **Colors** | `--colors-primary--600` (Cyan), `--colors-secondary--500` (Red) |
| **Background** | `--colors-bg--300` (Deep black) |
| **Glows** | `--ui-glow-text`, `--ui-glow-border` |
| **Typography** | `--fonts-primary` (Rajdhani), `--fonts-secondary` (VT323) |
| **Notch** | `--ui-notch-path`, `--ui-notch-amount`, `--ui-notch-hypotenuse` |

## 🔧 Adding Content

- **Projects**: Edit the `PROJECTS` array in `src/components/Sections/Projects.jsx`
- **Quotes**: Add strings to `src/data/quotes.json`
- **Experience**: Edit the timeline data in `src/components/Sections/Experience.jsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
