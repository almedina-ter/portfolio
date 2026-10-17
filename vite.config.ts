import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { portfolioPlugin } from './build/portfolio-plugin'

/**
 * BASE_PATH is where the site lives on the web server.
 *  - GitHub Actions sets it for you: "/<repository-name>/", or "/" for a custom domain.
 *  - Locally it defaults to "./" (relative), which works from any folder.
 * To hard-code it, replace the fallback, e.g. '/my-portfolio/'.
 */
const base = process.env.BASE_PATH || './'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), portfolioPlugin()],
})
