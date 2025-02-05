import React, { useState, useEffect } from 'react';

import Navbar from './utils/Navbar.tsx'
import Footer from './utils/Footer.tsx'
import './utils/Director.css'

function Director() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageUrl = "https://imgix.cosmicjs.com/3c4b74b0-e54b-11ee-a01e-c56f185aea7b-bg-direttore.jpg"

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [imageUrl]);


  return (
    <>
        <Navbar />

        <div 
          className={`director-background${isLoaded ? '-loaded' : ''}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <h1 className="title">Direttore</h1>
        </div>

        <div className='about-container'>
          <div className='about'>
            <p>
            Guido Riccardo Mollica, nato nel 1965, ha iniziato gli studi musicali sette anni dopo sotto la guida del Maestro W. Zaramella, con il quale si è diplomato in organo e composizione organistica presso il Civico Istituto Musicale "G. Donizetti" di Bergamo. Sempre a Bergamo ha completato gli studi di armonia e contrappunto con il Maestro V. Fellegara ed è autore di diversi brani per organo. Ha partecipato a corsi di interpretazione e perfezionamento tenuti da E. Fadini, H Vogel, M. Radulescu.
            </p>

            <p>
            Nelle esibizioni in pubblico ha sempre riscosso critiche favorevoli sia come solista che in collaborazione con gruppi strumentali e vocali, tra i quali: la "Scuola Corale della Cattedrale di S. Lorenzo" in Lugano e l'orchestra "Quadrivium" di Milano. È spesso chiamato a tenere concerti per la valorizzazione degli organi storici, in modo particolare nelle rassegne provinciali di Varese e Milano. Dal 1994 dirige la "Scuola Corale Scarlatti", formazione giovanile, con la quale partecipa a funzioni religiose e concerti nelle principali chiese milanesi, ma anche di altre province italiane oltre che all'estero. Ha collaborato con vari cori come la "Cappella musicale" del Duomo di Milano e l'"Ensemble vocal Magadis" del Ministero delle Finanze di Parigi. Sempre con la Scuola Corale Scarlatti partecipa a manifestazioni didattiche nelle scuole di ogni ordine, promuovendo l'attività corale non solo sotto l'aspetto artistico ma anche educativo e sociale. Spesso chiamato a valutare e perfezionare la vocalità di gruppi corali, svolge intensa attività didattica nella Scuola Statale milanese.
            </p>

            <p>
            Dal 2003 dirige, accompagna all'organo e cura gli aspetti vocali ed artistici, del coro "Tersicore" di Lugano. È stato per quindici anni organista titolare presso la basilica del Corpus Domini di Milano e svolge attività di ricerca e divulgazione nel campo della musica computazionale.
            </p>
          </div>
        </div>

        <Footer />
    </>
  )
}

export default Director
