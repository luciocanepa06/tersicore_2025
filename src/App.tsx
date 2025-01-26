import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Navbar from "./utils/Navbar.tsx"

import './App.css'

function App() {
  return (
    <>
      <h1>Main Page</h1>
      <Navbar />
      <LazyLoadImage
        src={"https://imgix.cosmicjs.com/93847ec0-e537-11ee-a01e-c56f185aea7b-bg-photo.jpg"}
        effect="blur"
        wrapperProps={{
          style: {transitionDuration: "0.5s"},
      }}
      />
    </>
  )
}

export default App
