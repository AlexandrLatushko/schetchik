// src/components/IncResBlock/IncResBlock.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Button } from '../Button';
import { ProgressBar } from './ProgressBar';
import { Tablo } from './Tablo';
import s from './../../schetchik.module.css';
import { incrementCounterAC, resetCounterAC, setCounterElementAC } from '../../actions/counterActions';

export const IncResBlock = () => {
  const dispatch = useDispatch();
  const maxValue = useSelector((state: RootState) => state.maxValue);
  const startValue = useSelector((state: RootState) => state.startValue);
  const counterElement = useSelector((state: RootState) => state.counterElement);
  const globalError = useSelector((state: RootState) => state.globalError);

  useEffect(() => {
    const savedCounterLocalStorage = localStorage.getItem("counterElement");
    if (savedCounterLocalStorage) {
      dispatch(setCounterElementAC(Number(savedCounterLocalStorage)));
    } else {
      dispatch(setCounterElementAC(startValue));
    }
  }, [dispatch, startValue]
);

//   useEffect(() => {
//     localStorage.setItem("counterElement", counterElement.toString());
//   }, [counterElement]);

  const styleTablo = counterElement === maxValue ? s.maxcCounterStyle : s.counterStyle;
  const buttonInsStyle = counterElement === maxValue ? s.buttonInActiveStyle : s.buttonStyle;
  const buttonResetStyle = counterElement !== startValue ? s.buttonStyle : s.buttonInActiveStyle;

  const errorText = "incorrect Value";

  const counter = () => {
    dispatch(incrementCounterAC());
  };

  const counterReset = () => {
    dispatch(resetCounterAC());
  };

  const progress = (counterElement / maxValue) * 100;

  return (
    <div>
      <div className={s.mainContainer}>
        <Tablo className={globalError ? s.errorTextStyle : styleTablo}>
          {globalError ? errorText : counterElement}
        </Tablo>
        <ProgressBar progress={progress} />
        <div className={s.buttonBlock}>
          <Button
            title={"ins"}
            onClick={counter}
            className={buttonInsStyle}
          />
          <Button
            title={"reset"}
            onClick={counterReset}
            className={buttonResetStyle}
          />
        </div>
      </div>
    </div>
  );
};