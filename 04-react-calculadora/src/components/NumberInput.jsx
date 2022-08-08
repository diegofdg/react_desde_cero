import React from 'react'
import { useState } from 'react'
import Resultado from './Resultado'

const NumberInput = () => {
    const [numeros, setNumeros] = useState({
        numero1: 10,
        numero2: 2
    })

    const { numero1, numero2 } = numeros

    const handleChange = (e) => {
        setNumeros({
            ...numeros,
            [e.target.name]: parseFloat(e.target.value)
        })        
    }

    const suma = () => numero1 + numero2
    const resta = () => numero1 - numero2
    const multi = () => numero1 * numero2
    const divi = () => numero1 / numero2
    
    return (
        <>
            <label>
                Numero 1: {" "}
                <input name="numero1" value={numero1} onChange={handleChange} type="number" />
            </label>
            <label>
                Numero 2: {" "}
                <input name="numero2" value={numero2} onChange={handleChange} type="number" />
            </label>
            <Resultado operacion="Suma" calculo={suma()}/>
            <Resultado operacion="Resta" calculo={resta()}/>
            <Resultado operacion="Multiplicacion" calculo={multi()}/>
            <Resultado operacion="Division" calculo={divi()}/>
        </>
    )
}

export default NumberInput