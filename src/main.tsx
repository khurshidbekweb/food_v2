import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import { StoreProvider } from './store/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
      <Toaster/>  
    </StoreProvider>    
  </StrictMode>,
)
