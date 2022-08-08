import React from 'react'
import { useState } from 'react'
import { operaciones } from '../helpers/Operaciones'
import Resultado from './Resultado'

const NumberInput = () => {
    const [ numeros, setNumeros ] = useState({
        numero1: 10,
        numero2: 2
    })

    const { handleChange, suma, resta, multi, divi, numero1, numero2 } = operaciones(numeros, setNumeros)

    return (
        <>
            <label className="mx-2">
                Numero 1: {" "}
                <input name="numero1" value={numero1} onChange={handleChange} type="number" />
            </label>
            <label className="mx-2">
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