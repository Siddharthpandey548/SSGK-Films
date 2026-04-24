# SSGK Films - Indian Wedding Photography

A premium, highly responsive Indian wedding photography portfolio website built with Next.js and React. The design features a beautifully crafted aesthetic combining a deep teal background, gold custom accenting, intricate decorative SVG elements (such as golden marigolds, watercolor teal leaves, pearl beads), and custom gold sparkle animations.

## Features
- **Next.js & React Framework**: Optimized, fast, and seamless rendering.
- **Custom Design System**: Deep teal background, gold accents, smooth hover animations, completely built with custom CSS (no external CSS frameworks like Tailwind used).
- **Hero Arch Component**: Specialized SVG masking and ornate bordering framing the hero couple image.
- **Animated Overlays**: 
  - Floating watercolor floral graphics.
  - Swaying bead and flower SVGs.
  - Custom canvas-based twinkling gold sparkles overlay.
- **Responsive Navigation**: Full desktop nav with hamburger menu fallback for mobile devices.

## Setup & Installation

Follow these steps to run the site locally:

1. **Prerequisites**
   - Node.js (version 24.x LTS recommended)
   - npm (comes with Node.js)

2. **Install Dependencies**
   Navigate to the project root directory and install packages:
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

4. **View the Website**
   Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

## Project Structure
- `/app` - Next.js App Router core, including `page.js` and global stylesheets (`globals.css`).
- `/components` - Reusable UI sections, including:
  - `HeroSection.jsx`
  - `Navbar.jsx`
  - `FooterStrip.jsx`
  - `FloralOverlay.jsx`
  - `GoldSparkles.jsx`
- `/public/images` - Static assets including the main hero image.

## Built With
- [Next.js](https://nextjs.org/) (16.2.x)
- [React](https://reactjs.org/) (19.2.x)
