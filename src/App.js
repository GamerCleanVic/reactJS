import logo from './logo.svg';
import './App.css';
import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

function App() {     
  const bloco = 
    <p className={"bloco1"}>
      <a href="#" className={'botao1'}>
        YouTube
      </a>
      <a href="#" className={'botao1'}>
        Twitch
      </a>
      <a href="#" className={'botao1'}>
        Instagraum
      </a>
    </p>
  ;
  const element = <div>{bloco}</div>; 

  const element2 = 
     <header className={"titulo1"}>
      <a href="#" className={'botao1'}>
        Home
      </a>
      <a href="#" className={'botao1'}>
        Artigos
      </a>
      <a href="#" className={'botao1'}>
        Imagens
      </a>
      <a href="#" className={'botao1'}>
        Vídeos
      </a>
      <a href="#" className={'botao1'}>
        Sobre
      </a>
    </header>
  ;
  function Sum(){
       const relogio3 = (
          <div>
            <h1>Hello, world!</h1>
            <h2>
              It is {new Date().toLocaleTimeString()}
            </h2>
          </div>
       );
       return relogio3;       
  }
  setInterval(Sum, 1000);

  return (
    <div className="App">
      <header className="App-header">        
        
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>
            {element2}
        </h1>
        <div className={'bgRelogio'}>
            <h1 className={'bgRelogio'}>
              {/*tituloRelogio2 */}
            </h1>
            <h2 className={'texto1Clock'}>
              {<Sum />}
            </h2>            
        </div>
        <p>
            {element}
        </p>
      </header>
    </div>    
  );
}

export default App;
