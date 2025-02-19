import { useState, useEffect } from 'react';
import { NavLink } from "react-router";

import './App.css';

import Navbar from './utils/Navbar.tsx';
import Footer from './utils/Footer.tsx';

import { ImagePropsType } from './utils/BackgroundImage.tsx';
import BackgroundImage from './utils/BackgroundImage.tsx';
import { getNextEvents, formatDate } from './utils/tooling.tsx'

type Event = {
  titolo: String,
  data: String,
  ora: String,
  luogo: String,
  descrizione?: String
}

function App() {
  const BgImageProps: ImagePropsType = {
    alt: "home page background",
    src: "https://imgix.cosmicjs.com/93847ec0-e537-11ee-a01e-c56f185aea7b-bg-photo.jpg",
    lowres: "https://imgix.cosmicjs.com/20e80aa0-e30e-11ef-8a63-eb57d6c77a36-93847ec0-e537-11ee-a01e-c56f185aea7b-bg-photo.jpg"
  }

  const [event, setEvent] = useState<Event>({titolo: '', data: '', ora: '', luogo: ''});

  useEffect(() => {
    getNextEvents('', true).then((data) => {
      if (data.length != 0){
        setEvent(data[0].metadata);
      }
    });
  }, []);

  console.log(event.descrizione);

  return (
    <main>

      <Navbar />

      <div className='home-background'>
        <BackgroundImage props={BgImageProps} />
      </div>

      <div className="next-event-container">
        <div className="next-event-card">
          <h3>Prossimo evento</h3>
        {event.titolo != '' &&
        <>
          <h1>{event.titolo}</h1>
          <p>{formatDate(event.data)} - {event.ora}</p>
          <p>{event.luogo}</p>
          {event.descrizione != null &&
            <p><i>{event.descrizione}</i></p>
          }
        </>
        }
        {event.titolo == '' &&
          <h1>Nessun evento previsto</h1>
        }
          <NavLink to="/calendario">
                Calendario
          </NavLink>
        </div>
      </div>

      <div className="cd-container">
            <img src="https://imgix.cosmicjs.com/db01c9b0-e53c-11ee-a01e-c56f185aea7b-CD-cover.jpg" />
            <div>
              <h1>Dieci</h1>
              <p>Il nostro CD di musica</p>
              <p id="discover">Potete trovare il CD ai nostri concerti</p>
            </div>
      </div>

      <Footer />

    </main>
  );
}

export default App;