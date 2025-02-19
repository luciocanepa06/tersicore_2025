import { useState, useEffect } from 'react';
import { getRecords, MapFromRecords } from './utils/tooling.tsx';

import Navbar from './utils/Navbar.tsx'
import Footer from './utils/Footer.tsx'
import Record from './utils/Record.tsx'

import './utils/Repertorio.css'

function sortSeclors(a: number, b: number) {
  if (a == 0 || b == 0) return -1
  if(a > b) return 1
  else return -1
}

function Repertorio() {
  const [records, setRecords] = useState<Map<any, any>>(new Map());
  const [secolo, setSecolo] = useState<Array<number>>([]);

  useEffect(() => {
    getRecords().then((data) => {
      let rec = MapFromRecords(data)
      setRecords(rec);
      let secoli = Array.from(rec.keys()).sort(sortSeclors).filter((key) => key != 0)
      secoli.push(0)
      setSecolo(secoli);
    });
  }, []);
  
  return (
    <>
        <Navbar />
        
        <div className="repertorio-container">
          {secolo.map((key: number) => {
            return (
              <div key={`secolo-${key}`} className="secolo">
                <h1>
                  {key != 0 && `${key}`}
                  {key == 0 && "Brani di Natale"}
                </h1>
                <div className='artists'>
                {records.get(key).map((item: any) => (
                  <Record key={`${key}-${item.artista}`} data={item}/>
                ))}
                </div>
              </div>
            )
          })}
        </div>

          <Footer />
      </>
  )
}

export default Repertorio
