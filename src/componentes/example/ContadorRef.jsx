import {useState, useRef} from 'react'

const ContadorRef = () => {

    const [count, setCount] = useState(0);

    const refCount = useRef(0);

    const handleIncrement = () => {
       setCount(count + 1);
    }

    const hanldeSaveRef = () => {
      refCount.current = count;
      console.log(`El ultimo valor guardado es: ${refCount.current}`)
    }

  return (
    <div>
        <h1>Contador: {count}</h1>

        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={hanldeSaveRef}>Guardar</button>
    </div>
  )
}

export default ContadorRef