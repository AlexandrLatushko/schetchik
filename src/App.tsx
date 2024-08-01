import { useEffect, useState } from 'react';
import './App.css';
import { IncResBlock } from './components/IncResBlock/IncResBlock';
import s from './schetchik.module.css';
import { SetBlock } from './components/setBlock/SetBlock';

function App() {
  
  const [maxValue, setMaxValue] = useState(Infinity);

  const [startValue, setStartValue] = useState(Infinity);

  const [globalError, setGlobalError] = useState(false);
  
  const startValueLocal = localStorage.getItem('startValue');

  useEffect(() => {
    startValueLocal &&  setStartValue(+startValueLocal)
  }, [startValueLocal])

  useEffect(() => {
    //    Получение сохраненных значений из localStorage
    const savedMaxValue = localStorage.getItem('maxValue');
    const savedStartValue = localStorage.getItem('startValue');
    //       Если сохраненные значения существуют, парсим их и устанавливаем состояния
    if (savedMaxValue && savedStartValue) {
      setMaxValue(JSON.parse(savedMaxValue));
      setStartValue(JSON.parse(savedStartValue));
    }
  }, []);

  const handleSetValues = (max:number, start:number) => {
    setMaxValue(max);
    setStartValue(start);
    localStorage.setItem('maxValue', JSON.stringify(max));
    localStorage.setItem('startValue', JSON.stringify(start));
  };
  
  return (
    <div className={s.appContainer}>
      <IncResBlock maxValue={maxValue} startValue={startValue} globalError={globalError}  />
      <SetBlock onSetValues={handleSetValues} setGlobalError={setGlobalError} startValue={startValue}  />
    </div>
  );
}

export default App;

