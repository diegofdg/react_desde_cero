import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>
            <button className="button"> - </button>
            <h1>10</h1>
            <button className="button"> + </button>
          </p>        
      </div>      
    </div>
  )
}

export default App
