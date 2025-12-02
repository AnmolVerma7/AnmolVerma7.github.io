# Anmol's Cyberpunk Portfolio

A futuristic, interactive portfolio website built with React and Vite, featuring a Cyberpunk/Matrix aesthetic with digital rain backgrounds, glitch effects, and dynamic content.

## 🚀 Tech Stack

- **Core**: [React](https://react.dev/) (v19), [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules, CSS Variables (Theming)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Portal-based mobile navigation)
- **Linting & Formatting**: ESLint, Prettier
- **Icons**: React Icons

## ✨ Features

- **Matrix Theme**: Custom "Matrix Cyan" and "Cyberpunk Red" color palette with neon glow effects
- **Matrix Background**: Custom implementation of the classic digital rain effect using HTML5 Canvas
- **Glitch Effects**: "Hacked" text animations with ping-pong reveal effects
- **Mobile Navigation**: Professional React Portal dropdown with scroll-to-close behavior
- **Dynamic GitHub Activity**: Fetches and displays the latest public activity from GitHub API
- **Responsive Design**: Fully responsive layout with mobile-first approach
- **Notched UI Elements**: Signature cyberpunk notched corners on buttons and containers
- **Centralized Theming**: CSS variables for easy customization

## 🛠️ Setup & Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/AnmolVerma7/AnmolVerma7.github.io.git
    cd AnmolVerma7.github.io/AnmolsPortfolio
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🧹 Code Quality

- **Linting**: Run `npm run lint` to check for code quality issues
- **Formatting**: Run `npm run format` to auto-format code with Prettier

## 📂 Project Structure

```
AnmolsPortfolio/
├── src/
│   ├── components/
│   │   ├── Layout/       # Layout wrappers & navigation
│   │   ├── Sections/     # Page sections (Hero, Projects, etc.)
│   │   └── UI/           # Reusable UI components (Button, Pad, MatrixBackground)
│   ├── styles/
│   │   ├── index.css     # Global resets
│   │   ├── sections.css  # Section-specific styles
│   │   ├── theme.css     # Shared theme utilities
│   │   └── variables.css # CSS Variables (Colors, Fonts, Effects)
│   ├── utils/            # Helper functions (GitHub API)
│   └── App.jsx           # Main application entry
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Pages deployment
```

## 🎨 Design System

- **Colors**: Matrix Cyan (`#00E5FF`), Cyberpunk Red (`#FF003C`), Deep Blacks
- **Typography**: Rajdhani (Primary), VT323 (Secondary/Monospace)
- **Effects**: Neon glows, text shadows, notched corners, glitch animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
