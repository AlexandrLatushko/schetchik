import { useEffect, useState } from "react";
import { Button } from "../Button";
import s from "./.././../schetchik.module.css";
import { SetTablo } from "./SetTablo";

type Props = {
    onSetValues: (max: number, start: number) => void
    setGlobalError: (value: boolean) => void
    startValue: number
};

export const SetBlock = ({ onSetValues, setGlobalError,startValue, }: Props) => {
    
    const [maxValueInput, setMaxValueInput] = useState(startValue);
    
    const [startValueInput, setStartValueInput] = useState(0);

    const error = startValueInput >= maxValueInput || startValueInput < 0
    
    const setButtonStyle = error ? s.buttonInActiveStyle : s.buttonStyle

    useEffect(()=>{setGlobalError(error)},[error, setGlobalError])

    // useEffect для загрузки сохраненных значений из localStorage при инициализации компонента
    useEffect(() => {
        const savedMaxValue = localStorage.getItem('maxValue');
        const savedStartValue = localStorage.getItem('startValue');
        // Если сохраненные значения существуют, парсим их и устанавливаем состояния input'ов
        if (savedMaxValue && savedStartValue) {
            setMaxValueInput(JSON.parse(savedMaxValue));
            setStartValueInput(JSON.parse(savedStartValue));
        }
    } , []);

    const MaxValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValueInput(Number(e.currentTarget.value))
    };

    const StartValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartValueInput(Number(e.currentTarget.value));
    };

    const SetClickHandler = () => {
        onSetValues(maxValueInput, startValueInput);
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
