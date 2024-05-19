import { useState } from 'react';
import './App.css'
import Buttons from './Buttons';

function App() {

  const[value,setValue]=useState("");

  const onButtonClick = (btnText) => {
    if(btnText === "C"){
      setValue("")
    }
    else if(btnText === "="){
      const result=eval(value)
      setValue(result)
    }
    else{
      const newValue=value+btnText;
      setValue(newValue)
    }
  }

  return (
    <div id='wrapper'>
      <input type="text" id='answer'  value={value} readOnly/>
      <Buttons onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
