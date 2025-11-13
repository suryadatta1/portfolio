# Surya Datta - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14
- 🎯 TypeScript for type safety
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository or upload the project folder
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Header component
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Skills.tsx      # Skills section
│   ├── Education.tsx   # Education section
│   └── Contact.tsx     # Contact information
├── public/             # Static assets
└── package.json        # Dependencies
```

## Customization

- Update personal information in the respective component files
- Modify colors in `tailwind.config.ts`
- Adjust styling in component files or `globals.css`

## License

This project is open source and available for personal use.

