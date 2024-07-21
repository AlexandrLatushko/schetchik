import { useState } from 'react';
import './App.css';
import { IncResBlock } from './components/IncResBlock/IncResBlock';
import s from './schetchik.module.css';
import { SetBlock } from './components/setBlock/SetBlock';

function App() {
  const [maxValue, setMaxValue] = useState(Infinity);
  const [startValue, setStartValue] = useState(0);

  const handleSetValues = (max:number, start:number) => {
    setMaxValue(max);
    setStartValue(start);
  };
  

  return (
    <div className={s.appContainer}>
      <IncResBlock maxValue={maxValue} startValue={startValue} />
      <SetBlock onSetValues={handleSetValues} />
    </div>
  );
}

export default App;
