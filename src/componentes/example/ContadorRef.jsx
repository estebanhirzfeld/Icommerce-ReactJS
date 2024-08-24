import {useState, useRef} from 'react'

const ContadorRef = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
       setCount(count + 1);
    }

    const hanldeDecrement = () => {
      if(count > 1){
        setCount(count - 1)
      }
    }

  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <h1>Contador: {count}</h1>
        <button onClick={hanldeDecrement}>-</button>
    </div>
  )
}

export default ContadorRef