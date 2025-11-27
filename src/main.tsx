import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@chinese-fonts/sypxzs/dist/思源屏显臻宋/result.css'
import '@/styles/globals.css'
import { App } from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
