# CTH-GROUP Architecture Website

A modern, responsive architecture portfolio website built with Next.js 14 and TypeScript.

## Features

- Clean, modern design inspired by professional architecture firms
- Responsive grid layout for project portfolio
- TypeScript for type safety
- Optimized for performance with Next.js 14
- Mobile-first responsive design

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
└── components/
    ├── Header.tsx        # Header with navigation
    └── ProjectGallery.tsx # Project grid gallery
```

## Technologies Used

- **Next.js 14** - React framework with app router
- **TypeScript** - Type safety and better developer experience
- **CSS3** - Modern styling with Grid and Flexbox
- **React 18** - Latest React features

## Customization

### Adding New Projects

Edit the `projects` array in `src/components/ProjectGallery.tsx` to add or modify portfolio projects.

### Styling

Main styles are in `src/app/globals.css`. The design uses a clean, minimalist approach with:
- Red accent color: `#e60012`
- Professional typography
- Responsive grid layout

## Building for Production

```bash
npm run build
npm start
```

## License

This project is created for demonstration purposes.
# cthgroup
