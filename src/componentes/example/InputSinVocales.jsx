import React, { useState } from 'react'

const InputSinVocales = () => {
    const [inputValue, setInputValue] = useState("")

    const handleKeyPress = (e) => {
        const key = e.key.toLowerCase();
        const isVowel = "aeiou".includes(key);

        if (isVowel) {
            e.preventDefault();
        }
    }
    return (

        <div>

            <h1>Input sin vocales</h1>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
            />

            <p>Texto Ingresado: {inputValue}</p>    

        </div>
    )
}

export default InputSinVocales