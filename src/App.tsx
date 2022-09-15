import {Header} from './components/Header';
import {Body} from './components/Body';
import Photo from './components/Photo';
const App = () => {  
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
      <Photo imgSrc="./src/assets/images/anotado.jpg"
       imgDesc="Anotado" className="imgGlobal"/>        
    </div>  
  );
}

export default App;