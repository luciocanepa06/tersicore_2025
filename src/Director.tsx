import Navbar from './utils/Navbar.tsx'
import Footer from './utils/Footer.tsx'

import SideImage from './utils/SideImage.tsx';
import { ImagePropsType } from './utils/BackgroundImage.tsx';

import './utils/About.css'

function Director() {
  const ImageProps: ImagePropsType = {
    alt: "director page side image",
    src: "https://imgix.cosmicjs.com/a9e5b680-e4cc-11ef-8a63-eb57d6c77a36-CleanShot-2025-02-06-at-21-55-00.png",
    lowres: "https://imgix.cosmicjs.com/8c9a1590-e4d5-11ef-8a63-eb57d6c77a36-a9e5b680-e4cc-11ef-8a63-eb57d6c77a36-CleanShot-2025-02-06-at-21-55-00.jpg"
  }
  return (
    <>
        <Navbar />

        <div className='about-container'>
          <SideImage props={ImageProps}/>
          <div className='about'>
          <h1 className="title">Direttore</h1>
          <div className='about-text'>
            <p>
            Guido Riccardo Mollica nato nel 1965 ha iniziato gli studi musicali sette anni
            dopo sotto la guida del M° W. Zaramella, con il quale si è diplomato in organo e
            composizione organistica presso il Civico Istituto Musicale “G. Donizetti” di
            Bergamo. Sempre a Bergamo ha completato gli studi di armonia e contrappunto
            con il M° V. Fellegara. Ha partecipato a corsi di interpretazione e perfezionamento
            tenuti da E. Fadini, H. Vogel, M. Radulescu. É chiamato a tenere concerti per la
            valorizzazione degli organi storici, in modo particolare nelle rassegne provinciali di
            Varese e Milano. Partecipa a manifestazioni didattiche nelle scuole di ogni ordine,
            promuovendo l’attività corale non solo sotto l’aspetto artistico ma anche educativo
            e sociale. Spesso chiamato a valutare e perfezionare la vocalità di gruppi corali,
            svolge intensa attività didattica nella Scuola Statale milanese. Dal 2003 dirige,
            accompagna all’organo e cura gli aspetti vocali ed artistici, del coro “Tersicore” di
            Lugano. Svolge attività di ricerca e divulgazione nel campo della musica
            computazionale.
            </p>
          </div>
        </div>
        </div>

        <Footer />
    </>
  )
}

export default Director
