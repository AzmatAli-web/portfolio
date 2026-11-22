# Azmat Ali — Portfolio

A responsive React portfolio inspired by an expressive, character-led creative portfolio reference. Built with React and Vite, with original SVG artwork and CSS interface illustrations.

## Run locally

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

## Features

- Cursor-following illustrated character with a clickable expression toggle.
- Responsive layouts, project category filters, and scroll reveals.
- Selected GitHub projects with original illustrative project covers (not screenshots).
- Email links and clipboard copy using the browser Clipboard API.
- Keyboard focus styles, skip navigation, and reduced-motion support.

## Content

Main content and project links are in `src/App.jsx`. Styles are in `src/App.css` and `src/index.css`. The existing photo is in `public/images/azmat.jpeg`. Google Fonts has local system-font fallbacks.

The contact section opens the visitor’s email client; there is no message-submission backend. The illustrated character is a lightweight SVG, not a 3D model. Unused legacy components remain available in `src/components` for reference and are not imported by the new app.
