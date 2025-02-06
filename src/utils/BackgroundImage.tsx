import { useState, useEffect } from 'react';

export type ImagePropsType = {
    alt: string;
    lowres: string;
    src: string;
}

function BackgroundImage({ props }: { props: ImagePropsType }) {
    const [SrcIsLoaded, setSrcIsLoaded] = useState(false);
    const SrcUrl = props.src
    const [LowResIsLoaded, setLowResIsLoaded] = useState(false);
    const LowResUrl = props.lowres

    useEffect(() => {
        const img = new Image();
        img.src = LowResUrl;
        img.onload = () => {
          setLowResIsLoaded(true);
        };
      }, [LowResUrl]);

    useEffect(() => {
        const img = new Image();
        img.src = SrcUrl;
        img.onload = () => {
          setSrcIsLoaded(true);
        };
      }, [SrcUrl]);

    return(
        <>
        {(LowResIsLoaded && !SrcIsLoaded) && 
            <div className="home-background-lowres"
            style={{ backgroundImage: `url(${LowResUrl})` }}>
            <h1 className="title">Tersicore</h1>
            </div>
        }

        {SrcIsLoaded && 
            <div className="home-background-loaded"
            style={{ backgroundImage: `url(${SrcUrl})` }}>
            <h1 className="title">Tersicore</h1>
            </div>
        }
        </>
    )
}

export default BackgroundImage