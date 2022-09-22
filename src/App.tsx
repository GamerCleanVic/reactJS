import React, {useState} from 'react';
import * as C from './components/styled1/AppStyles';

const App = () => {
  
  
  return(    
    <C.Container bgContainer="#181818">
      <span>Texto do Container</span>
      <a href='#' className="link">Link</a>

      <C.Botao bg="lightgreen" >
        Botão grande
      </C.Botao>
      <C.Botao bg="darkgreen" corTexto="#fff" small>
        Botão pequeno
      </C.Botao>
    </C.Container>
  );
}

export default App;