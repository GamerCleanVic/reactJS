import Photo from './components/Photo';
import React, {useState} from 'react';
import Botao from './components/Botao';
const App = () => {
  
  
  return(    
    <div>
      <div>
         <Botao />
      </div>
      <h1 className="h1Foto">JOTTALPB</h1>
      <Photo imgSrc="./src/assets/images/logoLPTV.png"
       imgDesc="Anotado" className="imgGlobal"/>        
    </div>  
  );
}

export default App;