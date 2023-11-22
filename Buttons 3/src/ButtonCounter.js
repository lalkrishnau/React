import React, { useEffect, useState } from 'react';

const ButtonCounter = (props) => {

  let {buttonNumber,resetSignal,handleClick} = props;
  const [clickCount,setclickCount] = useState(0);

  const onClick = ()=>{ 
    setclickCount(clickCount+1)
    handleClick()
  }
  useEffect(()=>{
    setclickCount(0);
  },[resetSignal])

    return (
        <div className='card text-center col-4' key={buttonNumber}>
        
        <h5 className='card-header'>Click count: {clickCount}</h5>
        
        <div className='card-body'>
          <button className='btn btn-primary' onClick={onClick}>{buttonNumber}</button>
        </div>
        <div className='card-footer'></div>
        </div>
    );
};

export default ButtonCounter;