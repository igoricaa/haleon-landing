# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter and checker
- `npm run format` - Format code with Biome

## Project Architecture

This is a Next.js 15 application using the App Router architecture with:

### Core Stack
- **Next.js 15** with App Router (`src/app/` directory)
- **Tailwind CSS v4** for styling with CSS variables
- **Biome** for linting, formatting, and code quality
- **shadcn/ui** component system (configured in `components.json`)
- **TypeScript** with strict mode enabled
- **Turbopack** for fast development and builds

### Key Directories
- `src/app/` - Next.js App Router pages and layouts
- `src/lib/` - Shared utilities (contains `cn()` className utility)
- `public/` - Static assets including Haleon brand assets (Aquafresh, Sensodyne product images)
- `components/ui/` - shadcn/ui components (configured but not yet populated)

### Styling System
- Uses Tailwind CSS v4 with CSS variables for theming
- Global styles in `src/app/globals.css`
- `cn()` utility function in `src/lib/utils.ts` combines `clsx` and `tailwind-merge`
- shadcn/ui configured with "new-york" style and neutral base color

### Important Patterns
- Path aliases: `@/*` maps to `src/*`
- Component imports use absolute paths with `@/` prefix
- Geist font family loaded via `next/font/google`
- Motion library available for animations
- Lucide React for icons

### Brand Context
This appears to be a landing page for Haleon products (Aquafresh, Sensodyne brands) based on the product images in the public directory.