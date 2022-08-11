import React, {useState, useMemo, useCallback } from 'react'
import Btn from "./Btn"
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

  const pesadoMemo = useMemo(() => pesado(counter), [counter])

  const add = useCallback(()=> {
    setCounter((actual) => actual + 1)
  }, [setCounter])

  return (
    <>
      <h1>
        Memorize: <Dato value={counter} />
      </h1>
      <hr />

      <pre>{pesadoMemo}</pre>
      
      <Btn add={add}/>
      <button onClick={() => setView(!view)}>Ver/Quitar</button>
    </>
  )
}

export default Memorize