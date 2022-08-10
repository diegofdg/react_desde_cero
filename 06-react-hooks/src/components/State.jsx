import React, { useState } from 'react'

const State = () => {

  const [state, setState ] = useState(0)

  setInterval(()=> {
    setState(state+1)
  },3000)
  
  return (
    <div className='container text-center'>
        <h1>useState</h1>
        <hr />
        Cuenta: {state}
    </div>
  )
}

export default State