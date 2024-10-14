// src/components/setBlock/SetBlock.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import s from './.././../schetchik.module.css';
import { SetTablo } from './SetTablo';
import { setCounterElementAC, setGlobalErrorAC } from '../../actions/counterActions';

type Props = {
  onSetValues: (max: number, start: number) => void;
};

export const SetBlock = ({ onSetValues }: Props) => {
  const dispatch = useDispatch();
  const [maxValueInput, setMaxValueInput] = useState(0);
  const [startValueInput, setStartValueInput] = useState(0);

  const error = startValueInput >= maxValueInput || startValueInput < 0;
  const setButtonStyle = error ? s.buttonInActiveStyle : s.buttonStyle;

  useEffect(() => {
    dispatch(setGlobalErrorAC(error));
  }, [error, dispatch]);

  useEffect(() => {
    const savedMaxValue = localStorage.getItem('maxValue');
    const savedStartValue = localStorage.getItem('startValue');
    if (savedMaxValue && savedStartValue) {
      setMaxValueInput(JSON.parse(savedMaxValue));
      setStartValueInput(JSON.parse(savedStartValue));
    }
  }, []);

  const MaxValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValueInput(Number(e.currentTarget.value));
  };

  const StartValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartValueInput(Number(e.currentTarget.value));
  };

  const SetClickHandler = () => {
    onSetValues(maxValueInput, startValueInput);
    dispatch(setCounterElementAC(startValueInput));
    localStorage.setItem("counterElement", startValueInput.toString()); // setCounterElement
  };

  return (
    <div>
      <div className={s.mainContainer}>
        <SetTablo
          className={s.setTabloContainer}
          maxValue={maxValueInput}
          startValue={startValueInput}
          onMaxValueChange={MaxValueChangeHandler}
          onStartValueChange={StartValueChangeHandler}
          startValueError={error}
        />
        <div className={s.buttonBlock}>
          <Button title={'set'} onClick={SetClickHandler} disabled={error} className={setButtonStyle} />
        </div>
      </div>
    </div>
  );
};