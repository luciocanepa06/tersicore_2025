import { useState, useEffect } from 'react';
import { ImagePropsType } from './BackgroundImage.tsx';

function SideImage({ props }: { props: ImagePropsType }) {
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
            <div className="side-image-lowres">
                <img src={LowResUrl} alt={props.alt} />
            </div>
        }

        {SrcIsLoaded && 
            <div className="side-image-loaded">
                <img src={SrcUrl} alt={props.alt} />
            </div>
        }
        </>
      )
}

export default SideImage