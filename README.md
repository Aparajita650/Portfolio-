# Aparajita — React 19 Portfolio

Production-ready personal portfolio built with:

- React 19
- Vite
- Tailwind CSS v4
- Lucide React
- Responsive, reusable components
- CSS animations with reduced-motion support
- Dark/light theme toggle with saved preference
- Configurable live-project links
- Email-based “Start a conversation” CTA
- Vercel deployment configuration
- Resume PDF included in `public/`

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

No environment variables are required for this portfolio.

## Content

All personal information, education, experience, skills, projects, and certifications displayed here are based on the supplied resume. Update `src/data/portfolio.js` if any resume details change.


## Add your project live URLs

Open `src/data/portfolio.js` and set each project's `liveUrl` to its deployed URL. The “View live project” link appears automatically when a URL is provided. The resume did not include live deployment URLs, so these are intentionally left blank rather than guessed.


## UI features

- Use the sun/moon control in the navigation to switch dark/light themes. The selection is saved in local storage.
- Add each deployed project URL to the matching `liveUrl` field in `src/data/portfolio.js`. The project card will then show a working **View live project** link that opens in a new tab.
- **Start a conversation** opens a pre-filled email draft addressed to the portfolio email.
