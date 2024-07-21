import { Button } from "../Button";
import { ProgressBar } from "./ProgressBar";
import { Tablo } from "./Tablo";
import s from "./../../schetchik.module.css"
import { useState } from "react";

type Props = {
    maxValue:number 
    startValue:number
};
export const IncResBlock = ({maxValue, startValue}: Props) => {

    const [counterElement, setCounterElement] = useState(0)

    const styleTablo = counterElement === maxValue ? s.maxcCounterStyle : s.counterStyle
    const buttonInsStyle = counterElement === maxValue ? s.buttonInActiveStyle : s.buttonStyle
    const buttonResetStyle = counterElement >= 1 ?  s.buttonStyle : s.buttonInActiveStyle 

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
                    <Tablo className={styleTablo}>{counterElement}</Tablo>
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