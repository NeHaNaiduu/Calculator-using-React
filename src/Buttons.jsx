import React from 'react'

function Buttons({onButtonClick}) {

    const Btns=["C","1","2","+","3","4","-","5","6","*","7","8","/","0","9",".","="];

  return (
    <div id='buttons'>
        {Btns.map((item)=>(
            <button onClick={()=>onButtonClick(item)}>{item}</button>
        ))}
    </div>
  );
};

export default Buttons;