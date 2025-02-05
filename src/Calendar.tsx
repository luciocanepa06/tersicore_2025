import { useState, useEffect } from 'react';

import Navbar from "./utils/Navbar.tsx"
import Footer from "./utils/Footer.tsx"
import Event from "./utils/Event.tsx"

import { getNextEvents, getAvailableYears, getYear } from "./utils/tooling.tsx"

import "./utils/Calendar.css"

function Calendar() {
  const [year, setYear] = useState(getYear());
  const [events, setEvents] = useState<any[]>([]);
  const availableYears = getAvailableYears();

  useEffect(() => {
    getNextEvents(year, false).then((data) => {
      setEvents(data);
    });
  }, [year]);

  return (
    <>
      <Navbar />

      <div className='years-dropdown-container'>
        <label>Seleziona l'anno:</label>
        <select name="years" id="years-dropdown" onChange={(e) => {
          setYear(e.target.value);
          }}>
          {availableYears.map((year) => (
            <option 
            key={year} 
            value={year}
            >
              {year}
            </option>
          ))}
        </select>
      </div>
      
      <div className="calendar-container">
        {events.map((event) => (
          <Event event={event.metadata} key={event.metadata.data + event.metadata.ora}/>
        ))}
      </div>
      
      <Footer />
    </>
  )
}

export default Calendar
