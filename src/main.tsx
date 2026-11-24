import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter-tight'
import '@fontsource/playfair-display/400.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import './styles/index.css'
import { App } from './App'
import { initMotionPreference } from './lib/motion'

initMotionPreference()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
