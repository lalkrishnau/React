import React, { useEffect, useState } from 'react';
import ButtonCounter from './ButtonCounter';

const App = () => {

  const [totalCount,setTotalCount] = useState(0);
  const [resetSignal,setResetSignal] = useState(false);

  useEffect(()=>{
    console.log('reset');
    setResetSignal(false)
    setTotalCount(0)
  },[resetSignal])

  const handleClick = () =>{
    setTotalCount(totalCount+1)
  }
  
  const array=[0,1,2];

  return (
    <div className='container mt-5'>
      <div className='card-deck'>
        {array.map((id)=>
        <div className='row mb-3'>
          {[1,2,3].map(num=>
            <ButtonCounter buttonNumber={id*3 + num} resetSignal={resetSignal} handleClick={handleClick}/>
          )}
        </div>
          
        )}
        <div className='text-center'>
          <h4>Total count: {totalCount}</h4>
          <br/>
          <button className='btn btn-danger' onClick={()=>setResetSignal(true)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;