# Anmol's Cyberpunk Portfolio

A futuristic, interactive portfolio website built with React and Vite, featuring a Cyberpunk aesthetic with Matrix-style backgrounds, glitch effects, and dynamic content.

## 🚀 Tech Stack

- **Core**: [React](https://react.dev/) (v19), [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules, CSS Variables (Theming), Framer Motion (Animations)
- **Linting & Formatting**: ESLint, Prettier
- **Icons**: React Icons

## ✨ Features

- **Cyberpunk Theme**: Custom "Cyberpunk Red" and "Deep Purple" color palette with neon glow effects.
- **Matrix Background**: Custom implementation of the classic digital rain effect using HTML5 Canvas.
- **Glitch Effects**: "Hacked" text animations and image glitch hover effects.
- **Dynamic GitHub Activity**: Fetches and displays the latest public activity from GitHub API.
- **Responsive Design**: Fully responsive layout for all device sizes.
- **Centralized Styling**: Theme-based CSS variables for easy customization.

## 🛠️ Setup & Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/AnmolVerma7/AnmolsPortfolio.git
    cd AnmolsPortfolio
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

- **Linting**: Run `npm run lint` to check for code quality issues.
- **Formatting**: Run `npm run format` to auto-format code with Prettier.

## 📂 Project Structure

```
src/
├── components/
│   ├── Layout/       # Layout wrappers
│   ├── Sections/     # Page sections (Hero, Projects, etc.)
│   └── UI/           # Reusable UI components (Button, Pad, etc.)
├── styles/
│   ├── index.css     # Global resets
│   ├── sections.css  # Component-specific styles
│   ├── theme.css     # Shared theme utilities
│   └── variables.css # CSS Variables (Colors, Fonts)
├── utils/            # Helper functions (GitHub API)
└── App.jsx           # Main application entry
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
