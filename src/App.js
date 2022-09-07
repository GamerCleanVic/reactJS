import logo from './logo.svg';
import './App.css';
import React from 'react';

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
  function tick() {
    const relogio = (
      <div className={'bgRelogio'}>
        <h1 className={'tituloClock'}>
          Relógio
        </h1>
        <h2 className={'texto1Clock'}>
          São {new Date().toLocaleTimeString()} horas.
        </h2>
      </div>
    );
    return relogio;
  }
  const relogio2 = tick();

  return (
    <div className="App">
      <header className="App-header">        
        <h1>
          {element2}
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className={"p1"}>
          BOA TARDE!
        </p>
        <p>
          {element}
        </p>
        <p>
          {relogio2}
        </p>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
