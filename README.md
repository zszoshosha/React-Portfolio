# React Portfolio — Zezo Magdy

A modern, responsive personal portfolio website built with **React** and **Tailwind CSS**, showcasing skills, projects, and contact information. Deployed on **Firebase Hosting**.

---

## Features

- **Hero Section** — Full-screen landing with animated CTA button
- **About Section** — Two-column responsive layout introducing the developer
- **Skills Section** — Responsive grid showcasing 8 technologies with hover animations
- **Responsive Navbar** — Scroll-aware styling, mobile hamburger menu with fullscreen overlay, and a social sidebar (LinkedIn, GitHub, Email, Resume)
- **Smooth Scrolling** — Powered by `react-scroll` for seamless section navigation
- **Fully Responsive** — Mobile-first design with custom breakpoints

## Tech Stack

| Category    | Technology                        |
| ----------- | --------------------------------- |
| Framework   | React 18                          |
| Styling     | Tailwind CSS 3                    |
| Icons       | React Icons                       |
| Scrolling   | React Scroll                      |
| Hosting     | Firebase Hosting                  |
| Build Tool  | Create React App                  |

## Project Structure

```
src/
├── App.js              # Root component
├── components/
│   ├── Navbar.jsx      # Navigation bar with scroll detection & mobile menu
│   ├── Hero.jsx        # Landing / hero section
│   ├── About.jsx       # About me section
│   └── Skills.jsx      # Skills grid section
├── assets/
│   └── images/         # Static images
├── index.js            # Entry point
└── App.css             # Global styles
```

## Getting Started

### Prerequisites

- **Node.js** >= 16
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/React-Portfolio.git
cd React-Portfolio

# Install dependencies
npm install
```

### Development

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000). The page hot-reloads on file changes.

### Production Build

```bash
npm run build
```

Outputs an optimised bundle to the `build/` folder.

### Deploy to Firebase

```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

## Testing

```bash
npm test
```

Runs the test suite in interactive watch mode.

## Customisation

- **Colors & Theme** — Edit `tailwind.config.js` to change the navy, slate, and accent colour palette.
- **Content** — Update the component files in `src/components/` with your own information.
- **Social Links** — Modify the `links` array in `Navbar.jsx`.

## License

This project is open-source and available under the [MIT License](LICENSE).

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
