import React from 'react'
import { useState } from 'react'

const Calculadora = () => {
    const [suma, setSuma] = useState(0)
    return (
        <div>
            <label>
                Numero 1: <input type="text" />        
            </label>
            <label>
                Numero 2: <input type="text" />        
            </label>
            <br />

            <span>Suma: {suma}</span>
            <br />

            <span>Resta: {suma}</span>
            <br />

            <span>Multiplicacion: {suma}</span>
            <br />

            <span>Division: {suma}</span>
        </div>
    )
}

export default Calculadora