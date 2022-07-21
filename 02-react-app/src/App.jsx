import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {

  let contador = 10;
  const disminuir = () => {
    contador = contador - 1
    console.log(contador);
  };

  return (
    <div className="App">
      <div>
          <img src={reactLogo} width="250" className="logo react" alt="React logo" />
          <p>
            <button onClick={ disminuir } className="button"> - </button>
            <h1> { contador } </h1>
            <button className="button"> + </button>
          </p>        
      </div>      
    </div>
  )
}

export default App
