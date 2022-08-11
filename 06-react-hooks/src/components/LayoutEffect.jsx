import React, { useState, useLayoutEffect, useEffect } from 'react'

const LayoutEffect = () => {
  const [data, setData] = useState([])

  const [length, setLength] = useState(0)

  useEffect(() => {
    const newData = [
        {
          name: 'Yirsis',
          email: 'yirsis@mail.com',
        },
        {
          name: 'Yirsis',
          email: 'yirsis@mail.com',
        },
        {
          name: 'Yirsis',
          email: 'yirsis@mail.com',
        },
        {
          name: 'Yirsis',
          email: 'yirsis@mail.com',
        },
        {
          name: 'Yirsis',
          email: 'yirsis@mail.com',
        },
      ]
    setTimeout(() => {
        setData(newData)
      }, 5000)
  }, [])

  useLayoutEffect(() => {
    const tam = data.length
    setLength(tam)
  }, [data.length])
  
  return (
    <>
      <h1>useLayoutEffect</h1>
      <hr />
      <p>Valores: {length}</p>
    </>
  )
}

export default LayoutEffect
