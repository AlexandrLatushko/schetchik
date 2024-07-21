import { useState } from "react";
import { Button } from "../Button";
import s from "./.././../schetchik.module.css";
import { SetTablo } from "./SetTablo";

type Props = {
    onSetValues: (max: number, start: number) => void;
};

export const SetBlock = ({ onSetValues }: Props) => {
    const [maxValue, setMaxValue] = useState(5);
    const [startValue, setStartValue] = useState(0);
    const [startValueError, setStartValueError] = useState(false);

    const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.target.value));
    };

    const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value < 0) {
            setStartValueError(true);
        } else {
            setStartValueError(false);
        }
        setStartValue(value);
    };

    const handleSetClick = () => {
        if (!startValueError) {
            onSetValues(maxValue, startValue);
    }
    };

    return (
        <div>
        <div className={s.mainContainer}>
            <SetTablo
            className={s.setTabloContainer}
            maxValue={maxValue}
            startValue={startValue}
            onMaxValueChange={handleMaxValueChange}
            onStartValueChange={handleStartValueChange}
            startValueError={startValueError}
            />
            <div className={s.buttonBlock}>
            <Button title={'set'} onClick={handleSetClick} className={s.buttonStyle} />
            </div>
        </div>
        </div>
    );
    };
