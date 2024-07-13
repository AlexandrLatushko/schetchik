import s from "./../schetchik.module.css"

type ProgressBarPropsType = {
    progress:number 
};
export const ProgressBar = ({progress}: ProgressBarPropsType) => {
    return (
        <div className={s.progressBarContainer}>
            <div className={s.progressBar} style={{ width: `${progress}%` }} />
        </div>
    );
};