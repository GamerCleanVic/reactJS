import Header from './layouts/header/Header';
import Body from './layouts/body/Body';
import Footer from './layouts/footer/Footer';
import './layouts/header/index.css';
import './layouts/footer/index.css';
import {ImFacebook2} from 'react-icons/im';
import {ImTwitch} from 'react-icons/im';
import {ImTwitter} from 'react-icons/im';
import {ImInstagram} from 'react-icons/im';
import {ImYoutube} from 'react-icons/im';
import {ImMenu} from 'react-icons/im';
//import './layouts/body/index.css';
//import {useEffect} from 'react';
import './App.css';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {AboutItem} from './pages/AboutItem';
import {NotFound} from './pages/NotFound';

import {Routes, Route} from 'react-router-dom';

const App = () => {  
  return (
    <div className="p-5 text-green-300">
      <div className="bodyStyle">
                <div className='mb-9'>
                  <ImMenu />
                </div>
                <div>
                    <h1 className="uppercase">Estudo de rotas</h1>
                    <hr />
                      <div>
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/sobre" element={<About />} />                            
                            <Route path="/sobre:slug" element={<AboutItem />} />
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        <div className="text-yellow-200 mt-4">
                          Rotas na URL: /sobre, /sobre/joao, /sobre/pedro
                        </div>
                    </div>
                </div>
                <hr />
                <div className='mb-3'>Todos os direitos reservados.</div>
                <div className='flex flex-row'>
                  <a href="https://facebook.com" target="_blank" className='ml-0 m-2 btnRedes'>
                    <ImFacebook2 />
                  </a>
                  <a href="https://twitch.tv" target="_blank" className='m-2 btnRedes'>
                    <ImTwitch />
                  </a>
                  <a href="https://twitter.com" target="_blank" className='m-2 btnRedes'>
                    <ImTwitter />
                  </a>
                  <a href="https://instagram.com" target="_blank" className='m-2 btnRedes'>
                    <ImInstagram />
                  </a>
                  <a href="https://youtube.com" target="_blank" className='m-2 btnRedes'>
                    <ImYoutube />
                  </a>
                </div>
        </div>
    </div>
  );
}
export default App;