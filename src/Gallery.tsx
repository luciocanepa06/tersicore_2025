import { useState, useEffect } from 'react';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import Navbar from "./utils/Navbar.tsx";
import Footer from "./utils/Footer.tsx";
import "./utils/Gallery.css";
import { getImages } from "./utils/tooling.tsx";

function Gallery() {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [currentSlug, setCurrentSlug] = useState<string>("");
  const [availableTitles, setAvailableTitles] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);
  const [allImageData, setAllImageData] = useState<any[]>([]);

  useEffect(() => {
    getImages().then((data) => {
      setAllImageData(data);
      const availableSlugs = data.map((item: any) => item.slug);
      setSlugs(availableSlugs);
      setAvailableTitles(data.map((item: any) => item.metadata.titolo));
      if (availableSlugs.length > 0) {
        setCurrentSlug(availableSlugs[0]);
        setTitle(data[0].metadata.titolo);
        const initialImages = data[0].metadata.imgs.map((item: any) => ({
          original: item.img.imgix_url,
        }));
        setImages(initialImages);
      }
    });
  }, []);

  const handleGalleryChange = (selectedSlug: string) => {
    setCurrentSlug(selectedSlug);
    const selectedGalleryIndex = slugs.indexOf(selectedSlug);
    if (selectedGalleryIndex !== -1 && allImageData[selectedGalleryIndex]) {
      const newImages = allImageData[selectedGalleryIndex].metadata.imgs.map((item: any) => ({
        original: item.img.imgix_url,
      }));
      setImages(newImages);
      setTitle(allImageData[selectedGalleryIndex].metadata.titolo);
    }
  };

  console.log(allImageData)

  return (
    <>
      <Navbar />

      <div className='gallery-controls'>
        <div className='gallery-dropdown-container'>
          <label>Seleziona la galleria</label>
          <select 
            name="gallery" 
            id="gallery-dropdown" 
            value={currentSlug}
            onChange={(e) => handleGalleryChange(e.target.value)}
          >
            {slugs.map((slug, index) => (
              <option key={index} value={slug}>
                {availableTitles[index]}
              </option>
            ))}
          </select>
        </div>
        <h1>{title}</h1>
      </div>
      
      {images.length > 0 && (
        <ImageGallery 
          items={images} 
          lazyLoad={true} 
          showNav={true} 
          showThumbnails={false}  
          showBullets={true}
        />
      )}

      <Footer />
    </>
  );
}

export default Gallery;