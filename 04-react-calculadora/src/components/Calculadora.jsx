import React from 'react'
import { useState } from 'react'
import NumberInput from './NumberInput'
import Resultado from './Resultado'

const Calculadora = () => {
    const [suma, setSuma] = useState(0)
    

    return (
        <div>
            <NumberInput name="Numero 1" />
            <NumberInput name="Numero 2" />

            <Resultado operacion="Suma" calculo={suma}/>
            <Resultado operacion="Resta" calculo={suma}/>
            <Resultado operacion="Multiplicacion" calculo={suma}/>
            <Resultado operacion="Division" calculo={suma}/>
            <br />            
        </div>
    )
}

export default Calculadora