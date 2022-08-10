import React, {useState, useMemo } from 'react'
import Dato from "./Dato"

const Memorize = () => {
  const [counter, setCounter] = useState(5)
  const [view, setView] = useState(true)

  const pesado = (iter) => {
    for(let i = 0; i < iter; i++) {
        console.log('procesando')
    }
    return 'Fin del proceso'
  }

  const pesadoMemo = useMemo(()=> pesado(counter), [counter])

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>
        Memorize: <Dato value={counter} />
      </h1>
      <hr />

      {pesadoMemo}
      
      <button onClick={handleClick}>+1</button>
      <button onClick={() => setView(!view)}>Ver/Quitar</button>
    </>
  )
}

export default Memorize