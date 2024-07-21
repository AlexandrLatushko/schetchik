import s from '../../schetchik.module.css'

type SetTabloPropsType = {
    className:string
    maxValue:number
    startValue:number
    onMaxValueChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
    onStartValueChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
    startValueError:boolean

};
export const SetTablo = ({className, maxValue , startValue, onMaxValueChange, onStartValueChange,startValueError}: SetTabloPropsType) => {
    
    const startInputStyle = startValueError ? s.inputError: s.inputField
    return (
        <div className={className}>
            <div className={s.inputRow}>
                <label className={s.inputLabel}>
                    max value:<input type="number" value={maxValue} className={s.inputField} onChange={onMaxValueChange} />
                </label>
                <label className={s.inputLabel}>
                    start value:<input type="number" value={startValue} className={startInputStyle} onChange={onStartValueChange}/>
                </label>
            </div>
    </div>
    );
};