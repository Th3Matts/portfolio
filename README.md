# Th3Matts Portfolio

A personal portfolio site built with vanilla HTML, CSS, and JavaScript, featuring a bilingual interface (English / Portuguese), a project showcase, and a contact section.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Overview

This site serves as a hub for showcasing frontend projects and professional contact information. It's designed to be lightweight, dependency-free, and fully responsive across mobile, tablet, and desktop breakpoints.

## Features

- **Bilingual toggle (EN/PT)** — Language buttons swap content across the page using `data-en` / `data-pt` attributes and a small JS helper, with no page reload.
- **About section** — A short introduction with a profile photo, highlighting a background in tech-adjacent client work and current search for junior/entry-level web developer roles.
- **Projects showcase** — Cards for each featured project, including a screenshot, tech tags, description, a live demo link, and a link to the GitHub repository.
- **Contact section** — Quick links to email, LinkedIn, and GitHub.
- **Responsive design** — Layout adapts at `768px` and `1024px` breakpoints, adjusting header direction, image sizes, and card layout.
- **Smooth scrolling** — Anchor navigation (`#projects`, `#contact`) scrolls smoothly into view, with `scroll-margin-top` offsets to account for the fixed header.

## Featured Projects

| Project | Description | Tech |
|---|---|---|
| [Rock, Paper, Scissors](https://th3matts.github.io/foundationsP3/) | A browser-based game where the first player to reach 5 points wins. ([source](https://github.com/Th3Matts/foundationsP3)) | HTML, CSS, JavaScript |
| [Calculator](https://th3matts.github.io/foundationsP5/) | A calculator supporting mouse and keyboard input, chained operations, and decimal arithmetic. ([source](https://github.com/Th3Matts/foundationsP5)) | HTML, CSS, JavaScript |

## How the Language Toggle Works

Elements that need translation carry `data-en` and `data-pt` attributes holding the HTML for each language:

```html
<p data-en="..." data-pt="...">Default (English) content</p>
```

Clicking a language button runs `setLanguage(lang)`, which selects every element with the matching `data-{lang}` attribute and replaces its `innerHTML` with the stored translation.

## Project Structure

```
├── index.html
├── assets/
│   ├── images/
│   ├── style/
│   │   └── style.css
│   └── fonts/
└── scripts/
    └── portfolio.js
```

## Running Locally

Since this is a static site with no build step, you can open `index.html` directly in a browser, or serve it locally for a closer-to-production experience:

```bash
# using Python
python3 -m http.server 8000

# or using VS Code's Live Server extension
```

Then visit `http://localhost:8000`.

## Fonts

- **JetBrains Mono Nerd** — used for general body text and UI elements.
- **Poppins** (Google Fonts) — used for headings and paragraph copy.

## Contact

- **Email**: matrodriguessilva@gmail.com
- **LinkedIn**: [linkedin.com/in/matrodriguessilva](https://linkedin.com/in/matrodriguessilva)
- **GitHub**: [github.com/Th3Matts](https://github.com/Th3Matts)

## Possible Next Steps

- Add alt text to the "About" profile image (currently empty).
- Consider extracting inline `data-en`/`data-pt` translation strings into a JSON file as the number of translated elements grows.
