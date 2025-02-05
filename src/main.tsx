import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.tsx'
import About from './About.tsx'
import Director from './Director.tsx'
import Calendar from './Calendar.tsx'
import Gallery from './Gallery.tsx'
import Repertorio from './Repertorio.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="chi-siamo" element={<About />} />
        <Route path="direttore" element={<Director />} />
        <Route path="repertorio" element={<Repertorio />} />
        <Route path="calendario" element={<Calendar />} />
        <Route path="galleria" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
)
