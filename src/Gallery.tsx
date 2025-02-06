import Navbar from "./utils/Navbar.tsx"
import Footer from "./utils/Footer.tsx"

import { getImages } from "./utils/tooling.tsx"

function Gallery() {
  getImages()
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Galleria</h1>
    </>
  )
}

export default Gallery
