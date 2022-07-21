import { useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react';

const App = () => {
  const [ contador, setContador ] = useState(10);

  const disminuir = () => {    
    setContador(contador - 1);
  };

  const aumentar = () => {    
    setContador(contador + 1);
  };

  return (
    <div className="App">
      <div>
          <img src={reactLogo} width="250" className="logo react" alt="React logo" />
          <p>
            <button onClick={ disminuir } className="button"> - </button>
            <h1> { contador } </h1>
            <button onClick={ aumentar } className="button"> + </button>
          </p>        
      </div>      
    </div>
  )
}

export default App
