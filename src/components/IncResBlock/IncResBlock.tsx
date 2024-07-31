import { Button } from "../Button";
import { ProgressBar } from "./ProgressBar";
import { Tablo } from "./Tablo";
import s from "./../../schetchik.module.css"
import { useEffect, useState } from "react";

type Props = {
    maxValue:number 
    startValue:number
    globalError: boolean
    
};
export const IncResBlock = ({maxValue, startValue, globalError}: Props) => {

    // Загрузка значения из localStorage при инициализации состояния
    const [counterElement, setCounterElement] = useState(() => {
    const savedCounter = localStorage.getItem('counterElement');
    return savedCounter ? Number(savedCounter) : startValue;
    });

  // Сохранение значения в localStorage при его изменении
    useEffect(() => {localStorage.setItem('counterElement', counterElement.toString());
    }, [counterElement]);

    const styleTablo = counterElement === maxValue ? s.maxcCounterStyle : s.counterStyle
    const buttonInsStyle = counterElement === maxValue ? s.buttonInActiveStyle : s.buttonStyle
    const buttonResetStyle = counterElement >= 1 ?  s.buttonStyle : s.buttonInActiveStyle 

    const errorText = 'incorrect Value';

    const counter = () => {
        if(counterElement < maxValue){
            setCounterElement(counterElement + 1)
        }
    }
    
    const counterReset = () => {
        setCounterElement(startValue)
    }

    const progress = (counterElement / maxValue) * 100;

    return (
        <div>
            <div >
                <div className={s.mainContainer}>
                    <Tablo className={globalError ? s.errorTextStyle : styleTablo}>
                        {globalError ? errorText : counterElement}
                    </Tablo>
                    <ProgressBar progress={progress}/>
                    <div className={s.buttonBlock}>
                        <Button title={'ins'} onClick={counter} className={buttonInsStyle}/>
                        <Button title={'reset'} onClick={counterReset} className={buttonResetStyle}/>
                    </div>
                </div>
            </div>
        </div>
    );
};