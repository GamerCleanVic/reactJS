import React, {ChangeEvent, useEffect, useState} from 'react';
import * as C from './components/styled1/AppStyles';
import {Movies} from './components/types/Movies';


const App = () => {

  const [movies, setMovies] = useState<Movies[]>([]);
  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
    .then(
      (response) => {
          return response.json();
      }
    )
    .then(
      (json)=>{
        setMovies(json);
      }
    );
  }
  useEffect(
    () => {
      loadMovies();
    }, []
  );

  return(
    <div className="
    bg-blue-900
      p-3
      w-screen
      h-11
      fixed
      top-0
      left-0
      uppercase
      font-bold
    ">
      <div className="fixed top-auto left-3">   
        <div className="bg-cyan-300 w-7 p-[2px] mb-1"></div>
        <div className="bg-cyan-300 w-7 p-[2px] mb-1"></div>
        <div className="bg-cyan-300 w-7 p-[2px]"></div>
      </div>
      <div className="
        
        right-0 
      text-cyan-300
        mr-3

      ">
        <a href='#' className='no-underline'>ARTIGOS</a>        
        <div>
            <button className="
              mt-7
             text-blue-700
              flex rol
             "
              onClick={loadMovies}
             >
              Carregar filmes
            </button>
            Total de Filmes: {movies.length}
            <div className="mt-3 grid grid-cols-6 gap-3">
              {movies.map((item, index) => (
                <div key={index}>
                  <img src={item.avatar} className="w-32 block" />
                  <p className="text-white
                   font-normal 
                   text-[12px]"
                  >
                    {item.titulo}
                  </p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>      
  );
}
export default App;