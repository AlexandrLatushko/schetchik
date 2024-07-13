import React, { useState } from 'react';
import './App.css';
import s from './schetchik.module.css'
import { Tablo } from './components/Tablo';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';

function App() {

  const [counterElement, setCounterElement] = useState<number>(0)

  const counter = () => {
    if(counterElement < 5){
      setCounterElement(counterElement + 1)
    }
  }

  const counterReset = () => {
    setCounterElement(0)
  }
  
  const styleTablo = counterElement === 5 ? s.maxcCounterStyle : s.counterStyle
  const buttonInsStyle = counterElement === 5 ? s.buttonInActiveStyle : s.buttonStyle
  const buttonResetStyle = counterElement >= 1 ?  s.buttonStyle : s.buttonInActiveStyle

  const progress = (counterElement / 5) * 100;

  return (
    <div className={s.appContainer}>
      <div className={s.mainContainer}>
        <Tablo className={styleTablo}>{counterElement}</Tablo>
        <ProgressBar progress={progress} />
        <div className={s.buttonBlock}>
          <Button title={'ins'} onClick={counter} classNane={buttonInsStyle}/>
          <Button title={'reset'} onClick={counterReset} classNane={buttonResetStyle}/>

        </div>
      </div>
    </div>
  );
}

export default App;
