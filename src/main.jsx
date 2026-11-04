import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PhotoProvider } from "./context/PhotoContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhotoProvider>
       <App />
    </PhotoProvider>
  </StrictMode>,
)
