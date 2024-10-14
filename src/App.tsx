// src/App.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncResBlock } from './components/IncResBlock/IncResBlock';
import { SetBlock } from './components/setBlock/SetBlock';
import s from './schetchik.module.css';
import { setMaxValueAC, setStartValueAC } from './actions/counterActions';
import { RootState } from './store';

function App() {
  const dispatch = useDispatch();


  const counterElement = useSelector((state: RootState) => state.counterElement);

  //   useEffect(() => {
  //   localStorage.setItem("counterElement", counterElement.toString());
  // }, [counterElement]);


  useEffect(() => {
    const savedMaxValue = localStorage.getItem('maxValue');
    const savedStartValue = localStorage.getItem('startValue');
    if (savedMaxValue && savedStartValue) {
      dispatch(setMaxValueAC(JSON.parse(savedMaxValue)));
      dispatch(setStartValueAC(JSON.parse(savedStartValue)));
    }
  }, [dispatch]);

  const SetValuesHandler = (max: number, start: number) => {
    dispatch(setMaxValueAC(max));
    dispatch(setStartValueAC(start));
    localStorage.setItem('maxValue', JSON.stringify(max));
    localStorage.setItem('startValue', JSON.stringify(start));
  };

  return (
    <div className={s.appContainer}>
      <IncResBlock />
      <SetBlock onSetValues={SetValuesHandler} />
    </div>
  );
}

export default App;