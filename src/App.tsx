import React, {ChangeEvent, useEffect, useState} from 'react';
import * as C from './components/styled1/AppStyles';

const App = () => {
  
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect (() => {
      setFullName(`${name} ${lastName}`);
    }, [name, lastName]
  );

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

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
        fixed
        right-0 
      text-cyan-300
        mr-3

      ">
        <a href='#' className='no-underline'>Texto Qualquer Aqui</a>
        <div className="mt-9 flex flex-col">
            <input className="mb-3 text-blue-700" type="text" placeholder=
            "Digite seu NOME" value={name} onChange={handleNameChange}/>
            <input className="text-blue-700 mb-3" type="text" placeholder='Digite seu SOBRENOME'
             value={lastName} onChange={handleLastNameChange}/>
        </div>
        <p className="text-white">Nome completo: 
        <i className="text-cyan-300 ml-2">{fullName}</i></p>
        <div className="parag1 mt-7">
          Obrigado por assistir!
        </div>
      </div>
    </div>      
  );
}

export default App;