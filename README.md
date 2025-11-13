# Lapka

This is a portfolio website project built with Vue 3, Vite, and TypeScript.

## Project Setup

### Prerequisites

- Node.js (version specified in `package.json`: `^20.19.0 || >=22.12.0`)
- npm (or your preferred package manager)

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd lapka
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

## Development

### Compile and Hot-Reload for Development

To start the development server with hot-reloading, run:

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

To build the project for production, run:

```sh
npm run build
```

This command will also perform a type-check before building.

### Preview the Production Build

To preview the production build locally, run:

```sh
npm run preview
```

## Linting

This project uses ESLint and oxlint for code linting.

To run the linters and automatically fix issues, use:

```sh
npm run lint
```

You can also run the linters individually:

```sh
npm run lint:eslint
npm run lint:oxlint
```

## Technologies Used

-   **Framework:** [Vue 3](https://vuejs.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Routing:** [Vue Router](https://router.vuejs.org/)
-   **State Management:** [Pinia](https://pinia.vuejs.org/)
-   **Styling:** [Sass](https://sass-lang.com/)
-   **Linting:** [ESLint](https://eslint.org/), [oxlint](https://oxc-project.github.io/docs/linter/introduction.html)

## Project Structure

```
.
├── public/              # Static assets
├── src/
│   ├── assets/          # Assets like images, fonts, and icons
│   ├── components/      # Reusable Vue components
│   ├── data/            # Static data
│   ├── pages/           # Page components
│   ├── router/          # Vue Router configuration
│   ├── stores/          # Pinia stores
│   └── ui/              # UI library components and styles
├── index.html           # Main HTML file
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies and scripts
```