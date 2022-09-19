import Photo from './components/Photo';
import React, {useState} from 'react';
const App = () => {
  
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  }
  return(    
    <div>
      <div>
         <button className="btn1" onClick={handleClick}>
            {show ? 'OCULTAR' : 'MOSTRAR'}
         </button>
         {show &&
         <div className="parag1">
            Obigado por assistir!
          </div>}
      </div>
      <h1 className="h1Foto">ANOTADO</h1>
      <Photo imgSrc="./src/assets/images/logoLPTV.png"
       imgDesc="Anotado" className="imgGlobal"/>        
    </div>  
  );
}

export default App;