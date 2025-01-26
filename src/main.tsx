import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.tsx'
import About from './About.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
)
