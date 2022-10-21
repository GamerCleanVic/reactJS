import Header from './layouts/header/Header';
import Body from './layouts/body/Body';
import Footer from './layouts/footer/Footer';
import './layouts/header/index.css';
import './layouts/footer/index.css';
//import './layouts/body/index.css';
//import {useEffect} from 'react';
import './App.css';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {AboutJoao} from './pages/AboutJoao';
import {AboutPedro} from './pages/AboutPedro';

import {Routes, Route} from 'react-router-dom';

const App = () => {  
  return (
    <div className="p-5 text-green-300">
      <div className="bodyStyle">
                <div>
                    <h1 className="uppercase">Estudo de rotas</h1>
                    <hr />
                    <div>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/sobre" element={<About />} />
                          <Route path="/sobre/joao" element={<AboutJoao />} />
                          <Route path="/sobre/pedro" element={<AboutPedro />} />
                        </Routes>
                        <div className="text-yellow-200 mt-4"> Rotas na URL: /sobre, /sobre/joao, /sobre/pedro</div>
                    </div>
                </div>
                <hr />
                Todos os direitos reservados.
        </div>
    </div>
  );
}
export default App;