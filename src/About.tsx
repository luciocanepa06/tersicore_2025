import SideImage from './utils/SideImage.tsx'

import Navbar from './utils/Navbar.tsx'
import Footer from './utils/Footer.tsx'
import { ImagePropsType } from './utils/BackgroundImage.tsx';

import './utils/About.css'

function About() {
  const ImageProps: ImagePropsType = {
    alt: "about page side image",
    src: "https://imgix.cosmicjs.com/ad71b150-e4a9-11ef-8a63-eb57d6c77a36-Coro-Tersicore-1.JPG",
    lowres: "https://imgix.cosmicjs.com/8cf247b0-e4d5-11ef-8a63-eb57d6c77a36-ad71b150-e4a9-11ef-8a63-eb57d6c77a36-Coro-Tersicore-1.jpg"
  }

  return (
    <>
        <Navbar />
        <div className='about-container'>
          <SideImage props={ImageProps} />
        <div className='about'>
          <h1>Chi siamo</h1>
          <div className='about-text'>
            <p>
            Nel novembre del 2002 cinque amici poco più che ventenni, che avevano già cantato insieme per una decina d’anni nel medesimo coro, hanno deciso di riunirsi nuovamente e di fondare l’Associazione Coro Tersicore. A muoverli non era solo l’intenzione di condividere un’attività artistica, ma soprattutto il desiderio di condividere la gioia del canto corale inteso come esperienza comune di vita e di crescita. Tra le muse tradizionalmente associate al canto si è dunque preferita la Tersicore per la sua immagine di ispiratrice e protettrice del canto corale e della danza collettiva. 
            <br></br>
            Mentre il Coro Tersicore cominciava ad esibirsi nei primi concerti a partire da un repertorio polifonico di musica classica prevalentemente cinque-seicentesca, il numero di coristi aumentava di pari passo con gli impegni, contando sull’apporto decisivo di persone motivate e coinvolte. Sin dalle origini i coristi hanno dato la propria disponibilità ad animare anche le funzioni religiose, cogliendo nella bellezza del canto l’elemento unificante tra musica sacra e musica profana. 

            </p>

            <p>
            Nel tempo il coro ha ampliato il proprio repertorio, includendovi brani che spaziano dalla musica rinascimentale a quella contemporanea e organizzando delle giornate di studio per affinare ulteriormente la qualità del suono. Ciò ha consentito, fra l’altro, di eseguire presso gli studi RSI la prima di La Nebbia di Cristian Gentilini nell’ambito del Concorso internazionale di composizione corale 2007. 
            </p>

            <p>
            La versatilità riconosciuta al gruppo gli ha permesso di animare varie messe in occasione di matrimoni e di feste patronali, a cui va aggiunta la messa per l’Ascensione trasmessa in Eurovisione dalla RSI nel 2010, anno nel quale ha anche collaborato alla pubblicazione di un CD in memoria di Luigi Picchi. Nel 2013, a distanza di dieci anni dalla sua fondazione, il Coro Tersicore ha pubblicato il CD Dieci, con opere di Felix Mendelssohn Bartholdy. Nel 2014 ha partecipato alla XXI edizione del Festival internazionale di musica corale “D.G. KIRIAC”, svoltosi nella regione della Muntenia (Romania), esibendosi nelle sezioni “musica corale romena ed internazionale” e “musica sacra”. Nel 2019 il Coro è stato invitato a partecipare alla Rassegna Corale Europea dei Popoli in Friuli. 
            <br></br>
            <br></br>
            Il Coro Tersicore si è esibito in collaborazione con diversi cori e orchestre, tra cui la Scuola Corale Scarlatti di Bollate (MI), La Scuola Corale della Cattedrale, il Coro Alpe Adria di Treppo Grande (UD), il Coro Les Courants d’Airs (Parigi), il Gruppo Canzoni e Costumi Ticinesi di Bellinzona, i Cantori di Pregassona, la Filarmonica Mosaico di Monte Carasso, l’Orchestra da Camera di Lugano e l’ensemble Hnoss di Milano.

            </p>
          </div>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default About
