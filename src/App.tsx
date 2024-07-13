import React, { useState } from 'react';
import './App.css';
import s from './schetchik.module.css'
import { Tablo } from './components/Tablo';
import { Button } from './components/Button';

function App() {

  type CounterNumber = 0 | 1 | 2 | 3 | 4 | 5
  const [counterElement, setCounterElement] = useState<CounterNumber>(0)

  const counter = () => {
    if(counterElement < 5){
      setCounterElement((prevCounter) => (prevCounter + 1) as CounterNumber)
    }
  }

  const counterReset = () => {
    setCounterElement(0)
  }

  return (
    <div className={s.appContainer}>
      <div className={s.mainContainer}>
        <Tablo className={counterElement === 5 ? s.maxcCounterStyle : s.counterStyle}>{counterElement}</Tablo>
        <div className={s.buttonBlock}>
          <Button title={'ins'} onClick={counter} classNane={ counterElement === 5 ? s.buttonInActiveStyle : s.buttonStyle}/>
          <Button title={'reset'} onClick={counterReset} classNane={counterElement >= 1 ?  s.buttonStyle : s.buttonInActiveStyle}/>

        </div>
      </div>
    </div>
  );
}

export default App;
