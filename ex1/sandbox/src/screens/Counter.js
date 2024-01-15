import { useState, useEffect } from 'react';
import Button from '../components/Button.js';

function Counter(props){
  const [number, setNumber] = useState(0);

  function reset(){
    setNumber(0)
  }
  function increment(){
    setNumber(currentNumber => currentNumber + 1)
  }
  function decrement(){
    setNumber(currentNumber => currentNumber - 1)
  }
  function add3(){
    setNumber(currentNumber => currentNumber + 3)
  }

  function test(){
    let newNombre = {...number};
  }

  function changementBord(){
    console.log("rendu");
  }
  useEffect(changementBord);

  return (
    <div>
      <h2 className="mb-2" onClick={reset}>Counter</h2>

      <div>
        <h4>{number}</h4>
        
        <div className='btn-group'>
          <Button
            className="btn-danger btn-sm px-3"
            onClick={decrement}
            name="-"
          />
        </div>
        <div className='btn-group ms-2'>
          <Button
            className="btn-success btn-sm px-3"
            onClick={increment}
            name="+"
          />
        </div>
        <div className='btn-group ms-2'>
          <Button
            className="btn-success btn-sm px-3"
            onClick={add3}
            name="+3"
          />
        </div>
      </div>
    </div>
  )
}

export default Counter;