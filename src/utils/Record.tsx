import { extractTableText } from '../utils/tooling.tsx'

function Record({ data }: any) {
    let artist = data.artista
    let songs = extractTableText(data.brani)
    let picture = data.immagine
    return(
        <div className="record" key={artist}>
            {picture != null &&
                <div key={artist + "picture"} className="record-picture">
                    <img src={picture.imgix_url}/>
                    <div className='record-picure-text'>
                        <h3>{artist}</h3>
                        {songs.map((song, index) => <p key={index} id={data.slug}>{song}</p>)}
                    </div>
                </div>
            }
            {picture == null &&
                <div key={artist + "only-text"} className="record-only-text">
                    <h3>{artist}</h3>
                    {songs.map((song, index) => <p key={index}>{song}</p>)}
                </div>
            }
        </div>
    )
}

export default Record