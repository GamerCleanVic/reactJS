import {Header} from './components/Header';
import {Body} from './components/Body';
import Photo from './components/Photo';
import {useState} from 'react';
const App = () => {
  const [name, setName] = useState('Jonas');
  const handleClick = () =>{
    setName("Jotta!");
  }
  return(    
    <div>      
      <div  className="headerVite">
        <Header 
          title="Este é um exemplo"
        />
        <Header 
          title="Outro título"
        />
      </div>
      <Body />

      <div>      
        <button className="btn1" onClick={handleClick}>
          Clique aqui
        </button>
        <p>O nome é {name}.</p>
        <p className="parag1">
          Obrigado por assistirem!  
        </p>    
      </div>

      <Photo imgSrc="./src/assets/images/anotado.jpg"
       imgDesc="Anotado" className="imgGlobal"/>        
    </div>  
  );
}

export default App;