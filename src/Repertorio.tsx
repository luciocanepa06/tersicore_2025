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

  useEffect(() => {
    getRecords().then((data) => {
      setRecords(MapFromRecords(data));
    });
  }, []);

  return (
    <>
        <Navbar />
        
        <div className="repertorio-container">
          {Array.from(records.keys()).sort(sortSeclors).map((key) => {
            return (
              <div key={`secolo-${key}`} className="secolo">
                <h1>
                  {key != 0 && `Secolo ${key}`}
                  {key == 0 && "Altri brani del repertorio"}
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
