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

  //Função1 treino
  const element2 = {
    type: 'h1',
    props:{
      className: 'titulo1',
      children: 'Olá, JottaLPB'
    }
  };
  //Fim Função 1

  return (
    <div className="App">
      <header className="App-header">        
        <h1 className={'titulo1'}>
          Este resultado foi para o console.log!
          {console.log(element2)}
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className={"p1"}>
          BOA TARDE!
        </p>
        <p>
          {element}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
