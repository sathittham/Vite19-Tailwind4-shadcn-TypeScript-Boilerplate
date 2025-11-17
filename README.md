# Vite + Tailwind CSS v4 + shadcn/ui + TypeScript Boilerplate

A modern React development boilerplate featuring Vite, Tailwind CSS v4, shadcn/ui components, and TypeScript.

## Features

- ⚡ **Vite** - Lightning fast build tool with HMR
- 🎨 **Tailwind CSS v4** - Latest version of the utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible components built on Radix UI
- 📘 **TypeScript** - Type safety and enhanced developer experience
- ⚛️ **React 19** - Latest React with modern features
- 🔍 **ESLint** - Code linting with TypeScript support
- 🌙 **Dark Mode** - Built-in theme toggle functionality

## Included Components

- Button
- Card
- Input
- Label
- Theme Toggle

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd vite-tailwind4-shadcn-ts-boilerplate
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── ExampleForm.tsx # Example form component
│   └── ThemeToggle.tsx # Dark mode toggle
├── lib/
│   └── utils.ts        # Utility functions
├── assets/             # Static assets
├── App.tsx            # Main app component
└── main.tsx           # Application entry point
```

## Adding New shadcn/ui Components

This project is pre-configured with shadcn/ui. To add new components:

```bash
npx shadcn@latest add [component-name]
```

## Customization

### Tailwind CSS

Modify `tailwind.config.js` to customize your design system:

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Your custom theme
    },
  },
  plugins: [],
}
```

### Theme Configuration

The project includes a theme system with CSS variables defined in `app.css`. Modify the color scheme by updating the CSS custom properties.

## ESLint Configuration

For production applications, consider enabling type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // or tseslint.configs.strictTypeChecked for stricter rules
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## License

MIT