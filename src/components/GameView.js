import React, { useState } from 'react'

const GameView = () => {
  //  let count = useRef();
    const [outValue, setOutValue] = useState(0);

    const handleDecrement =()=>{
        setOutValue(outValue - 1);
    };
    const handleIncrement = ()=>{
        setOutValue( 1 + outValue);
    };
    const handleResetBtn = ()=>{
        setOutValue(0);
    }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <h2 className='border w-1/4 bg-gray-100 text-center py-4 shadow-2xl text-2xl font-medium'>Counter Game</h2>
        <div className='flex w-1/4  text-6xl  justify-center gap-10 py-10  
             bg-gray-200 shadow-xl'>
            
            <button onClick={handleDecrement} className='border px-4 bg-gray-100' >-</button>
            <p className='border px-4'>{outValue}</p>
            <button onClick={handleIncrement} className='border px-4 bg-gray-100 ' >+</button>
        </div>
        <button onClick={handleResetBtn} className='text-2xl mt-4 px-4 py-2 border bg-red-500' > Reset</button>
    </div>
  )
}

export default GameView