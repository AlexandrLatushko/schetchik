import { useEffect, useState } from "react";
import { Button } from "../Button";
import s from "./.././../schetchik.module.css";
import { SetTablo } from "./SetTablo";

type Props = {
    onSetValues: (max: number, start: number) => void
    setGlobalError: (value: boolean) => void
    startValue: number
    setStartValue: (startValue : number) => void
};

export const SetBlock = ({ onSetValues, setGlobalError,startValue, setStartValue}: Props) => {
    
    const [maxValueInput, setMaxValueInput] = useState(startValue);
    
    const [startValueInput, setStartValueInput] = useState(0);

    const error = startValueInput >= maxValueInput || startValueInput < 0
    
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

    const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueMax = Number(e.currentTarget.value)
        setMaxValueInput(valueMax);
    };

    const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueStart = Number(e.currentTarget.value);
        setStartValueInput(valueStart);
    };

    const handleSetClick = () => {
        onSetValues(maxValueInput, startValueInput);
        setStartValue(startValue)
    };

    const setButtonStyle = error ? s.buttonInActiveStyle : s.buttonStyle

    return (
        <div>
            <div className={s.mainContainer}>
                <SetTablo
                    className={s.setTabloContainer}
                    maxValue={maxValueInput}
                    startValue={startValueInput}
                    onMaxValueChange={handleMaxValueChange}
                    onStartValueChange={handleStartValueChange}
                    startValueError={error}
                />
                <div className={s.buttonBlock}>
                    <Button title={'set'} onClick={handleSetClick} disabled={error} className={setButtonStyle} />
                </div>
            </div>
        </div>
    );
    };
