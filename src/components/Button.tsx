type ButtonPropsType = {
    title:string 
    onClick:()=>void
    classNane:string
};
export const Button = ({title, onClick,classNane}: ButtonPropsType) => {
    return (
        <button className={classNane} onClick={onClick}>{title}</button>
    );
};