import Header from './layouts/header/Header';
import Body from './layouts/body/Body';
import Footer from './layouts/footer/Footer';
import './layouts/header/index.css';
import './layouts/footer/index.css';
//import './layouts/body/index.css';
//import {useEffect} from 'react';
import './App.css';

const App = () => {  
  return (
    <div className="p-5 text-green-300">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
export default App;