import { Button } from "../Button";
import { ProgressBar } from "./ProgressBar";
import { Tablo } from "./Tablo";
import s from "./../../schetchik.module.css";
import { useEffect, useState } from "react";

type Props = {
    maxValue: number;
    startValue: number;
    globalError: boolean;
};

export const IncResBlock = ({ maxValue, startValue, globalError }: Props) => {

    // Инициализация состояния counterElement из localStorage или с начального значения
    const [counterElement, setCounterElement] = useState(() => {
        const savedCounterLocalStorage = localStorage.getItem("counterElement");
        return savedCounterLocalStorage ? Number(savedCounterLocalStorage) : startValue;
    });

  // Сохранение значения counterElement в localStorage при его изменении
    useEffect(() => {
        localStorage.setItem("counterElement", counterElement.toString());
    }, [counterElement]);

  // Сброс counterElement на startValue при изменении startValue
    useEffect(() => {
        setCounterElement(counterElement);
    }, [counterElement]);

    useEffect(() => {
        const savedCounterLocalStorage = localStorage.getItem("counterElement");

        if(savedCounterLocalStorage && (startValue !== +savedCounterLocalStorage)){
            console.log("123")
            setCounterElement(startValue);}}, [startValue]);
  // Определение стилей для табло и кнопок в зависимости от состояния
    const styleTablo =
        counterElement === maxValue ? s.maxcCounterStyle : s.counterStyle;
    const buttonInsStyle =
        counterElement === maxValue ? s.buttonInActiveStyle : s.buttonStyle;
    const buttonResetStyle =
        counterElement !== startValue ? s.buttonStyle : s.buttonInActiveStyle;

    const errorText = "incorrect Value";

  // Функция для увеличения counterElement на 1
    const counter = () => {
        if (counterElement < maxValue) {
        setCounterElement(counterElement + 1);
        }
    };

  // Функция для сброса counterElement на startValue
    const counterReset = () => {
        setCounterElement(startValue);
    };

  // Вычисление прогресса для ProgressBar
  const progress = (counterElement / maxValue) * 100;

    return (
    <div>
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
    </div>
    ) ;
};
