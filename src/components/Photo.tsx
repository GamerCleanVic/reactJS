//import {ReactNode} from 'react';
type Props = {
    imgSrc: string;
    imgDesc: string;
    className: string;
}
const Photo = ({imgSrc, imgDesc, className}: Props) => {
    return(
        <>
        <div>
            <a href="#" className="texto1Img1 ">                             
                <img src={imgSrc} alt={imgDesc} 
                className={className}/>
            </a>
        </div>
        <div>

        </div>
        </>
    );
}

export default Photo;