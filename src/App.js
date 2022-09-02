import logo from './logo.svg';
import './App.css';

function App() {     
  const bloco = 
    <div className={"bloco1"}>
      <div><a href="#" className={'botao1'}>
        YouTube
      </a>
      <a href="#" className={'botao1'}>
        Twitch
      </a>
      <a href="#" className={'botao1'}>
        Instagraum
      </a></div>
    </div>
  ;
  const element = <div>{bloco}</div>; 

  //Função1 treino
  function formatName(user){
      return `${user.firstName} ${user.lastName}`;
    }
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    }
    const element2 = (
      <h1>
        Hello, {formatName(user)}!
      </h1>
    );
    //Fim Função 1

  return (
    <div className="App">
      <header className="App-header">        
        <p>
          {element2}
        </p>
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
