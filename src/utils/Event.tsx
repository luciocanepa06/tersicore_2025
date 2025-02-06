import { formatDate } from "../utils/tooling.tsx"

function Event({ event }: any) {

  return (
    <div className="event">
      <h1>{event.titolo}</h1>
      <p id="luogo">{event.luogo}</p>
      <p id="data">{formatDate(event.data)} - {event.ora}</p>
      
      {(event.descrizione != null) &&
        <p id="descrizione">{event.descrizione}</p>
      }
    </div>
  )
}

export default Event
